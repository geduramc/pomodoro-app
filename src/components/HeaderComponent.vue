<template>
  <span class="logo">
    <i class="fa-solid fa-clock"></i>
    Task timer
  </span>
  <ul class="nav justify-content-end m-3 ">
    <span v-for="(item, index) in routes" :key="index">
      <li v-if="item.name != route.name" class="nav-item">
        <router-link class="btn btn-outline-primary" :to="item.path">{{ item.name }}</router-link>
      </li>
    </span>
    <li class="nav-item">
      <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#info-modal">
        <i class="fa-solid fa-circle-info"></i>
      </button>
    </li>
  </ul>
  <hr class="m-3">
</template>
<script lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  setup(){
    const route = ref(useRoute())
    const routes = ref(useRouter().options.routes)

    return{
      route,
      routes
    }
  }
}
</script>
<style scoped>
  hr{
    margin-bottom: 2rem !important;
  }
  li{
    margin: 0 0 0 1rem;
  }
  span.logo{
    color: #0D6EFD;
    margin-left: 1rem;
    float: left;
    font-size: 16px;
    font-weight: 800;
    border: solid 1px #0D6EFD;
    border-radius: 6px;
    padding: 6px 20px;
    opacity: .9;
  }
</style>
