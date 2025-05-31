import BreadcrumbsDemo from "./Breadcrumbs/breadcrumb-01"
import BreadcrumbsWithSlashSeparator from "./Breadcrumbs/breadcrumb-02"
import BreadcrumbsWithChevronsSeparator from "./Breadcrumbs/breadcrumb-03"
import BreadcrumbsWithDotSeparator from "./Breadcrumbs/breadcrumb-04"
import BreadcrumbsWithIcon from "./Breadcrumbs/breadcrumb-06"
import BreadcrumbsWithIconAndLabel from "./Breadcrumbs/breadcrumb-07"
import BreadcrumbsWithBackground from "./Breadcrumbs/breadcrumb-09"
import BreadcrumbTabActiveDemo from "./Breadcrumbs/breadcrumb-10"
import BreadcrumbTabsDemo from "./Breadcrumbs/breadcrumb-11"
import BreadcrumbTabsOutline from "./Breadcrumbs/breadcrumb-12"
import BreadcrumbWithDropdown from "./Breadcrumbs/breadcrumb-13"
import BreadcrumbCollapsed from "./Breadcrumbs/breadcrumb-14"
import BreadcrumbsSteps from "./Breadcrumbs/breadcrumb-15"

const breadcrumbs = [
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Default</div><BreadcrumbsDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Slash Separator</div><BreadcrumbsWithSlashSeparator /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Chevrons Separator</div><BreadcrumbsWithChevronsSeparator /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Dot Separator</div><BreadcrumbsWithDotSeparator /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">With Icon</div><BreadcrumbsWithIcon /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">With Icon 2</div><BreadcrumbsWithIcon /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">With Icon and Label</div><BreadcrumbsWithIconAndLabel /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">With Icon and Label 2</div><BreadcrumbsSteps /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">With Background</div><BreadcrumbsWithBackground /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Tab Active</div><BreadcrumbTabActiveDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Tabs</div><BreadcrumbTabsDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Tabs Outline</div><BreadcrumbTabsOutline /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">With Dropdown</div><BreadcrumbWithDropdown /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Collapsed</div><BreadcrumbCollapsed /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Steps</div><BreadcrumbsSteps /></div>
]

export default function DemoBreadcrumbs () {
  return (
    <>
      {
        breadcrumbs.map(breadcrumb => (
          breadcrumb
        ))
      }
    </>
  )
}