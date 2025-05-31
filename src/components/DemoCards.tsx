import CardDemo from './Cards/card-01'
import CardWithBackground from './Cards/card-02'
import CreateAccountCard from './Cards/card-03'
import CardBanner from './Cards/card-04'
import PricingCard from './Cards/card-05'
import CardPost from './Cards/card-06'
import ProductCard from './Cards/card-07'
import TestimonialCard from './Cards/card-08'

const cards = [
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Default</div><CardDemo /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">With background</div><CardWithBackground /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Sign Up</div><CreateAccountCard /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Banner</div><CardBanner /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Pricing</div><PricingCard /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Post</div><CardPost /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Product</div><ProductCard /></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className="border-b border-dotted border-(--foreground) pb-2 mb-6">Testimonial</div><TestimonialCard /></div>
]

export default function DemoCards () {
  return (
    <>
      {
        cards.map(card => (
          card
        ))
      }
    </>
  )
};