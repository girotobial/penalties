<script lang="ts">
  export let videoId: string;
  export let start = -1;
  export let autoplay = false;

  function getStartUrl(s: number): string {
    if (s >= 0) {
      return "start=" + s;
    }
    return "";
  }

  $: autoplayVal = Number(autoplay);
  $: startUrl = getStartUrl(start);
  $: url = `https://www.youtube.com/embed/${videoId}?${startUrl}&autoplay=${autoplayVal}&rel=0`;
</script>

<div class="container-sm ratio ratio-16x9 mb-3 embed-responsive youtube">
  <iframe
    class="embed-responsive-item"
    src={url}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  />
</div>

<style>
  .youtube {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
