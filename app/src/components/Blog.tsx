import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@components/ui/card"
import { Button } from "@components/ui/button"
import { Input } from "@components/ui/input"
import { Badge } from "@components/ui/badge"
import { Separator } from "@components/ui/separator"
import {
  Search,
  Calendar,
  User,
  Tag,
  Clock,
  Eye,
  MessageCircle,
  BookOpen,
  TrendingUp,
  ChevronRight,
  Filter
} from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Next.js 14 : Les nouvelles fonctionnalités qui changent tout",
    excerpt: "Découvrez comment le App Router, Server Actions et les React Server Components révolutionnent le développement web.",
    author: "Abdoulaye",
    date: "15 Jan 2024",
    readTime: "8 min",
    views: 1242,
    comments: 45,
    tags: ["Next.js", "React", "Performance"],
    featured: true,
  },
  {
    id: 2,
    title: "TypeScript 5.3 : Améliorations des types et meilleures performances",
    excerpt: "Les dernières améliorations de TypeScript qui rendent votre code plus sûr et plus rapide.",
    author: "Abdoulaye",
    date: "10 Jan 2024",
    readTime: "6 min",
    views: 890,
    comments: 32,
    tags: ["TypeScript", "JavaScript"],
    featured: false,
  },
  {
    id: 3,
    title: "Architecture micro-frontend : Quand et comment l'implémenter",
    excerpt: "Guide complet pour décider si l'architecture micro-frontend est adaptée à votre projet.",
    author: "Abdoulaye",
    date: "5 Jan 2024",
    readTime: "10 min",
    views: 1567,
    comments: 67,
    tags: ["Architecture", "Micro-frontend", "React"],
    featured: true,
  },
  {
    id: 4,
    title: "Optimisation des performances web : Techniques avancées 2024",
    excerpt: "Des stratégies concrètes pour améliorer vos Core Web Vitals et le SEO.",
    author: "Abdoulaye",
    date: "28 Déc 2023",
    readTime: "12 min",
    views: 2345,
    comments: 89,
    tags: ["Performance", "SEO", "Web Vitals"],
    featured: false,
  },
  {
    id: 5,
    title: "Tailwind CSS vs. Styled Components : Le match ultime",
    excerpt: "Comparaison approfondie entre les deux approches de styling les plus populaires.",
    author: "Abdoulaye",
    date: "20 Déc 2023",
    readTime: "7 min",
    views: 1789,
    comments: 56,
    tags: ["CSS", "Tailwind", "Styled Components"],
    featured: false,
  },
  {
    id: 6,
    title: "Intelligence Artificielle dans le développement web : Réalité ou science-fiction ?",
    excerpt: "Comment l'IA transforme réellement notre façon de coder en 2026.",
    author: "Abdoulaye",
    date: "15 Déc 2023",
    readTime: "9 min",
    views: 3120,
    comments: 124,
    tags: ["IA", "Développement", "Futur"],
    featured: true,
  },
]

const categories = [
  { name: "Tous les articles", count: 24 },
  { name: "React & Next.js", count: 8 },
  { name: "TypeScript", count: 5 },
  { name: "Performance", count: 6 },
  { name: "Architecture", count: 4 },
  { name: "Design UI/UX", count: 7 },
]

const tags = [
  "React", "Next.js", "TypeScript", "Performance", "SEO", 
  "Architecture", "Tailwind", "Node.js", "IA", "Best Practices"
]

export default function Blog() {
  return (
    <div className="min-h-screen bg-linear-to-b from-background to-muted/10">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <BookOpen className="h-4 w-4" />
            <span className="text-sm font-medium">Blog Technique</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Articles & Tutoriels
          </h1>
          <p className="text-lg text-muted-foreground">
            Partage de connaissances sur le développement web, les bonnes pratiques et les dernières technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Recherche */}
            <Card>
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Rechercher..." className="pl-9" />
                </div>
                <Button className="w-full">
                  <Filter className="mr-2 h-4 w-4" />
                  Filtrer
                </Button>
              </CardContent>
            </Card>

            {/* Catégories */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  Catégories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div
                      key={category.name}
                      className="flex items-center justify-between p-3 hover:bg-muted rounded-lg cursor-pointer transition-colors"
                    >
                      <span className="font-medium">{category.name}</span>
                      <Badge variant="secondary">{category.count}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tags populaires */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Tags populaires
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="bg-linear-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <BookOpen className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="font-bold text-lg">Restez informé</h3>
                  <p className="text-sm text-muted-foreground">
                    Recevez les nouveaux articles directement dans votre boîte mail.
                  </p>
                  <Input placeholder="Votre email" className="bg-background" />
                  <Button className="w-full">S&apos;abonner</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Articles */}
          <div className="lg:col-span-3">
            {/* Articles en vedette */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Articles populaires
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts
                  .filter((post) => post.featured)
                  .map((post) => (
                    <Card
                      key={post.id}
                      className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 overflow-hidden"
                    >
                      <div className="h-48 bg-linear-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary text-primary-foreground">
                            En vedette
                          </Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </div>
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {post.views}
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-3 w-3" />
                            {post.comments}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          Lire l&apos;article
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </div>

            <Separator className="my-8" />

            {/* Tous les articles */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Tous les articles</h2>
              <div className="space-y-6">
                {blogPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="md:flex">
                      <div className="md:w-48 h-48 md:h-auto bg-linear-to-br from-primary/10 to-primary/5 md:rounded-l-lg" />
                      <div className="flex-1">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {post.date}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {post.readTime}
                              </div>
                            </div>
                            {post.featured && (
                              <Badge variant="default">Featured</Badge>
                            )}
                          </div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {post.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {post.tags.map((tag) => (
                                <Badge
                                  key={tag}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <Button variant="ghost" size="sm">
                              Lire
                              <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  ← Précédent
                </Button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <Button
                    key={page}
                    variant={page === 1 ? "default" : "outline"}
                    size="sm"
                  >
                    {page}
                  </Button>
                ))}
                <Button variant="outline" size="sm">
                  Suivant →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}