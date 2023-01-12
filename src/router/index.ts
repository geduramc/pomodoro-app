import { createRouter, createWebHashHistory, Router } from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'
import SettingsComponent from '../components/SettingsComponent.vue'
import DownloadComponent from '../components/DownloadComponent.vue'

export default (): Router => {
  return createRouter({
    // history: createWebHistory(),
    history: createWebHashHistory(),
    routes: [
      {
        path: '/',
        name: 'Home',
        meta: {
          icon: 'fa-solid fa-house'
        },
        component: HomeComponent
      },
      {
        path: '/settings',
        name: 'Settings',
        meta: {
          icon: 'fa-solid fa-sliders'
        },
        component: SettingsComponent
      },
      {
        path: '/download',
        name: 'Download',
        meta: {
          icon: 'fa-solid fa-circle-down'
        },
        component: DownloadComponent
      }
    ]
  })
}
