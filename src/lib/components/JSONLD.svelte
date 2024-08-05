<script lang="ts">
    const socialLinks = {
      facebook: "https://www.facebook.com/people/Minzo-AI/61550691044873/",
      twitter: "https://x.com/MinzoAI",
      instagram: "https://www.instagram.com/minzoai/",
    };
  
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Minzo AI",
      "url": "https://www.minzo.ai",
      "sameAs": Object.values(socialLinks)
    };
  </script>
  
  <svelte:head>
    <script type="application/ld+json">
      {JSON.stringify(jsonLd)}
    </script>
  </svelte:head>