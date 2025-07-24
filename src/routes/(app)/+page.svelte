<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Lucide from "@lucide/svelte";

  const floatingParticles = [
    {
      class:
        "bg-primary/45 animate-float-slow absolute right-1/3 bottom-40 h-3 w-3 rounded-full z-10",
    },
    {
      class:
        "bg-secondary/40 animate-float-medium absolute bottom-20 left-1/4 h-2 w-2 rounded-full z-10",
    },
    {
      class: "bg-primary/35 animate-spin-slow absolute top-60 right-10 h-3 w-3 rounded-full z-10",
    },
    {
      class:
        "bg-primary/30 animate-bounce-slow absolute bottom-10 right-1/4 h-4 w-4 rounded-full z-10",
    },
    {
      class: "bg-accent/50 animate-spin-slow absolute bottom-60 left-1/6 h-2 w-2 rounded-full z-10",
    },
    {
      class: "bg-primary/38 animate-float-slow absolute top-48 left-3/4 h-3 w-3 rounded-full z-10",
    },
    {
      class:
        "bg-secondary/35 animate-bounce-slow absolute bottom-32 right-2/3 h-2 w-2 rounded-full z-10",
    },
    {
      class:
        "bg-accent/42 animate-float-medium absolute top-72 right-1/3 h-4 w-4 rounded-full z-10",
    },
    {
      class:
        "bg-primary/33 animate-spin-slow absolute bottom-48 left-2/3 h-3 w-3 rounded-full z-10",
    },
  ];

  const floatingShapes = [
    {
      class:
        "border-accent/50 animate-float-medium absolute top-3/4 left-1/5 h-6 w-6 rounded-full border-2 z-10",
    },
    {
      class:
        "border-primary/40 animate-spin-slow absolute top-1/2 right-1/5 h-4 w-4 rotate-12 border-2 z-10",
    },
    {
      class:
        "bg-secondary/35 animate-bounce-slow absolute top-80 left-3/4 h-3 w-8 rounded-full z-10",
    },
    {
      class:
        "border-primary/65 animate-float-slow absolute right-2/3 bottom-1/4 h-5 w-5 rotate-45 border-2 z-10",
    },
    {
      class:
        "border-accent/60 animate-spin-slow absolute right-1/4 bottom-32 h-6 w-6 rounded-full border-2 z-10",
    },
    {
      class:
        "bg-secondary/40 animate-bounce-slow absolute top-2/3 left-1/6 h-2 w-6 rounded-full z-10",
    },
    {
      class:
        "bg-accent/33 animate-float-medium absolute bottom-16 left-1/2 h-6 w-2 rounded-full z-10",
    },
    {
      class:
        "bg-secondary/42 animate-bounce-slow absolute bottom-24 right-1/6 h-4 w-3 rounded-full z-10",
    },
    {
      class:
        "border-accent/38 animate-float-slow absolute top-52 right-3/4 h-4 w-4 rotate-90 border-2 z-10",
    },
    {
      class:
        "bg-primary/28 animate-float-medium absolute bottom-52 left-3/5 h-5 w-2 rounded-full z-10",
    },
    {
      class:
        "bg-accent/36 animate-bounce-slow absolute bottom-36 right-1/8 h-3 w-5 rounded-full z-10",
    },
    {
      class:
        "border-primary/48 animate-float-slow absolute top-68 right-2/5 h-5 w-5 rotate-75 border-2 z-10",
    },
    {
      class:
        "bg-secondary/31 animate-float-medium absolute bottom-68 left-2/5 h-2 w-4 rounded-full z-10",
    },
  ];

  const codeSymbols = [
    {
      class: "text-primary/60 animate-float-slow absolute top-16 right-1/2 font-mono text-2xl z-10",
      symbol: "&lt;/&gt;",
    },
    {
      class:
        "text-accent/55 animate-float-medium absolute bottom-1/3 left-3/5 font-mono text-xl z-10",
      symbol: "{}",
    },
    {
      class: "text-primary/45 animate-spin-slow absolute top-1/3 right-1/6 font-mono text-lg z-10",
      symbol: "[ ]",
    },
    {
      class:
        "text-secondary/50 animate-bounce-slow absolute bottom-1/2 left-4/5 font-mono text-sm z-10",
      symbol: "=>",
    },
    {
      class:
        "text-primary/50 animate-float-medium absolute top-1/2 left-1/3 font-mono text-xl z-10",
      symbol: "( )",
    },
    {
      class:
        "text-accent/40 animate-spin-slow absolute bottom-1/4 right-2/3 font-mono text-lg z-10",
      symbol: "//",
    },
    {
      class:
        "text-secondary/45 animate-float-slow absolute top-3/4 left-1/6 font-mono text-sm z-10",
      symbol: "&&",
    },
    {
      class:
        "text-primary/55 animate-bounce-slow absolute top-1/5 right-3/4 font-mono text-lg z-10",
      symbol: "||",
    },
    {
      class:
        "text-accent/50 animate-float-medium absolute bottom-2/3 left-2/3 font-mono text-xl z-10",
      symbol: "++",
    },
    {
      class:
        "text-secondary/40 animate-spin-slow absolute top-2/5 right-1/4 font-mono text-sm z-10",
      symbol: "===",
    },
    {
      class:
        "text-primary/35 animate-float-slow absolute bottom-1/6 left-1/2 font-mono text-lg z-10",
      symbol: "!=",
    },
    {
      class: "text-accent/45 animate-bounce-slow absolute top-4/5 right-1/3 font-mono text-xl z-10",
      symbol: "?:",
    },
  ];

  const socialLinks = [
    {
      href: "https://github.com/debarchito/greencode",
      icon: Lucide.Github,
      label: "Follow us on GitHub",
    },
    { href: "https://twitter.com", icon: Lucide.Twitter, label: "Follow us on Twitter" },
    { href: "https://linkedin.com", icon: Lucide.Linkedin, label: "Connect with us on LinkedIn" },
    { href: "mailto:", icon: Lucide.Mail, label: "Contact us via email" },
  ];

  const footerSections = [
    {
      title: "Platform",
      links: [
        { href: "/explore/problems", text: "Problem Statements" },
        { href: "/explore/teams", text: "Explore teams" },
        { href: "/create/team", text: "Create Team" },
        { href: "/leaderboard", text: "Leaderboard" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about", text: "About Us" },
        { href: "/press", text: "Press Kit" },
      ],
    },
    {
      title: "Support",
      links: [
        { href: "/faq", text: "FAQ" },
        { href: "/contact", text: "Contact Support" },
      ],
    },
  ];

  const bottomLinks = [
    { href: "/privacy", text: "Privacy Policy" },
    { href: "/terms", text: "Terms of Service" },
  ];
</script>

<svelte:head>
  <title>greencode</title>
</svelte:head>

<div
  class="from-background via-background to-primary/5 relative flex min-h-screen w-full flex-col overflow-x-hidden bg-gradient-to-br"
>
  <div class="bg-primary/5 pointer-events-none absolute inset-0 -z-10">
    <div
      class="bg-primary/10 absolute top-1/3 left-1/4 h-96 w-96 animate-pulse rounded-full blur-3xl"
    ></div>
    <div
      class="bg-primary/10 absolute right-1/4 bottom-1/3 h-96 w-96 animate-pulse rounded-full blur-3xl"
    ></div>
    <div
      class="bg-accent/5 animate-float-slow absolute top-1/2 left-1/2 h-72 w-72 rounded-full blur-2xl"
    ></div>
    <div
      class="bg-secondary/5 animate-float-medium absolute top-20 right-10 h-64 w-64 rounded-full blur-xl"
    ></div>
    <div
      class="bg-primary/5 animate-bounce-slow absolute bottom-20 left-10 h-48 w-48 rounded-full blur-xl"
    ></div>
  </div>

  <div class="pointer-events-none absolute inset-0 z-5">
    {#each floatingParticles as particle, i (i)}
      <div class={particle.class}></div>
    {/each}

    {#each floatingShapes as shape, i (i)}
      <div class={shape.class}></div>
    {/each}

    {#each codeSymbols as symbol, i (i)}
      <div class={symbol.class}>
        {symbol.symbol}
      </div>
    {/each}
  </div>

  <section class="relative flex min-h-screen items-center py-20">
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="from-primary/10 via-accent/5 to-secondary/10 absolute -top-1/2 -left-1/2 h-full w-full rotate-12 animate-pulse bg-gradient-to-r opacity-30 blur-3xl"
      ></div>
      <div
        class="from-primary/5 via-accent/10 to-secondary/5 absolute -right-1/2 -bottom-1/2 h-full w-full -rotate-12 animate-pulse bg-gradient-to-l opacity-40 blur-3xl"
      ></div>
    </div>

    <div class="relative z-10 container mx-auto px-4">
      <div class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div class="space-y-8">
          <div class="flex items-center space-x-3">
            <div class="bg-primary flex h-10 w-10 items-center justify-center rounded-xl shadow-lg">
              <Lucide.Leaf class="text-primary-foreground h-6 w-6" />
            </div>
            <span
              class="from-primary to-accent bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent lg:text-2xl"
            >
              greencode
            </span>
          </div>

          <h1
            class="from-foreground via-primary to-accent animate-shimmer font-jbm bg-gradient-to-r bg-clip-text text-5xl leading-tight font-bold text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
          >
            build for a
            <span
              class="from-accent to-primary block animate-pulse bg-gradient-to-r bg-clip-text text-transparent"
            >
              better tomorrow
            </span>
          </h1>

          <p class="text-muted-foreground max-w-2xl text-xl leading-relaxed opacity-90 md:text-2xl">
            join the movement of developers creating impactful solutions.
          </p>
        </div>

        <div class="flex justify-center md:justify-center">
          <div id="ghost" class="scale-90 md:scale-100">
            <div id="red">
              <div id="pupil"></div>
              <div id="pupil1"></div>
              <div id="eye"></div>
              <div id="eye1"></div>
              <div id="top0"></div>
              <div id="top1"></div>
              <div id="top2"></div>
              <div id="top3"></div>
              <div id="top4"></div>
              <div id="st0"></div>
              <div id="st1"></div>
              <div id="st2"></div>
              <div id="st3"></div>
              <div id="st4"></div>
              <div id="st5"></div>
              <div id="an1"></div>
              <div id="an2"></div>
              <div id="an3"></div>
              <div id="an4"></div>
              <div id="an5"></div>
              <div id="an6"></div>
              <div id="an7"></div>
              <div id="an8"></div>
              <div id="an9"></div>
              <div id="an10"></div>
              <div id="an11"></div>
              <div id="an12"></div>
              <div id="an13"></div>
              <div id="an14"></div>
              <div id="an15"></div>
              <div id="an16"></div>
              <div id="an17"></div>
              <div id="an18"></div>
            </div>
            <div id="shadow"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
      <Lucide.ChevronDown class="text-muted-foreground h-6 w-6" />
    </div>
  </section>

  <div class="container mx-auto flex-grow px-4 py-6 sm:py-8 md:py-16">
    <div class="grid grid-cols-1 gap-8 sm:mt-10 sm:gap-16 md:grid-cols-2">
      <div
        class="group relative flex flex-col justify-center space-y-6 overflow-visible p-4 text-center md:p-6 md:text-left"
      >
        <div
          class="bg-primary/10 absolute inset-0 rounded-2xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        ></div>
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

  <footer class="border-border/10 bg-background/95 z-11 mt-16 border-t backdrop-blur-md">
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
              greencode
            </span>
          </div>
          <p class="text-muted-foreground text-sm leading-relaxed">Quote goes here!</p>
          <div class="flex space-x-4">
            {#each socialLinks as link (link)}
              <a
                href={link.href}
                class="text-muted-foreground hover:text-primary hover:bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200"
                aria-label={link.label}
              >
                <link.icon class="h-5 w-5" />
              </a>
            {/each}
          </div>
        </div>

        {#each footerSections as section (section)}
          <div class="space-y-4 lg:space-y-6">
            <h3 class="text-primary text-base font-semibold">{section.title}</h3>
            <nav class="space-y-3">
              {#each section.links as link (link)}
                <a
                  href={link.href}
                  class="text-muted-foreground hover:text-primary block text-sm transition-colors duration-200"
                >
                  {link.text}
                </a>
              {/each}
            </nav>
          </div>
        {/each}
      </div>

      <div
        class="border-border/20 text-muted-foreground mt-12 flex flex-col items-center justify-between space-y-4 border-t pt-8 text-sm md:flex-row md:space-y-0"
      >
        <p class="flex items-center space-x-1 text-sm select-none">
          Built with <Lucide.Heart class="ml-1 h-4 w-4 text-pink-400" /> in
          <a href="https://svelte.dev/docs/kit/introduction" class="ml-1 underline">SvelteKit</a>
        </p>
        <nav class="flex flex-wrap items-center space-x-6 text-xs">
          {#each bottomLinks as link (link)}
            <a href={link.href} class="hover:text-primary transition-colors duration-200">
              {link.text}
            </a>
          {/each}
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

  /* From Uiverse.io by BlackisPlay */
  #ghost {
    position: relative;
    scale: 0.8;
  }

  #red {
    animation: upNDown infinite 0.5s;
    position: relative;
    width: 140px;
    height: 140px;
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    grid-template-rows: repeat(14, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    grid-template-areas:
      "a1  a2  a3  a4  a5  top0  top0  top0  top0  a10 a11 a12 a13 a14"
      "b1  b2  b3  top1 top1 top1 top1 top1 top1 top1 top1 b12 b13 b14"
      "c1 c2 top2 top2 top2 top2 top2 top2 top2 top2 top2 top2 c13 c14"
      "d1 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 d14"
      "e1 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 e14"
      "f1 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 f14"
      "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
      "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
      "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
      "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
      "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
      "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
      "st0 st0 an4 st1 an7 st2 an10 an10 st3 an13 st4 an16 st5 st5"
      "an1 an2 an3 an5 an6 an8 an9 an9 an11 an12 an14 an15 an17 an18";
  }

  @keyframes upNDown {
    0%,
    49% {
      transform: translateY(0px);
    }
    50%,
    100% {
      transform: translateY(-10px);
    }
  }

  #top0,
  #top1,
  #top2,
  #top3,
  #top4,
  #st0,
  #st1,
  #st2,
  #st3,
  #st4,
  #st5 {
    background-color: var(--color-primary);
  }

  #top0 {
    grid-area: top0;
  }

  #top1 {
    grid-area: top1;
  }

  #top2 {
    grid-area: top2;
  }

  #top3 {
    grid-area: top3;
  }

  #top4 {
    grid-area: top4;
  }

  #st0 {
    grid-area: st0;
  }

  #st1 {
    grid-area: st1;
  }

  #st2 {
    grid-area: st2;
  }

  #st3 {
    grid-area: st3;
  }

  #st4 {
    grid-area: st4;
  }

  #st5 {
    grid-area: st5;
  }

  #an1 {
    grid-area: an1;
    animation: flicker0 infinite 0.5s;
  }

  #an18 {
    grid-area: an18;
    animation: flicker0 infinite 0.5s;
  }

  #an2 {
    grid-area: an2;
    animation: flicker1 infinite 0.5s;
  }

  #an17 {
    grid-area: an17;
    animation: flicker1 infinite 0.5s;
  }

  #an3 {
    grid-area: an3;
    animation: flicker1 infinite 0.5s;
  }

  #an16 {
    grid-area: an16;
    animation: flicker1 infinite 0.5s;
  }

  #an4 {
    grid-area: an4;
    animation: flicker1 infinite 0.5s;
  }

  #an15 {
    grid-area: an15;
    animation: flicker1 infinite 0.5s;
  }

  #an6 {
    grid-area: an6;
    animation: flicker0 infinite 0.5s;
  }

  #an12 {
    grid-area: an12;
    animation: flicker0 infinite 0.5s;
  }

  #an7 {
    grid-area: an7;
    animation: flicker0 infinite 0.5s;
  }

  #an13 {
    grid-area: an13;
    animation: flicker0 infinite 0.5s;
  }

  #an9 {
    grid-area: an9;
    animation: flicker1 infinite 0.5s;
  }

  #an10 {
    grid-area: an10;
    animation: flicker1 infinite 0.5s;
  }

  #an8 {
    grid-area: an8;
    animation: flicker0 infinite 0.5s;
  }

  #an11 {
    grid-area: an11;
    animation: flicker0 infinite 0.5s;
  }

  @keyframes flicker0 {
    0%,
    49% {
      background-color: var(--color-primary);
    }
    50%,
    100% {
      background-color: transparent;
    }
  }

  @keyframes flicker1 {
    0%,
    49% {
      background-color: transparent;
    }
    50%,
    100% {
      background-color: var(--color-primary);
    }
  }

  #eye {
    width: 40px;
    height: 50px;
    position: absolute;
    top: 30px;
    left: 10px;
  }

  #eye::before {
    content: "";
    background-color: white;
    width: 20px;
    height: 50px;
    transform: translateX(10px);
    display: block;
    position: absolute;
  }

  #eye::after {
    content: "";
    background-color: white;
    width: 40px;
    height: 30px;
    transform: translateY(10px);
    display: block;
    position: absolute;
  }

  #eye1 {
    width: 40px;
    height: 50px;
    position: absolute;
    top: 30px;
    right: 30px;
  }

  #eye1::before {
    content: "";
    background-color: white;
    width: 20px;
    height: 50px;
    transform: translateX(10px);
    display: block;
    position: absolute;
  }

  #eye1::after {
    content: "";
    background-color: white;
    width: 40px;
    height: 30px;
    transform: translateY(10px);
    display: block;
    position: absolute;
  }

  #pupil {
    width: 20px;
    height: 20px;
    background-color: blue;
    position: absolute;
    top: 50px;
    left: 10px;
    z-index: 1;
    animation: eyesMovement infinite 3s;
  }

  #pupil1 {
    width: 20px;
    height: 20px;
    background-color: blue;
    position: absolute;
    top: 50px;
    right: 50px;
    z-index: 1;
    animation: eyesMovement infinite 3s;
  }

  @keyframes eyesMovement {
    0%,
    49% {
      transform: translateX(0px);
    }
    50%,
    99% {
      transform: translateX(10px);
    }
    100% {
      transform: translateX(0px);
    }
  }

  #shadow {
    background-color: black;
    width: 140px;
    height: 140px;
    position: absolute;
    border-radius: 50%;
    transform: rotateX(80deg);
    filter: blur(20px);
    top: 80%;
    animation: shadowMovement infinite 0.5s;
  }

  @keyframes shadowMovement {
    0%,
    49% {
      opacity: 0.5;
    }
    50%,
    100% {
      opacity: 0.2;
    }
  }
</style>
