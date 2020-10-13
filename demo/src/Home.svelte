<script lang="ts">
  import { router } from "./router";

  function handleClick() {
    router.goTo("/about");
  }
</script>

<main>
	<button on:click={handleClick}>About</button>
</main>