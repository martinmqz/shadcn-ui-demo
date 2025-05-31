import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { BookOpen, Home, Rss } from "lucide-react"

const navigationMenuItems = [
  { title: "Home", href: "#", icon: Home },
  { title: "Blog", href: "#blog", icon: Rss },
  { title: "Docs", href: "#docs", icon: BookOpen }
]

export default function NavigationMenuWithIcon () {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigationMenuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              asChild
            >
              <a href={item.href}>
                <item.icon className="h-5 w-5 mr-2" />
                {item.title}
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
