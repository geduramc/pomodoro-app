<template>
  <header class="titlebar">
    <span class="logo">
      <i class="fa-solid fa-clock"></i>
      TaskTimer
    </span>
    <ul class="nav justify-content-end m-3 ">
      <span v-for="(item, index) in routes" :key="index">
        <li v-if="item.name != route.name" class="nav-item">
          <router-link class="btn btn-outline-primary" :to="item.path"
            v-bind:class="{ 'disabled': item.name == 'Settings' }">{{ item.name }}</router-link>
        </li>
      </span>
    </ul>
    <hr class="m-3">
  </header>
</template>
<script lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'HeaderComponent',
  setup() {
    const route = ref(useRoute())
    const routes = ref(useRouter().options.routes.filter(x => x.name != 'Download'))

    return {
      route,
      routes
    }
  }
}
</script>
<style scoped>
.titlebar {
  -webkit-user-select: none;
  -webkit-app-region: drag;
}
@media (max-width: 400px) {
  .titlebar {
    margin-top: 2rem;
  }
}
hr {
  margin-bottom: 2rem !important;
}
li {
  margin: 0 0 0 1rem;
}
span.logo {
  color: #0D6EFD;
  margin-left: 1rem;
  float: left;
  font-size: 20px;
  font-weight: 800;

  border-radius: 6px;
  padding: 6px 10px;
  opacity: .9;
}
</style>
