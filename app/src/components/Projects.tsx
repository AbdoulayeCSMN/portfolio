"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@components/ui/card"
import { Button } from "@components/ui/button"
import { Badge } from "@components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs"
import {
  ExternalLink,
  Github,
  Eye,
  Code,
  Palette,
  Server,
  Users,
  Calendar,
  Star,
  TrendingUp,
  Filter,
  Grid,
  List,
  Zap
} from "lucide-react"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "Plateforme SaaS Éducation",
    description: "Plateforme complète de gestion d'apprentissage en ligne avec analytics avancés.",
    category: "fullstack",
    year: "2023",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    status: "live",
    github: "https://github.com",
    liveUrl: "https://example.com",
    stars: 124,
    featured: true,
    color: "from-blue-500 to-purple-500",
  },
  {
    id: 2,
    title: "Application E-commerce Premium",
    description: "Solution e-commerce headless avec paiement sécurisé et gestion d'inventaire.",
    category: "frontend",
    year: "2023",
    technologies: ["React", "Next.js", "Stripe", "Sanity"],
    status: "live",
    github: "https://github.com",
    liveUrl: "https://example.com",
    stars: 89,
    featured: true,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    title: "Dashboard Analytics",
    description: "Tableau de bord analytique en temps réel avec visualisations de données complexes.",
    category: "frontend",
    year: "2023",
    technologies: ["React", "D3.js", "TypeScript", "Chart.js"],
    status: "live",
    github: "https://github.com",
    liveUrl: "https://example.com",
    stars: 67,
    featured: false,
    color: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    title: "API Microservices",
    description: "Architecture microservices scalable avec conteneurisation Docker et Kubernetes.",
    category: "backend",
    year: "2022",
    technologies: ["Node.js", "Express", "Docker", "Kubernetes", "Redis"],
    status: "completed",
    github: "https://github.com",
    stars: 156,
    featured: false,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 5,
    title: "Application Mobile React Native",
    description: "Application de productivité multiplateforme avec synchronisation cloud.",
    category: "mobile",
    year: "2022",
    technologies: ["React Native", "TypeScript", "Firebase", "Redux"],
    status: "live",
    github: "https://github.com",
    stars: 42,
    featured: false,
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 6,
    title: "Design System",
    description: "Système de design complet avec composants réutilisables et documentation.",
    category: "design",
    year: "2022",
    technologies: ["Figma", "Storybook", "React", "Tailwind"],
    status: "completed",
    github: "https://github.com",
    stars: 78,
    featured: true,
    color: "from-pink-500 to-rose-500",
  },
]

const categories = [
  { id: "all", label: "Tous", icon: <Grid className="h-4 w-4" />, count: 12 },
  { id: "featured", label: "En vedette", icon: <Star className="h-4 w-4" />, count: 5 },
  { id: "frontend", label: "Frontend", icon: <Code className="h-4 w-4" />, count: 4 },
  { id: "backend", label: "Backend", icon: <Server className="h-4 w-4" />, count: 3 },
  { id: "fullstack", label: "Fullstack", icon: <Zap className="h-4 w-4" />, count: 3 },
  { id: "design", label: "Design", icon: <Palette className="h-4 w-4" />, count: 2 },
]

export default function ProjectsPage() {
  const [view, setView] = useState<"grid" | "list">("grid")
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : activeCategory === "featured"
    ? projects.filter(p => p.featured)
    : projects.filter(p => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-linear-to-b from-background to-muted/10">
      <div className="container mx-auto px-4 py-16">
        {/* En-tête */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Code className="h-4 w-4" />
            <span className="text-sm font-medium">Portfolio Projets</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mes Réalisations
          </h1>
          <p className="text-lg text-muted-foreground">
            Découvrez une sélection de projets sur lesquels j&apos;ai travaillé, 
            allant de solutions web complètes à des applications innovantes.
          </p>
        </div>

        {/* Contrôles */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <Tabs defaultValue="all" className="w-full md:w-auto">
            <TabsList className="flex-wrap h-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  {category.icon}
                  {category.label}
                  <Badge variant="secondary" className="ml-1">
                    {category.count}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="flex items-center gap-2">
            <Button
              variant={view === "grid" ? "default" : "outline"}
              size="icon"
              onClick={() => setView("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={view === "list" ? "default" : "outline"}
              size="icon"
              onClick={() => setView("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Grille des projets */}
        <div className={view === "grid" 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
          : "space-y-6"
        }>
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className={`group hover:shadow-xl transition-all duration-300 ${
                view === "grid" 
                  ? "h-full flex flex-col hover:-translate-y-2" 
                  : "flex"
              } border-2 hover:border-primary/50`}
            >
              {view === "grid" ? (
                // Vue Grille
                <>
                  <div className={`h-48 bg-linear-to-br ${project.color} relative overflow-hidden rounded-t-lg`}>
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <Badge variant={project.status === "live" ? "default" : "secondary"}>
                        {project.status === "live" ? "🌐 En ligne" : "✅ Terminé"}
                      </Badge>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge variant="outline" className="bg-background/80">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <CardHeader className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{project.year}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm">{project.stars}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="border-t pt-4">
                    <div className="flex gap-2 w-full">
                      {project.github && (
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button size="sm" className="flex-1" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Voir le projet
                          </a>
                        </Button>
                      )}
                      {!project.liveUrl && (
                        <Button variant="ghost" size="sm" className="flex-1">
                          <Eye className="h-4 w-4 mr-2" />
                          Détails
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </>
              ) : (
                // Vue Liste
                <>
                  <div className={`w-64 bg-linear-to-br ${project.color} hidden md:block`} />
                  <div className="flex-1">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-4">
                          <Badge variant={project.status === "live" ? "default" : "secondary"}>
                            {project.status === "live" ? "🌐 En ligne" : "✅ Terminé"}
                          </Badge>
                          {project.featured && (
                            <Badge variant="outline">
                              <Star className="h-3 w-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {project.year}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                            {project.stars}
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        {project.github && (
                          <Button variant="outline" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Code source
                            </a>
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Visiter le site
                            </a>
                          </Button>
                        )}
                        {!project.liveUrl && (
                          <Button variant="ghost">
                            <Eye className="h-4 w-4 mr-2" />
                            Plus de détails
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </div>
                </>
              )}
            </Card>
          ))}
        </div>

        {/* Statistiques */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Projets complétés", value: "50+", icon: <CheckCircle /> },
              { label: "Années d'expérience", value: "6+", icon: <CalendarDays /> },
              { label: "Clients satisfaits", value: "35+", icon: <Users /> },
              { label: "Technologies maîtrisées", value: "25+", icon: <Code2 /> },
            ].map((stat, i) => (
              <Card key={i} className="text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Icônes supplémentaires
function CheckCircle() {
  return <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
}

function CalendarDays() {
  return <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
}

function Code2() {
  return <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
}