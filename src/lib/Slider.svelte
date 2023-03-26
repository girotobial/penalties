<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let value: number;
  export let max: number;
  export let min: number;
  export let name: string;

  const dispatch = createEventDispatcher();

  function annouceChange() {
    dispatch("change");
  }

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
      on:change={annouceChange}
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
    on:change={annouceChange}
  />
</div>
