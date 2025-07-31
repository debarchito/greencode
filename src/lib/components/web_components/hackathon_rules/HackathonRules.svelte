<script lang="ts">
  import { Shield, Users, Trophy, Globe, AlertTriangle, Clock, FileText } from '@lucide/svelte';
  import { onMount } from 'svelte';
  
  let visible = false;
  
  onMount(() => {
    setTimeout(() => {
      visible = true;
    }, 100);
  });
  
  const rules = [
    {
      icon: Users,
      title: "Team Size Limit",
      description: "Max team size: 5 (min: 1)",
      detail: "Form teams of 1-5 members to participate"
    },
    {
      icon: AlertTriangle,
      title: "Original Work Only",
      description: "Pre-built projects will be disqualified",
      detail: "All code must be written during the hackathon"
    },
    {
      icon: FileText,
      title: "One Submission",
      description: "Only one submission per team is allowed",
      detail: "Choose your best work for submission"
    },
    {
      icon: Trophy,
      title: "Final Decision",
      description: "Judges' decision will be final",
      detail: "All decisions are binding and non-negotiable"
    },
    {
      icon: Globe,
      title: "Internet Allowed",
      description: "Internet use is allowed, but no plagiarism",
      detail: "Research freely but create original solutions"
    },
    {
      icon: Shield,
      title: "Appropriate Content",
      description: "Any offensive or inappropriate content will be rejected",
      detail: "Maintain professional standards throughout"
    },
    {
      icon: Clock,
      title: "Submission Deadline",
      description: "Code, presentations, and uploads must be submitted before deadline",
      detail: "Late submissions will not be accepted"
    }
  ];
</script>

<div class="w-full max-w-4xl mx-auto p-6">
  <div class="mb-8 text-center">
    <h2 class="text-3xl font-bold text-foreground mb-2">
        <span class="inline-flex items-center justify-center">
            <Shield class="w-8 h-8 text-accent" />
        </span>
        Hackathon Rules
    </h2>
    <p class="text-muted-foreground max-w-2xl mx-auto">
      Please read and follow these guidelines to ensure a fair and competitive environment for all participants.
    </p>
  </div>

  <div class="grid gap-6 md:gap-8">
    {#each rules as rule, index}
      <div 
        class="group relative bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 {visible ? 'animate-in slide-in-from-left-5 fade-in' : 'opacity-0'}"
        style="animation-delay: {index * 100}ms"
      >
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0">
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <svelte:component this={rule.icon} class="w-6 h-6 text-primary" />
            </div>
          </div>
          
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-2">
              <span class="inline-flex items-center justify-center w-6 h-6 bg-accent text-accent-foreground text-sm font-bold rounded-full">
                {index + 1}
              </span>
              <h3 class="text-lg font-semibold text-foreground">{rule.title}</h3>
            </div>
            
            <p class="text-foreground font-medium mb-2">{rule.description}</p>
            <p class="text-muted-foreground text-sm leading-relaxed">{rule.detail}</p>
          </div>
        </div>
        
        <!-- Decorative border -->
        <div class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    {/each}
  </div>

  <div class="mt-8 p-6 bg-muted/50 rounded-lg border border-border">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center">
        <AlertTriangle class="w-4 h-4 text-destructive" />
      </div>
      <h3 class="font-semibold text-foreground">Important Notice</h3>
    </div>
    <p class="text-muted-foreground text-sm">
      Violation of any of these rules may result in immediate disqualification. 
      If you have any questions about the rules, please contact the organizing team before the event begins.
    </p>
  </div>
</div>

<style>
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
    animation-duration: 0.5s;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .slide-in-from-left-5 {
    animation-name: slide-in-from-left-5;
  }
  
  .fade-in {
    animation-name: fade-in;
  }
</style>
