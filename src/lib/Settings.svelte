<script lang="ts">
  import TickBox from "./TickBox.svelte";
  import Slider from "./Slider.svelte";
  import { createEventDispatcher } from "svelte";

  export let firstLap: boolean;
  export let unsafeRejoin: boolean;
  export let numCars: number;
  export let lolekAgain: boolean;
  export let maxCars: number;
  export let minCars: number;

  const dispatch = createEventDispatcher();

  function annouceChange() {
    dispatch("change");
  }
</script>

<div class="container options">
  <form>
    <div class="row row-cols-3 mb-3">
      <div class="col" title="doubles penalty points for the first lap">
        <TickBox bind:value={firstLap} label="First Lap" />
      </div>
      <div class="col" title="5 points for unsafe rejoin">
        <TickBox bind:value={unsafeRejoin} label="Unsafe Rejoin" />
      </div>
      <div class="col" title="It was lolek again wasn't it?">
        <div class="row">
          <div class="col">
            <TickBox bind:value={lolekAgain} label="Lolek?" />
          </div>
          {#if lolekAgain}
            <div class="col">
              <p class="text-danger">FFS</p>
            </div>
          {/if}
        </div>
      </div>
    </div>
    <Slider
      bind:value={numCars}
      name="Cars Effected"
      min={minCars}
      max={maxCars}
      on:change={annouceChange}
    />
  </form>
</div>

<style>
  .options {
    max-width: 560px;
  }
</style>
