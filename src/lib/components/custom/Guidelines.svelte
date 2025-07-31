<script lang="ts">
  import { onMount } from "svelte";
  import * as Lucide from "@lucide/svelte";

  interface Guideline {
    id: string;
    icon: any;
    title: string;
    description: string;
    accent: string;
  }

  const guidelines: Guideline[] = [
    {
      id: "1",
      icon: Lucide.Users,
      title: "Open Participation",
      description:
        "Students from any university or technical institution are welcome to participate",
      accent: "text-chart-1",
    },
    {
      id: "2",
      icon: Lucide.Code,
      title: "Team Collaboration",
      description:
        "Inter-college and inter-specialization teams are encouraged for diverse perspectives",
      accent: "text-chart-2",
    },
    {
      id: "3",
      icon: Lucide.Zap,
      title: "Tech Freedom",
      description:
        "Use any tech stack - AI, IoT, Web, App, ML, or whatever inspires your innovation",
      accent: "text-chart-3",
    },
    {
      id: "4",
      icon: Lucide.Sparkles,
      title: "Original Work",
      description: "All projects must be original and created entirely during the hackathon event",
      accent: "text-chart-4",
    },
    {
      id: "5",
      icon: Lucide.Presentation,
      title: "Final Presentation",
      description: "Teams must present their completed project at the end of the hackathon",
      accent: "text-chart-5",
    },
    {
      id: "6",
      icon: Lucide.HeartHandshake,
      title: "Full Support",
      description: "Internet, workspace, meals, and dedicated mentor support will be provided",
      accent: "text-primary",
    },
  ];

  const supportFeatures = [
    { icon: Lucide.Wifi, label: "High-Speed Internet" },
    { icon: Lucide.Coffee, label: "Meals & Refreshments" },
    { icon: Lucide.HeartHandshake, label: "Mentor Support" },
    { icon: Lucide.Trophy, label: "Workspace" },
  ];

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<section
  class="from-background via-muted/20 to-primary/5 relative overflow-hidden bg-gradient-to-br px-4 py-16 sm:px-6 lg:px-8"
>
  <!-- Background Pattern -->
  <div class="absolute inset-0 opacity-5">
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_var(--primary)_1px,_transparent_0)] bg-[size:24px_24px]"
    ></div>
  </div>

  <!-- Floating Elements -->
  <div
    class="bg-primary/10 animate-float-slow absolute top-10 left-10 h-20 w-20 rounded-full"
  ></div>
  <div
    class="bg-accent/10 animate-float-slower absolute right-16 bottom-20 h-16 w-16 rounded-full"
  ></div>
  <div class="bg-chart-2/10 animate-float absolute top-1/3 right-8 h-12 w-12 rounded-full"></div>

  <div class="relative mx-auto max-w-7xl">
    <!-- Header -->
    <div class="mb-16 text-center">
      <h2
        class="from-foreground via-primary to-accent animate-fade-in-up animate-delay-200 mb-6 flex items-center justify-center gap-2 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl"
      >
        <Lucide.Scale />
        Guidelines
      </h2>

      <p
        class="text-muted-foreground animate-fade-in-up animate-delay-400 mx-auto max-w-3xl text-xl leading-relaxed"
      >
        Everything you need to know to participate in our hackathon. Read carefully and get ready to
        innovate!
      </p>
    </div>

    <!-- Guidelines Grid -->
    <div class="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each guidelines as guideline, index}
        <div
          class="group bg-card/80 border-border/50 hover:bg-card hover:shadow-primary/10 animate-fade-in-up relative rounded-2xl border p-8 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-xl"
          style="animation-delay: {index * 100 + 600}ms"
        >
          <!-- Card Glow Effect -->
          <div
            class="from-primary/5 to-accent/5 absolute inset-0 rounded-2xl bg-gradient-to-r via-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          ></div>

          <!-- Icon -->
          <div class="relative mb-6">
            <div
              class="from-primary/20 to-accent/20 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br transition-transform duration-300 group-hover:scale-110"
            >
              <svelte:component this={guideline.icon} class="h-8 w-8 {guideline.accent}" />
            </div>
            <div
              class="bg-primary text-primary-foreground absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold"
            >
              {guideline.id}
            </div>
          </div>

          <!-- Content -->
          <h3
            class="text-foreground group-hover:text-primary mb-3 text-xl font-bold transition-colors duration-300"
          >
            {guideline.title}
          </h3>
          <p class="text-muted-foreground leading-relaxed">
            {guideline.description}
          </p>

          <!-- Hover Indicator -->
          <!-- <div class="absolute bottom-4 right-4 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> -->

          <div
            class="from-primary to-accent mt-4 h-0.5 w-0 bg-gradient-to-r transition-all duration-500 ease-out group-hover:w-full"
          ></div>
        </div>
      {/each}
    </div>

    <!-- Support Features -->
    <div class="relative">
      <div
        class="from-primary/10 via-accent/5 to-chart-2/10 border-border/30 animate-fade-in-up animate-delay-1200 rounded-3xl border bg-gradient-to-r p-8 backdrop-blur-sm md:p-12"
      >
        <div class="mb-8 text-center">
          <h3
            class="text-foreground mb-4 flex items-center justify-center gap-2 text-2xl font-bold md:text-3xl"
          >
            <Lucide.Rocket />
            What We Provide
          </h3>
          <p class="text-muted-foreground">
            Focus on building - we'll take care of everything else!
          </p>
        </div>

        <div class="grid grid-cols-2 gap-6 md:grid-cols-4">
          {#each supportFeatures as feature, index}
            <div
              class="group animate-fade-in-up text-center"
              style="animation-delay: {index * 100 + 1400}ms"
            >
              <div
                class="from-primary/20 to-accent/20 mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br transition-transform duration-300 group-hover:scale-110"
              >
                <svelte:component this={feature.icon} class="text-primary h-8 w-8" />
              </div>
              <p
                class="text-foreground group-hover:text-primary text-sm font-medium transition-colors duration-300"
              >
                {feature.label}
              </p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes float {
    0%,
    100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(180deg);
    }
  }

  @keyframes float-slow {
    0%,
    100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-30px) rotate(90deg);
    }
  }

  @keyframes float-slower {
    0%,
    100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-25px) rotate(-90deg);
    }
  }

  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-float-slow {
    animation: float-slow 8s ease-in-out infinite;
  }

  .animate-float-slower {
    animation: float-slower 10s ease-in-out infinite;
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
    opacity: 0;
  }

  .animate-delay-200 {
    animation-delay: 200ms;
  }
  .animate-delay-400 {
    animation-delay: 400ms;
  }
  .animate-delay-1200 {
    animation-delay: 1200ms;
  }
</style>
