<script lang="ts">
  import type { Car } from "../types";
  import Slider from "./Slider.svelte";
  import TickBox from "./TickBox.svelte";

  export let id: number = 1;
  export let contact: boolean;
  export let placesLost: number;
  const min = 0;
  const max = 50;
</script>

<div class="mb-3">
  <label class="text-secondary" for="carSettings">Car {id}</label>
  <div class="mb-3" id="carSettings">
    <div title="Deducts 1 point for contact">
      <TickBox bind:value={contact} label="Contact" />
    </div>
    <div title="0.5 points per place lost">
      <Slider bind:value={placesLost} name="Places Lost" {min} {max} />
    </div>
  </div>
</div>

<style>
</style>
