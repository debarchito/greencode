<script lang="ts">
  import { onMount } from "svelte";
  import * as Lucide from "@lucide/svelte";

  interface Theme {
    id: number;
    icon: any;
    title: string;
    description: string;
    color: string;
    gradient: string;
  }

  const themes: Theme[] = [
    {
      id: 1,
      icon: Lucide.Droplets,
      title: "Smart Water Resource Management",
      description:
        "Develop innovative solutions for water conservation, quality monitoring, and efficient distribution systems.",
      color: "text-blue-600 dark:text-blue-400",
      gradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      id: 2,
      icon: Lucide.Recycle,
      title: "Waste Management & Recycling",
      description:
        "Create smart systems for waste sorting, recycling optimization, and circular economy solutions.",
      color: "text-green-600 dark:text-green-400",
      gradient: "from-green-500/10 to-emerald-500/10",
    },
    {
      id: 3,
      icon: Lucide.Zap,
      title: "Renewable Energy & Smart Grid",
      description:
        "Build technologies for renewable energy optimization, smart grid management, and energy efficiency.",
      color: "text-yellow-600 dark:text-yellow-400",
      gradient: "from-yellow-500/10 to-orange-500/10",
    },
    {
      id: 4,
      icon: Lucide.Wheat,
      title: "Sustainable Agriculture & Smart Farming",
      description:
        "Innovate precision agriculture, crop monitoring, and sustainable farming practices using technology.",
      color: "text-amber-600 dark:text-amber-400",
      gradient: "from-amber-500/10 to-yellow-500/10",
    },
    {
      id: 5,
      icon: Lucide.Leaf,
      title: "Climate Monitoring & Carbon Tracking",
      description:
        "Design solutions for climate data analysis, carbon footprint tracking, and environmental monitoring.",
      color: "text-emerald-600 dark:text-emerald-400",
      gradient: "from-emerald-500/10 to-teal-500/10",
    },
    {
      id: 6,
      icon: Lucide.Building2,
      title: "Smart Cities & Green Infrastructure",
      description:
        "Develop urban solutions for sustainable transportation, green buildings, and smart city planning.",
      color: "text-purple-600 dark:text-purple-400",
      gradient: "from-purple-500/10 to-indigo-500/10",
    },
    {
      id: 7,
      icon: Lucide.Brain,
      title: "Green AI & Eco Automation",
      description:
        "Create AI-powered solutions for environmental optimization and sustainable automation systems.",
      color: "text-indigo-600 dark:text-indigo-400",
      gradient: "from-indigo-500/10 to-blue-500/10",
    },
    {
      id: 8,
      icon: Lucide.ChartColumn,
      title: "Data for Sustainability (Dashboards & Analytics)",
      description:
        "Build comprehensive dashboards and analytics tools for sustainability metrics and environmental data.",
      color: "text-pink-600 dark:text-pink-400",
      gradient: "from-pink-500/10 to-rose-500/10",
    },
  ];

  let isVisible = false;

  onMount(() => {
    setTimeout(() => {
      isVisible = true;
    }, 100);
  });
</script>

<section class="mx-auto w-full max-w-7xl space-y-8 p-6">
  <!-- Header -->
  <div class="space-y-4 text-center {isVisible ? 'animate-fade-in-up' : 'translate-y-4 opacity-0'}">
    <h2
      class="from-primary to-accent bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
    >
      Hackathon Themes
    </h2>

    <p class="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
      Discover the eight exciting themes available for this hackathon. Each theme presents unique
      challenges and opportunities for innovation.
    </p>
  </div>

  <!-- Themes Grid -->
  <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {#each themes as theme, index}
      <div
        class="group border-border bg-card hover:bg-card hover:shadow-primary/5 hover:border-primary/30 relative overflow-hidden rounded-2xl border transition-all duration-300 hover:scale-102 hover:shadow-2xl"
        class:animate-fade-in-up={isVisible}
        style="animation-delay: {index * 100}ms"
      >
        <!-- Background Gradient - More Subtle -->
        <div
          class="absolute inset-0 bg-gradient-to-br {theme.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        ></div>

        <!-- Enhanced Border Glow -->
        <div
          class="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <div
            class="from-primary/10 via-accent/5 to-primary/10 absolute inset-0 rounded-2xl bg-gradient-to-r blur-sm"
          ></div>
        </div>

        <!-- Content -->
        <div class="relative z-10 space-y-4 p-6">
          <!-- Theme Number & Emoji -->
          <div class="flex items-center justify-between">
            <div
              class="bg-muted group-hover:bg-primary/10 group-hover:border-primary/20 text-muted-foreground group-hover:text-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 group-hover:border"
            >
              {theme.id}
            </div>
            <div
              class="text-foreground transform transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg group-hover:{theme.color}"
            >
              <svelte:component this={theme.icon} size={28} strokeWidth={1.5} />
            </div>
          </div>

          <!-- Title -->
          <h3
            class="text-foreground text-lg font-semibold group-hover:{theme.color} leading-tight transition-colors duration-300 group-hover:font-bold"
          >
            {theme.title}
          </h3>

          <!-- Description -->
          <p
            class="text-muted-foreground group-hover:text-foreground/80 text-sm leading-relaxed transition-colors duration-300"
          >
            {theme.description}
          </p>

          <!-- Subtle Accent Line -->
          <div
            class="from-primary to-accent h-0.5 w-0 bg-gradient-to-r transition-all duration-500 ease-out group-hover:w-full"
          ></div>
        </div>

        <!-- Card Lift Effect -->
        <div
          class="from-background/5 absolute inset-0 rounded-2xl bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        ></div>
      </div>
    {/each}
  </div>

  <!-- Call to Action -->
  <div
    class="space-y-4 pt-8 text-center {isVisible
      ? 'animate-fade-in-up'
      : 'translate-y-4 opacity-0'}"
    style="animation-delay: 900ms"
  >
    <p class="text-muted-foreground text-sm">
      Each theme offers unique opportunities to create innovative solutions for a sustainable
      future.
    </p>
  </div>
</section>

<style>
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .hover\:scale-102:hover {
    transform: scale(1.02);
  }

  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(1rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
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

  .animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
  }

  .animate-fade-in {
    animation: fade-in 0.3s ease-out forwards;
  }
</style>
