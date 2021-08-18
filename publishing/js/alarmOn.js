// 위도 경도값 활용해 기상미션 시작
// - [x] 현재걸음수, 남은걸음수 ,coin수 변수선언한다. 디폴트값은 0.
// - [x] 기상미션페이지로 이동완료한 직후 현재 좌표값을 'old..'변수에 저장한다.
// - [x] 업데이트된 좌표값은 'present..'변수에 저장된다.
// - [x] 사람이 1초후 이동하면 현재 위경도값은 업데이트 된다. ->setInterval이용
// - [x] 과거좌표값과 현재 좌표값이 같은지 비교한다.
// - [x] 비교후 값이다를때만, 현재걸음수++, 남은걸음수--, coin수 ++, 한다.
// - [x] 남은걸음수가 0이되면 미션성공페이지로 이동한다.
// = [x] 시간이 300초 경과하면 미션실패! 알림창이 뜨고 메인페이지로 이동한다.
// = [x] 남은시간(분단위),남은걸음수, 현재걸음수,coin수를 업데이트해서 출력한다.

const $ = (selector) => document.querySelector(selector)

// 현재위치 가져오기
function MissionStart() {
  //코인시스템을 다른방식으로 가져가는게 맞다. 현재걸음이랑 겹친다.

  const oldTime = Date.now()
  const params = new URLSearchParams(window.location.search)
  const targetStep = +params.get('step') || 5
  let nowStep = 1;
  let isInitialzeStatus = true


  // 스크립트 시작지점 위도 및 경도값 기록

  const geoSuccess = (position) => {

    // 스크립트 시작 위치로 위도 및 경도값 업데이트
    let oldPointlat = position.coords.latitude
    let oldPointlng = position.coords.longitude

    // 5분으로 미션시간 타이머제한
    const timer = setInterval(() => {
      const currentTime = Date.now()

      // 경과한 밀리초 가져오기
      const diff = currentTime - oldTime

      // 초 (second) 단위 변환하기
      const sec = Math.floor(diff / 1000)

      // 현재 이동한 위치로 위도 및 경도값 업데이트
      // setTimeout(function(){
      //   location.reload();
      //   window.removeEventListener('confirm')
      //   geoSuccess(position);
      //   },1000); 
      const presentlat = position.coords.latitude
      const presentlng = position.coords.longitude

      if (
        presentlat !== oldPointlat ||
        (presentlng !== oldPointlng)
      ) {
        nowStep = nowStep + 1;
        targetStep = targetStep - 1;
        stateBar();

      } else if (
        presentlat == oldPointlat &&
        presentlng == oldPointlng) {

          // alert("몸을 움직이세요!")
        } 
      updateCountTemplate(sec)

      //    else if (
      //     presentlat !== oldPointlat &&
      //     presentlng !== oldPointlng &&
      //     sec >= 300
      //   ) {
      //     // 300초(5분)이 이상 초과되면 타이머를 종료하고 메인페이지로 이동
      //     clearInterval(timer)
      //     confirm('TIMEOUT MISSION FAIL!')
      //     href = 'mainpage.html'
      //   }

      if (nowStep === targetStep) location.href = 'complete.html?'

      //   else if (leftStepCount == 0) {
      //     // 남은걸음수가 0이되면 미션성공페이지로 이동
      //     location.href = 'complete.html?'
      //   }
      // location.reload();
    }, 2000)
  }

  navigator.geolocation.getCurrentPosition(
    geoSuccess,
    (error) => {
      console.error(error)
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  )

  const updateCountTemplate = (sec) => {
    // 시간, 걸음수, 코인수 미션페이지에서 변동 결과출력
    // $('#left-time').innerHTML = `${Math.abs((300 - sec) / 60)}분 남음`
    $('#current-step-count').innerText = nowStep
    //currentStepCount
    $('#left-step-count').innerText = targetStep - nowStep
  }

  // 진행상태바 색상변환
  const stateBar = () => {
    const diffStep = (nowStep/targetStep)*100;

    if(diffStep == 20) {
      document.getElementById('progress-bar').setAttribute('value', 2);
    } else if (diffStep == 30) {
      document.getElementById('progress-bar').setAttribute('value', 3);
    } else if (diffStep == 40) {
      document.getElementById('progress-bar').setAttribute('value', 4);
    } else if (diffStep == 50) {
      document.getElementById('progress-bar').setAttribute('value', 5);
    } else if (diffStep == 60) {
      document.getElementById('progress-bar').setAttribute('value', 6);
    } else if (diffStep == 70) {
      document.getElementById('progress-bar').setAttribute('value', 7);
    } else if (diffStep == 80) {
      document.getElementById('progress-bar').setAttribute('value', 8);
    } else if (diffStep == 90) {
      document.getElementById('progress-bar').setAttribute('value', 9);
    } else if (diffStep == 100) {
      document.getElementById('progress-bar').setAttribute('value', 10);
    } 
  }
}

MissionStart()
