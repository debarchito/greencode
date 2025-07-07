<script lang="ts">
  import type { PageServerData } from "./$types";
  import { Button } from "$lib/components/ui/button";
  import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";
  import { Avatar, AvatarFallback } from "$lib/components/ui/avatar";
  import { Input } from "$lib/components/ui/input";
  import { Alert, AlertDescription } from "$lib/components/ui/alert";
  import { Mail, Search, Users, Target, Code, Leaf, Cable, LogIn } from "@lucide/svelte";

  let { data }: PageServerData = $props();

  const teams = [
    {
      id: 1,
      name: "EcoWarriors",
      description: "Building sustainable solutions for a greener tomorrow",
      problemStatement: "Reduce Carbon Footprint in Smart Cities",
      members: [
        { name: "Alice Johnson", avatar: null, role: "Team Lead" },
        { name: "Bob Smith", avatar: null, role: "Developer" },
        { name: "Carol Davis", avatar: null, role: "Designer" },
      ],
      tags: ["IoT", "Sustainability", "Data Analytics"],
      lookingFor: ["Backend Developer", "UI/UX Designer"],
      formed: "2 days ago",
    },
    {
      id: 2,
      name: "GreenTech Innovator?s",
      description: "Revolutionizing renewable energy management",
      problemStatement: "Optimize Renewable Energy Distribution",
      members: [
        { name: "David Wilson", avatar: null, role: "Team Lead" },
        { name: "Emma Brown", avatar: null, role: "Data Scientist" },
      ],
      tags: ["Machine Learning", "Energy", "Cloud Computing"],
      lookingFor: ["Full Stack Developer", "Hardware Engineer"],
      formed: "1 day ago",
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
        { name: "Ivy Chen", avatar: null, role: "Product Manager" },
      ],
      tags: ["Mobile App", "Logistics", "AI"],
      lookingFor: ["Mobile Developer"],
      formed: "3 days ago",
    },
  ];

  let searchQuery = $state("");
  let activeSection = $state("teams");

  const filteredTeams = $derived(
    teams.filter(
      (team) =>
        team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        team.problemStatement.toLowerCase().includes(searchQuery.toLowerCase()) ||
        team.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
    ),
  );

  function scrollToSection(sectionId: string) {
    activeSection = sectionId;
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  }

  function getInitials(name: string) {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  }
</script>

