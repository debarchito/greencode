<script lang="ts">
  import type { PageServerData } from "./$types";
  import { Button } from "$lib/components/ui/button";
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";
  import { Avatar, AvatarFallback, AvatarImage } from "$lib/components/ui/avatar";
  import { Separator } from "$lib/components/ui/separator";
  import { Input } from "$lib/components/ui/input";
  import { Alert, AlertDescription } from "$lib/components/ui/alert";
  import { Mail, Search, Users, Target, Calendar, Trophy, Code, Leaf } from "lucide-svelte";

  let { data }: PageServerData = $props();
  
  // Mock data for teams - replace with actual data from your backend
  const teams = [
    {
      id: 1,
      name: "EcoWarriors",
      description: "Building sustainable solutions for a greener tomorrow",
      problemStatement: "Reduce Carbon Footprint in Smart Cities",
      members: [
        { name: "Alice Johnson", avatar: null, role: "Team Lead" },
        { name: "Bob Smith", avatar: null, role: "Developer" },
        { name: "Carol Davis", avatar: null, role: "Designer" }
      ],
      tags: ["IoT", "Sustainability", "Data Analytics"],
      lookingFor: ["Backend Developer", "UI/UX Designer"],
      formed: "2 days ago"
    },
    {
      id: 2,
      name: "GreenTech Innovators",
      description: "Revolutionizing renewable energy management",
      problemStatement: "Optimize Renewable Energy Distribution",
      members: [
        { name: "David Wilson", avatar: null, role: "Team Lead" },
        { name: "Emma Brown", avatar: null, role: "Data Scientist" }
      ],
      tags: ["Machine Learning", "Energy", "Cloud Computing"],
      lookingFor: ["Full Stack Developer", "Hardware Engineer"],
      formed: "1 day ago"
    },
    {
      id: 3,
      name: "Sustainable Coders",
      description: "Code for a cleaner planet",
      problemStatement: "Waste Management Optimization System",
      members: [
        { name: "Frank Miller", avatar: null, role: "Team Lead" },
        { name: "Grace Lee", avatar: null, role: "Frontend Developer" },
        { name: "Henry Taylor", avatar: null, role: "Backend Developer" },
        { name: "Ivy Chen", avatar: null, role: "Product Manager" }
      ],
      tags: ["Mobile App", "Logistics", "AI"],
      lookingFor: ["Mobile Developer"],
      formed: "3 days ago"
    }
  ];

  let searchQuery = $state("");
  let activeSection = $state("teams");

  const filteredTeams = $derived(
    teams.filter(team => 
      team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      team.problemStatement.toLowerCase().includes(searchQuery.toLowerCase()) ||
      team.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  );

  function scrollToSection(sectionId: string) {
    activeSection = sectionId;
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  function getInitials(name: string) {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  }
</script>

<div class="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
  <!-- Navbar -->
  <nav class="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <div class="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
            <Leaf class="w-5 h-5 text-primary-foreground" />
          </div>
          <span class="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            GreenCode
          </span>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:flex items-center space-x-8">
          <button 
            onclick={() => scrollToSection('teams')}
            class="text-sm font-medium transition-colors hover:text-primary {activeSection === 'teams' ? 'text-primary' : 'text-muted-foreground'}"
          >
            Teams
          </button>
          <button 
            onclick={() => scrollToSection('problems')}
            class="text-sm font-medium transition-colors hover:text-primary {activeSection === 'problems' ? 'text-primary' : 'text-muted-foreground'}"
          >
            Problems
          </button>
          <button 
            onclick={() => scrollToSection('leaderboard')}
            class="text-sm font-medium transition-colors hover:text-primary {activeSection === 'leaderboard' ? 'text-primary' : 'text-muted-foreground'}"
          >
            Leaderboard
          </button>
          <button 
            onclick={() => scrollToSection('timeline')}
            class="text-sm font-medium transition-colors hover:text-primary {activeSection === 'timeline' ? 'text-primary' : 'text-muted-foreground'}"
          >
            Timeline
          </button>
        </div>

        <!-- User Info -->
        <div class="flex items-center space-x-3">
          <Avatar class="w-8 h-8">
            <AvatarFallback class="text-xs">{getInitials(data.user.name)}</AvatarFallback>
          </Avatar>
          <div class="hidden sm:block">
            <p class="text-sm font-medium">{data.user.name}</p>
            <p class="text-xs text-muted-foreground">{data.user.email}</p>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <!-- Email Verification Banner -->
  {#if !data.user.verified}
    <div class="sticky top-16 z-40">
      <Alert class="rounded-none border-x-0 border-t-0 bg-destructive/10 backdrop-blur-sm border-destructive/20">
        <Mail class="h-4 w-4 ml-4 flex-shrink-0" />
        <AlertDescription class="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-1 sm:gap-0">
          <span class="ml-4">
            Please verify your email address to participate in the hackathon.
          </span>
          <span class="pl-4 sm:pl-0 pr-4">
            <Button
              variant="link"
              class="h-auto p-0 text-destructive font-medium whitespace-nowrap"
            >
              Verify now
            </Button>
          </span>
        </AlertDescription>
      </Alert>
    </div>
  {/if}

  <!-- Hero Section -->
  <div class="container mx-auto px-4 py-12">
    <div class="text-center space-y-6">
      <div class="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
        <Code class="w-4 h-4" />
        <span>Hackathon in Progress</span>
      </div>
      <h1 class="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
        Explore Teams
      </h1>
      <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
        Discover innovative teams working on sustainable solutions. Join forces and build the future together.
      </p>
      
      <!-- Search Bar -->
      <div class="relative max-w-md mx-auto">
        <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          bind:value={searchQuery}
          placeholder="Search teams, problems, or skills..."
          class="pl-10"
        />
      </div>
    </div>
  </div>

  <!-- Teams Section -->
  <div id="teams" class="container mx-auto px-4 py-12">
    <div class="space-y-8">
      <div class="text-center space-y-2">
        <h2 class="text-3xl font-bold">Active Teams</h2>
        <p class="text-muted-foreground">Join a team or discover what others are building</p>
      </div>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {#each filteredTeams as team}
          <Card class="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-border/50">
            <CardHeader>
              <div class="flex items-start justify-between">
                <div class="space-y-1">
                  <CardTitle class="text-lg group-hover:text-primary transition-colors">
                    {team.name}
                  </CardTitle>
                  <CardDescription>{team.description}</CardDescription>
                </div>
                <Badge variant="secondary" class="text-xs">
                  {team.formed}
                </Badge>
              </div>
            </CardHeader>
            <CardContent class="space-y-4">
              <!-- Problem Statement -->
              <div class="space-y-2">
                <div class="flex items-center space-x-2">
                  <Target class="w-4 h-4 text-primary" />
                  <span class="text-sm font-medium">Problem Statement</span>
                </div>
                <p class="text-sm text-muted-foreground pl-6">{team.problemStatement}</p>
              </div>

              <!-- Tags -->
              <div class="flex flex-wrap gap-1">
                {#each team.tags as tag}
                  <Badge variant="outline" class="text-xs">{tag}</Badge>
                {/each}
              </div>

              <!-- Members -->
              <div class="space-y-2">
                <div class="flex items-center space-x-2">
                  <Users class="w-4 h-4 text-primary" />
                  <span class="text-sm font-medium">Team Members ({team.members.length})</span>
                </div>
                <div class="flex flex-wrap gap-2 pl-6">
                  {#each team.members as member}
                    <div class="flex items-center space-x-2">
                      <Avatar class="w-6 h-6">
                        <AvatarFallback class="text-xs">{getInitials(member.name)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p class="text-xs font-medium">{member.name}</p>
                        <p class="text-xs text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                  {/each}
                </div>
              </div>

              <!-- Looking For -->
              {#if team.lookingFor.length > 0}
                <div class="space-y-2">
                  <p class="text-sm font-medium text-accent">Looking for:</p>
                  <div class="flex flex-wrap gap-1 pl-4">
                    {#each team.lookingFor as role}
                      <Badge variant="secondary" class="text-xs bg-accent/10 text-accent border-accent/20">
                        {role}
                      </Badge>
                    {/each}
                  </div>
                </div>
              {/if}

              <Separator />

              <!-- Action Button -->
              <Button class="w-full" size="sm">
                Send Join Request
              </Button>
            </CardContent>
          </Card>
        {/each}
      </div>

      {#if filteredTeams.length === 0}
        <div class="text-center py-12">
          <div class="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Search class="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 class="text-lg font-medium mb-2">No teams found</h3>
          <p class="text-muted-foreground">Try adjusting your search criteria</p>
        </div>
      {/if}
    </div>
  </div>

  <!-- Quick Stats -->
  <div class="container mx-auto px-4 py-12">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card class="text-center">
        <CardContent class="pt-2 pb-2">
          <div class="text-2xl font-bold text-primary">{teams.length}</div>
          <p class="text-sm text-muted-foreground">Active Teams</p>
        </CardContent>
      </Card>
      <Card class="text-center">
        <CardContent class="pt-2 pb-2">
          <div class="text-2xl font-bold text-accent">{teams.reduce((acc, team) => acc + team.members.length, 0)}</div>
          <p class="text-sm text-muted-foreground">Participants</p>
        </CardContent>
      </Card>
      <Card class="text-center">
        <CardContent class="pt-2 pb-2">
          <div class="text-2xl font-bold text-chart-4">3</div>
          <p class="text-sm text-muted-foreground">Problem Statements</p>
        </CardContent>
      </Card>
      <Card class="text-center">
        <CardContent class="pt-2 pb-2">
          <div class="text-2xl font-bold text-chart-5">48h</div>
          <p class="text-sm text-muted-foreground">Time Remaining</p>
        </CardContent>
      </Card>
    </div>
  </div>

  <!-- Placeholder sections for navbar navigation -->
  <div id="problems" class="container mx-auto px-4 py-12">
    <Card>
      <CardHeader>
        <CardTitle>Problem Statements</CardTitle>
        <CardDescription>Choose your challenge</CardDescription>
      </CardHeader>
      <CardContent>
        <p class="text-muted-foreground">Problem statements section coming soon...</p>
      </CardContent>
    </Card>
  </div>

  <div id="leaderboard" class="container mx-auto px-4 py-12">
    <Card>
      <CardHeader>
        <CardTitle class="flex items-center space-x-2">
          <Trophy class="w-5 h-5 text-primary" />
          <span>Leaderboard</span>
        </CardTitle>
        <CardDescription>Track team progress</CardDescription>
      </CardHeader>
      <CardContent>
        <p class="text-muted-foreground">Leaderboard section coming soon...</p>
      </CardContent>
    </Card>
  </div>

  <div id="timeline" class="container mx-auto px-4 py-12">
    <Card>
      <CardHeader>
        <CardTitle class="flex items-center space-x-2">
          <Calendar class="w-5 h-5 text-primary" />
          <span>Timeline</span>
        </CardTitle>
        <CardDescription>Important dates and milestones</CardDescription>
      </CardHeader>
      <CardContent>
        <p class="text-muted-foreground">Timeline section coming soon...</p>
      </CardContent>
    </Card>
  </div>
</div>