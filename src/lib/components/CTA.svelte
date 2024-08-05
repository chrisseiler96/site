<script lang="ts">
  export let text = "Click me";
  export let href = "#";
  export let onClick: (() => void) | null = null;

 function handleClick(event: MouseEvent) {
   if (onClick) {
     event.preventDefault();
     onClick();
   }
 }
</script>

<a
  {href}
  on:click={handleClick}
  class="
    relative inline-flex h-fit w-fit rounded-full
    border border-violet-300/20 bg-violet-200/10
    px-4 py-2 text-violet-200 outline-none
    ring-violet-400 transition-all duration-300
    after:absolute after:inset-0 after:-z-10
    after:animate-pulse after:rounded-full
    after:bg-violet-400 after:bg-opacity-0
    after:blur-md after:transition-all after:duration-500
    hover:border-orange-300/40 hover:text-orange-200
    hover:bg-orange-200/10 after:hover:bg-orange-400
    after:hover:bg-opacity-15 focus:ring-2
  "
>
  {text}
</a>

<style>
  /* Any additional styles can be added here if needed */
</style>