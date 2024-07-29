import { Card, Chip, Group, Image, List, ListItem, Stack, Text, Title } from '@mantine/core';
import projectsJson from '../../../data/projects.json';
import { Project } from '../../../types/project.type.ts';

const ProjectList = () => {
    const projects = projectsJson.projects as Project[];

    return (
        <Stack gap={2}>
            <List listStyleType="none">
                {projects.map((project) => {
                    return (
                        <ListItem p={4}>
                            <Card
                                style={{
                                    backgroundColor: 'lightblue',
                                }}
                            >
                                <Group>
                                    <Image
                                        height="116px"
                                        src={project.imagePath}
                                        alt={`${project.title} graphic`}
                                    />
                                    <Stack style={{ backgroundColor: 'yellow', width: '360px' }}>
                                        <Title order={4}>{project.title}</Title>
                                        <Text
                                            sx={{
                                                flexWrap: 'wrap',
                                            }}
                                            style={{
                                                fontSize: '12px',
                                            }}
                                        >
                                            {project.description}
                                        </Text>
                                        <Group>
                                            {project.tools.map((tool) => (
                                                <Chip>{tool}</Chip>
                                            ))}
                                        </Group>
                                    </Stack>
                                </Group>
                            </Card>
                        </ListItem>
                    );
                })}
            </List>
            <a>
                <Text>View all</Text>
            </a>
        </Stack>
    );
};

export default ProjectList;
