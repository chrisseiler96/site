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
    border border-slate-300/20 bg-slate-200/10
    px-4 py-2 text-slate-300 outline-none
    ring-slate-400 transition-colors duration-300
    after:absolute after:inset-0 after:-z-10
    after:animate-pulse after:rounded-full
    after:bg-slate-400 after:bg-opacity-0
    after:blur-md after:transition-all after:duration-500
    hover:border-amber-200/40 hover:text-amber-200
    hover:bg-amber-100/10 after:hover:bg-amber-300
    after:hover:bg-opacity-15 focus:ring-2
  "
>
  {text}
</a>

<style>
  /* Any additional styles can be added here if needed */
</style>