const alarmForm = document.querySelector('#alarm-time');
const alarmList = document.querySelector('#alarm-list');

const alarmHours = document.querySelector('.alarm-time__hours');
const alarmMinutes = document.querySelector('.alarm-time__minutes');
const alarmSteps = document.querySelector('.alarm-time__steps');

const alarms = [];

function saveAlarms() {
    localStorage.setItem("알람",JSON.stringify(alarms));
}

function deleteAlarm(event) {
    const li = event.target.parentElement;
    li.remove();
}

function alarmUpdate(newHours, newMinutes, steps) {
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
    const newMinutes = alarmMinutes.value;
    const newSteps = alarmSteps.value;
    alarmHours.value = "";
    alarmMinutes.value = "";
    alarmSteps.value = "";
    alarms.push({newHours,newMinutes,newSteps});
    alarmUpdate(newHours, newMinutes, newSteps);
    saveAlarms();
}

alarmForm.addEventListener('submit',handleAlarmSubmit);

const savedAlarms = JSON.parse(localStorage.getItem("알람"))

if(savedAlarms) {
    const parsedAlarms = JSON.parse(savedAlarms);
    parsedAlarms.forEach(alarmUpdate);
}

// function startMission() {
//     if()
// }