<template>
  <div class="row">
    <div class="col-md-12 timer-container">
      <div class="col-md-12 modes mt-4">
        <span class="g-btn mode active">Pomodoro</span>
        <span class="g-btn mode">Short Break</span>
        <span class="g-btn mode">Long Break</span>
      </div>
      <div class="col-md-12 text-center">
        <span v-bind:class="{ 'paused': !flag || pause_flag }" class="time">{{ (min.toString().length == 1) ? '0' + min : min }}:{{ (sec.toString().length == 1) ? '0' + sec : sec }}</span>
      </div>
      <div class="col-md-12 mb-4 buttons">
        <button v-if="!flag || pause_flag" type="button" class="btn btn-primary timer" v-on:click="start">START</button>
        <button v-if="flag && !pause_flag" type="button" class="btn btn-info timer" v-on:click="pause">PAUSE</button>
        <button v-if="flag" type="button" class="btn btn-danger timer" v-on:click="stop">STOP</button>
        <button v-if="audio_flag" type="button" class="btn btn-danger timer" v-on:click="mute">
          <i class="fa-solid fa-volume-xmark"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import settings from '../../public/settings.json'

export default {
  name: 'HomeComponent',
  setup() {
    const min = ref(settings.pomodoro)
    const sec = ref(0)
    const flag = ref(false)
    const audio_flag = ref(false)
    const pause_flag = ref(false)
    let mil: number = 0
    let mil_state: number = 0
    let interval: any
    let timeout: any
    let snd: HTMLMediaElement

    const start = () => {
      click()
      if (snd != undefined) mute()
      if (!pause_flag.value) mil = min.value*60000 //if not paused -> initial
      
      flag.value = true
      pause_flag.value = false
      interval = setInterval(() => {
        min.value = (sec.value == 0) ? --min.value : min.value
        sec.value = (sec.value == 0) ? 59 : --sec.value
        mil_state++
      }, 1000)

      timeout = setTimeout(() => {
        stop()
        play()
      }, mil)
    }

    const stop = () => {
      click()
      if (snd != undefined) mute()

      pause_flag.value = false
      flag.value = false
      min.value = settings.pomodoro
      sec.value = 0
      mil = 0
      mil_state = 0

      clearInterval(interval)
      clearTimeout(timeout)
    }

    const pause = () => {
      click()
      pause_flag.value = true
      mil = mil - (mil_state*1000)
      mil_state = 0

      clearInterval(interval)
      clearTimeout(timeout)
    }

    const play = () => {
      audio_flag.value = true
      snd = new Audio('./audio/alarm_iphone.mp3')
      snd.play()

      setTimeout(() => {
        audio_flag.value = false
        snd.pause()
      }, 30000)
    }

    const mute = () => {
      click()
      audio_flag.value = false
      snd.pause()
    }

    const click = () => {
      new Audio('./audio/click.wav').play()
    }

    return {
      min,
      sec,
      flag,
      audio_flag,
      pause_flag,
      start,
      stop,
      pause,
      mute
    }
  }
}
</script>
<style scoped>
.row{
  padding: 0 1rem;
}
.timer-container{
  /* border: solid 1px var(--default-blue); */
  background-color: rgba(255, 255, 255, 0.03);
  border-radius: 6px;
  margin-bottom: 20px;
}
.buttons{
  display: flex;
  justify-content: center;
  gap: 2rem;
}
a{
  color: var(--default-color);
}
.time{
  font-size: 100px;
}
button.timer{
  font-size: 25px;
}
div.modes{
  display: flex;
  justify-content: center;
  gap: 5px;
}
span.mode{
  padding: 6px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0);
  border: none;
  color: var(--default-color);
  font-size: 15px;
  cursor: pointer;
}
span.mode:hover{
  background: none rgba(13, 110, 253, 0.1);
}
span.active{
  background: none rgba(13, 110, 253, 0.2);
  border: none;
  cursor: default;
}
.paused{
  opacity: 0.3;
}
</style>
