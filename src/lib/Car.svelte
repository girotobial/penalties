<script lang="ts">
  import type { Car } from "../types";
  import Slider from "./Slider.svelte";
  import TickBox from "./TickBox.svelte";

  export let id: number = 1;
  export const car: Car = {
    contact: true,
    placesLost: 0,
  };
  const min = 0;
  const max = 50;
</script>

<div class="mb-3">
  <h2 class="text-secondary">Car {id}</h2>
  <div class="mb-3">
    <TickBox bind:value={car.contact} label="Contact" />
    <Slider bind:value={car.placesLost} name="Places Lost" {min} {max} />
  </div>
</div>

<style>
</style>
