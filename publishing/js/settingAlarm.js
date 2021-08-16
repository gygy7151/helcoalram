//알람설정 전 이벤트구현
// - [x] 알람추가 버튼을 누르면 설정페이지로 이동한다.
// - [x] 시 분 걸음수를 입력받고 설정버튼을 누르면 팝업창이 뜬다.
// - [x] 추가되는 알람의 마크업은 '<ul id = "alarm-index">알람 목록</ul>'안에 삽입해야 한다.
// - [ ] 

const $ = (selector) => document.querySelector(selector);

function App() {
    const setAlarm = () => {
        const alarmHour = $("#alarm-hour").value;
        const alarmMinute = $("#alarm-minute").value;
        const challengeStepNums = $('#challenge-step-nums').value;

        const alarmListTemplate = (alarmHour, alarmMinute, challengeStepNums) => {
            return `
                <li class="alarm-list">
                    <span class = "index">${alarmHour}시 ${alarmMinute}분 ${challengeStepNums}걸음</span>
                </li>
                <button type="button>
                    삭제
                </button>
                `;
        };

        //insert position을 beforeend로 설정
        $("#alarm-index").insertAdjacentHTML(
            "beforeend",
            alarmListTemplate(alarmHour, alarmMinute, challengeStepNums)
            );
    }
    
    const addAlarm = (e) => {
        if (confirm("알람설정하시겠습니까?")) {
            setAlarm();
        }
    }

    
    // 이벤트위임 - 알람항목클릭시 설정페이지로 이동한다.
    $("#mission-confirm-btn").addEventListener("click", addAlarm);
    
    
}

App();
