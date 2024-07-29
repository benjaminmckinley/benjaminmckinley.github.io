import './App.css'

import '@mantine/core/styles.css'

import { MantineProvider } from '@mantine/core'

function App() {
    return (
        <MantineProvider>
            <p className="under-construction">
                Under construction
            </p>
        </MantineProvider>
    )
}

export default App
