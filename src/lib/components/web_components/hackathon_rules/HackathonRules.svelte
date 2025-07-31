<script lang="ts">
  import * as Lucide from '@lucide/svelte';
  import { onMount } from 'svelte';
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
  
  const rules = [
    {
      id: '1',
      icon: Lucide.Users,
      title: "Team Size Limit",
      description: "Max team size: 5 (min: 1)",
      detail: "Form teams of 1-5 members to participate",
      accent: "text-chart-1"
    },
    {
      id: '2',
      icon: Lucide.AlertTriangle,
      title: "Original Work Only",
      description: "Pre-built projects will be disqualified",
      detail: "All code must be written during the hackathon",
      accent: "text-chart-2"
    },
    {
      id: '3',
      icon: Lucide.FileText,
      title: "One Submission",
      description: "Only one submission per team is allowed",
      detail: "Choose your best work for submission",
      accent: "text-chart-3"
    },
    {
      id: '4',
      icon: Lucide.Trophy,
      title: "Final Decision",
      description: "Judges' decision will be final",
      detail: "All decisions are binding and non-negotiable",
      accent: "text-chart-4"
    },
    {
      id: '5',
      icon: Lucide.Globe,
      title: "Internet Allowed",
      description: "Internet use is allowed, but no plagiarism",
      detail: "Research freely but create original solutions",
      accent: "text-chart-5"
    },
    {
      id: '6',
      icon: Lucide.Shield,
      title: "Appropriate Content",
      description: "Any offensive or inappropriate content will be rejected",
      detail: "Maintain professional standards throughout",
      accent: "text-primary"
    },
    {
      id: '7',
      icon: Lucide.Clock,
      title: "Submission Deadline",
      description: "Code, presentations, and uploads must be submitted before deadline",
      detail: "Late submissions will not be accepted",
      accent: "text-accent"
    }
  ];
</script>

<section class="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-primary/5 py-16 px-4 sm:px-6 lg:px-8">
  <!-- Background Pattern -->
  <div class="absolute inset-0 opacity-5">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_var(--primary)_1px,_transparent_0)] bg-[size:24px_24px]"></div>
  </div>

  <!-- Floating Elements -->
  <div class="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float-slow"></div>
  <div class="absolute bottom-20 right-16 w-16 h-16 bg-accent/10 rounded-full animate-float-slower"></div>
  <div class="absolute top-1/3 right-8 w-12 h-12 bg-chart-2/10 rounded-full animate-float"></div>

  <div class="relative max-w-7xl mx-auto">
    <!-- Header -->
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent mb-6 animate-fade-in-up animate-delay-200 flex items-center justify-center gap-2">
        <Lucide.Shield />
        Rules
      </h2>
      
      <p class="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-400">
        Please read and follow these guidelines to ensure a fair and competitive environment for all participants.
      </p>
    </div>

    <!-- Rules Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {#each rules as rule, index}
        <div 
          class="group relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:bg-card transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 animate-fade-in-up"
          style="animation-delay: {index * 100 + 600}ms"
        >
          <!-- Card Glow Effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <!-- Icon -->
          <div class="relative mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svelte:component this={rule.icon} class="w-8 h-8 {rule.accent}" />
            </div>
            <div class="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">
              {rule.id}
            </div>
          </div>

          <!-- Content -->
          <h3 class="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {rule.title}
          </h3>
          <p class="text-muted-foreground leading-relaxed mb-2 font-medium">
            {rule.description}
          </p>
          <p class="text-muted-foreground text-sm leading-relaxed">
            {rule.detail}
          </p>

          <!-- Hover Indicator -->
          <div class="mt-4 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out"></div>
        </div>
      {/each}
    </div>

    <!-- Important Notice -->
    <div class="relative">
      <div class="bg-gradient-to-r from-destructive/10 via-accent/5 to-chart-2/10 rounded-3xl p-8 md:p-12 border border-border/30 backdrop-blur-sm animate-fade-in-up animate-delay-1200">
        <div class="text-center mb-8">
          <h3 class="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center justify-center gap-2">
            <Lucide.AlertTriangle />
            Important Notice
          </h3>
          <p class="text-muted-foreground">
            Violation of any of these rules may result in immediate disqualification. 
            If you have any questions about the rules, please contact the organizing team before the event begins.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
  
  @keyframes float-slow {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-30px) rotate(90deg); }
  }
  
  @keyframes float-slower {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-25px) rotate(-90deg); }
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

  .animate-delay-200 { animation-delay: 200ms; }
  .animate-delay-400 { animation-delay: 400ms; }
  .animate-delay-1200 { animation-delay: 1200ms; }
</style>
