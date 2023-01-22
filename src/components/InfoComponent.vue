<template>
  <!-- Modal -->
  <div class="modal fade" id="info-modal" tabindex="-1" aria-labelledby="info-modal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <button type="button" class="g-btn btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
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
.btn-close {
  float: right;
}
</style>
