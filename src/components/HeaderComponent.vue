<template>
  <nav class="titlebar mt-3 mb-4">
    <span class="logo">
      <img src="../assets/icons/logo.svg" alt="" srcset="">
      TaskTimer
    </span>
    <router-link v-for="(item, index) in routes" :key="index" class="g-btn" :to="item.path">
      <img :src="item.icon" alt="img" />
    </router-link>
  </nav>
</template>
<script lang="ts">
import { watch, ref } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'

export default {
  name: 'HeaderComponent',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const routes = ref([] as any[])

    watch(route, () => {
      routes.value = router.getRoutes().map(x => {
        return { icon: `./src/assets/icons/${x.meta.icon}.svg`, ... x }
      }).filter(x => x.name != route.name && x.name != 'Download')
    })

    return {
      routes
    }
  }
}
</script>
<style scoped>
nav {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 250px) {
  nav {
    margin-top: 1.5rem !important;
  }
}

span.logo {
  color: var(--default-blue);
  font-size: 22px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .2rem;
}

img {
  height: 30px;
}
</style>
