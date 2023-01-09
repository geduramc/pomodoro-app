import { createRouter, createWebHistory, Router } from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'
import SettingsComponent from '../components/SettingsComponent.vue'

export default (): Router => {
  return createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeComponent
      },
      {
        path: '/settings',
        name: 'settings',
        component: SettingsComponent
      }
    ]
  })
}
