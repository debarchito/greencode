<script lang="ts">
  import * as Lucide from "@lucide/svelte";

  type Theme = {
    id: number;
    icon: typeof Lucide.Droplets;
    title: string;
    description: string;
    color: string;
    gradient: string;
  };

  const themes: Theme[] = [
    {
      id: 1,
      icon: Lucide.Droplets,
      title: "Smart Water Resource Management",
      description:
        "Develop innovative solutions for water conservation, quality monitoring, and efficient distribution systems.",
      color: "text-blue-600 dark:text-blue-400/80",
      gradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      id: 2,
      icon: Lucide.Recycle,
      title: "Waste Management & Recycling",
      description:
        "Create smart systems for waste sorting, recycling optimization, and circular economy solutions.",
      color: "text-green-600 dark:text-green-400/80",
      gradient: "from-green-500/10 to-emerald-500/10",
    },
    {
      id: 3,
      icon: Lucide.Zap,
      title: "Renewable Energy & Smart Grid",
      description:
        "Build technologies for renewable energy optimization, smart grid management, and energy efficiency.",
      color: "text-yellow-600 dark:text-yellow-500/80",
      gradient: "from-yellow-500/10 to-orange-500/10",
    },
    {
      id: 4,
      icon: Lucide.Wheat,
      title: "Sustainable Agriculture & Smart Farming",
      description:
        "Innovate precision agriculture, crop monitoring, and sustainable farming practices using technology.",
      color: "text-emerald-600 dark:text-emerald-400/80",
      gradient: "from-emerald-500/10 to-teal-500/10",
    },
    {
      id: 5,
      icon: Lucide.Leaf,
      title: "Climate Monitor & Carbon Tracking",
      description:
        "Design solutions for climate data analysis, carbon footprint tracking, and environmental monitoring.",
      color: "text-teal-600 dark:text-teal-400/80",
      gradient: "from-teal-500/10 to-cyan-500/10",
    },
    {
      id: 6,
      icon: Lucide.Building2,
      title: "Smart Cities & Green Infrastructure",
      description:
        "Develop urban solutions for sustainable transportation, green buildings, and smart city planning.",
      color: "text-purple-600 dark:text-purple-400/80",
      gradient: "from-purple-500/10 to-indigo-500/10",
    },
    {
      id: 7,
      icon: Lucide.Brain,
      title: "Green AI & Eco Automation",
      description:
        "Create AI-powered solutions for environmental optimization and sustainable automation systems.",
      color: "text-indigo-600 dark:text-indigo-400/80",
      gradient: "from-indigo-500/10 to-blue-500/10",
    },
    {
      id: 8,
      icon: Lucide.ChartColumn,
      title: "Data for Sustainability (Dashboards & Analytics)",
      description:
        "Build comprehensive dashboards and analytics tools for sustainability metrics and environmental data.",
      color: "text-pink-600 dark:text-pink-400/80",
      gradient: "from-pink-500/10 to-rose-500/10",
    },
  ];
</script>

<section class="mx-auto w-full max-w-7xl space-y-8 p-6">
  <div class="relative mb-12 text-center">
    <div
      class="from-primary/10 via-accent/10 to-primary/10 absolute -inset-[50px] animate-[pulse_6s_ease-in-out_infinite] rounded-full bg-gradient-to-r opacity-30 blur-2xl"
    ></div>

    <div class="flex flex-col items-center justify-center gap-3 md:flex-row">
      <div class="bg-primary/10 rounded-xl p-3">
        <Lucide.Star class="text-primary h-8 w-8" />
      </div>

      <h3 class="text-primary text-3xl font-bold">Hackathon Themes</h3>
    </div>

    <p class="text-muted-foreground/80 mx-auto mt-4 max-w-2xl text-lg leading-relaxed">
      Discover the eight exciting themes available for this hackathon. Each theme presents unique
      challenges and opportunities for innovation.
    </p>
  </div>

  <div class="grid grid-cols-1 gap-8 sm:gap-16 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
    {#each themes as theme (theme.id)}
      <div
        class="group bg-card relative flex flex-col justify-center space-y-6 overflow-visible rounded-2xl p-4 text-center shadow-lg transition-all duration-500 hover:scale-102 hover:border-transparent hover:shadow-xl md:p-6 md:text-left"
      >
        <div
          class="absolute inset-0 rounded-2xl bg-gradient-to-br {theme.gradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        ></div>

        <div class="relative z-10 flex flex-col items-center space-y-4 md:block">
          <div
            class="centerpace-y-4-st md:jusify flex flex-col items-center justify-center md:flex-row md:justify-start md:space-x-4"
          >
            <div
              class="bg-background/50 flex h-12 w-12 items-center justify-center rounded-xl {theme.color} mb-4 shadow-sm backdrop-blur-sm transition-all duration-300 md:mb-0"
            >
              <theme.icon size={24} strokeWidth={1.5} />
            </div>

            <h3
              class="text-foreground flex-1 text-lg leading-tight font-semibold transition-colors duration-300 {theme.color}"
            >
              {theme.title}
            </h3>
          </div>

          <p
            class="text-muted-foreground/70 max-w-lg text-sm leading-relaxed transition-colors duration-300"
          >
            {theme.description}
          </p>
        </div>
      </div>
    {/each}
  </div>
</section>
