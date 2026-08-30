<script lang="ts">
  import { Button } from "bits-ui";
  import { Globe, Lock, Heart } from "lucide-svelte";
  import FeatureItem from "./FeatureItem.svelte";
</script>

<div class="max-w-[640px] pt-10 sm:pt-14">
  <!-- logo -->
  <img src="/logo.png" alt="Omicron" class="h-14 w-14 sm:h-16 sm:w-16" />

  <!-- headline -->
  <h1
    class="font-serif mt-4 text-[52px] leading-[1.04] font-bold tracking-tight text-[#101418] sm:text-[72px]"
  >
    Write freely.<br />Share universally.
  </h1>

  <!-- subcopy -->
  <p
    class="mt-6 text-[21px] leading-snug font-medium text-[#3f4650] sm:text-[24px]"
  >
    A federated blogging platform<br />that belongs to everyone.
  </p>

  <!-- features -->
  <div class="mt-12 grid max-w-[520px] grid-cols-3 gap-6">
    <FeatureItem title="Federated" lines={["Connect across", "the fediverse."]}>
      <Globe class="h-7 w-7 stroke-[1.75] text-[#2e8b57]" strokeWidth={1.75} />
    </FeatureItem>
    <FeatureItem title="Free &amp; Open" lines={["Free to use.", "Free to build."]}>
      <Lock class="h-7 w-7 stroke-[1.75] text-[#7c5cbf]" strokeWidth={1.75} />
    </FeatureItem>
    <FeatureItem title="For Everyone" lines={["Your voice matters", "here."]}>
      <Heart class="h-7 w-7 stroke-[1.75] text-[#e8663c]" strokeWidth={1.75} />
    </FeatureItem>
  </div>

  <!-- CTAs -->
  <div class="mt-12 flex flex-wrap items-center gap-4">
    <Button.Root
      href="https://omicron.blog/signup"
      class="inline-flex h-12 items-center justify-center rounded-full bg-[#0e1013] px-8 text-[17px] font-semibold text-white shadow-sm transition-colors hover:bg-[#2a2f36] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0e1013] active:bg-[#000]"
    >
      Get Started
    </Button.Root>
    <Button.Root
      href="/learn"
      class="inline-flex h-12 items-center justify-center rounded-full border-[1.5px] border-[#4b525b]/70 bg-white/60 px-8 text-[17px] font-semibold text-[#2a2f36] backdrop-blur-sm transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0e1013]"
    >
      Learn More
    </Button.Root>
  </div>

  <!-- tagline -->
  <p class="mt-14 text-[15px] font-medium text-[#5b636e]">
    No tracking. No ads. Just ideas.
  </p>
</div>
