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
    const alarms = getLocalstorageItem(ALARM_STORAGE) ?? []
    this.alarms = alarms
    this.AlarmForm = document.querySelector('#alarm-time')
    this.AlarmList = document.querySelector('#alarm-list')

    this.AlarmHours = document.querySelector('.alarm-time__hours')
    this.AlarmMinutes = document.querySelector('.alarm-time__minutes')
    this.AlarmSteps = document.querySelector('.alarm-time__steps')

    this.AlarmForm.addEventListener('submit', this.handleAlarmSubmit.bind(this))
    alarms.forEach(({ newHours, newMinutes, step }) =>
      this.alarmUpdate(newHours, newMinutes, step)
    )

    setInterval(() => {
      const date = new Date()
      const hour = date.getHours()
      const minute = date.getMinutes()

      console.log(this.alarms)
      const nowAlarm = this.alarms

        .filter(({ newHours }) => +newHours === hour)
        .filter(({ newMinutes }) => +newMinutes === minute)
      console.log(nowAlarm.length)
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

  alarmUpdate(newHours, newMinutes, steps) {
    const li = document.createElement('li')
    const span = document.createElement('span')
    li.appendChild(span)
    span.innerText = `${newHours}시 ${newMinutes}분 알람이 시작됩니다.`
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
