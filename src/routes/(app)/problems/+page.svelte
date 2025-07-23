<script lang="ts">
  import { Badge } from "$lib/components/ui/badge";
  import { Button } from "$lib/components/ui/button";
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "$lib/components/ui/card";
  import { Input } from "$lib/components/ui/input";
  import { Select, SelectContent, SelectItem, SelectTrigger } from "$lib/components/ui/select";
  import { Separator } from "$lib/components/ui/separator";
  import {
    Clock,
    Users,
    Trophy,
    Search,
    Filter,
    Star,
    Calendar,
    MapPin,
    Award,
    Code2,
    Zap,
    Target,
  } from "@lucide/svelte";

  interface ProblemStatement {
    id: string;
    title: string;
    description: string;
    category: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced";
    maxTeamSize: number;
    estimatedTime: string;
    prize: string;
    tags: string[];
    sponsor?: string;
    registeredTeams: number;
    maxTeams: number;
    deadline: string;
    venue?: string;
    featured: boolean;
  }

  let searchQuery = $state("");
  let selectedCategory = $state("all");
  let selectedDifficulty = $state("all");

  const problemStatements: ProblemStatement[] = [
    {
      id: "1",
      title: "AI-Powered Healthcare Assistant",
      description:
        "Develop an intelligent healthcare assistant that can provide personalized health recommendations, track symptoms, and connect users with appropriate medical professionals. The solution should leverage machine learning for predictive health analytics.",
      category: "Healthcare",
      difficulty: "Advanced",
      maxTeamSize: 4,
      estimatedTime: "36 hours",
      prize: "$50,000",
      tags: ["AI/ML", "Healthcare", "Mobile Development", "Data Science"],
      sponsor: "MedTech Innovations",
      registeredTeams: 23,
      maxTeams: 50,
      deadline: "2025-08-15",
      venue: "Main Auditorium",
      featured: true,
    },
    {
      id: "2",
      title: "Sustainable Smart City Platform",
      description:
        "Create a comprehensive platform for smart city management focusing on sustainability metrics, energy optimization, and citizen engagement. Include IoT integration for real-time monitoring of environmental factors.",
      category: "Smart Cities",
      difficulty: "Intermediate",
      maxTeamSize: 5,
      estimatedTime: "24 hours",
      prize: "$30,000",
      tags: ["IoT", "Sustainability", "Web Development", "Data Visualization"],
      sponsor: "GreenTech Solutions",
      registeredTeams: 18,
      maxTeams: 40,
      deadline: "2025-08-15",
      venue: "Tech Lab B",
      featured: true,
    },
    {
      id: "3",
      title: "Blockchain Supply Chain Tracker",
      description:
        "Build a transparent supply chain tracking system using blockchain technology. The solution should enable consumers to trace product origins, verify authenticity, and ensure ethical sourcing practices.",
      category: "Blockchain",
      difficulty: "Advanced",
      maxTeamSize: 4,
      estimatedTime: "30 hours",
      prize: "$40,000",
      tags: ["Blockchain", "Supply Chain", "Smart Contracts", "Web3"],
      sponsor: "CryptoLogistics Inc",
      registeredTeams: 15,
      maxTeams: 30,
      deadline: "2025-08-15",
      venue: "Innovation Hub",
      featured: false,
    },
    {
      id: "4",
      title: "Educational AR/VR Experience",
      description:
        "Design an immersive educational experience using AR/VR technology that makes complex scientific concepts accessible and engaging for students. Focus on interactive 3D visualizations and gamification elements.",
      category: "Education",
      difficulty: "Intermediate",
      maxTeamSize: 6,
      estimatedTime: "28 hours",
      prize: "$25,000",
      tags: ["AR/VR", "Education", "3D Graphics", "Gamification"],
      sponsor: "EduTech Future",
      registeredTeams: 12,
      maxTeams: 25,
      deadline: "2025-08-15",
      venue: "VR Studio",
      featured: false,
    },
    {
      id: "5",
      title: "Mental Health Support Chatbot",
      description:
        "Develop an empathetic AI chatbot that provides mental health support, mood tracking, and connects users with professional resources. Ensure privacy, security, and ethical considerations in the design.",
      category: "Healthcare",
      difficulty: "Beginner",
      maxTeamSize: 3,
      estimatedTime: "20 hours",
      prize: "$15,000",
      tags: ["AI", "Mental Health", "Chatbot", "Privacy"],
      registeredTeams: 31,
      maxTeams: 60,
      deadline: "2025-08-15",
      venue: "Workshop Room A",
      featured: false,
    },
    {
      id: "6",
      title: "Climate Change Data Visualizer",
      description:
        "Create an interactive web application that visualizes climate change data from multiple sources, providing insights through advanced analytics and machine learning predictions. Make complex environmental data accessible to the general public.",
      category: "Environment",
      difficulty: "Intermediate",
      maxTeamSize: 4,
      estimatedTime: "26 hours",
      prize: "$35,000",
      tags: ["Data Visualization", "Climate Science", "Machine Learning", "Web Development"],
      sponsor: "Environmental Data Corp",
      registeredTeams: 20,
      maxTeams: 35,
      deadline: "2025-08-15",
      venue: "Data Science Lab",
      featured: true,
    },
  ];

  const categories = ["all", ...Array.from(new Set(problemStatements.map((p) => p.category)))];
  const difficulties = ["all", "Beginner", "Intermediate", "Advanced"];

  const filteredProblems = $derived(() => {
    return problemStatements.filter((problem) => {
      const matchesSearch =
        problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        problem.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        problem.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === "all" || problem.category === selectedCategory;
      const matchesDifficulty =
        selectedDifficulty === "all" || problem.difficulty === selectedDifficulty;

      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800 border-green-200";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Advanced":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const formatDeadline = (deadline: string) => {
    return new Date(deadline).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleRegister = (problemId: string) => {
    // Handle registration logic here
    console.log("Registering for problem:", problemId);
  };
</script>

<div class="bg-background min-h-screen">
  <!-- Enhanced Header Section -->
  <div class="hero-bg relative overflow-hidden border-b">
    <!-- Floating Background Icons -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="floating-icon absolute top-20 left-[10%] opacity-10">
        <Code2 class="text-primary h-16 w-16" />
      </div>
      <div class="floating-icon absolute top-32 right-[15%] opacity-10">
        <Zap class="text-accent h-12 w-12" />
      </div>
      <div class="floating-icon absolute bottom-20 left-[20%] opacity-10">
        <Target class="text-chart-2 h-14 w-14" />
      </div>
      <div class="floating-icon absolute top-40 left-[70%] opacity-10">
        <Trophy class="text-chart-4 h-10 w-10" />
      </div>
    </div>

    <div class="relative z-10 container mx-auto px-4 py-16">
      <div class="mx-auto max-w-4xl space-y-8 text-center">
        <!-- Event Badge with Glow -->
        <div class="event-badge glow-card inline-flex items-center gap-3 rounded-full px-6 py-3">
          <Trophy class="text-chart-4 h-5 w-5" />
          <span class="text-primary text-lg font-semibold"> HackFest 2025 </span>
          <div class="bg-primary h-2 w-2 animate-pulse rounded-full"></div>
          <span class="text-primary text-sm font-medium">Live</span>
        </div>

        <!-- Main Title with Gradient -->
        <div class="space-y-4">
          <h1 class="text-foreground text-5xl leading-none font-black tracking-tight md:text-7xl">
            Problem Statements
          </h1>
          <div class="relative">
            <h2 class="text-muted-foreground text-xl font-light md:text-2xl">
              Where Innovation Meets Opportunity
            </h2>
            <div
              class="from-primary to-accent absolute -bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 transform rounded-full bg-gradient-to-r"
            ></div>
          </div>
        </div>

        <!-- Enhanced Description -->
        <p
          class="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed font-light md:text-xl"
        >
          Choose your challenge and build innovative solutions that can
          <span class="text-primary font-semibold">change the world</span>. Pick a problem statement
          that excites you and start your journey to victory.
        </p>

        <!-- Enhanced Stats Cards -->
        <div class="grid grid-cols-1 gap-6 pt-8 md:grid-cols-3">
          <div class="stat-card rounded-2xl p-6 transition-all duration-300 hover:scale-105">
            <div class="mb-3 flex items-center justify-center gap-3">
              <Calendar class="text-chart-2 h-6 w-6" />
              <span class="text-chart-2 text-lg font-semibold">Deadline</span>
            </div>
            <div class="text-foreground text-2xl font-bold">Aug 15, 2025</div>
            <div class="text-muted-foreground text-sm">Registration closes</div>
          </div>

          <div class="stat-card rounded-2xl p-6 transition-all duration-300 hover:scale-105">
            <div class="mb-3 flex items-center justify-center gap-3">
              <Users class="text-primary h-6 w-6" />
              <span class="text-primary text-lg font-semibold">Teams</span>
            </div>
            <div class="text-foreground text-2xl font-bold">
              {problemStatements.reduce((acc, p) => acc + p.registeredTeams, 0)}
            </div>
            <div class="text-muted-foreground text-sm">Already registered</div>
          </div>

          <div class="stat-card rounded-2xl p-6 transition-all duration-300 hover:scale-105">
            <div class="mb-3 flex items-center justify-center gap-3">
              <Trophy class="text-chart-4 h-6 w-6" />
              <span class="text-chart-4 text-lg font-semibold">Prize Pool</span>
            </div>
            <div class="text-foreground text-2xl font-bold">
              ${problemStatements
                .reduce((acc, p) => acc + parseInt(p.prize.replace(/[$,]/g, "")), 0)
                .toLocaleString()}
            </div>
            <div class="text-muted-foreground text-sm">Total rewards</div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="pt-8">
          <Button
            size="lg"
            class="cta-button text-primary-foreground transform rounded-full border-0 px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Zap class="mr-2 h-5 w-5" />
            Start Your Journey
          </Button>
        </div>
      </div>
    </div>

    <!-- Decorative Bottom Border -->
    <div class="gradient-border absolute right-0 bottom-0 left-0 h-1"></div>
  </div>

  <div class="container mx-auto px-4 py-8">
    <!-- Filters Section -->
    <div class="bg-card mb-8 rounded-lg border p-6">
      <div class="flex flex-col gap-4 md:flex-row">
        <div class="flex-1">
          <div class="relative">
            <Search
              class="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform"
            />
            <Input
              bind:value={searchQuery}
              placeholder="Search problem statements, tags, or sponsors..."
              class="pl-10"
            />
          </div>
        </div>
        <div class="flex gap-4">
          <Select bind:value={selectedCategory} type="single">
            <SelectTrigger class="w-48">
              <div class="flex items-center gap-2">
                <Filter class="h-4 w-4" />
                <span>{selectedCategory === "all" ? "All Categories" : selectedCategory}</span>
              </div>
            </SelectTrigger>
            <SelectContent>
              {#each categories as category}
                <SelectItem value={category}>
                  {category === "all" ? "All Categories" : category}
                </SelectItem>
              {/each}
            </SelectContent>
          </Select>

          <Select bind:value={selectedDifficulty} type="single">
            <SelectTrigger class="w-48">
              <span>{selectedDifficulty === "all" ? "All Levels" : selectedDifficulty}</span>
            </SelectTrigger>
            <SelectContent>
              {#each difficulties as difficulty}
                <SelectItem value={difficulty}>
                  {difficulty === "all" ? "All Levels" : difficulty}
                </SelectItem>
              {/each}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>

    <!-- Results Summary -->
    <div class="mb-6">
      <p class="text-muted-foreground">
        Showing {filteredProblems().length} problem statement{filteredProblems().length !== 1
          ? "s"
          : ""}
        {searchQuery && ` matching "${searchQuery}"`}
      </p>
    </div>

    <!-- Featured Problems -->
    {#if filteredProblems().some((p) => p.featured)}
      <div class="mb-8">
        <div class="mb-4 flex items-center gap-2">
          <Star class="text-primary h-5 w-5" />
          <h2 class="text-2xl font-semibold">Featured Challenges</h2>
        </div>
        <div class="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {#each filteredProblems().filter((p) => p.featured) as problem}
            <Card class="border-primary/20 from-primary/5 to-accent/5 bg-gradient-to-br">
              <CardHeader class="pb-4">
                <div class="flex items-start justify-between">
                  <div class="flex items-center gap-2">
                    <Badge variant="secondary" class="bg-primary/10 text-primary">
                      {problem.category}
                    </Badge>
                    <Badge class={getDifficultyColor(problem.difficulty)}>
                      {problem.difficulty}
                    </Badge>
                    <Star class="text-primary h-4 w-4 fill-current" />
                  </div>
                  <div class="text-right">
                    <div class="text-primary text-lg font-semibold">{problem.prize}</div>
                    <div class="text-muted-foreground text-sm">Prize Pool</div>
                  </div>
                </div>
                <CardTitle class="text-xl">{problem.title}</CardTitle>
                {#if problem.sponsor}
                  <p class="text-muted-foreground text-sm">Sponsored by {problem.sponsor}</p>
                {/if}
              </CardHeader>
              <CardContent class="space-y-4">
                <CardDescription class="text-base leading-relaxed">
                  {problem.description}
                </CardDescription>

                <div class="flex flex-wrap gap-2">
                  {#each problem.tags as tag}
                    <Badge variant="outline" class="text-xs">{tag}</Badge>
                  {/each}
                </div>

                <Separator />

                <div class="grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
                  <div class="flex items-center gap-2">
                    <Users class="text-muted-foreground h-4 w-4" />
                    <span>Max {problem.maxTeamSize} members</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <Clock class="text-muted-foreground h-4 w-4" />
                    <span>{problem.estimatedTime}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <Award class="text-muted-foreground h-4 w-4" />
                    <span>{problem.registeredTeams}/{problem.maxTeams} teams</span>
                  </div>
                  {#if problem.venue}
                    <div class="flex items-center gap-2">
                      <MapPin class="text-muted-foreground h-4 w-4" />
                      <span>{problem.venue}</span>
                    </div>
                  {/if}
                </div>

                <div class="flex items-center justify-between pt-2">
                  <div class="text-muted-foreground text-sm">
                    Deadline: {formatDeadline(problem.deadline)}
                  </div>
                  <Button
                    onclick={() => handleRegister(problem.id)}
                    class="bg-primary hover:bg-primary/90"
                  >
                    Register Team
                  </Button>
                </div>
              </CardContent>
            </Card>
          {/each}
        </div>
      </div>
    {/if}

    <!-- All Problems -->
    <div>
      {#if filteredProblems().filter((p) => !p.featured).length > 0}
        <h2 class="mb-4 text-2xl font-semibold">All Problem Statements</h2>
      {/if}

      <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {#each filteredProblems().filter((p) => !p.featured) as problem}
          <Card class="flex h-full flex-col transition-shadow duration-200 hover:shadow-lg">
            <CardHeader class="pb-4">
              <div class="mb-2 flex items-start justify-between">
                <div class="flex items-center gap-2">
                  <Badge variant="secondary">{problem.category}</Badge>
                  <Badge class={getDifficultyColor(problem.difficulty)}>
                    {problem.difficulty}
                  </Badge>
                </div>
                <div class="text-right">
                  <div class="text-primary font-semibold">{problem.prize}</div>
                </div>
              </div>
              <CardTitle class="text-lg">{problem.title}</CardTitle>
              {#if problem.sponsor}
                <p class="text-muted-foreground text-sm">Sponsored by {problem.sponsor}</p>
              {/if}
            </CardHeader>
            <CardContent class="flex flex-1 flex-col space-y-4">
              <CardDescription class="flex-1 leading-relaxed">
                {problem.description}
              </CardDescription>

              <div class="flex flex-wrap gap-1">
                {#each problem.tags as tag}
                  <Badge variant="outline" class="text-xs">{tag}</Badge>
                {/each}
              </div>

              <Separator />

              <div class="grid grid-cols-2 gap-3 text-sm">
                <div class="flex items-center gap-2">
                  <Users class="text-muted-foreground h-4 w-4" />
                  <span>Max {problem.maxTeamSize}</span>
                </div>
                <div class="flex items-center gap-2">
                  <Clock class="text-muted-foreground h-4 w-4" />
                  <span>{problem.estimatedTime}</span>
                </div>
                <div class="flex items-center gap-2">
                  <Award class="text-muted-foreground h-4 w-4" />
                  <span>{problem.registeredTeams}/{problem.maxTeams}</span>
                </div>
                {#if problem.venue}
                  <div class="flex items-center gap-2">
                    <MapPin class="text-muted-foreground h-4 w-4" />
                    <span class="truncate">{problem.venue}</span>
                  </div>
                {/if}
              </div>

              <div class="flex items-center justify-between pt-2">
                <div class="text-muted-foreground text-sm">
                  Due: {formatDeadline(problem.deadline)}
                </div>
                <Button
                  onclick={() => handleRegister(problem.id)}
                  size="sm"
                  class="bg-primary hover:bg-primary/90"
                >
                  Register
                </Button>
              </div>
            </CardContent>
          </Card>
        {/each}
      </div>
    </div>

    <!-- Empty State -->
    {#if filteredProblems().length === 0}
      <div class="py-12 text-center">
        <div class="bg-muted mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
          <Search class="text-muted-foreground h-8 w-8" />
        </div>
        <h3 class="mb-2 text-lg font-semibold">No problem statements found</h3>
        <p class="text-muted-foreground mb-4">
          Try adjusting your search criteria or browse all available challenges.
        </p>
        <Button
          variant="outline"
          onclick={() => {
            searchQuery = "";
            selectedCategory = "all";
            selectedDifficulty = "all";
          }}
        >
          Clear Filters
        </Button>
      </div>
    {/if}

    <!-- Stats Footer -->
    <div class="bg-card mt-16 rounded-lg border p-6">
      <div class="grid grid-cols-1 gap-6 text-center md:grid-cols-4">
        <div>
          <div class="text-primary text-2xl font-bold">{problemStatements.length}</div>
          <div class="text-muted-foreground text-sm">Total Challenges</div>
        </div>
        <div>
          <div class="text-primary text-2xl font-bold">
            ${problemStatements
              .reduce((acc, p) => acc + parseInt(p.prize.replace(/[$,]/g, "")), 0)
              .toLocaleString()}
          </div>
          <div class="text-muted-foreground text-sm">Total Prize Pool</div>
        </div>
        <div>
          <div class="text-primary text-2xl font-bold">
            {problemStatements.reduce((acc, p) => acc + p.registeredTeams, 0)}
          </div>
          <div class="text-muted-foreground text-sm">Registered Teams</div>
        </div>
        <div>
          <div class="text-primary text-2xl font-bold">
            {categories.length - 1}
          </div>
          <div class="text-muted-foreground text-sm">Categories</div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes float {
    0%,
    100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(5deg);
    }
  }

  @keyframes pulse-glow {
    0%,
    100% {
      box-shadow: 0 0 20px hsl(var(--primary) / 0.3);
    }
    50% {
      box-shadow: 0 0 40px hsl(var(--primary) / 0.6);
    }
  }

  @keyframes gradient-shift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .floating-icon {
    animation: float 6s ease-in-out infinite;
  }

  .floating-icon:nth-child(2) {
    animation-delay: 2s;
  }

  .floating-icon:nth-child(3) {
    animation-delay: 4s;
  }

  .hero-bg {
    background: linear-gradient(
      135deg,
      hsl(var(--primary) / 0.1) 0%,
      hsl(var(--accent) / 0.05) 25%,
      hsl(var(--chart-2) / 0.08) 50%,
      hsl(var(--chart-4) / 0.06) 75%,
      hsl(var(--chart-1) / 0.1) 100%
    );
    background-size: 400% 400%;
    animation: gradient-shift 8s ease infinite;
  }

  .glow-card {
    animation: pulse-glow 3s ease-in-out infinite;
  }

  .gradient-border {
    background: linear-gradient(
      90deg,
      hsl(var(--primary)),
      hsl(var(--accent)),
      hsl(var(--chart-2)),
      hsl(var(--chart-4))
    );
  }

  .stat-card {
    background: hsl(var(--card) / 0.5);
    backdrop-filter: blur(12px);
    border: 1px solid hsl(var(--border) / 0.3);
  }

  .stat-card:hover {
    background: hsl(var(--card) / 0.8);
    border-color: hsl(var(--primary) / 0.5);
  }

  .event-badge {
    background: hsl(var(--card) / 0.3);
    backdrop-filter: blur(12px);
    border: 1px solid hsl(var(--border) / 0.3);
  }
</style>
