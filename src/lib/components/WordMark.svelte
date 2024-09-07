<!-- src/lib/components/WordMark.svelte -->
<script>
    export let text = "MINZO";
    export let textSize = "text-4xl";
    export let textColor = "#F0FFF0";

    import logoSrc from '/assets/lotus_logo_med.svg'
  </script>

<div class="wordmark-container glow">
    <div class="logo-container">
        <img src={logoSrc} alt="Minzo" class="logo holographic p-0"/> 
    </div>
    <h1 class="{textSize} {textColor} p-0">{text}</h1>
</div>

  
<style>
  .wordmark-container {
  display: flex;
  align-items: center;
  gap: 0rem
}

  img {
    max-width: 100%;
    height: 100%;

  }

  .logo-container {
      position: relative;
      display: inline-block;
  }

.logo {
  width: 95px; /* Adjust as needed */
  height: auto; /* Slight negative margin to pull text closer */

}

/* Glow effect */
.glow {
  filter: drop-shadow(0 0 5px rgba(0, 195, 255, 0.4));
  transition: filter 0.3s ease;
  z-index: 1;
}

.glow:hover {
  filter: drop-shadow(0 0 10px rgba(0, 195, 255, 0.9));
}

/* Holographic shimmer effect */
.holographic {
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.holographic::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  z-index: 1;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  animation: holographic-shimmer 3s linear infinite;
}

@keyframes holographic-shimmer {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}



  h1 {
    margin: 0;
    padding: 0;
    line-height: 1; /* Removes extra vertical space */
  }

  </style>