<script lang="ts">
  import WordMark from "./lib/components/WordMark.svelte";
  import CTA from "./lib/components/CTA.svelte";
  import HeroImage from "./lib/components/HeroImage.svelte";
  import HeroText from "./lib/components/HeroText.svelte";
  import BentoBox from './lib/components/BentoBox.svelte';
  import Bounded from "./lib/components/Bounded.svelte";

  import Facebook from '~icons/lucide/facebook';
  import Twitter from '~icons/lucide/twitter';
  import Instagram from '~icons/lucide/instagram'

  import Jsonld from "./lib/components/JSONLD.svelte";


  function handleClick() {
    console.log('Button clicked!');
  }

  const bentoBoxData = {
    heading: "Setting The New Gold Standard",
    body: "",
    boxes: [
        {
          title: "Intelligent Question Answering",
          body: "Eta analyzes your website and documents for accurate responses to customer inquiries 24/7.",
          imageSrc: "",
          wide: false
        },
        {
          title: "Personalized Product Recommendations",
          body: "Show customers your most relevant products and services.",
          imageSrc: "",
          wide: true
      },
      {
        title: "Deep Customer Insights",
        body: "Gain valuable insights into customer preferences, and pain points.",
        imageSrc: "",
        wide: true
      },
      {
        title: "Seamless Integration",
        body: "Use Eta as an overlay compatible with all websites.",
        imageSrc: "",
        wide: false
      }
    ]
  };

  // <BentoBox {...bentoBoxData} />

  const socialLinks = [
   { icon: Facebook, href: "https://www.facebook.com/people/Minzo-AI/61550691044873/" },
   { icon: Twitter, href: "https://x.com/MinzoAI" },
   { icon: Instagram, href: "https://www.instagram.com/minzoai/"}
 ];
  
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


  </nav>

  <Bounded>
    <HeroText hook={"Next-Gen Assistants"} body={''}></HeroText>
    
    <div class="cta-container flex justify-center items-center w-full mb-14">
    </div>
    

      <HeroImage />
  </Bounded>

  <Bounded>
  </Bounded>
  

  <footer>
    <nav 
      class="flex flex-col items-center 
      justify-between gap-6 border-t 
      border-x-gray-600 px-8 py-7 
      md:flex-row"
      aria-label="Footer Navigation"
    >
      <a href="/" on:click={close} class="z-50">
        <WordMark />
      </a>
      <ul class="flex gap-6">
        {#each socialLinks as { icon: Icon, href }}
        <li>
          <a {href} target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-300">
            <Icon size={24} />
          </a>
        </li>
      {/each}
      </ul>

    </nav>
  </footer>
  


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
