<!-- BentoBox.svelte -->
<script lang="ts">

    import Bounded from "./Bounded.svelte";
    interface BoxItem {
      title: string;
      body: string;
      imageSrc: string;
      wide?: boolean;
    }
  
    export let heading: string;
    export let body: string;
    export let boxes: BoxItem[];
  </script>
    <section class="bentobox">
        <h2 
          class="mx-auto
	        max-w-3xl
	        text-center
	        text-balance
	        text-5xl
	        font-medium
	        md:text-7xl">
          {heading}
        </h2>
        <div
        class="mx-auto mt-6 max-w-md text-balance text-center text-gray-300"
        >
        <p>{body}</p>
        </div>
        <div
        class="mt-16 grid max-w-4xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10"
        >
        {#each boxes as box}
            <div 
            class="glass-container row-span-3 grid grid-rows-subgrid gap-4 rounded-lg bg-gray-950/60 p-4 before:bg-gray-100/10"
            class:md:col-span-2={box.wide}
            class:md:col-span-1={!box.wide}
            >
            <h3 class="text-2xl">{box.title}</h3>
            <div class="max-w-md text-balance text-gray-300">
                <p>{box.body}</p>
            </div>
            {#if false}
              <img src={box.imageSrc} alt={box.title} class="max-h-36 w-auto"/>
            {/if}
            </div>
        {/each}
        </div>
    </section>

  
  <style>
    .glass-container {
      position: relative;
    }
    .glass-container::before {
      content: '';
      position: absolute;
      inset: -10px;
      z-index: -1;
      backdrop-filter: blur(20px);
      border-radius: inherit;
    }
  </style>