<script lang="ts">
  import * as Lucide from "@lucide/svelte";
  import { onMount } from "svelte";

  let mounted = false;

  onMount(() => {
    mounted = true;
  });

  const rules = [
    {
      id: "1",
      icon: Lucide.Users,
      title: "Team Size Limit",
      description: "Max team size: 5 (min: 1)",
      detail: "Form teams of 1-5 members to participate",
      accent: "text-chart-1",
    },
    {
      id: "2",
      icon: Lucide.AlertTriangle,
      title: "Original Work Only",
      description: "Pre-built projects will be disqualified",
      detail: "All code must be written during the hackathon",
      accent: "text-chart-2",
    },
    {
      id: "3",
      icon: Lucide.FileText,
      title: "One Submission",
      description: "Only one submission per team is allowed",
      detail: "Choose your best work for submission",
      accent: "text-chart-3",
    },
    {
      id: "4",
      icon: Lucide.Trophy,
      title: "Final Decision",
      description: "Judges' decision will be final",
      detail: "All decisions are binding and non-negotiable",
      accent: "text-chart-4",
    },
    {
      id: "5",
      icon: Lucide.Globe,
      title: "Internet Allowed",
      description: "Internet use is allowed, but no plagiarism",
      detail: "Research freely but create original solutions",
      accent: "text-chart-5",
    },
    {
      id: "6",
      icon: Lucide.Shield,
      title: "Appropriate Content",
      description: "Any offensive or inappropriate content will be rejected",
      detail: "Maintain professional standards throughout",
      accent: "text-primary",
    },
    {
      id: "7",
      icon: Lucide.Clock,
      title: "Submission Deadline",
      description: "Code, presentations, and uploads must be submitted before deadline",
      detail: "Late submissions will not be accepted",
      accent: "text-accent",
    },
  ];
</script>

<section
  class="from-background via-muted/20 to-primary/5 relative overflow-hidden bg-gradient-to-br px-4 py-16 sm:px-6 lg:px-8"
>
  <div class="absolute inset-0 opacity-5">
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_var(--primary)_1px,_transparent_0)] bg-[size:24px_24px]"
    ></div>
  </div>

  <div
    class="bg-primary/10 animate-float-slow absolute top-10 left-10 h-20 w-20 rounded-full"
  ></div>
  <div
    class="bg-accent/10 animate-float-slower absolute right-16 bottom-20 h-16 w-16 rounded-full"
  ></div>
  <div class="bg-chart-2/10 animate-float absolute top-1/3 right-8 h-12 w-12 rounded-full"></div>

  <div class="relative mx-auto max-w-7xl">
    <div class="mb-16 text-center">
      <h2
        class="from-foreground via-primary to-accent animate-fade-in-up animate-delay-200 mb-6 flex items-center justify-center gap-2 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl"
      >
        <Lucide.Shield />
        Rules
      </h2>

      <p
        class="text-muted-foreground animate-fade-in-up animate-delay-400 mx-auto max-w-3xl text-xl leading-relaxed"
      >
        Please read and follow these guidelines to ensure a fair and competitive environment for all
        participants.
      </p>
    </div>

    <div class="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each rules as rule, index}
        <div
          class="group bg-card/80 border-border/50 hover:bg-card hover:shadow-primary/10 animate-fade-in-up relative rounded-2xl border p-8 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-xl"
          style="animation-delay: {index * 100 + 600}ms"
        >
          <div
            class="from-primary/5 to-accent/5 absolute inset-0 rounded-2xl bg-gradient-to-r via-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          ></div>

          <div class="relative mb-6">
            <div
              class="from-primary/20 to-accent/20 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br transition-transform duration-300 group-hover:scale-110"
            >
              <svelte:component this={rule.icon} class="h-8 w-8 {rule.accent}" />
            </div>
            <div
              class="bg-primary text-primary-foreground absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold"
            >
              {rule.id}
            </div>
          </div>

          <h3
            class="text-foreground group-hover:text-primary mb-3 text-xl font-bold transition-colors duration-300"
          >
            {rule.title}
          </h3>
          <p class="text-muted-foreground mb-2 leading-relaxed font-medium">
            {rule.description}
          </p>
          <p class="text-muted-foreground text-sm leading-relaxed">
            {rule.detail}
          </p>

          <div
            class="from-primary to-accent mt-4 h-0.5 w-0 bg-gradient-to-r transition-all duration-500 ease-out group-hover:w-full"
          ></div>
        </div>
      {/each}
    </div>

    <div class="relative">
      <div
        class="from-destructive/10 via-accent/5 to-chart-2/10 border-border/30 animate-fade-in-up animate-delay-1200 rounded-3xl border bg-gradient-to-r p-8 backdrop-blur-sm md:p-12"
      >
        <div class="mb-8 text-center">
          <h3
            class="text-foreground mb-4 flex items-center justify-center gap-2 text-2xl font-bold md:text-3xl"
          >
            <Lucide.AlertTriangle />
            Important Notice
          </h3>
          <p class="text-muted-foreground">
            Violation of any of these rules may result in immediate disqualification. If you have
            any questions about the rules, please contact the organizing team before the event
            begins.
          </p>
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
