<script lang="ts">
  import { onMount } from 'svelte';
  import * as Lucide from '@lucide/svelte';

  interface Guideline {
    id: string;
    icon: any;
    title: string;
    description: string;
    accent: string;
  }

  const guidelines: Guideline[] = [
    {
      id: '1',
      icon: Lucide.Users,
      title: 'Open Participation',
      description: 'Students from any university or technical institution are welcome to participate',
      accent: 'text-chart-1'
    },
    {
      id: '2',
      icon: Lucide.Code,
      title: 'Team Collaboration',
      description: 'Inter-college and inter-specialization teams are encouraged for diverse perspectives',
      accent: 'text-chart-2'
    },
    {
      id: '3',
      icon: Lucide.Zap,
      title: 'Tech Freedom',
      description: 'Use any tech stack - AI, IoT, Web, App, ML, or whatever inspires your innovation',
      accent: 'text-chart-3'
    },
    {
      id: '4',
      icon: Lucide.Sparkles,
      title: 'Original Work',
      description: 'All projects must be original and created entirely during the hackathon event',
      accent: 'text-chart-4'
    },
    {
      id: '5',
      icon: Lucide.Presentation,
      title: 'Final Presentation',
      description: 'Teams must present their completed project at the end of the hackathon',
      accent: 'text-chart-5'
    },
    {
      id: '6',
      icon: Lucide.HeartHandshake,
      title: 'Full Support',
      description: 'Internet, workspace, meals, and dedicated mentor support will be provided',
      accent: 'text-primary'
    }
  ];

  const supportFeatures = [
    { icon: Lucide.Wifi, label: 'High-Speed Internet' },
    { icon: Lucide.Coffee, label: 'Meals & Refreshments' },
    { icon: Lucide.HeartHandshake, label: 'Mentor Support' },
    { icon: Lucide.Trophy, label: 'Workspace' }
  ];

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
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
        <Lucide.Scale />
        Guidelines
      </h2>
      
      <p class="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-400">
        Everything you need to know to participate in our hackathon. Read carefully and get ready to innovate!
      </p>
    </div>

    <!-- Guidelines Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {#each guidelines as guideline, index}
        <div 
          class="group relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:bg-card transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 animate-fade-in-up"
          style="animation-delay: {index * 100 + 600}ms"
        >
          <!-- Card Glow Effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <!-- Icon -->
          <div class="relative mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svelte:component this={guideline.icon} class="w-8 h-8 {guideline.accent}" />
            </div>
            <div class="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">
              {guideline.id}
            </div>
          </div>

          <!-- Content -->
          <h3 class="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {guideline.title}
          </h3>
          <p class="text-muted-foreground leading-relaxed">
            {guideline.description}
          </p>

          <!-- Hover Indicator -->
          <!-- <div class="absolute bottom-4 right-4 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> -->
          
          <div class="mt-4 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out"></div>
        </div>
      {/each}
    </div>

    <!-- Support Features -->
    <div class="relative">
      <div class="bg-gradient-to-r from-primary/10 via-accent/5 to-chart-2/10 rounded-3xl p-8 md:p-12 border border-border/30 backdrop-blur-sm animate-fade-in-up animate-delay-1200">
        <div class="text-center mb-8">
          <h3 class="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center justify-center gap-2">
            <Lucide.Rocket />
            What We Provide
          </h3>
          <p class="text-muted-foreground">
            Focus on building - we'll take care of everything else!
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          {#each supportFeatures as feature, index}
            <div 
              class="text-center group animate-fade-in-up"
              style="animation-delay: {index * 100 + 1400}ms"
            >
              <div class="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <svelte:component this={feature.icon} class="w-8 h-8 text-primary" />
              </div>
              <p class="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
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
