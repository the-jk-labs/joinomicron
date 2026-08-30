<script lang="ts">
  import { Accordion } from "bits-ui";
  import { ChevronDown } from "lucide-svelte";

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

<section id="faq" class="border-t border-[#e8e4dc] bg-[#faf8f4]">
  <div class="mx-auto max-w-[1200px] px-6 py-20 sm:px-10 sm:py-28">
    <div
      class="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16"
    >
      <div>
        <h2
          class="font-serif text-[34px] leading-[1.1] font-bold tracking-tight text-[#101418] sm:text-[42px]"
        >
          Frequently asked
        </h2>
        <p class="mt-4 text-[17px] leading-[1.6] text-[#3a4048]">
          Can't find what you're looking for?
          <a
            href="#contact"
            class="font-medium text-[#5b4fc4] underline underline-offset-4 transition-colors hover:text-[#463aa8]"
          >
            Contact us
          </a>
        </p>
      </div>

      <Accordion.Root type="single" class="w-full">
        {#each faqs as faq, i (faq.question)}
          <Accordion.Item
            value="faq-{i}"
            class="border-b border-[#e0dcd4] first:border-t"
          >
            <Accordion.Header>
              <Accordion.Trigger
                class="group flex w-full items-center justify-between gap-4 py-5 text-left text-[17px] font-semibold tracking-tight text-[#101418] transition-colors hover:text-[#5b4fc4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b4fc4]"
              >
                {faq.question}
                <ChevronDown
                  class="h-5 w-5 shrink-0 text-[#8a8378] transition-transform duration-200 group-data-[state=open]:rotate-180"
                />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content
              class="overflow-hidden pb-5 text-[15px] leading-[1.65] text-[#3a4048] data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
            >
              {faq.answer}
            </Accordion.Content>
          </Accordion.Item>
        {/each}
      </Accordion.Root>
    </div>
  </div>
</section>
