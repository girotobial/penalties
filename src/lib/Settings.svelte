<script lang="ts">
  import TickBox from "./TickBox.svelte";
  import Slider from "./Slider.svelte";
  import { createEventDispatcher } from "svelte";

  export let firstLap: boolean;
  export let unsafeRejoin: boolean;
  export let numCars: number;

  const dispatch = createEventDispatcher();

  function annouceChange() {
    dispatch("change");
  }
</script>

<div class="container-sm options">
  <div class="row mb-3">
    <div class="col-sm-4">
      <TickBox bind:value={firstLap} label="First Lap" />
    </div>
    <div class="col-sm-4">
      <TickBox bind:value={unsafeRejoin} label="Unsafe Rejoin" />
    </div>
  </div>
  <Slider
    bind:value={numCars}
    name="Cars Effected"
    min={1}
    max={10}
    on:change={annouceChange}
  />
</div>

<style>
  .options {
    max-width: 540px;
  }
</style>
