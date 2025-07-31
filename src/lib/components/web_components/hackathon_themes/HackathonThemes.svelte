<script lang="ts">
  import { onMount } from 'svelte';
  import * as Lucide from '@lucide/svelte';
  
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
      title: 'Smart Water Resource Management',
      description: 'Develop innovative solutions for water conservation, quality monitoring, and efficient distribution systems.',
      color: 'text-blue-600 dark:text-blue-400',
      gradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      id: 2,
      icon: Lucide.Recycle,
      title: 'Waste Management & Recycling',
      description: 'Create smart systems for waste sorting, recycling optimization, and circular economy solutions.',
      color: 'text-green-600 dark:text-green-400',
      gradient: 'from-green-500/10 to-emerald-500/10'
    },
    {
      id: 3,
      icon: Lucide.Zap,
      title: 'Renewable Energy & Smart Grid',
      description: 'Build technologies for renewable energy optimization, smart grid management, and energy efficiency.',
      color: 'text-yellow-600 dark:text-yellow-400',
      gradient: 'from-yellow-500/10 to-orange-500/10'
    },
    {
      id: 4,
      icon: Lucide.Wheat,
      title: 'Sustainable Agriculture & Smart Farming',
      description: 'Innovate precision agriculture, crop monitoring, and sustainable farming practices using technology.',
      color: 'text-amber-600 dark:text-amber-400',
      gradient: 'from-amber-500/10 to-yellow-500/10'
    },
    {
      id: 5,
      icon: Lucide.Leaf,
      title: 'Climate Monitoring & Carbon Tracking',
      description: 'Design solutions for climate data analysis, carbon footprint tracking, and environmental monitoring.',
      color: 'text-emerald-600 dark:text-emerald-400',
      gradient: 'from-emerald-500/10 to-teal-500/10'
    },
    {
      id: 6,
      icon: Lucide.Building2,
      title: 'Smart Cities & Green Infrastructure',
      description: 'Develop urban solutions for sustainable transportation, green buildings, and smart city planning.',
      color: 'text-purple-600 dark:text-purple-400',
      gradient: 'from-purple-500/10 to-indigo-500/10'
    },
    {
      id: 7,
      icon: Lucide.Brain,
      title: 'Green AI & Eco Automation',
      description: 'Create AI-powered solutions for environmental optimization and sustainable automation systems.',
      color: 'text-indigo-600 dark:text-indigo-400',
      gradient: 'from-indigo-500/10 to-blue-500/10'
    },
    {
      id: 8,
      icon: Lucide.ChartColumn,
      title: 'Data for Sustainability (Dashboards & Analytics)',
      description: 'Build comprehensive dashboards and analytics tools for sustainability metrics and environmental data.',
      color: 'text-pink-600 dark:text-pink-400',
      gradient: 'from-pink-500/10 to-rose-500/10'
    }
  ];

  let isVisible = false;

  onMount(() => {
    setTimeout(() => {
      isVisible = true;
    }, 100);
  });
</script>

<section class="w-full max-w-7xl mx-auto p-6 space-y-8">
  <!-- Header -->
  <div class="text-center space-y-4 {isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}">

    <h2 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
      Hackathon Themes
    </h2>
    
    <p class="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
      Discover the eight exciting themes available for this hackathon. Each theme presents unique challenges and opportunities for innovation.
    </p>
  </div>

  <!-- Themes Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {#each themes as theme, index}
      <div 
        class="group relative overflow-hidden rounded-2xl border border-border bg-card hover:bg-card transition-all duration-300 hover:scale-102 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/30"
        class:animate-fade-in-up={isVisible}
        style="animation-delay: {index * 100}ms"
      >
        <!-- Background Gradient - More Subtle -->
        <div class="absolute inset-0 bg-gradient-to-br {theme.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <!-- Enhanced Border Glow -->
        <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 blur-sm"></div>
        </div>
        
        <!-- Content -->
        <div class="relative p-6 space-y-4 z-10">
          <!-- Theme Number & Emoji -->
          <div class="flex items-center justify-between">
            <div class="w-8 h-8 rounded-full bg-muted group-hover:bg-primary/10 group-hover:border group-hover:border-primary/20 flex items-center justify-center text-sm font-semibold text-muted-foreground group-hover:text-primary transition-all duration-300">
              {theme.id}
            </div>
            <div class="text-foreground transform group-hover:scale-110 group-hover:drop-shadow-lg transition-all duration-300 group-hover:{theme.color}">
              <svelte:component this={theme.icon} size={28} strokeWidth={1.5} />
            </div>
          </div>

          <!-- Title -->
          <h3 class="text-lg font-semibold text-foreground group-hover:{theme.color} transition-colors duration-300 leading-tight group-hover:font-bold">
            {theme.title}
          </h3>

          <!-- Description -->
          <p class="text-sm text-muted-foreground group-hover:text-foreground/80 leading-relaxed transition-colors duration-300">
            {theme.description}
          </p>

          <!-- Subtle Accent Line -->
          <div class="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out"></div>
        </div>

        <!-- Card Lift Effect -->
        <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-background/5 to-transparent"></div>
      </div>
    {/each}
  </div>

  <!-- Call to Action -->
  <div class="text-center space-y-4 pt-8 {isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}" style="animation-delay: 900ms">
    
    
    <p class="text-sm text-muted-foreground">
      Each theme offers unique opportunities to create innovative solutions for a sustainable future.
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
