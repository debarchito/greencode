<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Lucide from "@lucide/svelte";
</script>

<svelte:head>
  <title>Explore | greencode</title>
</svelte:head>

<div
  class="from-background via-background to-primary/5 relative flex min-h-screen w-full flex-col overflow-x-hidden bg-gradient-to-br"
>
  <div class="bg-primary/5 pointer-events-none absolute inset-0 -z-10">
    <div class="bg-primary/10 absolute top-1/3 left-1/4 h-96 w-96 rounded-full blur-3xl"></div>
    <div class="bg-primary/10 absolute right-1/4 bottom-1/3 h-96 w-96 rounded-full blur-3xl"></div>
  </div>

  <div class="container mx-auto flex-grow px-4 py-6 sm:py-8 md:py-16">
    <div class="grid grid-cols-1 gap-8 sm:mt-10 sm:gap-16 md:grid-cols-2">
      <div
        class="group relative flex flex-col justify-center space-y-6 overflow-visible p-4 text-center md:p-6 md:text-left"
      >
        <div
          class="bg-primary/10 absolute inset-0 rounded-2xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        ></div>
        <div class="absolute inset-0 overflow-hidden rounded-2xl">
          <div
            class="animate-float-slow border-primary/30 absolute -top-10 left-10 h-20 w-20 rounded-full border opacity-70"
          ></div>
          <div
            class="animate-float-medium border-primary/20 absolute top-20 right-10 h-16 w-16 rotate-45 border opacity-60"
          ></div>
          <div
            class="animate-spin-slow border-primary/40 absolute bottom-10 left-1/4 h-12 w-12 rounded-md border opacity-80"
          ></div>
          <div
            class="animate-bounce-slow bg-primary/5 absolute top-1/3 right-1/3 h-8 w-8 rounded-full opacity-90"
          ></div>
        </div>
        <h1
          class="from-foreground via-primary to-accent animate-shimmer relative bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-6xl"
        >
          Explore problem statements.
        </h1>
        <p class="text-muted-foreground relative mx-auto max-w-lg text-lg md:mx-0 md:text-xl">
          Explore the problem statements, choose one and build something impactful.
        </p>
        <Button
          class="group border-border/50 bg-background/50 text-foreground hover:bg-background/90 hover:border-primary/50 focus:ring-primary/50 relative z-10 inline-flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium shadow-lg backdrop-blur-sm transition-all focus:ring-2 focus:outline-none active:scale-95 sm:w-auto sm:text-base"
          variant="default"
          href="/explore/problems"
        >
          <span>View problem statements</span>
          <Lucide.ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
          <div
            class="from-primary/10 to-primary/10 absolute -inset-px rounded-xl bg-gradient-to-r opacity-0 blur transition duration-300 group-hover:opacity-100"
          ></div>
        </Button>
      </div>

      <div
        class="group relative flex flex-col justify-center space-y-6 overflow-visible p-4 text-center md:p-6 md:text-left"
      >
        <div
          class="bg-primary/10 absolute inset-0 rounded-2xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        ></div>
        <div class="absolute inset-0 overflow-hidden rounded-2xl">
          <div
            class="animate-float-medium border-primary/30 absolute right-10 -bottom-10 h-20 w-20 rounded-full border opacity-70"
          ></div>
          <div
            class="animate-float-slow border-primary/20 absolute top-10 left-20 h-16 w-16 rotate-12 border opacity-60"
          ></div>
          <div
            class="animate-spin-slow border-primary/40 absolute top-1/2 right-1/4 h-12 w-12 rounded-md border opacity-80"
          ></div>
          <div
            class="animate-bounce-slow bg-primary/5 absolute bottom-1/3 left-1/3 h-8 w-8 rounded-full opacity-90"
          ></div>
        </div>

        <h1
          class="from-foreground via-primary to-accent animate-shimmer relative mt-15 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:mt-0 md:text-6xl"
        >
          Explore teams.
        </h1>
        <p class="text-muted-foreground relative mx-auto max-w-lg text-lg md:mx-0 md:text-xl">
          Find teams that are building something impactful, and contribute to the cause.
        </p>
        <div class="relative z-10 flex flex-col gap-2 sm:flex-row">
          <Button
            class="group border-border/50 bg-background/50 text-foreground hover:bg-background/90 hover:border-primary/50 focus:ring-primary/50 relative inline-flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium shadow-lg backdrop-blur-sm transition-all focus:ring-2 focus:outline-none active:scale-95 sm:w-1/2 sm:text-base"
            variant="default"
            href="/explore/teams"
          >
            <span>View teams</span>
            <Lucide.Users class="h-4 w-4 transition-transform group-hover:translate-x-1" />
            <div
              class="from-primary/10 to-primary/10 absolute -inset-px rounded-xl bg-gradient-to-r opacity-0 blur transition duration-300 group-hover:opacity-100"
            ></div>
          </Button>
          <Button
            class="group border-border/50 bg-background/50 text-foreground hover:bg-background/90 hover:border-primary/50 focus:ring-primary/50 relative inline-flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium shadow-lg backdrop-blur-sm transition-all focus:ring-2 focus:outline-none active:scale-95 sm:w-1/2 sm:text-base"
            variant="default"
            href="/create/team"
          >
            <span>Create a team</span>
            <Lucide.Plus class="h-4 w-4 transition-transform group-hover:translate-x-1" />
            <div
              class="from-primary/10 to-primary/10 absolute -inset-px rounded-xl bg-gradient-to-r opacity-0 blur transition duration-300 group-hover:opacity-100"
            ></div>
          </Button>
        </div>
      </div>
    </div>
  </div>

  <footer class="border-border/10 bg-background/95 mt-16 border-t backdrop-blur-md">
    <div class="container mx-auto px-6 py-12">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        <div class="space-y-4 lg:space-y-6">
          <div class="flex items-center space-x-3">
            <div class="bg-primary flex h-10 w-10 items-center justify-center rounded-xl shadow-lg">
              <Lucide.Leaf class="text-primary-foreground h-6 w-6" />
            </div>
            <span
              class="from-primary to-accent bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent lg:text-2xl"
            >
              GreenCode
            </span>
          </div>
          <p class="text-muted-foreground text-sm leading-relaxed">Quote goes here!</p>
          <div class="flex space-x-4">
            <a
              href="https://github.com/debarchito/greencode"
              class="text-muted-foreground hover:text-primary hover:bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200"
              aria-label="Follow us on GitHub"
            >
              <Lucide.Github class="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              class="text-muted-foreground hover:text-primary hover:bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200"
              aria-label="Follow us on Twitter"
            >
              <Lucide.Twitter class="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              class="text-muted-foreground hover:text-primary hover:bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200"
              aria-label="Connect with us on LinkedIn"
            >
              <Lucide.Linkedin class="h-5 w-5" />
            </a>
            <a
              href="mailto:"
              class="text-muted-foreground hover:text-primary hover:bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200"
              aria-label="Connect with us on LinkedIn"
            >
              <Lucide.Mail class="h-5 w-5" />
            </a>
          </div>
        </div>

        <div class="space-y-4 lg:space-y-6">
          <h3 class="text-primary text-base font-semibold">Platform</h3>
          <nav class="space-y-3">
            <a
              href="/explore/problems"
              class="text-muted-foreground hover:text-primary block text-sm transition-colors duration-200"
            >
              Problem Statements
            </a>
            <a
              href="/explore/teams"
              class="text-muted-foreground hover:text-primary block text-sm transition-colors duration-200"
            >
              Explore teams
            </a>
            <a
              href="/create/team"
              class="text-muted-foreground hover:text-primary block text-sm transition-colors duration-200"
            >
              Create Team
            </a>
            <a
              href="/leaderboard"
              class="text-muted-foreground hover:text-primary block text-sm transition-colors duration-200"
            >
              Leaderboard
            </a>
          </nav>
        </div>

        <div class="space-y-4 lg:space-y-6">
          <h3 class="text-primary text-base font-semibold">Company</h3>
          <nav class="space-y-3">
            <a
              href="/about"
              class="text-muted-foreground hover:text-primary block text-sm transition-colors duration-200"
            >
              About Us
            </a>
            <a
              href="/press"
              class="text-muted-foreground hover:text-primary block text-sm transition-colors duration-200"
            >
              Press Kit
            </a>
          </nav>
        </div>

        <div class="space-y-4 lg:space-y-6">
          <h3 class="text-primary text-base font-semibold">Support</h3>
          <nav class="space-y-3">
            <a
              href="/faq"
              class="text-muted-foreground hover:text-primary block text-sm transition-colors duration-200"
            >
              FAQ
            </a>
            <a
              href="/contact"
              class="text-muted-foreground hover:text-primary block text-sm transition-colors duration-200"
            >
              Contact Support
            </a>
          </nav>
        </div>
      </div>

      <div
        class="border-border/20 text-muted-foreground mt-12 flex flex-col items-center justify-between space-y-4 border-t pt-8 text-sm md:flex-row md:space-y-0"
      >
        <p class="flex items-center space-x-1 text-sm">
          Built with <Lucide.Heart class="ml-1 h-4 w-4 text-pink-400" /> in
          <a href="https://svelte.dev/docs/kit/introduction" class="ml-1 underline">SvelteKit</a>
        </p>
        <nav class="flex flex-wrap items-center space-x-6 text-xs">
          <a href="/privacy" class="hover:text-primary transition-colors duration-200">
            Privacy Policy
          </a>
          <a href="/terms" class="hover:text-primary transition-colors duration-200">
            Terms of Service
          </a>
        </nav>
      </div>
    </div>
  </footer>
</div>

<style>
  @keyframes float-slow {
    0%,
    100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-15px) rotate(5deg);
    }
  }

  @keyframes float-medium {
    0%,
    100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-10px) rotate(-5deg);
    }
  }

  @keyframes spin-slow {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes bounce-slow {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  .animate-float-slow {
    animation: float-slow 8s ease-in-out infinite;
  }

  .animate-float-medium {
    animation: float-medium 6s ease-in-out infinite;
  }

  .animate-spin-slow {
    animation: spin-slow 12s linear infinite;
  }

  .animate-bounce-slow {
    animation: bounce-slow 5s ease-in-out infinite;
  }

  .animate-shimmer {
    background-size: 200% auto;
    animation: shimmer 3s linear infinite;
  }
</style>
