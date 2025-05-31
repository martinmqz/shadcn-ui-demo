import SpinnerDemo from "./Spinners/spinner-01"
import SpinnerCircleDemo from "./Spinners/spinner-02"
import SpinnerPinwheelDemo from "./Spinners/spinner-03"
import SpinnerColorsDemo from "./Spinners/spinner-04"
import SpinnerSizesDemo from "./Spinners/spinner-05"
import SwirlingEffectSpinner from "./Spinners/spinner-06"
import SpinnerCircle1 from "./Spinners/spinner-07"
import SpinnerCircle2 from "./Spinners/spinner-08"
import SpinnerCircle3 from "./Spinners/spinner-09"
import SpinnerCircle4 from "./Spinners/spinner-10"
import SpinnerCircle5 from "./Spinners/spinner-11"

const spinners = [
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Default</div><SpinnerDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Circle</div><SpinnerCircleDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Pinwheel</div><SpinnerPinwheelDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Colors</div><SpinnerColorsDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Sizes</div><SpinnerSizesDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Swirling Effect</div><SwirlingEffectSpinner /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Spinner Circle 1</div><SpinnerCircle1 /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Spinner Circle 2</div><SpinnerCircle2 /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Spinner Circle 3</div><SpinnerCircle3 /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Spinner Circle 4</div><SpinnerCircle4 /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Spinner Circle 5</div><SpinnerCircle5 /></div>
]

export default function DemoSpinners () {
  return (
    <>
      {
        spinners.map(spinner => (
          spinner
        ))
      }
    </>
  )
}