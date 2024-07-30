<script lang="ts">
	export let hook: string;
	export let body: string;
   </script>
   
   <div class="mt-12"> <!-- Increased top margin here -->
	 <h1 class="
	   mx-auto
	   max-w-3xl
	   text-center
	   text-balance
	   text-5xl
	   font-medium
	   md:text-7xl
	 ">
	   {hook}
	 </h1>
	 <p class="
	   mx-auto
	   mt-6
	   max-w-md
	   text-balance
	   text-gray-300
	   text-center
	 ">
	   {body}
	 </p>
   </div>