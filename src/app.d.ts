// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare module '~icons/lucide/*' {
    import type { SvelteComponentTyped } from "svelte";
    import type { IconProps } from 'lucide-svelte';
    
    const component: SvelteComponentTyped<IconProps>;
    export default component;
  }
