<script lang="ts">
  import Penalty from "./lib/Penalty.svelte";
  import Settings from "./lib/Settings.svelte";
  import Car from "./lib/Car.svelte";
  import BarbieGirl from "./lib/BarbieGirl.svelte";
  import DissapointedMan from "./lib/DissapointedMan.svelte";
  import type { Car as CarType } from "./types";

  let lapOne = false;
  let unsafeRejoin = false;
  let lolekAgain = false;
  const barbieGirl = 11; //For when you've just sent it too hard
  const dissapointedMan = 21;

  $: unsafeRejoinPoints = Number(unsafeRejoin) * 5;

  $: firstLapMultiplier = Number(lapOne) * 2;

  let numCars = 1;

  let cars: Array<CarType> = [
    {
      contact: true,
      placesLost: 0,
    },
  ];

  function adjustCars() {
    const existing_cars = cars;
    const numExistingCars = existing_cars.length;
    let new_cars = [];
    for (let i = 0; i < numCars; i++) {
      if (i < numExistingCars) {
        new_cars.push(existing_cars[i]);
      } else {
        new_cars.push({
          contact: true,
          placesLost: 0,
        });
      }
    }
    cars = new_cars;
  }

  $: placesLost = cars.reduce((t, car) => t + car.placesLost, 0);
  $: contactPoints = cars.reduce((t, car) => t + Number(car.contact), 0);
  $: lolekMultiplier = Number(lolekAgain) + 1;
  $: penaltyPoints =
    lolekMultiplier *
    firstLapMultiplier *
    (0.5 * placesLost + contactPoints + unsafeRejoinPoints);
</script>

<main>
  <div class="container">
    <div class="content">
      <h1 class="text-primary">Penalties Calculator</h1>
      <p class="lead">For when you're just too fucking tired to do maths</p>
    </div>
    {#if numCars < barbieGirl}
      <Penalty points={penaltyPoints} />
    {:else if numCars < dissapointedMan}
      <BarbieGirl />
    {:else}
      <DissapointedMan />
    {/if}
    <Settings
      bind:firstLap={lapOne}
      bind:unsafeRejoin
      bind:numCars
      bind:lolekAgain
      on:change={adjustCars}
      minCars={0}
      maxCars={0}
    />
    {#if numCars < barbieGirl}
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
    {/if}
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
</style>
