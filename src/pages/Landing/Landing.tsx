import { Box, Grid, Stack, Text } from '@mantine/core';
import ProjectList from '../Projects/ProjectList/ProjectList.tsx';

const Landing = () => {
    return (
        <Box>
            <Grid>
                <Grid dir="column">
                    <Stack
                        sx={{
                            alignItems: 'left',
                            justifyItems: 'left',
                            justifyContent: 'left',
                        }}
                    >
                        <Text>Benjamin McKinley</Text>
                        <Text>Full-stack Software Engineer</Text>
                    </Stack>
                </Grid>
                <Grid>
                    <ProjectList />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Landing;
