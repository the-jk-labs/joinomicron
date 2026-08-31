<script lang="ts">
  const email = "omicronhq@protonmail.com";

  const contacts = [
    {
      title: "Press and media",
      note: "For interviews, stories, and press-related questions.",
    },
    {
      title: "General questions",
      note: "New to Omicron or the fediverse? Start here.",
    },
    {
      title: "Hosting and instances",
      note: "Questions about running or joining an instance.",
    },
    {
      title: "Legal and trademarks",
      note: "For legal notices, trademark, and brand usage.",
    },
    {
      title: "Security reports",
      note: "To report vulnerabilities, please see our security policy first.",
    },
  ];
</script>

<section id="contact" class="border-t border-[#e8e4dc] bg-[#faf8f4]">
  <div class="mx-auto max-w-[1200px] px-6 py-20 sm:px-10 sm:py-28">
    <div
      class="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16"
    >
      <div>
        <h2
          class="font-serif text-[34px] leading-[1.1] font-bold tracking-tight text-[#101418] sm:text-[42px]"
        >
          Contact us
        </h2>
        <p class="mt-4 max-w-[420px] text-[17px] leading-[1.6] text-[#3a4048]">
          We read everything, and a human replies. Write to us at
          <a
            href="mailto:{email}"
            class="font-medium text-[#5b4fc4] underline underline-offset-4 transition-colors hover:text-[#463aa8]"
          >
            {email}
          </a>
          and we'll route it to the right place.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2">
        {#each contacts as contact (contact.title)}
          <div>
            <h3
              class="text-[15px] font-semibold tracking-tight text-[#101418]"
            >
              {contact.title}
            </h3>
            <a
              href="mailto:{email}"
              class="mt-1.5 inline-block text-[15px] font-medium text-[#5b4fc4] underline underline-offset-4 transition-colors hover:text-[#463aa8]"
            >
              {email}
            </a>
            <p class="mt-1.5 text-[14px] leading-[1.5] text-[#6a7078]">
              {contact.note}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
