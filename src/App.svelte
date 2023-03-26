<script lang="ts">
  import Penalty from "./lib/Penalty.svelte";
  import Slider from "./lib/Slider.svelte";
  import TickBox from "./lib/TickBox.svelte";
  import Car from "./lib/Car.svelte";

  let placesLost = 0;
  let lapOne = false;
  let contact = true;
  let contactPoints = 0;
  let firstLapMultiplier = 1;

  $: if (lapOne) {
    firstLapMultiplier = 2;
  } else {
    firstLapMultiplier = 1;
  }

  $: if (contact) {
    contactPoints = 1;
  } else {
    contactPoints = 0;
  }

  $: penaltyPoints = firstLapMultiplier * (0.5 * placesLost + contactPoints);
</script>

<main>
  <div class="container">
    <div class="content">
      <h1 class="text-primary">Penalties Calculator</h1>
      <p class="lead">For when you're just too tired to do maths</p>
    </div>
    <Penalty points={penaltyPoints} />
    <div class="mb-3">
      <TickBox bind:value={lapOne} label="First Lap" />
      <TickBox bind:value={contact} label="Contact" />
    </div>
    <Slider bind:value={placesLost} name="Places Lost" min="0" max="50" />
    <Car />
  </div>
</main>

<style>
  .content {
    padding: 1rem 1.5rem;
    text-align: center;
  }
  Slider {
    text-align: center;
    flex: content;
  }
</style>
