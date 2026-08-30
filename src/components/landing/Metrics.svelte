<script lang="ts">
  const metrics = [
    { value: "1,240+", label: "Active instances worldwide" },
    { value: "86K", label: "Writers publishing on Omicron" },
    { value: "4.2M", label: "Posts federated to date" },
    { value: "0", label: "Ads served. Ever." },
  ];
</script>

<section class="border-t border-[#e8e4dc]">
  <div class="mx-auto max-w-[1200px] px-6 py-20 sm:px-10 sm:py-24">
    <h2
      class="font-serif text-[34px] leading-[1.1] font-bold tracking-tight text-[#101418] sm:text-[42px]"
    >
      Our metrics
    </h2>

    <div
      class="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
    >
      {#each metrics as metric (metric.label)}
        <div class="border-l-2 border-[#e8e4dc] pl-6">
          <p
            class="font-serif text-[40px] leading-none font-bold tracking-tight text-[#101418]"
          >
            {metric.value}
          </p>
          <p class="mt-3 text-[15px] leading-[1.45] text-[#3a4048]">
            {metric.label}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
