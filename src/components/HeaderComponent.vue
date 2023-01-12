<template>
  <nav class="titlebar mt-3 mb-4">
    <span class="logo">
      <i class="fa-solid fa-clock"></i>
      TaskTimer
    </span>
    <span v-for="(item, index) in routes" :key="index" class="menu">
      <router-link class="btn btn-outline-primary" :to="item.path"
        >{{ item.name }}</router-link>
    </span>
  </nav>
</template>
<script lang="ts">
import { watch, ref } from 'vue'
import { RouteRecordNormalized, RouterLink, useRoute, useRouter } from 'vue-router'

export default {
  name: 'HeaderComponent',
  setup() {
    // v-if="item.name != route.name"
    const route = useRoute()
    const router = useRouter()
    const routes = ref([] as RouteRecordNormalized[])
    
    watch(route, () => {
      routes.value = router.getRoutes().filter(x => x.name != route.name && x.name != 'Download')
    })

    return {
      routes
    }
  }
}
</script>
<style scoped>
nav{
  display: flex;
  justify-content: space-between;
}
.titlebar {
  -webkit-user-select: none;
  -webkit-app-region: drag;
}
@media (max-width: 250px) {
  nav{
    margin-top: 1.5rem !important;
  }
}
span.logo {
  color: #0D6EFD;
  float: left;
  font-size: 20px;
  font-weight: 800;
  opacity: .6;
}
.btn{
  font-size: 12px;
  padding: 2px 6px;
}
</style>
