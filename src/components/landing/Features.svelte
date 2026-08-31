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
      darkColor: "#5fcf93",
      title: "Federated by design",
      description:
        "Publish once, reach readers across the entire fediverse. Anyone on a compatible platform can follow your blog.",
    },
    {
      icon: PenLine,
      color: "#e8663c",
      darkColor: "#f68a64",
      title: "A editor that stays out of the way",
      description:
        "Clean, distraction-free writing with Markdown support, drafts, and scheduled publishing.",
    },
    {
      icon: Rss,
      color: "#c08a2d",
      darkColor: "#dca74a",
      title: "Your audience is yours",
      description:
        "Subscribers follow you, not the platform. Export your posts and followers at any time — no lock-in.",
    },
    {
      icon: ShieldCheck,
      color: "#7c5cbf",
      darkColor: "#ab92f0",
      title: "No tracking, no ads",
      description:
        "We don't profile readers or sell attention. No analytics beacons, no third-party trackers, ever.",
    },
    {
      icon: Server,
      color: "#3b82c4",
      darkColor: "#6fa4d8",
      title: "Run your own instance",
      description:
        "Self-host Omicron for yourself or your community, with moderation rules you set and control.",
    },
    {
      icon: Code2,
      color: "#c4526a",
      darkColor: "#dd7a90",
      title: "Open source, open roadmap",
      description:
        "The entire codebase is public. Features are proposed, discussed, and built in the open.",
    },
  ];
</script>

<section
  id="features"
  class="border-t border-[#e8e4dc] bg-[#faf8f4] dark:border-white/8 dark:bg-[#10141b]"
>
  <div class="mx-auto max-w-[1200px] px-6 py-20 sm:px-10 sm:py-28">
    <h2
      class="font-serif text-[34px] leading-[1.1] font-bold tracking-tight text-[#101418] sm:text-[42px] dark:text-[#f4f4ef]"
    >
      What you can do with Omicron
    </h2>
    <p class="mt-4 max-w-[560px] text-[17px] leading-[1.6] text-[#3a4048] dark:text-[#a9b2bd]">
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
            style="color: light-dark({feature.color}, {feature.darkColor})"
            strokeWidth={1.75}
          />
          <h3
            class="mt-4 text-[18px] font-semibold tracking-tight text-[#101418] dark:text-[#eef0f3]"
          >
            {feature.title}
          </h3>
          <p class="mt-2 text-[15px] leading-[1.55] text-[#3a4048] dark:text-[#9aa3ad]">
            {feature.description}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
