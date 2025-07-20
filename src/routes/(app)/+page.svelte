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

  <header class="sticky top-0 z-50 w-full">
    <nav
      class="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 relative z-50 border-b backdrop-blur"
    >
      <div class="container mx-auto py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="bg-primary flex h-8 w-8 items-center justify-center rounded-lg">
              <Lucide.Leaf class="text-primary-foreground h-5 w-5" />
            </div>
            <span
              class="from-primary to-accent bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent"
            >
              GreenCode
            </span>
          </div>
          <Button variant="outline" href="/dashboard">
            <Lucide.LayoutDashboard />
            <span class="pt-[0.15rem]">Dashboard</span>
          </Button>
        </div>
      </div>
    </nav>
  </header>

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
        <div class="relative z-10">
          <Button
            class="border-primary/50 group/btn mt-1 border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
            variant="default"
            href="/explore/problems"
          >
            View problem statements
            <Lucide.ArrowBigRight
              class="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </Button>
        </div>
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
          class="from-foreground via-primary to-accent animate-shimmer relative bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-6xl"
        >
          Explore teams.
        </h1>
        <p class="text-muted-foreground relative mx-auto max-w-lg text-lg md:mx-0 md:text-xl">
          Find teams that are building something impactful.
        </p>
        <div class="relative z-10">
          <Button
            class="border-primary/50 group/btn mt-1 border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
            variant="default"
            href="/explore/teams"
          >
            View teams
            <Lucide.Users class="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Button>
          <Button
            class="border-primary/50 group/btn mt-1 ml-1 rounded-lg border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
            variant="default"
            href="/create/team"
          >
            Create a team
            <Lucide.Plus class="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  </div>

  <footer class="border-border/40 bg-background/80 mt-12 border-t py-10 backdrop-blur-sm">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 gap-10 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <div class="bg-primary flex h-8 w-8 items-center justify-center rounded-lg">
              <Lucide.Leaf class="text-primary-foreground h-5 w-5" />
            </div>
            <span
              class="from-primary to-accent bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent"
            >
              GreenCode
            </span>
          </div>
          <p class="text-muted-foreground/80 text-sm">
            Building a greener future through code and collaboration.
          </p>
        </div>

        <div class="space-y-4">
          <h3 class="text-base font-medium">Resources</h3>
          <ul class="text-muted-foreground/70 space-y-2 text-sm">
            <li>
              <a href="/explore/problems" class="hover:text-primary transition-colors">Problems</a>
            </li>
            <li>
              <a href="/explore/teams" class="hover:text-primary transition-colors">Teams</a>
            </li>
          </ul>
        </div>

        <div class="space-y-4">
          <h3 class="text-base font-medium">Company</h3>
          <ul class="text-muted-foreground/70 space-y-2 text-sm">
            <li><a href="/about" class="hover:text-primary transition-colors">About</a></li>
            <li><a href="/faq" class="hover:text-primary transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div class="space-y-4">
          <h3 class="text-base font-medium">Connect</h3>
          <div class="flex space-x-4">
            <a
              href="https://github.com/debarchito/greencode"
              class="text-muted-foreground/70 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Lucide.Github class="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              class="text-muted-foreground/70 hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Lucide.Twitter class="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              class="text-muted-foreground/70 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Lucide.Linkedin class="h-5 w-5" />
            </a>
          </div>
          <p class="text-muted-foreground/80 mt-5 text-sm">
            Contact us at <a href="mailto:info@greencode.com" class="text-primary hover:underline">
              info@greencode.com
            </a>
          </p>
        </div>
      </div>

      <div
        class="border-border/20 text-muted-foreground/60 mt-10 flex flex-col items-center space-y-4 border-t pt-6 text-xs sm:flex-row sm:justify-between sm:space-y-0"
      >
        <p>© 2025 GreenCode. All rights reserved.</p>
        <div class="flex space-x-6">
          <a href="/privacy" class="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="/terms" class="hover:text-primary transition-colors">Terms of Service</a>
        </div>
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
