import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { MenuIcon, ShoppingCartIcon } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return <Card className='flex items-center justify-between p-7'>
    <Button size='icon' variant='outline'>
      <MenuIcon />
    </Button>

    <h1 className='text-lg font-semibold'>
      <span className='text-primary'>IT</span> Store
    </h1>

    <Button size='icon' variant='outline'>
      <ShoppingCartIcon />
    </Button>
  </Card>
  
}
