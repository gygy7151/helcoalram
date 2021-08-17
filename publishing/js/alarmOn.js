// 위도 경도값 활용해 기상미션 시작
// - [x] 현재걸음수, 남은걸음수 ,coin수 변수선언한다. 디폴트값은 0.
// - [x] 기상미션페이지로 이동완료한 직후 현재 좌표값을 위도,경도 변수에 저장한다.
// - [x] 출발점이라는 변수명에도 저장된다.
// - [x] 도착점이라는 가변변수명에도 저장된다.
// - [x] 사람이 1초후 이동하면 현재 위경도값은 업데이트 된다.
// - [ ] 해당 좌표값이 도착점에 저장되어야한다.
// - [ ] 시간변수 t를 기준으로 t는 0부터 시작하며 출발점과 도착점이 같은지 비교한다.
// - [ ] 다르면, 현재걸음수++, 남은걸음수--, coin수 ++, 한다. 같으면 그냥 넘긴다.
// = [ ] 이것과 따로 시간이 300초 경과하면 미션실패! 알림창이 뜨고 미션종료된다. return
// = [ ] 남은시간을 300-경과시간을 통해 출력해서 보여준다.
// = [ ] 기상미션페이지에 현재걸음수와 남은걸음수, coin수 및 남은시간을 업데이트한다.

const $ = (selector) => document.querySelector(selector);

// 현재위치가져오기
navigator.geolocation.getCurrentPosition(geoSuccess, geoError);



function MissionStart () {
    const currentStepCount = 0;
    const oldTime = Date.now();

    // 쿼리스트링 ./mission.html?challengeStepNums 으로 링크주소연결해줘야됨
    const leftStepCount = request.getParameter("challengeStepNums");
    const coinCount = 0;


    const geoSuccess = (position) => {
        // 업데이트된 위도 및 경도값 기록
        const presentlat = position.coords.latitude;
        const presentlng = position.coords.longitude;

        // 스크립트 시작지점 위도 및 경도값 기록
        const oldPointlat = position.coords.latitude;
        const oldPointlng = position.coords.longitude;

        
        // 5분으로 미션시간 제한
        setInterval(() => {
            const currentTime = Date.now();
            
            // 경과한 밀리초 가져오기
            const diff = currentTime - oldTime;

            // 초 (second) 단위 변환하기
            const sec = Math.floor(diff/ 1000);

            // 현재 이동한 위치로 업데이트됨
            presentlat = position.coords.latitude;
            presentlng = position.coords.longitude;
            
            for(let t = 0;sec< 300;t++) {
                if(presentlat !== oldPointlat && !presentlng !== oldPointlng) {
                    currentStepCount++;
                    leftStepCount--;
                    coinCount++;

                    $('#left-time').innerHTML = `300 - ${sec} `

                } else if (leftStepCount = 0) {
                    // 남은걸음수가 0이되면 미션이 종료되고 미션성공페이지로 이동한다.
                    location.href="complete.html";
                }
            }
        }, 1000)



    };



}
