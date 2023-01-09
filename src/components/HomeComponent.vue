<template>
  <div class="row justify-content-center time-container m-2">
    <div class="col-12 text-center mt-4">
      <button type="button" class="btn btn-primary mode active">Pomodoro</button>
      <button type="button" class="btn btn-primary mode">Short Break</button>
      <button type="button" class="btn btn-primary mode">Long Break</button>
    </div>
    <div class="col-12 text-center">
      <span v-bind:class="{ 'paused': pause_flag }" class="time">{{ (min.toString().length == 1) ? '0' + min : min }}:{{ (sec.toString().length == 1) ? '0' + sec : sec }}</span>
    </div>
    <div class="col-12 text-center mb-4">
      <button v-if="!flag" type="button" class="btn btn-primary timer" v-on:click="start()">START</button>
      <button v-if="flag" type="button" class="btn btn-primary timer" v-on:click="pause">{{ (pause_flag) ? 'START' : 'PAUSE' }}</button>
      <button v-if="flag" type="button" class="btn btn-primary timer" v-on:click="stop">STOP</button>
      <button v-if="audio_flag" type="button" class="btn btn-outline-primary timer" v-on:click="mute">
        <i class="fa-solid fa-volume-xmark"></i>
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import settings from '../../public/settings.json'

export default {
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

    const start = (init: boolean = true) => {
      if (snd != undefined) mute()
      if (init) mil = min.value*60000
      
      flag.value = true
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
      if (pause_flag.value){
        mil = mil - (mil_state*1000)
        start(false)
      }
      else{
        clearInterval(interval)
        clearTimeout(timeout)
      }

      pause_flag.value = !pause_flag.value
    }

    const play = () => {
      audio_flag.value = true
      snd = new Audio('./audio/alarm_iphone.mp3')
      snd.play()

      setTimeout(() => {
        snd.pause()
      }, 15000)
    }

    const mute = () => {
      audio_flag.value = false
      snd.pause()
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
.time-container{
  border: solid 1px #0d6efd;
  background-color: rgba(255, 255, 255, 0.03);
  border-radius: 6px;
  margin-bottom: 20px;
}
a{
  color: var(--default-color);
}
.time{
  font-size: 100px;
}
button.timer{
  font-size: 30px;
  margin: 0 10px;
}
button.mode{
  margin: 0 2px;
  background: none rgba(255, 255, 255, 0);
  border: none;
  color: var(--default-color);
}
button.active{
  background: none rgba(13, 110, 253, 0.15);
  border: none;
}

.paused{
  opacity: 0.3;
}
</style>
