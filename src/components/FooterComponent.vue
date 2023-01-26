<template>
  <footer>
    <a href="https://github.com/geduramc/task-timer" target="_blank" rel="noopener noreferrer">
      <img src="@public/icons/github.svg" alt="github" class="g-btn" />
    </a>
    <img src="@public/icons/info.svg" alt="github" class="g-btn" data-bs-toggle="modal" data-bs-target="#info-modal" />
  </footer>
</template>
<script lang="ts">
export default {
  name: 'FooterComponent',
  setup() {
    return {
    }
  }
}
</script>
<style scoped>
footer {
  justify-content: center;
  display: flex;
  gap: 1rem;
}

img {
  height: 30px;
}
</style>
