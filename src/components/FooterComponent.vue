<template>
  <footer>
    <a href="https://github.com/geduramc/task-timer" target="_blank" rel="noopener noreferrer">
      <i class="fa-brands fa-github g-btn"></i>
    </a>
    <i class="fa-solid fa-circle-info g-btn" data-bs-toggle="modal" data-bs-target="#info-modal"></i>
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
i {
  font-size: 30px;
  color: var(--default-blue);
  cursor: pointer;
  opacity: 0.4;
}

i:hover {
  opacity: 0.9;
}

footer {
  justify-content: center;
  display: flex;
  gap: 2rem;
}
</style>
