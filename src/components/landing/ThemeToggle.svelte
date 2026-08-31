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
  aria-pressed={dark}
  aria-label="Toggle dark mode"
  title={dark ? "Switch to light mode" : "Switch to dark mode"}
  class="inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-[#101318] transition-colors duration-300 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101318] dark:text-[#e8e9f2] dark:hover:text-white dark:focus-visible:outline-[#8c7bff]"
>
  <span class="relative block h-5 w-5">
    <Moon
      class="absolute inset-0 h-5 w-5 scale-100 rotate-0 opacity-100 transition-all duration-300 dark:scale-50 dark:-rotate-90 dark:opacity-0"
      strokeWidth={2}
    />
    <Sun
      class="absolute inset-0 h-5 w-5 scale-50 rotate-90 opacity-0 transition-all duration-300 dark:scale-100 dark:rotate-0 dark:opacity-100"
      strokeWidth={2}
    />
  </span>
</button>
