<script lang="ts">
  export let value;
  export let label;
</script>

<div class="form-check form-switch">
  <label class="form-check-label" for="tickbox">{label}</label>
  <input
    class="form-check-input"
    type="checkbox"
    id="tickbox"
    bind:checked={value}
  />
</div>
