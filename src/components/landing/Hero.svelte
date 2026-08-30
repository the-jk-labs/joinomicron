<script lang="ts">
  import { Button } from "bits-ui";
  import { Globe, Lock, Heart } from "lucide-svelte";
  import FeatureItem from "./FeatureItem.svelte";
</script>

<div class="max-w-[660px] pt-8 sm:pt-10 lg:pt-[13%]">
  <!-- logo -->
  <div class="relative inline-flex">
    <span
      aria-hidden="true"
      class="absolute -inset-2.5 -z-10 rounded-full bg-white/60 blur-md"
    ></span>
    <img src="/logo.png" alt="Omicron" class="h-12 w-12 sm:h-[52px] sm:w-[52px]" />
  </div>

  <!-- headline -->
  <h1
    class="font-serif mt-5 text-[44px] leading-[1.06] font-bold tracking-tight text-[#101418] sm:text-[56px]"
  >
    Write freely.<br />Share universally.
  </h1>

  <!-- subcopy -->
  <p
    class="mt-8 text-[19px] leading-[1.4] font-normal text-[#3a4048] sm:text-[22px]"
  >
    A federated blogging platform<br />that belongs to everyone.
  </p>

  <!-- features -->
  <div class="mt-14 grid max-w-[620px] grid-cols-1 gap-y-9 sm:mt-16 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-0">
    <FeatureItem title="Federated" lines={["Connect across", "the fediverse."]}>
      <Globe class="h-9 w-9 text-[#2e8b57]" strokeWidth={1.75} />
    </FeatureItem>
    <FeatureItem title="Free &amp; Open" lines={["Free to use.", "Free to build."]}>
      <Lock class="h-9 w-9 text-[#7c5cbf]" strokeWidth={1.75} />
    </FeatureItem>
    <FeatureItem title="For Everyone" lines={["Your voice matters", "here."]}>
      <Heart class="h-9 w-9 text-[#e8663c]" strokeWidth={1.75} />
    </FeatureItem>
  </div>

  <!-- CTAs -->
  <div class="mt-16 flex flex-wrap items-center gap-5">
    <Button.Root
      href="https://omicron.blog/signup"
      class="inline-flex h-12 items-center justify-center rounded-full bg-[#101318] px-7 text-[17px] font-semibold text-white shadow-sm transition-colors hover:bg-[#262b31] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101318] active:bg-black"
    >
      Get Started
    </Button.Root>
    <Button.Root
      href="/learn"
      class="inline-flex h-12 items-center justify-center rounded-full border-[1.5px] border-[#4b525b]/60 bg-white/70 px-7 text-[17px] font-semibold text-[#2a2f36] backdrop-blur-sm transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101318]"
    >
      Learn More
    </Button.Root>
  </div>

  <!-- tagline -->
  <p
    class="mt-12 text-[16px] font-normal text-[#3a4048] [text-shadow:0_1px_12px_rgba(255,255,255,0.8)]"
  >
    No tracking. No ads. Just ideas.
  </p>
</div>
