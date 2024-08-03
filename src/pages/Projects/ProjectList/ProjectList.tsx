import { List, ListItem, Stack, Text, Title } from '@mantine/core';
import projectsJson from '../../../data/projects.json';
import { Project } from '../../../types/project.type.ts';
import ListCard from '../../../components/common/ListCard/ListCard.tsx';

const ProjectList = () => {
    const projects = projectsJson.projects as Project[];

    return (
        <Stack gap={2}>
            <Title order={3} style={{ color: 'var(--palette-text-primary)' }}>
                Highlighted Projects
            </Title>
            <List listStyleType="none">
                {projects.map((project) => {
                    return (
                        <ListItem key={project.title} p={4}>
                            <ListCard
                                title={
                                    project.company
                                        ? `${project.title} · ${project.company}`
                                        : project.title
                                }
                                description={project.description}
                                chips={project.tools}
                                imagePath={project.imagePath}
                                link={project.link}
                            />
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
