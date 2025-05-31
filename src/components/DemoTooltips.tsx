import TooltipDemo from "./Tooltips/tooltip-01"
import WithArrowTooltipDemo from "./Tooltips/tooltip-02"
import TooltipDirectionsDemo from "./Tooltips/tooltip-03"
import TooltipWithDisabledHoverableContentDemo from "./Tooltips/tooltip-04"
import WithDelayTooltipDemo from "./Tooltips/tooltip-05"
import WithSkipDelayTooltipDemo from "./Tooltips/tooltip-06"
import TooltipPortalDemo from "./Tooltips/tooltip-07"

const tooltips = [
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Default</div><TooltipDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">With arrow</div><WithArrowTooltipDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Directions</div><TooltipDirectionsDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Disable Hoverable Content</div><TooltipWithDisabledHoverableContentDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">With delay</div><WithDelayTooltipDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">With skip delay</div><WithSkipDelayTooltipDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Portal</div><TooltipPortalDemo /></div>
]

export default function DemoTooltips () {
  return (
    <>
      {
        tooltips.map(tooltip => (
          tooltip
        ))
      }
    </>
  )
};