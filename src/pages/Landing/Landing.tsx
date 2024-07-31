import { Grid, Space, Stack, Text, Title } from '@mantine/core';
import ProjectList from '../Projects/ProjectList/ProjectList.tsx';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks.tsx';
import NavigationBar from '../../components/NavigationBar/NavigationBar.tsx';

const Landing = () => {
    return (
        <Stack>
            <NavigationBar />
            <Grid>
                <Grid dir="column">
                    <Grid.Col span={4}>
                        <Stack style={{
                            color: 'white',
                        }}>
                            <Title ta="left" order={1}>Benjamin McKinley</Title>
                            <Text ta="left">Full-stack Software Engineer</Text>
                            <Text ta="left">I tinker and stuff</Text>
                            <SocialMediaLinks />
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span={8}>
                        <Text ta="left" style={{ color: 'white' }}>
                            In 2014, I started developing games for my friends in Lua. A hobby spiraled into a passion
                            and a few years later I am helping build enterprise software at a large corporation.
                            <Space />
                            My professional focuses have been in Developer Experience, Identity Management, and API
                            Platforms. I enjoy building software for that empowers developers, sparks joy, and tackles
                            real-world challenges.
                            <Space />
                            When I'm not at my keyboard you can find me at the <a>climbing gym</a>, <a>tending to my
                            houseplants</a>, or <a>exploring The Lands Between</a>.
                        </Text>
                        <ProjectList />
                    </Grid.Col>
                </Grid>
            </Grid>
        </Stack>
    );
};

export default Landing;
