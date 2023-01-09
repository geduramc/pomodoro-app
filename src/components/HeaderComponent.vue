<template>
  <span>
    <i class="fa-solid fa-clock"></i>
    Task timer
  </span>
  <ul class="nav justify-content-end m-3 ">
    <li class="nav-item">
      <button type="button" class="btn btn-outline-primary">Settings</button>
    </li>
    <li class="nav-item">
      <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#info-modal">Info</button>
    </li>
  </ul>
  <hr class="m-3">
</template>
<script lang="ts">
export default {
  setup(){
    return{

    }
  }
}
</script>
<style scoped>
  hr{
    margin-bottom: 2rem !important;
  }
  li{
    margin: 0 0 0 1rem;
  }
  span{
    margin-left: 1rem;
    float: left;
    font-size: 16px;
    font-weight: 800;
    border: solid 1px #0d6efd;
    border-radius: 5px;
    padding: 6px 20px;
    opacity: .9;
  }
  i{
    margin-right: .5rem;
  }
</style>
