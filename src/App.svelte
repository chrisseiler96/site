<script lang="ts">
  import WordMark from "./lib/components/WordMark.svelte";
  import CTA from "./lib/components/CTA.svelte";
  import HeroImage from "./lib/components/HeroImage.svelte";
  import HeroText from "./lib/components/HeroText.svelte";

  function handleClick() {
    console.log('Button clicked!');
  }
  
</script>
  <nav 
    class="mx-auto flex max-w-7xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center"
    aria-label="Header Navigation"
  >

  <div class="flex items-center justify-between">
    <a href="/" on:click={close} class="z-50">
      <WordMark />
    </a>
  </div>

    <CTA 
      text="Coming Soon" 
      href="#" 
      onClick={handleClick}
    />

  </nav>


  <HeroText hook={"AI Powered Conversations That Convert"} body={'Introducing cutting edge AI sales assistants that transform your website into a personalized shopping experience'}></HeroText>
  
  <div class="cta-container flex justify-center items-center w-full">
    <CTA
      text="Coming Soon"
      href="#"
      onClick={handleClick}
    />
  </div>
  

  <div class="hero-image-wrapper">
    <HeroImage />
  </div>





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

  .cta-container {
    /* Add any additional styles you need */
    padding: 1rem 0; /* Adjust vertical padding as needed */
  }

  .hero-image-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 70%; /* Adjust this if you want a specific height */
    }
</style>
