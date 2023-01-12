<template>
  <div class="container">
    <HeaderComponent />
    <router-view></router-view>
    <InfoComponent/>
    <FooterComponent/>
  </div>
</template>

<script lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import InfoComponent from './components/InfoComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  components: {
    HeaderComponent,
    InfoComponent,
    FooterComponent
  }
}
</script>

<style scoped>
</style>
