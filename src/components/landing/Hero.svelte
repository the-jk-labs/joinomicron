<script lang="ts">
  import { Button } from "bits-ui";
  import { Globe, Lock, Heart } from "lucide-svelte";
  import FeatureItem from "./FeatureItem.svelte";
</script>

<div class="max-w-[660px] pt-20">
  <!-- headline -->
  <h1
    class="font-serif text-[44px] leading-[1.06] font-bold tracking-tight text-[#101418] sm:text-[56px] dark:text-[#f4f4ef]"
  >
    Write freely.<br />Share universally.
  </h1>

  <!-- subcopy -->
  <p
    class="mt-8 text-[19px] leading-[1.4] font-normal text-[#3a4048] sm:text-[22px] dark:text-[#a9b2bd]"
  >
    A federated blogging platform<br />that belongs to everyone.
  </p>

  <!-- features -->
  <div class="mt-14 grid max-w-[620px] grid-cols-1 gap-y-9 sm:mt-16 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-0">
    <FeatureItem title="Federated" lines={["Connect across", "the fediverse."]}>
      <Globe class="h-9 w-9 text-[#2e8b57] dark:text-[#5fcf93]" strokeWidth={1.75} />
    </FeatureItem>
    <FeatureItem title="Free &amp; Open" lines={["Free to use.", "Free to build."]}>
      <Lock class="h-9 w-9 text-[#7c5cbf] dark:text-[#ab92f0]" strokeWidth={1.75} />
    </FeatureItem>
    <FeatureItem title="For Everyone" lines={["Your voice matters", "here."]}>
      <Heart class="h-9 w-9 text-[#e8663c] dark:text-[#f68a64]" strokeWidth={1.75} />
    </FeatureItem>
  </div>

  <!-- CTAs -->
  <div class="mt-16 flex flex-wrap items-center gap-5">
    <Button.Root
      href="https://omicron.blog/register"
      class="inline-flex h-12 items-center justify-center rounded-full bg-[#101318] px-7 text-[17px] font-semibold text-white shadow-sm transition-colors hover:bg-[#262b31] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101318] active:bg-black dark:bg-[#e8e9f2] dark:text-[#101318] dark:hover:bg-white dark:focus-visible:outline-[#8c7bff] dark:active:bg-[#c9cad8]"
    >
      Get Started
    </Button.Root>
    <Button.Root
      href="https://docs.omicron.blog/"
      class="inline-flex h-12 items-center justify-center rounded-full border-[1.5px] border-[#4b525b]/60 bg-white/70 px-7 text-[17px] font-semibold text-[#2a2f36] backdrop-blur-sm transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101318] dark:border-white/20 dark:bg-white/5 dark:text-[#eef1f5] dark:hover:bg-white/10 dark:focus-visible:outline-[#8c7bff]"
    >
      Learn More
    </Button.Root>
  </div>

  <!-- tagline -->
  <p
    class="mt-12 text-[16px] font-normal text-[#3a4048] [text-shadow:0_1px_12px_rgba(255,255,255,0.8)] dark:text-[#a9b2bd] dark:[text-shadow:none]"
  >
    No tracking. No ads. Just ideas.
  </p>
</div>
