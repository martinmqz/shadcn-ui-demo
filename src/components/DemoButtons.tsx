import { Button } from "@/components/ui/button"
import SocialButtonDemo from './Buttons/button-11'
import SocialLoginButtonDemo from './Buttons/button-12'
import SplitButton from './Buttons/button-07'
import ToggleButton from './Buttons/button-15'
import ThemeToggleButton from './Buttons/button-16'
import GroupButtonDemo from './Buttons/button-18'
import GroupButton2Demo from './Buttons/button-19'
import CopyButton from './Buttons/button-20'
import ButtonsWithBadge from './Buttons/button-21'
import ButtonsWithTooltip from './Buttons/button-22'
import ButtonsWithTapAnimation from './Buttons/button-23'
import IconButtonDemo from './Buttons/button-05'
import LoadingButtonDemo from './Buttons/button-06'
import GradientButtonDemo from './Buttons/button-09'
import LinkButtonDemo from './Buttons/button-10'
import NeonButtonDemo from './Buttons/button-13'
import RoundedButtonDemo from './Buttons/button-14'
import FullWidthButtonDemo from './Buttons/button-17'

const buttons = [
  <div className='max-sm:flex-1 p-4 min-w-100 mb-10'><div className='grid-item__title'>Primary</div><Button>Primary</Button></div>,
  <div className='max-sm:flex-1 p-4 min-w-100 mb-10'><div className='grid-item__title'>Secondary</div><Button variant="secondary">Secondary</Button></div>,
  <div className="max-sm:flex-1 p-4 min-w-100 mb-10"><div className='grid-item__title'>Destructive</div><Button variant="destructive">Destructive</Button></div>,
  <div className='max-sm:flex-1 p-4 min-w-100 mb-10'><div className='grid-item__title'>Outline</div><Button variant="outline">Outline</Button></div>,
  <div className='max-sm:flex-1 p-4 min-w-100 mb-10'><div className='grid-item__title'>Icon</div><IconButtonDemo /></div>,
  <div className='max-sm:flex-1 p-4 min-w-100 mb-10'><div className='grid-item__title'>Loading</div><LoadingButtonDemo /></div>,
  <div className='max-sm:flex-1 p-4 min-w-100 mb-10'><div className='grid-item__title'>Split Button</div><SplitButton /></div>,
  <div className='max-sm:flex-1 p-4 min-w-100 mb-10'><div className='grid-item__title'>Ghost</div><Button variant="ghost">Ghost</Button></div>,
  <div className='max-sm:flex-1 p-4 min-w-100 mb-10'><div className='grid-item__title'>Gradient</div><GradientButtonDemo /></div>,
  <div className='max-sm:flex-1 p-4 min-w-100 mb-10'><div className='grid-item__title'>Link</div><LinkButtonDemo /></div>,
  <div className='max-sm:flex-1 p-4 min-w-100 mb-10'><div className='grid-item__title'>Social</div><SocialButtonDemo /></div>,
  <div className='max-sm:flex-1 p-4 min-w-100 mb-10'><div className='grid-item__title'>Social Login</div><SocialLoginButtonDemo /></div>,
  <div className='max-sm:flex-1 p-4 min-w-100 mb-10'><div className='grid-item__title'>Neon</div><NeonButtonDemo /></div>,
  <div className='max-sm:flex-1 p-4 min-w-100 mb-10'><div className='grid-item__title'>Rounded</div><RoundedButtonDemo /></div>,
  <div className='max-sm:flex-1 p-4 min-w-100 mb-10'><div className='grid-item__title'>Toggle</div><ToggleButton /></div>,
  <div className='max-sm:flex-1 p-4 min-w-100 mb-10'><div className='grid-item__title'>Theme Toggle</div><ThemeToggleButton /></div>,
  <div className='max-sm:flex-1 p-4 min-w-100 mb-10'><div className='grid-item__title'>Full Width</div><FullWidthButtonDemo /></div>,
  <div className='max-sm:flex-1 p-4 min-w-100 mb-10'><div className='grid-item__title'>Group</div><GroupButtonDemo /></div>,
  <div className='max-sm:flex-1 p-4 min-w-100 mb-10'><div className='grid-item__title'>Group 2</div><GroupButton2Demo /></div>,
  <div className='max-sm:flex-1 p-4 min-w-100 mb-10'><div className='grid-item__title'>Copy Button</div><CopyButton /></div>,
  <div className='max-sm:flex-1 p-4 min-w-100 mb-10'><div className='grid-item__title'>With badge</div><ButtonsWithBadge /></div>,
  <div className='max-sm:flex-1 p-4 min-w-100 mb-10'><div className='grid-item__title'>With tooltip</div><ButtonsWithTooltip /></div>,
  <div className='max-sm:flex-1 p-4 min-w-100 mb-10'><div className='grid-item__title'>With tap animation</div><ButtonsWithTapAnimation /></div>
]

export default function DemoButtons () {
  return (
    <>
      {
        buttons.map(button => (
          button
        ))
      }
    </>
  )
}