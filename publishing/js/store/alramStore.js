import { ALARM_STORAGE } from '../utils/constants.js'
import { getLocalstorageItem, setLocalstorageItem } from '../utils/storage.js'

const ONE_MINUTE = 60 * 1000
export default class AlarmStore {
  alarms
  AlarmForm
  AlarmList
  AlarmHours
  AlarmMinutes
  AlarmSteps

  constructor() {
    // 여기서 alarms는 로컬스토리지에서 가져온값들을 배열에 담는다.
    // 해당 객체의 alarms을 불러와야되기 때문에 this를 붙인다.
    const alarms = getLocalstorageItem(ALARM_STORAGE) ?? []
    this.alarms = alarms
    this.AlarmForm = document.querySelector('#alarm-time')
    this.AlarmList = document.querySelector('#alarm-list')

    this.AlarmHours = document.querySelector('.alarm-time__hours')
    this.AlarmMinutes = document.querySelector('.alarm-time__minutes')
    this.AlarmSteps = document.querySelector('.alarm-time__steps')
    // form 태그에 submit 버튼을 클릭하면 해당객체의 handleAlarmSubmit를 실행하고 배열에 담는다.
    this.AlarmForm.addEventListener('submit', this.handleAlarmSubmit.bind(this))
    // 파라미터로 전달받은 this는 alarmStore의 객체로 출력된다.
    // 위 전달받은 객체의 요소들을 입력한 key순서대로 key값이 호출되
    alarms.forEach(({ newHours, newMinutes, newSteps }) =>
      this.alarmUpdate(newHours, newMinutes, newSteps)
    )

    setInterval(() => {
      const date = new Date()
      const hour = date.getHours()
      const minute = date.getMinutes()

      const nowAlarm = this.alarms

        .filter(({ newHours }) => +newHours === hour)
        .filter(({ newMinutes }) => +newMinutes === minute)

      // nowAlarm.push({ newHours: '3', newMinutes: '4', newSteps: '4' })

    
      location.href = `./mission.html?step=${nowAlarm[0].newSteps}`
    }, 1000)

    // setInterval(() => {
    //     const date = new Date()
    //     const hour = date.getHours()
    //     const minute = date.getMinutes()

    //     const nowAlarm = this.alarms
    //       .filter(({ newHours }) => newHours === hour)
    //       .filter(({ newMinutes }) => newMinutes === minute)

    //     if (nowAlarm.length) {
    //       location.href = `./mission.html?step=${nowAlarm[0].newSteps}`
    //     }
    //   }, 1000)
  }

  alarmUpdate(newHours, newMinutes, newSteps) {
    const li = document.createElement('li')
    const span = document.createElement('span')
    li.appendChild(span)
    span.innerText = `${newHours}시 ${newMinutes}분 ${newSteps}걸음미션.`
    const button = document.createElement('button')
    li.appendChild(button)
    button.innerText = `❌`
    button.addEventListener('click', this.deleteAlarm)
    this.AlarmList.appendChild(li)
  }

  deleteAlarm(event) {
    const li = event.target.parentElement
    li.remove()
  }

  handleAlarmSubmit(event) {
    event.preventDefault()
    const newHours = this.AlarmHours.value
    const newMinutes = this.AlarmMinutes.value
    const newSteps = this.AlarmSteps.value
    this.AlarmHours.value = ''
    this.AlarmMinutes.value = ''
    this.AlarmSteps.value = ''
    this.alarms.push({ newHours, newMinutes, newSteps })
    setLocalstorageItem(ALARM_STORAGE, this.alarms)

    this.alarmUpdate(newHours, newMinutes, newSteps)
  }
}
