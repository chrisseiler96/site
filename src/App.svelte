<script lang="ts">
  import WordMark from "./lib/components/WordMark.svelte";
  import CTA from "./lib/components/CTA.svelte";
  import HeroImage from "./lib/components/HeroImage.svelte";

  function handleClick() {
    console.log('Button clicked!');
  }
  
</script>

  <div class="absolute top-8 right-8">
    <CTA 
      text="Log In" 
      href="#" 
      onClick={handleClick}
    />
  </div>
  
 
    <WordMark />
    <HeroImage />






<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
