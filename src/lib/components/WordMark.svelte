<!-- src/lib/components/WordMark.svelte -->
<script>
    export let text = "Minzo";
    export let textSize = "text-4xl";
    export let textColor = "#F0FFF0";
  </script>

<div class="wordmark-container">
    <div class="logo-container">
        <img src="/assets/lotus_logo_med.svg" alt="Minzo" class="logo glow holographic p-0"/> 
    </div>
    <h1 class="{textSize} {textColor} glow holographic p-0">{text}</h1>
</div>

  
  <style>
    .wordmark-container {
    display: flex;
    align-items: center;
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
  width: 105px; /* Adjust as needed */
  height: auto;
}

/* Glow effect */
.glow {
  filter: drop-shadow(0 0 5px rgba(0, 195, 255, 0.7));
  transition: filter 0.3s ease;
}

.glow:hover {
  filter: drop-shadow(0 0 10px rgba(0, 195, 255, 0.9));
}

/* Holographic shimmer effect */
.holographic {
  position: relative;
  overflow: hidden;
}

.holographic::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
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
  </style>