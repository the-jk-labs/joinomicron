<script lang="ts">
  import type { GetImageResult } from "astro:assets";

  let { image }: { image: GetImageResult } = $props();
</script>

<section id="story" class="mx-auto max-w-[1200px] px-6 py-20 sm:px-10 sm:py-28">
  <div class="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
    <div>
      <h2
        class="font-serif text-[34px] leading-[1.1] font-bold tracking-tight text-[#101418] sm:text-[42px]"
      >
        Our story
      </h2>
      <img
        src={image.src}
        srcset={image.srcset}
        sizes="(max-width: 1024px) 90vw, 360px"
        width={image.attributes.width}
        height={image.attributes.height}
        alt="Omicron writer rabbit illustration"
        class="mt-8 w-full max-w-[360px] rounded-2xl object-cover"
      />
    </div>

    <div class="space-y-5 text-[17px] leading-[1.65] text-[#3a4048]">
      <p>
        Omicron began with a simple observation: the web's best writing
        shouldn't be locked inside walled gardens. We believe publishing online
        should work more like email: open, interoperable, and owned by no one.
      </p>
      <p>
        Built on open federation protocols, Omicron lets writers publish from
        their own corner of the internet while reaching readers everywhere.
        Follow a blog from any compatible platform, reply across instances, and
        take your audience with you if you ever move, with no vendor lock-in.
      </p>
      <p>
        The software is free and open source, developed in the open and shaped
        by the community that runs it. We support the fediverse, freedom, and
        creators earning a living on their own terms. Ethical monetization
        (paid subscriptions, donations, honest sponsorships) is welcome here.
        What we don't support is the surveillance model: anti-privacy ads and
        monopolies that track and gatekeep the open web.
      </p>
      <p>
        We are still early, and deliberately so. Omicron grows instance by
        instance, writer by writer, guided by a simple principle: the platform
        belongs to the people who use it.
      </p>
    </div>
  </div>
</section>
