<script lang="ts">
  export let value: number;
  export let max: number;
  export let min: number;
  export let name: string;

  $: sliderName = name + "-slider";
  $: inputName = name + "-input";
</script>

<div class="mb-3">
  <div class="input-group">
    <span class="input-group-text" id="name">{name}</span>
    <input
      type="number"
      class="form-control"
      aria-label={inputName}
      bind:value
    />
  </div>
  <input
    class="form-range"
    type="range"
    {min}
    {max}
    step="1"
    aria-label={sliderName}
    bind:value
  />
</div>
