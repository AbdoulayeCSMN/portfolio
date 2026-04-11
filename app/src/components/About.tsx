import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@components/ui/card"
import { Button } from "@components/ui/button"
import { Separator } from "@components/ui/separator"
import { Badge } from "@components/ui/badge"
import { 
  User, 
  Briefcase, 
//  GraduationCap, 
//  MapPin, 
  Mail, 
  Calendar,
  Code,
  Palette,
  Server,
  Globe,
  Target,
  Heart,
  ArrowRight,
  Trophy,
  Users,
  Clock
} from "lucide-react"
import Image from "next/image"

const skills = [
  { name: "React/Next.js", level: 95, icon: <Code className="h-4 w-4" /> },
  { name: "UI/UX Design", level: 85, icon: <Palette className="h-4 w-4" /> },
  { name: "Backend Development", level: 80, icon: <Server className="h-4 w-4" /> },
  { name: "DevOps & CI/CD", level: 75, icon: <Globe className="h-4 w-4" /> },
  { name: "TypeScript", level: 90, icon: <Code className="h-4 w-4" /> },
  { name: "Product Strategy", level: 85, icon: <Target className="h-4 w-4" /> },
]

const experiences = [
  {
    year: "2022 - Présent",
    role: "Lead Developer Fullstack",
    company: "TechVision Inc.",
    description: "Direction d'une équipe de 8 développeurs sur des projets SaaS innovants.",
  },
  {
    year: "2020 - 2022",
    role: "Senior Frontend Developer",
    company: "DigitalCreators",
    description: "Développement d'applications React/Next.js pour des clients internationaux.",
  },
  {
    year: "2018 - 2020",
    role: "UI/UX Designer & Developer",
    company: "StartupLab",
    description: "Conception et développement d'interfaces utilisateur pour startups.",
  },
]

export default function About() {
  return (
    <div className="min-h-screen bg-linear-to-b from-background to-muted/20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Photo & Info Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-2 overflow-hidden">
              <div className="relative h-64 bg-linear-to-br from-primary/20 to-primary/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                    {/* Image placeholder - remplacez par votre photo */}
                    <div className="w-full h-full bg-linear-to-br from-primary to-primary/50 flex items-center justify-center">
                      <User className="h-24 w-24 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 pt-20">
                <div className="text-center mb-6">
                  <h1 className="text-3xl font-bold">Abdoulaye</h1>
                  <p className="text-primary font-medium mt-2">Développeur Fullstack & Designer</p>
                  <p className="text-sm text-muted-foreground mt-1">Paris, France</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Expérience</p>
                      <p className="font-medium">6+ années</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Trophy className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Projets complétés</p>
                      <p className="font-medium">50+</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Clients satisfaits</p>
                      <p className="font-medium">35+</p>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                <Button className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Me contacter
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <User className="h-6 w-6 text-primary" />
                  Mon parcours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg">
                  Passionné par la création d&apos;expériences digitales exceptionnelles, je combine 
                  expertise technique et sensibilité design pour transformer des idées en produits 
                  innovants.
                </p>
                <p className="text-muted-foreground">
                  Avec plus de 6 ans d&apos;expérience dans le développement web, j&apos;ai accompagné 
                  des startups et entreprises dans la réalisation de leurs projets digitaux, 
                  de la conception à la mise en production.
                </p>
              </CardContent>
            </Card>

            {/* Compétences */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Target className="h-6 w-6 text-primary" />
                  Mes compétences
                </CardTitle>
                <CardDescription>
                  Technologies et domaines d&apos;expertise
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {skill.icon}
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Outils & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "Figma", "Docker", "AWS", "Git", "PostgreSQL"].map((tech) => (
                      <Badge key={tech} variant="outline" className="px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Expérience professionnelle */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Briefcase className="h-6 w-6 text-primary" />
                  Expérience professionnelle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-8">
                      <div className="absolute left-0 top-0 w-3 h-3 bg-primary rounded-full" />
                      <div className="absolute left-[5px] top-3 bottom-0 w-0.5 bg-primary/20" />
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium text-primary">{exp.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                        <p className="text-lg text-primary">{exp.company}</p>
                        <p className="text-muted-foreground">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Philosophie */}
            <Card className="border-2 bg-linear-to-br from-primary/5 to-transparent">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Heart className="h-6 w-6 text-primary" />
                  Ma philosophie
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-background rounded-lg border">
                    <Target className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">Impact avant tout</h4>
                    <p className="text-sm text-muted-foreground">
                      Je crée des solutions qui résolvent de vrais problèmes pour de vrais utilisateurs.
                    </p>
                  </div>
                  
                  <div className="text-center p-6 bg-background rounded-lg border">
                    <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">Collaboration transparente</h4>
                    <p className="text-sm text-muted-foreground">
                      Je crois en une communication ouverte et régulière avec chaque client.
                    </p>
                  </div>
                  
                  <div className="text-center p-6 bg-background rounded-lg border">
                    <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">Excellence continue</h4>
                    <p className="text-sm text-muted-foreground">
                      L&apos;apprentissage et l&apos;amélioration constante sont au cœur de mon approche.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}