const warning = confirm('알람이 울립니다. 미션을 진행해 주세요.')
const audio = new Audio();
audio.src = "./audio/긴 전화벨 소리.MP3";
audio.autoplay = true;
audio.loop = true;

async function alarmStart() {
  if (warning == true) {
    audio.play();
  } else {
    audio.pause();
  }
}

window.addEventListener('click',alarmStart);