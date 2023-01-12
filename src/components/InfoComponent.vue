<template>
  <!-- Modal -->
  <div class="modal fade" id="info-modal" tabindex="-1" aria-labelledby="info-modal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="info-modal">TaskTimer</h1>
          <button type="button" class="g-btn btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="text-center mt-4 mb-4">
            By @geduramc &#9749;
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'InfoComponent',
  setup() {
   return{

   } 
  }
}
</script>
<style scoped>
.modal-header {
  border-bottom: var(--bs-modal-header-border-width) solid #161d29 !important;
}
.modal-dialog{
  margin-top: 1.5rem;
}
</style>
