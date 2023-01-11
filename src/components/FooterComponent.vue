<template>
  <div class="row mt-2">
    <div class="col-md-12">
      <a v-for="item in icons" :href="item.link" target="_blank" rel="noopener noreferrer">
        <i class="g-btn" :class="item.icon"></i>
      </a>
      <i class="fa-solid fa-circle-info g-btn" data-bs-toggle="modal" data-bs-target="#info-modal"></i>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'FooterComponent',
  setup(){
    const icons = [
      {
        link: 'https://github.com/geduramc/task-timer',
        icon: 'fa-brands fa-github'
      }
    ]
    return {
      icons
    }
  }
}
</script>
<style scoped>
i{
  font-size: 30px;
  color: var(--default-blue);
  cursor: pointer;
  opacity: 0.4;
}
i:hover{
  opacity: 0.9;
}
.col-md-12{
  justify-content: center;
  display: flex;
  gap: 2rem;
}
</style>
