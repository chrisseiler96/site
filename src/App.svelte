<script lang="ts">
  import WordMark from "./lib/components/WordMark.svelte";
  import CTA from "./lib/components/CTA.svelte";
  import HeroImage from "./lib/components/HeroImage.svelte";
  import HeroText from "./lib/components/HeroText.svelte";
  import BentoBox from './lib/components/BentoBox.svelte';
  import Bounded from "./lib/components/Bounded.svelte";

  function handleClick() {
    console.log('Button clicked!');
  }

  const bentoBoxData = {
    heading: "The New Gold Standard",
    body: "",
    boxes: [

    {
    title: "Intelligent Question Answering",
    body: "Eta analyzes your website and documents for accurate responses to customer inquiries 24/7.",
    imageSrc: "https://placehold.jp/1024x300.png",
    wide: false
    },
      {
    title: "Personalized Product Recommendations",
    body: "Show customers your most relevant products and services.",
    imageSrc: "https://placehold.jp/400x300.png",
    wide: true
  },
  {
    title: "Deep Customer Insights",
    body: "Gain valuable insights into customer preferences, and pain points.",
    imageSrc: "https://placehold.jp/1024x300.png",
    wide: true
  },
  {
    title: "Seamless Integration",
    body: "Use Eta as an overlay compatible with all websites.",
    imageSrc: "https://placehold.jp/400x300.png",
    wide: false
  }
    ]
  };
  
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

  <Bounded>
    <HeroText hook={"Next-Gen AI for Sales and Support"} body={'Use our assistant Eta to create personalized shopping experiences for your website.'}></HeroText>
    
    <div class="cta-container flex justify-center items-center w-full mb-12">
      <CTA
        text="Request Early Access"
        href="https://q7wuazyqgm6.typeform.com/to/cpBxUeLE"
      />
    </div>
    

      <HeroImage />
  </Bounded>

  <Bounded>
    <BentoBox {...bentoBoxData} />
  </Bounded>
  




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
      height: 100%; /* Adjust this if you want a specific height */
    }
</style>
