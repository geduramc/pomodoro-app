<template>
  <nav class="titlebar mt-3 mb-4">
    <span class="logo">
      <img src="@public/icons/logo.svg" alt="" srcset="">
      Pomodoro
    </span>
  </nav>
</template>
<script lang="ts">
export default {
  name: 'HeaderComponent',
  setup() {

    return {

    }
  }
}
</script>
<style scoped>
nav {
  display: flex;
  justify-content: center;
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

@media (max-width: 250px) {
  nav {
    margin-top: 1.5rem !important;
  }
}
</style>
