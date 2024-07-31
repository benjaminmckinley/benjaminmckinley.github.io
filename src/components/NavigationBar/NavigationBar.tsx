import { Group } from '@mantine/core';

const NavigationBar = () => {
    return <Group style={{ color: 'white' }}>
        <a>Main</a>
        <a>About</a>
        <a>Projects</a>
        <a>Notes</a>
    </Group>;
};

export default NavigationBar;