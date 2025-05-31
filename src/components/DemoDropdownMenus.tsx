import DropdownMenuDemo from "./DropdownMenus/dropdown-menu-01"
import DropdownMenuWithIcon from "./DropdownMenus/dropdown-menu-02"
import DropdownMenuWithCheckboxes from "./DropdownMenus/dropdown-menu-03"
import DropdownMenuWithRadioGroup from "./DropdownMenus/dropdown-menu-04"
import DropdownMenuWithSubMenu from "./DropdownMenus/dropdown-menu-05"
import DropdownMenuWithShortcuts from "./DropdownMenus/dropdown-menu-06"
import ComplexDropdownMenu from "./DropdownMenus/dropdown-menu-07"
import WorkspaceSwitcher from "./DropdownMenus/dropdown-menu-08"

const dropdownMenus = [
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Default</div><DropdownMenuDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">With Icon</div><DropdownMenuWithIcon /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Checkboxes</div><DropdownMenuWithCheckboxes /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Radio Group</div><DropdownMenuWithRadioGroup /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">With Sub Menu</div><DropdownMenuWithSubMenu /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">With Shortcuts</div><DropdownMenuWithShortcuts /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Complex Menu</div><ComplexDropdownMenu /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Workspace Switcher</div><WorkspaceSwitcher /></div>
]

export default function DemoDropdownMenus () {
  return (
    <>
      {
        dropdownMenus.map(dropdownMenu => (
          dropdownMenu
        ))
      }
    </>
  )
}