<template>
  <div class="row justify-content-center time-container m-2">
    <div class="col-12 text-center mt-4">
      <button type="button" class="btn btn-primary mode active">Pomodoro</button>
      <button type="button" class="btn btn-primary mode">Short Break</button>
      <button type="button" class="btn btn-primary mode">Long Break</button>
    </div>
    <div class="col-12 text-center">
      <span class="time">{{ (min.toString().length == 1) ? '0' + min : min }}:{{ (sec.toString().length == 1) ? '0' + sec : sec }}</span>
    </div>
    <div class="col-12 text-center mb-4">
      <button v-if="!flag" type="button" class="btn btn-primary timer" v-on:click="start">START</button>
      <button v-if="flag" type="button" class="btn btn-primary timer">PAUSE</button>
      <button v-if="flag" type="button" class="btn btn-primary timer" v-on:click="stop">STOP</button>
      <button v-if="audio_flag" type="button" class="btn btn-outline-primary" v-on:click="pause">
        <i class="fa-solid fa-volume-xmark"></i>
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const min = ref(25)
    const sec = ref(0)
    const mil = ref(0)
    const flag = ref(false)
    const audio_flag = ref(false)
    let min_ctl = 0
    let interval: any
    let timeout: any
    let snd: HTMLMediaElement

    const start = () => {
      if (snd != undefined) pause()
      
      mil.value = min_ctl = min.value*60000
      flag.value = true
      interval = setInterval(() => {
        min.value = (sec.value == 0) ? --min.value : min.value
        sec.value = (sec.value == 0) ? 59 : --sec.value
      }, 1000)

      timeout = setTimeout(() => {
        stop()
        play()
      }, min_ctl)
    }

    const stop = () => {
      if (snd != undefined) pause()

      flag.value = false
      min.value = 25
      sec.value = 0
      min_ctl = 0

      clearInterval(interval)
      clearTimeout(timeout)
    }

    const play = () => {
      audio_flag.value = true
      snd = new Audio()
      snd.play()

      setTimeout(() => {
        snd.pause()
      }, 15000)
    }

    const pause = () => {
      audio_flag.value = false
      snd.pause()
    }

    return {
      min,
      sec,
      flag,
      audio_flag,
      start,
      stop,
      pause
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
</style>
