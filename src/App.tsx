import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { Card } from './components/ui/card'
import { Badge } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card className='padding-20 w-full'>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <div>Muggle Video</div>
        <Button onClick={() => setCount((count) => count + 1)}>
          <Badge>{count}</Badge>
        </Button>
      </Card>
    </>
  )
}

export default App
