<template>
  <div class="row mb-4">
    <label>Time (minutes)</label>
    <div class="col-4">
      <small>Pomodoro</small>
      <input type="number" id="pomodoro" class="form-control" v-model="pom" min="1" max="60" required>
    </div>
    <div class="col-4">
      <small>Short Break</small>
      <input type="number" id="shortBreak" class="form-control" v-model="short" required>
    </div>
    <div class="col-4">
      <small>Long Break</small>
      <input type="number" id="longBreak" class="form-control" v-model="long" required>
    </div>
    <div class="col-4">
      <small>Interval</small>
      <input type="number" id="breakInterval" class="form-control" v-model="longInterval" required disabled>
    </div>
    <div class="col-8">
      <small>Alarm</small>
      <div class="alarm">
        <div class="dropdown">
          <button class="btn btn-default dropdown-toggle" type="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            {{ alarmType }}
          </button>
          <ul class="dropdown-menu">
            <li v-for="item in alarms" :key="item" class="dropdown-item" v-on:click="setAlarm(item)">{{ item }}</li>
          </ul>
        </div>
        <img v-if="!playerFlag" src="@public/icons/player-play.svg" class="g-btn" alt="player-play" v-on:click="play" />
        <img v-if="playerFlag" src="@public/icons/player-stop.svg" class="g-btn" alt="player-stop" v-on:click="stop" />
      </div>
    </div>
    <div class="col-12 buttons">
      <button type="button" class="btn btn-info" v-on:click="restore">RESTORE</button>
      <button type="button" class="btn btn-primary" v-on:click="save">SAVE</button>
    </div>
    <div class="col-12">
      <div class="col-12 alert" v-bind:class="alert.type">
        {{ alert.text }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import settings from '../../public/settings.json'

export default {
  name: 'SettingsComponent',
  setup() {
    const pom = ref(settings.pomodoro)
    const short = ref(settings.shortBreak)
    const long = ref(settings.longBreak)
    const longInterval = ref(settings.longBreakInterval)
    const alarms = ref(settings.alarm)
    const alarmType = ref(alarms.value[0])
    const alert = ref({ type: '', text: '' })
    const playerFlag = ref(false)

    let snd: HTMLMediaElement
    let timeout: any

    const showAlert = (_type: string, _text: string) => {
      alert.value = { type: `alert-${_type}`, text: _text }
      setTimeout(() => {
        alert.value = { type: `hidden`, text: '' }
      }, 3000)
    }

    const validate = () => {
      let val = true
      let err = ''

      if (pom.value <= 0 || pom.value > 60) err = 'Time value (min: 1 max: 60)'
      if (pom.value.toString().length <= 0) err = 'Error or missing Pomodoro value'
      if (short.value <= 0 || short.value > 60) err = 'Time value (min: 1 max: 60)'
      if (short.value.toString().length <= 0) err = 'Error or missing Short Break value'
      if (long.value <= 0 || long.value > 60) err = 'Time value (min: 1 max: 60)'
      if (long.value.toString().length <= 0) err = 'Error or missing Long Break value'

      if (err.length > 0) {
        showAlert('danger', err)
        val = false
      }

      return val
    }

    const setAlarm = (item: string) => {
      alarmType.value = item
    }

    const save = () => {
      if (validate()) {
        localStorage.setItem('app-tasktimer-settings', JSON.stringify({
          pomodoro: pom.value,
          shortBreak: short.value,
          longBreak: long.value,
          longBreakInterval: longInterval.value,
          alarm: alarmType.value
        }))
        showAlert('success', 'saved!')
      }
      else console.error('Error or missing value')
    }

    const restore = () => {
      pom.value = settings.pomodoro
      short.value = settings.shortBreak
      long.value = settings.longBreak
      longInterval.value = settings.longBreakInterval
      alarmType.value = settings.alarm[0]
      save()
    }

    const play = () => {
      playerFlag.value = !playerFlag.value
      snd = new Audio(`./audio/alarm_${alarmType.value}.mp3`)
      snd.play()

      timeout = setTimeout(() => {
        stop()
      }, 5000)
    }

    const stop = () => {
      playerFlag.value = !playerFlag.value
      snd.pause()
      clearTimeout(timeout)
    }

    onMounted(() => {
      if (localStorage.getItem('app-tasktimer-settings')) {
        const { pomodoro, shortBreak, longBreak, longBreakInterval, alarm } = JSON.parse(localStorage.getItem('app-tasktimer-settings') ?? '')
        pom.value = pomodoro,
          short.value = shortBreak
        long.value = longBreak
        longInterval.value = longBreakInterval
        alarmType.value = alarm
      }
    })

    onUnmounted(() => {
      if (!validate()) restore()
    })

    return {
      pom,
      short,
      long,
      longInterval,
      alarms,
      alarmType,
      alert,
      playerFlag,
      setAlarm,
      save,
      restore,
      play,
      stop
    }
  }
}
</script>
<style scoped>
div.alert {
  margin-top: 1rem;
  padding: .2rem;
  font-size: 14px;
}

.buttons {
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
}

.alarm {
  display: flex;
  justify-content: space-between;
}

img.g-btn{
  height: 25px;
  margin-top: .4rem;
  margin-right: .4rem;
  opacity: .7;
}

img.g-btn:hover{
  opacity: .5;
}

.dropdown, .dropdown-toggle{
  width: 98%;
}

@media (max-width: 250px) {
  label {
    font-size: 14px;
  }

  small {
    font-size: 10px;
  }
}
</style>
