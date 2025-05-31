import CarouselDemo from "./Carousels/carousel-01"
import CarouselWithMultipleSlides from "./Carousels/carousel-02"
import CarouselVertical from "./Carousels/carousel-03"
import SlideStatus from "./Carousels/carousel-04"
import CarouselWithPagination from "./Carousels/carousel-06"
import CarouselWithFooter from "./Carousels/carousel-07"
import CarouselWithProgress from "./Carousels/carousel-08"
import CarouselWithThumbs from "./Carousels/carousel-09"
import SlideOpacity from "./Carousels/carousel-10"
import SlideScale from "./Carousels/carousel-11"

const carousels = [
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Default</div><CarouselDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Multiple slides</div><CarouselWithMultipleSlides /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Vertical</div><CarouselVertical /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Slide Status</div><SlideStatus /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Slide Status 2</div><SlideStatus /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Pagination</div><CarouselWithPagination /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Footer</div><CarouselWithFooter /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Progress</div><CarouselWithProgress /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Thumbs</div><CarouselWithThumbs /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Opacity</div><SlideOpacity /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Scale</div><SlideScale /></div>
]

export default function DemoCarousels () {
  return (
    <>
      {
        carousels.map(carousel => (
          carousel
        ))
      }
    </>
  )
}