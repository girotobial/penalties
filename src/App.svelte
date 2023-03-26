<script lang="ts">
  import Penalty from "./lib/Penalty.svelte";
  import Slider from "./lib/Slider.svelte";
  import TickBox from "./lib/TickBox.svelte";
  import Car from "./lib/Car.svelte";
  import type { Car as CarType } from "./types";

  let lapOne = false;
  let firstLapMultiplier = 1;
  let unsafeRejoin = false;

  $: unsafeRejoinPoints = Number(unsafeRejoin) * 5;

  $: if (lapOne) {
    firstLapMultiplier = 2;
  } else {
    firstLapMultiplier = 1;
  }

  let numCars = 1;

  let cars: Array<CarType> = [
    {
      contact: true,
      placesLost: 0,
    },
  ];

  function adjustCars() {
    let new_cars = [];
    for (let i = 0; i < numCars; i++) {
      new_cars.push({
        contact: true,
        placesLost: 0,
      });
    }
    cars = new_cars;
  }

  $: placesLost = cars.reduce((t, car) => t + car.placesLost, 0);
  $: contactPoints = cars.reduce((t, car) => t + Number(car.contact), 0);
  $: penaltyPoints =
    firstLapMultiplier *
    (0.5 * placesLost + contactPoints + unsafeRejoinPoints);
</script>

<main>
  <div class="container-sm">
    <div class="content">
      <h1 class="text-primary">Penalties Calculator</h1>
      <p class="lead">For when you're just too fucking tired to do maths</p>
    </div>
    <Penalty points={penaltyPoints} />
    <div class="container-sm options">
      <div class="row mb-3">
        <div class="col-sm-4">
          <TickBox bind:value={lapOne} label="First Lap" />
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
        on:change={adjustCars}
      />
    </div>
    <div class="container-sm cars">
      <h2 class="text-secondary">Cars</h2>
      <ul>
        {#each cars as car, id}
          <Car
            bind:contact={car.contact}
            bind:placesLost={car.placesLost}
            id={id + 1}
          />
        {/each}
      </ul>
    </div>
  </div>
</main>

<style>
  .content {
    padding: 1rem 1.5rem;
    text-align: center;
  }
  .cars {
    max-width: 540px;
  }
  .options {
    max-width: 540px;
  }
</style>
