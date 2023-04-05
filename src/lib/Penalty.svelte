<script lang="ts">
  export let points: number = 0;
</script>

<div class="text-danger centered">
  <p>{Math.floor(points)}</p>
</div>

<style>
  p {
    font-size: 5rem;
  }
  .centered {
    display: flex;
    text-align: centered;
    padding: 1rem 1rem;
    align-items: center;
    justify-content: center;
  }
</style>
