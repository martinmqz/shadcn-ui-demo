import AccordionDemo from "./Accordions/accordion-01"
import AccordionOutlineDemo from "./Accordions/accordion-02"
import AccordionBoxDemo from "./Accordions/accordion-03"
import AccordionContainedDemo from "./Accordions/accordion-04"
import AccordionBoxContainedDemo from "./Accordions/accordion-05"
import AccordionTabsDemo from "./Accordions/accordion-06"
import AccordionHighlightActiveItemDemo from "./Accordions/accordion-07"
import AccordionMultipleOpenDemo from "./Accordions/accordion-08"
import AccordionDefaultOpenDemo from "./Accordions/accordion-09"
import AccordionIconDemo from "./Accordions/accordion-10"
import AccordionMediaContentDemo from "./Accordions/accordion-11"
import AccordionItemDisabledDemo from "./Accordions/accordion-12"

const accordions = [
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Default</div><AccordionDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Outline</div><AccordionOutlineDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Box</div><AccordionBoxDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Contained</div><AccordionContainedDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Box Contained</div><AccordionBoxContainedDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Tabs</div><AccordionTabsDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Highlight Active Item</div><AccordionHighlightActiveItemDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Multiple expanded at a time</div><AccordionMultipleOpenDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Expand Icon</div><AccordionDefaultOpenDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Icon</div><AccordionIconDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Media Content</div><AccordionMediaContentDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Disabled Item</div><AccordionItemDisabledDemo /></div>
]

export default function DemoAccordions () {
  return (
    <>
      {
        accordions.map(accordion => (
          accordion
        ))
      }
    </>
  )
}