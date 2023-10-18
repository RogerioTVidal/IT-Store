import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Sheet, SheetContent, SheetHeader, SheetTrigger,} from "@/components/ui/sheet"
import { HomeIcon, ListOrderedIcon, LogInIcon, MenuIcon, PercentIcon, ShoppingCartIcon } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return <Card className='flex items-center justify-between p-7'>
    <Sheet>
      <SheetTrigger asChild>
        <Button size='icon' variant='outline'>
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side={'left'}>
        <SheetHeader className='text-left text-lg font-semibold'>Menu</SheetHeader>
        <div className="mt-2 flex flex-col gap-2"> 
        <Button variant={'outline'} className='w-full justify-start gap-2'>
            <LogInIcon size={16} />
            Login
          </Button>

          <Button variant={'outline'} className='w-full justify-start gap-2'>
            <HomeIcon size={16} />
            Home
          </Button>

          <Button variant={'outline'} className='w-full justify-start gap-2'>
            <PercentIcon size={16} />
            Offers
          </Button>

          <Button variant={'outline'} className='w-full justify-start gap-2'>
            <ListOrderedIcon size={16} />
            Catalog
          </Button>
        </div>
      </SheetContent>
    </Sheet>
    <h1 className='text-lg font-semibold'>
      <span className='text-primary'>IT</span> Store
    </h1>

    <Button size='icon' variant='outline'>
      <ShoppingCartIcon />
    </Button>
  </Card>
  
}