<div class="from-background via-background to-muted/20 min-h-screen bg-gradient-to-br">
  <!-- Navbar -->
  <nav
    class="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b backdrop-blur"
  >
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <div class="bg-primary flex h-8 w-8 items-center justify-center rounded-lg">
            <Leaf class="text-primary-foreground h-5 w-5" />
          </div>
          <span
            class="from-primary to-accent bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent"
          >
            GreenCode
          </span>
        </div>

        <div class="hidden items-center space-x-8 md:flex">
          <a
            href="/explore/teams"
            class="hover:text-primary text-sm font-medium transition-colors {activeSection ===
            'teams'
              ? 'text-primary'
              : 'text-muted-foreground'}"
          >
            Teams
          </a>
          <a
            href="/explore/problems"
            class="hover:text-primary text-sm font-medium transition-colors {activeSection ===
            'problems'
              ? 'text-primary'
              : 'text-muted-foreground'}"
          >
            Problems
          </a>
          <a
            href="/explore/timeline"
            class="hover:text-primary text-sm font-medium transition-colors {activeSection ===
            'timeline'
              ? 'text-primary'
              : 'text-muted-foreground'}"
          >
            Timeline
          </a>
        </div>

        {#if data.user}
          <div class="flex items-center space-x-3">
            <Avatar class="h-8 w-8">
              <AvatarFallback class="text-xs">{getInitials(data.user?.name)}</AvatarFallback>
            </Avatar>
            <div class="hidden sm:block">
              <p class="text-sm font-medium">{data.user?.name}</p>
              <p class="text-muted-foreground text-xs">{data.user?.email}</p>
            </div>
          </div>
        {:else}
          <Button variant="link" href="/sign-in">
            <LogIn />
            Sign in
          </Button>
        {/if}
      </div>
    </div>
  </nav>

  {#if data.user && !data.user?.verified}
    <Alert
      class="bg-destructive/10 border-destructive/20 sticky top-16 z-40 rounded-none border-x-0 border-t-0 backdrop-blur-sm"
    >
      <Mail class="ml-4 h-4 w-4 flex-shrink-0" />
      <AlertDescription
        class="flex w-full flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-0"
      >
        <span class="ml-4">
          Please verify your email address to participate in the hackathon.
        </span>
        <span class="pr-4 pl-4 sm:pl-0">
          <Button variant="link" class="text-destructive h-auto p-0 font-medium whitespace-nowrap">
            Verify now!
          </Button>
        </span>
      </AlertDescription>
    </Alert>
  {/if}

  <div class="container mx-auto px-4 py-12">
    <div class="space-y-6 text-center">
      <div
        class="bg-primary/10 text-primary inline-flex items-center space-x-2 rounded-full px-4 py-2 text-sm font-medium"
      >
        <Code class="h-4 w-4" />
        <span>Hackathon in Progress</span>
      </div>
      <h1
        class="from-foreground via-primary to-accent bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-6xl"
      >
        Explore Teams
      </h1>
      <p class="text-muted-foreground mx-auto max-w-2xl text-xl">
        Discover innovative teams working on sustainable solutions. Join forces and build the future
        together.
      </p>

      <!-- Search Bar -->
      <div class="relative mx-auto max-w-md">
        <Search
          class="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform"
        />
        <Input
          bind:value={searchQuery}
          placeholder="Search teams, problems, or skills..."
          class="pl-10"
        />
      </div>
    </div>
  </div>

  <div id="teams" class="container mx-auto px-4 py-12">
    <div class="space-y-8">
      <div class="space-y-2 text-center">
        <h2 class="text-3xl font-bold">Active Teams</h2>
        <p class="text-muted-foreground">Join a team or discover what others are building</p>
      </div>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {#each filteredTeams as team}
          <Card
            class="group border-border/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            <CardHeader>
              <div class="flex items-start justify-between">
                <div class="space-y-1">
                  <CardTitle class="group-hover:text-primary text-lg transition-colors">
                    {team.name}
                  </CardTitle>
                </div>
                <Badge variant="secondary" class="bg-accent text-accent-foreground text-xs">
                  {team.formed}
                </Badge>
              </div>
            </CardHeader>
            <CardContent class="space-y-4">
              <!-- Problem Statement -->
              <div class="space-y-2">
                <div class="flex items-center space-x-2">
                  <Target class="text-primary h-4 w-4" />
                  <span class="text-sm font-medium">Problem Statement</span>
                </div>
                <p class="text-muted-foreground pl-6 text-sm">{team.problemStatement}</p>
              </div>

              <div class="flex flex-wrap gap-1">
                {#each team.tags as tag}
                  <Badge variant="outline" class="text-xs"
                    >#{tag.toLowerCase().replace(/\s+/, "-")}</Badge
                  >
                {/each}
              </div>

              <div class="space-y-2">
                <div class="flex items-center space-x-2">
                  <Users class="text-primary h-4 w-4" />
                  <span class="text-sm font-medium">Team Members ({team.members.length})</span>
                </div>
                <div class="flex flex-wrap gap-2 pl-6">
                  {#each team.members as member}
                    <div class="flex items-center space-x-2">
                      <Avatar class="h-6 w-6">
                        <AvatarFallback class="text-xs">{getInitials(member.name)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p class="text-xs font-medium">{member.name}</p>
                      </div>
                    </div>
                  {/each}
                </div>
              </div>

              <Button class="w-full" size="sm">
                <Cable />
                Request to join
              </Button>
            </CardContent>
          </Card>
        {/each}
      </div>

      {#if filteredTeams.length === 0}
        <div class="py-12 text-center">
          <div
            class="bg-muted mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
          >
            <Search class="text-muted-foreground h-8 w-8" />
          </div>
          <h3 class="mb-2 text-lg font-medium">No teams found</h3>
          <p class="text-muted-foreground">Try adjusting your search criteria</p>
        </div>
      {/if}
    </div>
  </div>
</div>
