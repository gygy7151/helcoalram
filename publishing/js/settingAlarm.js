const alarmFrom = document.querySelector('#alarm-time');
const alarmList = document.querySelector('#alarm-list');

const alarmHours = document.querySelector('.alarm-time__hours');
const alarmMinutes = document.querySelector('.alarm-time__minutes');
const alarmSteps = document.querySelector('.alarm-time__steps');


function deleteAlarm(event) {
    const li = event.target.parentElement;
    li.remove();
}

function alarmUpdate(newHours, newMinutes, newSteps) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    li.appendChild(span);
    span.innerText = `${newHours}시 ${newMinutes}분 알람이 시작됩니다.`;
    const button = document.createElement('button');
    li.appendChild(button);
    button.innerText = `❌`;
    button.addEventListener('click',deleteAlarm);
    alarmList.appendChild(li);
}

function handleAlarmSubmit(event) {
    event.preventDefault();
    const newHours = alarmHours.value;
    alarmHours.value = "";
    const newMinutes = alarmMinutes.value;
    alarmMinutes.value = "";
    const newSteps = alarmSteps.value;
    alarmSteps.value = "";  
    alarmUpdate(newHours, newMinutes, newSteps);
}

alarmFrom.addEventListener('submit',handleAlarmSubmit);

