const warning = confirm('알람이 울립니다. 미션을 진행해 주세요.')
const audio = new Audio()
audio.src = 'audio/bellsound3.mp3'
audio.autoplay = true
audio.loop = true

// TODO:: 위경도 계산하는 Store 만들어서 1초마다 걸음수 확인해서 같을경우 완료 이벤트 출력

async function alarmStart() {
  if (warning == true) {
    audio.play()
  } else {
    audio.pause()
  }
}

window.addEventListener('click', alarmStart)
