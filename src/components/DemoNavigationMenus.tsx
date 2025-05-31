import NavigationMenuDemo from "./NavigationMenus/navigation-menu-01"
import NavigationMenuWithIcon from "./NavigationMenus/navigation-menu-02"
import NavigationMenuWithDropdown from "./NavigationMenus/navigation-menu-03"
import NavigationMenuWithActiveItem from "./NavigationMenus/navigation-menu-04"
import RichNavigationMenu from "./NavigationMenus/navigation-menu-06"
import NavigationMenuMobile from "./NavigationMenus/navigation-menu-08"

const navMenus = [
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Default</div><NavigationMenuDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">With Icon</div><NavigationMenuWithIcon /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Dropdown</div><NavigationMenuWithDropdown /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Active Item</div><NavigationMenuWithActiveItem /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Rich Navigation Menu</div><RichNavigationMenu /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Icon</div><NavigationMenuWithIcon /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Mobile Navigation</div><NavigationMenuMobile /></div>
]

export default function DemoNavMenus () {
  return (
    <>
      {
        navMenus.map(navMenu => (
          navMenu
        ))
      }
    </>
  )
}