import './App.css';

import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import Landing from './pages/Landing/Landing.tsx';

function App() {
    return (
        <MantineProvider>
            <Landing />
        </MantineProvider>
    );
}

export default App;
