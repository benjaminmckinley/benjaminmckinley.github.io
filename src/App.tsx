import './App.css'

import '@mantine/core/styles.css'

import { MantineProvider } from '@mantine/core'
import ThreeJsExample from './ThreeJsExample.tsx'

function App() {
    return (
        <MantineProvider>
            <p className="under-construction">
                Under construction
            </p>
            <ThreeJsExample />
        </MantineProvider>
    )
}

export default App
