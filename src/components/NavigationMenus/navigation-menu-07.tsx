import { buttonVariants } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { BookOpen, Home, Rss, Settings, User } from "lucide-react"

const navigationMenuItems = [
  { title: "Home", href: "#", icon: Home, isActive: true },
  { title: "Blog", href: "#blog", icon: Rss },
  { title: "Docs", href: "#docs", icon: BookOpen },
  { title: "Account", href: "#account", icon: Settings },
  { title: "Settings", href: "#settings", icon: User }
]

export default function NavigationMenuWithIcon () {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-3">
        {navigationMenuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: item.isActive ? "secondary" : "ghost"
                }),
                "h-11 w-11"
              )}
              asChild
            >
              <a href={item.href}>
                <item.icon className="!h-6 !w-6" />
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
