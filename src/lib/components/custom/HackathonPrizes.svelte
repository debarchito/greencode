<script lang="ts">
  import * as Lucide from "@lucide/svelte";
  import { onMount } from "svelte";

  let visible = false;

  onMount(() => {
    setTimeout(() => {
      visible = true;
    }, 200);
  });

  const prizes = [
    {
      icon: Lucide.Crown,
      title: "1st Prize",
      amount: "₹XXXXXX",
      rank: "🥇",
      description: "Grand Prize Winner",
      gradient: "from-yellow-400 via-yellow-500 to-amber-600",
      bgGradient: "from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20",
      featured: true,
    },
    {
      icon: Lucide.Medal,
      title: "2nd Prize",
      amount: "₹XXXXX",
      rank: "🥈",
      description: "Runner Up",
      gradient: "from-gray-400 via-gray-500 to-gray-600",
      bgGradient: "from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20",
      featured: true,
    },
    {
      icon: Lucide.Award,
      title: "3rd Prize",
      amount: "₹XXXXX",
      rank: "🥉",
      description: "Second Runner Up",
      gradient: "from-amber-600 via-orange-500 to-amber-700",
      bgGradient: "from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20",
      featured: true,
    },
    {
      icon: Lucide.Lightbulb,
      title: "Best Idea Award",
      amount: "₹XXXXX",
      rank: "💡",
      description: "Most Innovative Solution",
      gradient: "from-blue-500 via-purple-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
      featured: false,
    },
    {
      icon: Lucide.Presentation,
      title: "Best Presentation Award",
      amount: "₹XXXXX",
      rank: "🗣️",
      description: "Outstanding Presentation Skills",
      gradient: "from-emerald-500 via-teal-500 to-cyan-600",
      bgGradient: "from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
      featured: false,
    },
  ];
</script>

<div class="mx-auto w-full max-w-6xl p-6">
  <div class="mb-12 text-center">
    <div
      class="from-primary/20 to-accent/20 mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br"
    >
      <Lucide.Trophy class="text-primary h-10 w-10" />
    </div>
    <h2 class="text-foreground mb-4 text-4xl font-bold">Prize Pool</h2>
    <p class="text-muted-foreground mx-auto max-w-2xl text-lg">
      Exciting rewards await the most innovative and creative participants. Compete for amazing
      prizes and recognition!
    </p>
  </div>

  <div class="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
    {#each prizes.slice(0, 3) as prize, index}
      <div
        class="group relative {visible ? 'animate-in slide-in-from-bottom-5 fade-in' : 'opacity-0'}"
        style="animation-delay: {index * 150}ms"
      >
        <div
          class="absolute inset-0 bg-gradient-to-r {prize.gradient} rounded-2xl opacity-25 blur-xl transition-opacity group-hover:opacity-40"
        ></div>
        <div
          class="bg-card border-border relative rounded-2xl border bg-gradient-to-br p-8 shadow-lg transition-all duration-300 hover:shadow-xl {prize.bgGradient}"
        >
          <div class="absolute -top-4 left-1/2 -translate-x-1/2 transform">
            <div
              class="bg-card border-border flex h-12 w-12 items-center justify-center rounded-full border text-2xl shadow-lg"
            >
              {prize.rank}
            </div>
          </div>

          <div class="pt-4 text-center">
            <div
              class="h-16 w-16 bg-gradient-to-r {prize.gradient} mx-auto mb-4 flex items-center justify-center rounded-full"
            >
              <svelte:component this={prize.icon} class="h-8 w-8 text-white" />
            </div>

            <h3 class="text-foreground mb-2 text-2xl font-bold">{prize.title}</h3>
            <p class="text-muted-foreground mb-4">{prize.description}</p>

            <div class="bg-muted/50 mb-4 rounded-lg p-4">
              <div
                class="bg-gradient-to-r text-3xl font-bold {prize.gradient} bg-clip-text text-transparent"
              >
                {prize.amount}
              </div>
            </div>

            <div class="bg-muted h-2 w-full overflow-hidden rounded-full">
              <div
                class="h-full bg-gradient-to-r {prize.gradient} translate-x-0 transform rounded-full transition-transform duration-1000 group-hover:translate-x-1"
              ></div>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
    {#each prizes.slice(3) as prize, index}
      <div
        class="group bg-card border-border relative rounded-xl border p-6 shadow-sm transition-all duration-300 hover:shadow-md {visible
          ? 'animate-in slide-in-from-left-5 fade-in'
          : 'opacity-0'}"
        style="animation-delay: {(index + 3) * 150}ms"
      >
        <div class="flex items-center gap-4">
          <div class="flex-shrink-0">
            <div
              class="h-14 w-14 bg-gradient-to-r {prize.gradient} flex items-center justify-center rounded-lg"
            >
              <svelte:component this={prize.icon} class="h-7 w-7 text-white" />
            </div>
          </div>

          <div class="flex-1">
            <div class="mb-1 flex items-center gap-2">
              <span class="text-2xl">{prize.rank}</span>
              <h3 class="text-foreground text-xl font-bold">{prize.title}</h3>
            </div>
            <p class="text-muted-foreground mb-2 text-sm">{prize.description}</p>
            <div
              class="bg-gradient-to-r text-2xl font-bold {prize.gradient} bg-clip-text text-transparent"
            >
              {prize.amount}
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <div
    class="from-primary/10 via-accent/10 to-secondary/10 border-border rounded-xl border bg-gradient-to-r p-8"
  >
    <div class="mb-4 flex items-center justify-center gap-4">
      <div class="bg-primary/20 flex h-12 w-12 items-center justify-center rounded-full">
        <Lucide.GraduationCap class="text-primary h-6 w-6" />
      </div>
      <h3 class="text-foreground text-2xl font-bold">🎓 Participation Certificates for All</h3>
    </div>
    <p class="text-muted-foreground text-center">
      Every participant will receive a digital certificate of participation to showcase their
      involvement in this exciting hackathon!
    </p>
  </div>

  <div class="absolute top-10 right-10 opacity-10"></div>
  <div class="absolute bottom-10 left-10 opacity-10">
    <Lucide.Trophy class="text-accent h-20 w-20" />
  </div>
</div>

<style>
  @keyframes slide-in-from-bottom-5 {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-in-from-left-5 {
    from {
      transform: translateX(-20px);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .animate-in {
    animation-fill-mode: both;
    animation-duration: 0.6s;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  }

  .slide-in-from-bottom-5 {
    animation-name: slide-in-from-bottom-5;
  }

  .slide-in-from-left-5 {
    animation-name: slide-in-from-left-5;
  }

  .fade-in {
    animation-name: fade-in;
  }
</style>
