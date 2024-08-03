import { Group } from '@mantine/core';
import { useEffect, useState } from 'react';
import { debounce } from '../../utils/anim.util.ts';

const NAV_BAR_TOP_PADDING_PX = 48;

const NavigationBar = () => {
    const [atTop, setAtTop] = useState<boolean>(true);
    
    const trackScroll = () => {
        setAtTop(window.scrollY > NAV_BAR_TOP_PADDING_PX);
        document.documentElement.dataset.scroll = String(window.scrollY);
    };

    useEffect(function configureScrollListener() {
        document.addEventListener('scroll', debounce(trackScroll), { passive: true });

        return document.removeEventListener('scroll', debounce(trackScroll));
    }, []);


    return (
        <Group
            id="nav-bar"
            gap="32px"
            style={{
                position: 'sticky',
                top: `${NAV_BAR_TOP_PADDING_PX}px`,
                color: 'white',
                padding: '8px 16px',
                borderRadius: '24px',
                backgroundColor: atTop ? 'color-mix(in hsl, var(--palette-color-grey) 50%, transparent)' : 'transparent',
                transition: 'background-color 0.4s ease',
            }}>
            <a href="#">Main</a>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Notes</a>
        </Group>
    );
};

export default NavigationBar;
