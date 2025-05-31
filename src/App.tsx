import './App.css'

import ThemeToggleButton from './components/Buttons/button-16'
import DemoButtons from './components/DemoButtons'
import DemoCards from './components/DemoCards'
import DemoCarousels from './components/DemoCarousels'
import DemoAccordions from './components/DemoAccordions'
import DemoDropdownMenus from './components/DemoDropdownMenus'
import DemoNavMenus from './components/DemoNavigationMenus'
import DemoPaginations from './components/DemoPaginations'
import DemoSpinners from './components/DemoSpinners'
import DemoTables from './components/DemoTables'
import DemoTabs from './components/DemoTabs'
import DemoTooltips from './components/DemoTooltips'
import DemoBreadcrumbs from './components/DemoBreadcrumbs'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'

const tabs = [
  { name: 'Buttons', value: 'buttons', content: <DemoButtons /> },
  { name: 'Cards', value: 'cards', content: <DemoCards /> },
  { name: 'Carousels', value: 'carousels', content: <DemoCarousels /> },
  { name: 'Accordions', value: 'accordions', content: <DemoAccordions /> },
  { name: 'Dropdown Menus', value: 'dropdown-menus', content: <DemoDropdownMenus /> },
  { name: 'Navigation Menus', value: 'nav-menus', content: <DemoNavMenus /> },
  { name: 'Paginations', value: 'paginations', content: <DemoPaginations /> },
  { name: 'Spinners', value: 'spinners', content: <DemoSpinners /> },
  { name: 'Tables', value: 'tables', content: <DemoTables /> },
  { name: 'Tabs', value: 'tabs', content: <DemoTabs /> },
  { name: 'Tooltips', value: 'tooltips', content: <DemoTooltips /> },
  { name: 'Breadcrumbs', value: 'breadcrumbs', content: <DemoBreadcrumbs /> }
]

function App () {
  return (
    <div className='w-full'>
      <header className='sticky top-0 bg-(--background) border-b-1 z-2'>
        <div className='max-w-[1920px] m-auto p-5 flex items-baseline justify-between'>
          <h1 className='text-2xl font-bold'>Shadcn Component with Tailwind CSS</h1>
          <div className='text-xs italic'>Dark/Light Mode &nbsp;<ThemeToggleButton /></div>
        </div>
      </header>
      <main className='max-w-[1920px] m-auto p-6'>
        <Tabs defaultValue={tabs[ 0 ].value} className='max-sm:gap-30 max-md:gap-20 max-lg:gap-10'>
          <TabsList className='gap-y-3 md:sticky top-20 z-1 p-0 bg-background border-b flex-wrap justify-start bg-(--background)'>
            {tabs.map(tab => (
              <TabsTrigger key={tab.value} value={tab.value} className=' grow-0 rounded-none bg-background h-full data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-primary'>
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className='flex flex-wrap gap-6 font-medium text-muted-foreground'>
              {tab.content}
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  )
}

export default App
