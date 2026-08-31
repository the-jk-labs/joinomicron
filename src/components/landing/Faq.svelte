<script lang="ts">
  import { Accordion } from "bits-ui";
  import { ChevronDown } from "lucide-svelte";
  import type { GetImageResult } from "astro:assets";

  let { image }: { image: GetImageResult } = $props();

  const faqs = [
    {
      question: "What does “federated” actually mean?",
      answer:
        "Instead of one company running one website, Omicron is software that anyone can run. Independent servers (instances) talk to each other through open protocols, so a reader on one instance can follow a writer on another — no central gatekeeper required.",
    },
    {
      question: "Do I need to run a server to use Omicron?",
      answer:
        "Not at all. You can join any public instance and start writing in minutes. Running your own instance is an option for people and communities who want full control, not a requirement.",
    },
    {
      question: "Is Omicron really free?",
      answer:
        "The software is free and open source, forever. Individual instances may accept donations or charge modest fees to cover hosting costs, but no one can charge you for the software itself.",
    },
    {
      question: "Can I move my blog from another platform?",
      answer:
        "Yes. Omicron can import posts from common formats, and because your content is yours, you can export everything — posts, drafts, and your subscriber list — whenever you like.",
    },
    {
      question: "How is Omicron funded?",
      answer:
        "Through community donations and optional paid hosted plans. There are no investors to answer to and no advertising business to feed, which keeps our incentives aligned with writers and readers.",
    },
  ];
</script>

<section id="faq" class="border-t border-[#e8e4dc] dark:border-white/8">
  <div class="mx-auto max-w-[1200px] px-6 py-20 sm:px-10 sm:py-28">
    <div
      class="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16"
    >
      <div>
        <h2
          class="font-serif text-[34px] leading-[1.1] font-bold tracking-tight text-[#101418] sm:text-[42px] dark:text-[#f4f4ef]"
        >
          Frequently asked
        </h2>
        <img
          src={image.src}
          srcset={image.srcset}
          sizes="(max-width: 1024px) 90vw, 360px"
          width={image.attributes.width}
          height={image.attributes.height}
          alt="Omicron FAQ illustration"
          class="mt-8 aspect-[1349/1166] w-full max-w-[360px] rounded-2xl object-cover dark:bg-[#14181f] dark:p-4 dark:ring-1 dark:ring-white/8"
        />
      </div>

      <Accordion.Root type="single" class="w-full lg:self-center">
        {#each faqs as faq, i (faq.question)}
          <Accordion.Item
            value="faq-{i}"
            class="border-b border-[#e0dcd4] first:border-t dark:border-white/10"
          >
            <Accordion.Header>
              <Accordion.Trigger
                class="group flex w-full items-center justify-between gap-4 py-5 text-left text-[17px] font-semibold tracking-tight text-[#101418] transition-colors hover:text-[#5b4fc4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b4fc4] dark:text-[#eef0f3] dark:hover:text-[#ab92f0] dark:focus-visible:outline-[#ab92f0]"
              >
                {faq.question}
                <ChevronDown
                  class="h-5 w-5 shrink-0 text-[#8a8378] transition-transform duration-200 group-data-[state=open]:rotate-180 dark:text-[#7d8491]"
                />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content
              class="overflow-hidden pb-5 text-[15px] leading-[1.65] text-[#3a4048] data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down dark:text-[#a9b2bd]"
            >
              {faq.answer}
            </Accordion.Content>
          </Accordion.Item>
        {/each}
      </Accordion.Root>
    </div>
  </div>
</section>
