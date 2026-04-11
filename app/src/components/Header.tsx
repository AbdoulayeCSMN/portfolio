"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@components/ui/navigation-menu"
import { Button } from "@components/ui/button"
import {
  Sheet, 
  SheetContent, 
  SheetTrigger, 
  SheetTitle,
  SheetDescription 
} from "@components/ui/sheet"
import { Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@lib/utils"

interface PortfolioHeaderProps {
  logoText?: string
  navItems?: {
    label: string
    href: string
    items?: { label: string; href: string; description?: string }[]
  }[]
  showThemeToggle?: boolean
  showContactButton?: boolean
  contactButtonText?: string
  contactButtonHref?: string
  className?: string
  fixed?: boolean
  transparentOnTop?: boolean
}

export default function PortfolioHeader({
  logoText = "ABDOULAYE",
  navItems = [
    { label: "Accueil", href: "/" },
    { label: "Projets", href: "/projects" },
    { 
      label: "Services", 
      href: "/services",
      items: [
        { label: "Développement Web", href: "/services/web", description: "Sites et applications web modernes" },
        { label: "Design UI/UX", href: "/services/design", description: "Interfaces intuitives et esthétiques" },
        { label: "Consulting", href: "/services/consulting", description: "Conseils et stratégie digitale" },
      ]
    },
    { label: "Notes", href: "/notes" },
    { label: "À propos", href: "/about" },
    { label: "Blog", href: "/blog" },
  ],
  showThemeToggle = true,
  showContactButton = true,
  contactButtonText = "Contact",
  contactButtonHref = "/contact",
  className = "",
  fixed = true,
  transparentOnTop = false,
}: PortfolioHeaderProps) {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const shouldBeTransparent = transparentOnTop && !isScrolled && pathname === "/"

  return (
    <header
      className={cn(
        "w-full z-50 transition-all duration-300",
        fixed && "fixed top-0 left-0 right-0",
        shouldBeTransparent 
          ? "bg-transparent" 
          : "bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b",
        isScrolled && "shadow-sm",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-primary-foreground font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-bold tracking-tight">
              {logoText}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger
                          className={cn(
                            "text-foreground/80 hover:text-foreground",
                            pathname.startsWith(item.href) && "text-foreground"
                          )}
                        >
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-64 gap-3 p-4">
                            {item.items.map((subItem) => (
                              <li key={subItem.href}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subItem.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-medium leading-none">
                                      {subItem.label}
                                    </div>
                                    {subItem.description && (
                                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                        {subItem.description}
                                      </p>
                                    )}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                        <NavigationMenuLink
                          href={item.href}
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "text-foreground/80 hover:text-foreground",
                            pathname === item.href && 
                            "text-foreground bg-accent/50"
                          )}
                        >
                          {item.label}
                        </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            {showThemeToggle && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                aria-label="Toggle theme"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            )}

            {showContactButton && (
              <Button
                asChild
                variant="default"
                size="sm"
                className="hidden sm:inline-flex"
              >
                <Link href={contactButtonHref}>
                  {contactButtonText}
                </Link>
              </Button>
            )}

            {/* Mobile menu button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  aria-label="Open menu"
                >
                  {mobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="sr-only">Menu mobile</SheetTitle>
                <SheetDescription className="sr-only">
                  Navigation mobile du site
                </SheetDescription>
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <Link 
                      href="/" 
                      className="flex items-center space-x-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-sm">P</span>
                      </div>
                      <span className="text-xl font-bold">{logoText}</span>
                    </Link>
                  </div>

                  <nav className="flex-1">
                    <div className="space-y-4">
                      {navItems.map((item) => (
                        <div key={item.href}>
                          {item.items ? (
                            <div className="space-y-2">
                              <p className="font-semibold text-foreground/80 px-3">
                                {item.label}
                              </p>
                              <div className="space-y-1 border-l pl-3 ml-3">
                                {item.items.map((subItem) => (
                                  <Link
                                    key={subItem.href}
                                    href={subItem.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={cn(
                                      "block py-2 text-sm text-foreground/70 hover:text-foreground transition-colors",
                                      pathname === subItem.href && "text-foreground font-medium"
                                    )}
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <Link
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={cn(
                                "flex items-center py-3 px-3 rounded-lg text-foreground/80 hover:text-foreground hover:bg-accent/50 transition-all",
                                pathname === item.href && 
                                "text-foreground bg-accent/50 font-medium"
                              )}
                            >
                              {item.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </nav>

                  <div className="pt-8 space-y-4 border-t">
                    {showContactButton && (
                      <Button asChild className="w-full">
                        <Link 
                          href={contactButtonHref}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {contactButtonText}
                        </Link>
                      </Button>
                    )}
                    
                    {showThemeToggle && (
                      <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
                        <span className="text-sm">Thème</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        >
                          {theme === "light" ? (
                            <>
                              <Moon className="mr-2 h-4 w-4" />
                              Sombre
                            </>
                          ) : (
                            <>
                              <Sun className="mr-2 h-4 w-4" />
                              Clair
                            </>
                          )}
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}