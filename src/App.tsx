import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Button, Input } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box p="4" height="200vh">
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Box position="fixed" bottom={0} right={0} left={0} top={0} backgroundColor="white" pointerEvents="none">
          <Input type='search' fontSize="16px" placeholder="Chakra UI Input" mb="4" />
        <Button position="absolute" left={0} right={0} bottom="env(safe-area-inset-bottom)" mb="4" colorScheme="teal" size="lg">
          Click Me
        </Button>
      </Box>
    </Box>
  )
}

export default App
