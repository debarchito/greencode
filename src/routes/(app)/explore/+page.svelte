<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Avatar, AvatarFallback } from "$lib/components/ui/avatar";
  import { Alert, AlertDescription } from "$lib/components/ui/alert";
  import { Mail, Leaf, LogIn, ArrowBigRight, Github, Twitter, Linkedin } from "@lucide/svelte";

  let { data } = $props();
</script>

<svelte:head>
  <title>Explore | greencode</title>
</svelte:head>

<div
  class="from-background via-background to-primary/5 relative flex min-h-screen flex-col bg-gradient-to-br"
>
  <div class="bg-primary/5 pointer-events-none absolute inset-0 -z-10">
    <div class="bg-primary/10 absolute top-1/3 left-1/4 h-96 w-96 rounded-full blur-3xl"></div>
    <div class="bg-primary/10 absolute right-1/4 bottom-1/3 h-96 w-96 rounded-full blur-3xl"></div>
  </div>

  <nav
    class="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b backdrop-blur"
  >
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <div class="bg-primary flex h-8 w-8 items-center justify-center rounded-lg">
            <Leaf class="text-primary-foreground h-5 w-5" />
          </div>
          <span
            class="from-primary to-accent bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent"
          >
            GreenCode
          </span>
        </div>

        {#if data.user}
          <div class="flex items-center space-x-3">
            <Avatar class="h-8 w-8">
              <AvatarFallback class="text-xs">{data.user.name[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <div class="hidden sm:block">
              {#if data.user.displayName}
                <p class="text-sm font-medium">{data.user.displayName}</p>
              {/if}
              <p class="text-muted-foreground text-xs">@{data.user.name}</p>
            </div>
          </div>
        {:else}
          <Button variant="link" href="/sign-in">
            <LogIn class="mr-2" />
            Sign in
          </Button>
        {/if}
      </div>
    </div>
  </nav>

  {#if data.user && !data.user?.verified}
    <Alert
      class="border-destructive/20 bg-destructive/10 sticky top-16 z-40 rounded-none border-x-0 border-t-0 backdrop-blur-sm"
    >
      <Mail class="ml-4 h-4 w-4 flex-shrink-0" />
      <AlertDescription
        class="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
      >
        <span class="ml-4">
          Please verify your email address to participate in the hackathon.
        </span>
        <span class="px-4 sm:pl-0">
          <Button variant="link" class="text-destructive h-auto p-0 font-medium whitespace-nowrap">
            Verify now!
          </Button>
        </span>
      </AlertDescription>
    </Alert>
  {/if}

  <div class="container mx-auto flex-grow px-4 py-8 sm:py-16">
    <div class="grid grid-cols-1 gap-8 sm:mt-10 sm:gap-16 md:grid-cols-2">
      <div
        class="group relative flex flex-col justify-center space-y-6 overflow-visible p-4 text-center md:p-6 md:text-left"
      >
        <div
          class="bg-primary/20 absolute inset-0 rounded-2xl opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
        ></div>
        <span
          class="bg-primary/10 absolute -top-6 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full blur-2xl md:left-16 md:translate-x-0"
        ></span>

        <h1
          class="from-foreground via-primary to-accent relative bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-6xl"
        >
          Explore Problems
        </h1>
        <p class="text-muted-foreground relative mx-auto max-w-lg text-lg md:mx-0 md:text-xl">
          Explore the problem statements, choose one and build something impactful.
        </p>
        <div class="relative z-10">
          <Button
            class="border-primary/50 border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
            variant="default"
            href="/explore/problems"
          >
            View problems <ArrowBigRight class="ml-2 animate-pulse" />
          </Button>
        </div>
      </div>

      <div
        class="group relative flex flex-col justify-center space-y-6 overflow-visible p-4 text-center md:p-6 md:text-left"
      >
        <div
          class="bg-primary/10 absolute inset-0 rounded-2xl opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
        ></div>
        <span
          class="bg-primary/10 absolute -top-6 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full blur-2xl md:left-16 md:translate-x-0"
        ></span>

        <h1
          class="from-foreground via-primary to-accent relative bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-6xl"
        >
          Explore Teams
        </h1>
        <p class="text-muted-foreground relative mx-auto max-w-lg text-lg md:mx-0 md:text-xl">
          Find teams that are building something impactful.
        </p>
        <div class="relative z-10">
          <Button
            class="border-primary/50 border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
            variant="default"
            href="/explore/teams"
          >
            View teams <ArrowBigRight class="ml-2 animate-pulse" />
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
              <Leaf class="text-primary-foreground h-5 w-5" />
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
              <Github class="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              class="text-muted-foreground/70 hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter class="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              class="text-muted-foreground/70 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin class="h-5 w-5" />
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
