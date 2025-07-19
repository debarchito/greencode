<script lang="ts">
  import { Badge } from "$lib/components/ui/badge";
  import { Button } from "$lib/components/ui/button";
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card";
  import { Input } from "$lib/components/ui/input";
  import { Select, SelectContent, SelectItem, SelectTrigger } from "$lib/components/ui/select";
  import { Separator } from "$lib/components/ui/separator";
  import { Clock, Users, Trophy, Search, Filter, Star, Calendar, MapPin, Award } from "@lucide/svelte";
  
  interface ProblemStatement {
    id: string;
    title: string;
    description: string;
    category: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
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

  let searchQuery = $state('');
  let selectedCategory = $state('all');
  let selectedDifficulty = $state('all');

  const problemStatements: ProblemStatement[] = [
    {
      id: "1",
      title: "AI-Powered Healthcare Assistant",
      description: "Develop an intelligent healthcare assistant that can provide personalized health recommendations, track symptoms, and connect users with appropriate medical professionals. The solution should leverage machine learning for predictive health analytics.",
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
      featured: true
    },
    {
      id: "2",
      title: "Sustainable Smart City Platform",
      description: "Create a comprehensive platform for smart city management focusing on sustainability metrics, energy optimization, and citizen engagement. Include IoT integration for real-time monitoring of environmental factors.",
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
      featured: true
    },
    {
      id: "3",
      title: "Blockchain Supply Chain Tracker",
      description: "Build a transparent supply chain tracking system using blockchain technology. The solution should enable consumers to trace product origins, verify authenticity, and ensure ethical sourcing practices.",
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
      featured: false
    },
    {
      id: "4",
      title: "Educational AR/VR Experience",
      description: "Design an immersive educational experience using AR/VR technology that makes complex scientific concepts accessible and engaging for students. Focus on interactive 3D visualizations and gamification elements.",
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
      featured: false
    },
    {
      id: "5",
      title: "Mental Health Support Chatbot",
      description: "Develop an empathetic AI chatbot that provides mental health support, mood tracking, and connects users with professional resources. Ensure privacy, security, and ethical considerations in the design.",
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
      featured: false
    },
    {
      id: "6",
      title: "Climate Change Data Visualizer",
      description: "Create an interactive web application that visualizes climate change data from multiple sources, providing insights through advanced analytics and machine learning predictions. Make complex environmental data accessible to the general public.",
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
      featured: true
    }
  ];

  const categories = ['all', ...Array.from(new Set(problemStatements.map(p => p.category)))];
  const difficulties = ['all', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredProblems = $derived(() => {
    return problemStatements.filter(problem => {
      const matchesSearch = problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          problem.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          problem.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || problem.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'all' || problem.difficulty === selectedDifficulty;
      
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDeadline = (deadline: string) => {
    return new Date(deadline).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleRegister = (problemId: string) => {
    // Handle registration logic here
    console.log('Registering for problem:', problemId);
  };
</script>

<div class="min-h-screen bg-background">
  <!-- Header Section -->
  <div class="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/5 border-b">
    <div class="container mx-auto px-4 py-12">
      <div class="text-center space-y-4">
        <div class="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
          <Trophy class="w-4 h-4 text-primary" />
          <span class="text-sm font-medium text-primary">HackFest 2025</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold tracking-tight">
          Problem Statements
        </h1>
        <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
          Choose your challenge and build innovative solutions that can change the world. 
          Pick a problem statement that excites you and start your journey to victory.
        </p>
        <div class="flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <div class="flex items-center gap-2">
            <Calendar class="w-4 h-4" />
            <span>Registration Deadline: Aug 15, 2025</span>
          </div>
          <div class="flex items-center gap-2">
            <Users class="w-4 h-4" />
            <span>{problemStatements.reduce((acc, p) => acc + p.registeredTeams, 0)} Teams Registered</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container mx-auto px-4 py-8">
    <!-- Filters Section -->
    <div class="bg-card border rounded-lg p-6 mb-8">
      <div class="flex flex-col md:flex-row gap-4">
        <div class="flex-1">
          <div class="relative">
            <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
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
                <Filter class="w-4 h-4" />
                <span>{selectedCategory === 'all' ? 'All Categories' : selectedCategory}</span>
              </div>
            </SelectTrigger>
            <SelectContent>
              {#each categories as category}
                <SelectItem value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </SelectItem>
              {/each}
            </SelectContent>
          </Select>
          
          <Select bind:value={selectedDifficulty} type="single">
            <SelectTrigger class="w-48">
              <span>{selectedDifficulty === 'all' ? 'All Levels' : selectedDifficulty}</span>
            </SelectTrigger>
            <SelectContent>
              {#each difficulties as difficulty}
                <SelectItem value={difficulty}>
                  {difficulty === 'all' ? 'All Levels' : difficulty}
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
        Showing {filteredProblems().length} problem statement{filteredProblems().length !== 1 ? 's' : ''}
        {searchQuery && ` matching "${searchQuery}"`}
      </p>
    </div>

    <!-- Featured Problems -->
    {#if filteredProblems().some(p => p.featured)}
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-4">
          <Star class="w-5 h-5 text-primary" />
          <h2 class="text-2xl font-semibold">Featured Challenges</h2>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {#each filteredProblems().filter(p => p.featured) as problem}
            <Card class="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader class="pb-4">
                <div class="flex items-start justify-between">
                  <div class="flex items-center gap-2">
                    <Badge variant="secondary" class="bg-primary/10 text-primary">
                      {problem.category}
                    </Badge>
                    <Badge class={getDifficultyColor(problem.difficulty)}>
                      {problem.difficulty}
                    </Badge>
                    <Star class="w-4 h-4 text-primary fill-current" />
                  </div>
                  <div class="text-right">
                    <div class="font-semibold text-primary text-lg">{problem.prize}</div>
                    <div class="text-sm text-muted-foreground">Prize Pool</div>
                  </div>
                </div>
                <CardTitle class="text-xl">{problem.title}</CardTitle>
                {#if problem.sponsor}
                  <p class="text-sm text-muted-foreground">Sponsored by {problem.sponsor}</p>
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
                
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div class="flex items-center gap-2">
                    <Users class="w-4 h-4 text-muted-foreground" />
                    <span>Max {problem.maxTeamSize} members</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <Clock class="w-4 h-4 text-muted-foreground" />
                    <span>{problem.estimatedTime}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <Award class="w-4 h-4 text-muted-foreground" />
                    <span>{problem.registeredTeams}/{problem.maxTeams} teams</span>
                  </div>
                  {#if problem.venue}
                    <div class="flex items-center gap-2">
                      <MapPin class="w-4 h-4 text-muted-foreground" />
                      <span>{problem.venue}</span>
                    </div>
                  {/if}
                </div>
                
                <div class="flex justify-between items-center pt-2">
                  <div class="text-sm text-muted-foreground">
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
      {#if filteredProblems().filter(p => !p.featured).length > 0}
        <h2 class="text-2xl font-semibold mb-4">All Problem Statements</h2>
      {/if}
      
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {#each filteredProblems().filter(p => !p.featured) as problem}
          <Card class="h-full flex flex-col hover:shadow-lg transition-shadow duration-200">
            <CardHeader class="pb-4">
              <div class="flex items-start justify-between mb-2">
                <div class="flex items-center gap-2">
                  <Badge variant="secondary">{problem.category}</Badge>
                  <Badge class={getDifficultyColor(problem.difficulty)}>
                    {problem.difficulty}
                  </Badge>
                </div>
                <div class="text-right">
                  <div class="font-semibold text-primary">{problem.prize}</div>
                </div>
              </div>
              <CardTitle class="text-lg">{problem.title}</CardTitle>
              {#if problem.sponsor}
                <p class="text-sm text-muted-foreground">Sponsored by {problem.sponsor}</p>
              {/if}
            </CardHeader>
            <CardContent class="flex-1 flex flex-col space-y-4">
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
                  <Users class="w-4 h-4 text-muted-foreground" />
                  <span>Max {problem.maxTeamSize}</span>
                </div>
                <div class="flex items-center gap-2">
                  <Clock class="w-4 h-4 text-muted-foreground" />
                  <span>{problem.estimatedTime}</span>
                </div>
                <div class="flex items-center gap-2">
                  <Award class="w-4 h-4 text-muted-foreground" />
                  <span>{problem.registeredTeams}/{problem.maxTeams}</span>
                </div>
                {#if problem.venue}
                  <div class="flex items-center gap-2">
                    <MapPin class="w-4 h-4 text-muted-foreground" />
                    <span class="truncate">{problem.venue}</span>
                  </div>
                {/if}
              </div>
              
              <div class="flex justify-between items-center pt-2">
                <div class="text-sm text-muted-foreground">
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
      <div class="text-center py-12">
        <div class="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
          <Search class="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 class="text-lg font-semibold mb-2">No problem statements found</h3>
        <p class="text-muted-foreground mb-4">
          Try adjusting your search criteria or browse all available challenges.
        </p>
        <Button 
          variant="outline" 
          onclick={() => {
            searchQuery = '';
            selectedCategory = 'all';
            selectedDifficulty = 'all';
          }}
        >
          Clear Filters
        </Button>
      </div>
    {/if}

    <!-- Stats Footer -->
    <div class="mt-16 bg-card border rounded-lg p-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        <div>
          <div class="text-2xl font-bold text-primary">{problemStatements.length}</div>
          <div class="text-sm text-muted-foreground">Total Challenges</div>
        </div>
        <div>
          <div class="text-2xl font-bold text-primary">
            ${problemStatements.reduce((acc, p) => acc + parseInt(p.prize.replace(/[$,]/g, '')), 0).toLocaleString()}
          </div>
          <div class="text-sm text-muted-foreground">Total Prize Pool</div>
        </div>
        <div>
          <div class="text-2xl font-bold text-primary">
            {problemStatements.reduce((acc, p) => acc + p.registeredTeams, 0)}
          </div>
          <div class="text-sm text-muted-foreground">Registered Teams</div>
        </div>
        <div>
          <div class="text-2xl font-bold text-primary">
            {categories.length - 1}
          </div>
          <div class="text-sm text-muted-foreground">Categories</div>
        </div>
      </div>
    </div>
  </div>
</div>