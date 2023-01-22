<template>
  <nav class="titlebar mt-3 mb-4">
    <span class="logo">
      <img src="../assets/icons/logo.svg" alt="" srcset="">
      TaskTimer
    </span>
    <span v-for="(item, index) in routes" :key="index" class="menu">
      <router-link class="g-btn" :to="item.path">
        <img :src="'/src/assets/icons/' + item.meta.icon + '.svg'" alt="img" />
      </router-link>
    </span>
  </nav>
</template>
<script lang="ts">
import { watch, ref } from 'vue'
import { RouteRecordNormalized, RouterLink, useRoute, useRouter } from 'vue-router'

export default {
  name: 'HeaderComponent',
  setup() {
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
