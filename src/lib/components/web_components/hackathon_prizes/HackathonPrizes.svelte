<script lang="ts">
  import { Trophy, Award, Lightbulb, Presentation, GraduationCap, Crown, Medal, Star } from '@lucide/svelte';
  import { onMount } from 'svelte';
  
  let visible = false;
  
  onMount(() => {
    setTimeout(() => {
      visible = true;
    }, 200);
  });
  
  const prizes = [
    {
      icon: Crown,
      title: "1st Prize",
      amount: "₹XXXXXX",
      rank: "🥇",
      description: "Grand Prize Winner",
      gradient: "from-yellow-400 via-yellow-500 to-amber-600",
      bgGradient: "from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20",
      featured: true
    },
    {
      icon: Medal,
      title: "2nd Prize",
      amount: "₹XXXXX",
      rank: "🥈",
      description: "Runner Up",
      gradient: "from-gray-400 via-gray-500 to-gray-600",
      bgGradient: "from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20",
      featured: true
    },
    {
      icon: Award,
      title: "3rd Prize",
      amount: "₹XXXXX",
      rank: "🥉",
      description: "Second Runner Up",
      gradient: "from-amber-600 via-orange-500 to-amber-700",
      bgGradient: "from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20",
      featured: true
    },
    {
      icon: Lightbulb,
      title: "Best Idea Award",
      amount: "₹XXXXX",
      rank: "💡",
      description: "Most Innovative Solution",
      gradient: "from-blue-500 via-purple-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
      featured: false
    },
    {
      icon: Presentation,
      title: "Best Presentation Award",
      amount: "₹XXXXX",
      rank: "🗣️",
      description: "Outstanding Presentation Skills",
      gradient: "from-emerald-500 via-teal-500 to-cyan-600",
      bgGradient: "from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
      featured: false
    }
  ];
</script>

<div class="w-full max-w-6xl mx-auto p-6">
  <div class="mb-12 text-center">
    <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-6">
      <Trophy class="w-10 h-10 text-primary" />
    </div>
    <h2 class="text-4xl font-bold text-foreground mb-4">Prize Pool</h2>
    <p class="text-muted-foreground max-w-2xl mx-auto text-lg">
      Exciting rewards await the most innovative and creative participants. Compete for amazing prizes and recognition!
    </p>
  </div>

  <!-- Main Prizes -->
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
    {#each prizes.slice(0, 3) as prize, index}
      <div 
        class="relative group {visible ? 'animate-in slide-in-from-bottom-5 fade-in' : 'opacity-0'}"
        style="animation-delay: {index * 150}ms"
      >
        <div class="absolute inset-0 bg-gradient-to-r {prize.gradient} rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity"></div>
        <div class="relative bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br {prize.bgGradient}">
          <!-- Rank Badge -->
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div class="bg-card border border-border rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg">
              {prize.rank}
            </div>
          </div>
          
          <div class="text-center pt-4">
            <div class="w-16 h-16 bg-gradient-to-r {prize.gradient} rounded-full flex items-center justify-center mx-auto mb-4">
              <svelte:component this={prize.icon} class="w-8 h-8 text-white" />
            </div>
            
            <h3 class="text-2xl font-bold text-foreground mb-2">{prize.title}</h3>
            <p class="text-muted-foreground mb-4">{prize.description}</p>
            
            <div class="bg-muted/50 rounded-lg p-4 mb-4">
              <div class="text-3xl font-bold bg-gradient-to-r {prize.gradient} bg-clip-text text-transparent">
                {prize.amount}
              </div>
            </div>
            
            <div class="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r {prize.gradient} rounded-full transform translate-x-0 transition-transform duration-1000 group-hover:translate-x-1"></div>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <!-- Special Awards -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    {#each prizes.slice(3) as prize, index}
      <div 
        class="group relative bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 {visible ? 'animate-in slide-in-from-left-5 fade-in' : 'opacity-0'}"
        style="animation-delay: {(index + 3) * 150}ms"
      >
        <div class="flex items-center gap-4">
          <div class="flex-shrink-0">
            <div class="w-14 h-14 bg-gradient-to-r {prize.gradient} rounded-lg flex items-center justify-center">
              <svelte:component this={prize.icon} class="w-7 h-7 text-white" />
            </div>
          </div>
          
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-2xl">{prize.rank}</span>
              <h3 class="text-xl font-bold text-foreground">{prize.title}</h3>
            </div>
            <p class="text-muted-foreground text-sm mb-2">{prize.description}</p>
            <div class="text-2xl font-bold bg-gradient-to-r {prize.gradient} bg-clip-text text-transparent">
              {prize.amount}
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <!-- Participation Certificate -->
  <div class="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-xl p-8 border border-border">
    <div class="flex items-center justify-center gap-4 mb-4">
      <div class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
        <GraduationCap class="w-6 h-6 text-primary" />
      </div>
      <h3 class="text-2xl font-bold text-foreground">🎓 Participation Certificates for All</h3>
    </div>
    <p class="text-center text-muted-foreground">
      Every participant will receive a digital certificate of participation to showcase their involvement in this exciting hackathon!
    </p>
  </div>

  <!-- Decorative Elements -->
  <div class="absolute top-10 right-10 opacity-10">
    <Star class="w-24 h-24 text-primary" />
  </div>
  <div class="absolute bottom-10 left-10 opacity-10">
    <Trophy class="w-20 h-20 text-accent" />
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
