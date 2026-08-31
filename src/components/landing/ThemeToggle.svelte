<script lang="ts">
  import { Moon, Sun } from "lucide-svelte";
  import { onMount } from "svelte";

  let dark = $state(false);

  function apply(value: boolean) {
    document.documentElement.classList.toggle("dark", value);
    localStorage.setItem("theme", value ? "dark" : "light");
  }

  function toggle() {
    dark = !dark;
    apply(dark);
  }

  onMount(() => {
    // Sync with the class set by the inline script in BaseLayout.
    dark = document.documentElement.classList.contains("dark");

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        dark = e.matches;
        apply(dark);
      }
    };
    mq.addEventListener("change", onSystemChange);
    return () => mq.removeEventListener("change", onSystemChange);
  });
</script>

<button
  type="button"
  onclick={toggle}
  role="switch"
  aria-checked={dark}
  aria-label="Toggle dark mode"
  title={dark ? "Switch to light mode" : "Switch to dark mode"}
  class="relative inline-flex h-9 w-[72px] shrink-0 cursor-pointer items-center rounded-full border border-black/10 bg-white/70 p-1 shadow-inner backdrop-blur-sm transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101318] dark:border-white/15 dark:bg-[#1a2028] dark:focus-visible:outline-[#8c7bff]"
>
  <span
    class="inline-flex h-7 w-7 translate-x-0 items-center justify-center rounded-full bg-[#101318] text-white shadow-md transition-transform duration-300 ease-out [transition-timing-function:cubic-bezier(0.34,1.4,0.44,1)] dark:translate-x-[36px] dark:bg-[#e8e9f2] dark:text-[#101318]"
  >
    <span class="relative block h-4 w-4">
      <Sun
        class="absolute inset-0 h-4 w-4 scale-100 rotate-0 opacity-100 transition-all duration-300 dark:scale-50 dark:-rotate-90 dark:opacity-0"
        strokeWidth={2}
      />
      <Moon
        class="absolute inset-0 h-4 w-4 scale-50 rotate-90 opacity-0 transition-all duration-300 dark:scale-100 dark:rotate-0 dark:opacity-100"
        strokeWidth={2}
      />
    </span>
  </span>
</button>
