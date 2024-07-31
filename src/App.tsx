import './App.css';

import '@mantine/core/styles.css';

import { createTheme, MantineProvider } from '@mantine/core';
import Landing from './pages/Landing/Landing.tsx';

const theme = createTheme({});

function App() {
    return (
        <MantineProvider theme={theme}>
            <Landing />
        </MantineProvider>
    );
}

export default App;
