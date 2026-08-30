<script lang="ts">
  import {
    Globe,
    Rss,
    ShieldCheck,
    PenLine,
    Server,
    Code2,
  } from "lucide-svelte";

  const features = [
    {
      icon: Globe,
      color: "#2e8b57",
      title: "Federated by design",
      description:
        "Publish once, reach readers across the entire fediverse. Anyone on a compatible platform can follow your blog.",
    },
    {
      icon: PenLine,
      color: "#e8663c",
      title: "A editor that stays out of the way",
      description:
        "Clean, distraction-free writing with Markdown support, drafts, and scheduled publishing.",
    },
    {
      icon: Rss,
      color: "#c08a2d",
      title: "Your audience is yours",
      description:
        "Subscribers follow you, not the platform. Export your posts and followers at any time — no lock-in.",
    },
    {
      icon: ShieldCheck,
      color: "#7c5cbf",
      title: "No tracking, no ads",
      description:
        "We don't profile readers or sell attention. No analytics beacons, no third-party trackers, ever.",
    },
    {
      icon: Server,
      color: "#3b82c4",
      title: "Run your own instance",
      description:
        "Self-host Omicron for yourself or your community, with moderation rules you set and control.",
    },
    {
      icon: Code2,
      color: "#c4526a",
      title: "Open source, open roadmap",
      description:
        "The entire codebase is public. Features are proposed, discussed, and built in the open.",
    },
  ];
</script>

<section
  id="features"
  class="border-t border-[#e8e4dc] bg-[#faf8f4]"
>
  <div class="mx-auto max-w-[1200px] px-6 py-20 sm:px-10 sm:py-28">
    <h2
      class="font-serif text-[34px] leading-[1.1] font-bold tracking-tight text-[#101418] sm:text-[42px]"
    >
      What you can do with Omicron
    </h2>
    <p class="mt-4 max-w-[560px] text-[17px] leading-[1.6] text-[#3a4048]">
      Everything you'd expect from a modern blogging platform — without the
      parts that stopped serving writers.
    </p>

    <div
      class="mt-14 grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
    >
      {#each features as feature (feature.title)}
        <div class="flex flex-col items-start">
          <feature.icon
            class="h-9 w-9"
            style="color: {feature.color}"
            strokeWidth={1.75}
          />
          <h3
            class="mt-4 text-[18px] font-semibold tracking-tight text-[#101418]"
          >
            {feature.title}
          </h3>
          <p class="mt-2 text-[15px] leading-[1.55] text-[#3a4048]">
            {feature.description}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
