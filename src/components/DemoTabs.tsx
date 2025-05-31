import TabsDemo from "./Tabs/tabs-01"
import TabsUnderlinedDemo from "./Tabs/tabs-02"
import TabsSeparatedDemo from "./Tabs/tabs-03"
import TabsBorderedDemo from "./Tabs/tabs-04"
import TabsBoxDemo from "./Tabs/tabs-05"
import TabsBootstrapDemo from "./Tabs/tabs-06"
import TabsIconDemo from "./Tabs/tabs-07"
import TabsMobileNavigationDemo from "./Tabs/tabs-08"
import TabsWithBadgeDemo from "./Tabs/tabs-09"
import TabsSharpDemo from "./Tabs/tabs-10"
import TabsShadowDemo from "./Tabs/tabs-11"
import TabSkewedDemo from "./Tabs/tabs-12"
import VerticalTabsDemo from "./Tabs/tabs-13"
import VerticalLeftBorderedTabsDemo from "./Tabs/tabs-14"
import VerticalSeparatedTabsDemo from "./Tabs/tabs-15"
import VerticalSharpTabsDemo from "./Tabs/tabs-16"
import VerticalBorderedTabs from "./Tabs/tabs-17"
import AnimatedTabsDemo from "./Tabs/tabs-18"

const tabs = [
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Default</div><TabsDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Underlined</div><TabsUnderlinedDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Separated</div><TabsSeparatedDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Bordered</div><TabsBorderedDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Box</div><TabsBoxDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Bootstrap</div><TabsBootstrapDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Icon</div><TabsIconDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Mobile Navigation</div><TabsMobileNavigationDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">With badge</div><TabsWithBadgeDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Sharp</div><TabsSharpDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Shadow</div><TabsShadowDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Skewed</div><TabSkewedDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Vertical</div><VerticalTabsDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Vertical Left Bordered</div><VerticalLeftBorderedTabsDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Vertical Separated</div><VerticalSeparatedTabsDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Vertical Sharp</div><VerticalSharpTabsDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Vertical Bordered</div><VerticalBorderedTabs /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Animated Content</div><AnimatedTabsDemo /></div>
]

export default function Tabs () {
  return (
    <>
      {
        tabs.map(tab => (
          tab
        ))
      }
    </>
  )
};