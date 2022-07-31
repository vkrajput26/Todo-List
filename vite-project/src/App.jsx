import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Todo from "./Components/Todo"
import { ChakraProvider } from '@chakra-ui/react'

function App() {


  return (
    <div className="App">
      <ChakraProvider>


      <Todo/>
      </ChakraProvider>
    </div>
  )
}

export default App
