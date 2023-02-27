<script>
  import { modalVisible } from "../stores/ui";

  export let title = "";

  let visible;
  $: visible = $modalVisible;

  function handleClose() {
    modalVisible.set(false);
  }
</script>

<div class:is-active={visible} class="modal">
  <div class="modal-background" />
  <div class="modal-content">
    <div class="card">
      <div class="card-header">
        <p class="card-header-title is-size-4">
          {title}
        </p>
      </div>
      <div class="card-content">
        <slot />
      </div>
    </div>
  </div>
  <button
    class="modal-close is-large"
    aria-label="close"
    on:click={handleClose}
  />
</div>

<style>
  .card-header-title {
    justify-content: center;
  }
</style>
