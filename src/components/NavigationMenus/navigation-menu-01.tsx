import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

const navigationMenuItems = [
  { title: "Home", href: "#" },
  { title: "Blog", href: "#blog" },
  { title: "Docs", href: "#docs" }
]

export default function NavigationMenuDemo () {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigationMenuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              asChild
            >
              <a href={item.href}>{item.title}</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
