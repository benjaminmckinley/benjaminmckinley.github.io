import { Stack, Text, Title } from '@mantine/core';
import ProjectList from '../Projects/ProjectList/ProjectList.tsx';
import './Landing.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialMediaLinks from '../../components/common/SocialMediaLinks/SocialMediaLinks.tsx';

const Landing = () => {

    return (
        <Stack
            className="container"
            style={{
                alignItems: 'center',
                alignContent: 'center',
                width: '600px',
            }}>
            <NavigationBar />
            <Stack
                id="introduction"
                gap={16}
                style={{
                    color: 'white',
                }}>
                <Stack gap={0}>
                    <Title id="title" ta="left" order={1} style={{ fontSize: '80px' }}>
                        Hi, I'm Benjamin.
                    </Title>
                    <Text id="subtitle" ta="left" style={{ fontSize: '36px' }}>
                        Full-stack Software Engineer
                    </Text>
                </Stack>
                <SocialMediaLinks />
                <Text id="short-bio" ta="left" style={{ color: 'white' }}>
                    In 2014, I started developing games for my friends in{' '}
                    <a
                        href="https://love2d.org/"
                        target="_blank"
                        style={{ cursor: 'url("love_logo.png"), auto' }}
                        className="shimmer-hover">
                        Lua.
                    </a>
                    A hobby spiraled into a passion and a few years later I am helping build
                    enterprise software at a large corporation. My professional focuses have been in
                    Developer Experience, Identity Management, and API Platforms. I enjoy building
                    software to empower developers, spark joy, and tackle real-world challenges.
                    When I'm not at my keyboard you can find me at the <a>climbing gym</a>,{' '}
                    <a>tending to my houseplants</a>, or <a>exploring The Lands Between</a>.
                </Text>
                <Arrow />
            </Stack>
            <Text style={{ color: 'white' }}>There's more below!</Text>
            <ProjectList />
        </Stack>
    );
};

const Arrow = () => {
    return <FontAwesomeIcon icon="fa-solid fa-square-arrow-up-right" />;
};

export default Landing;
