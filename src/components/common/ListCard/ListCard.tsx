import { Card, Chip, Group, Image, Stack, Text, Title } from '@mantine/core';

export type ListCardProps = {
    title: string;
    description: string;
    imagePath?: string;
    chips?: string[];
};

const ListCard = ({ imagePath, title, description, chips }: ListCardProps) => {
    return <Card
        style={{
            backgroundColor: '#003566',
            color: 'white',
        }}
    >
        <Group>
            <Image
                height="116px"
                src={imagePath}
                alt={`${title} graphic`}
            />
            <Stack style={{ width: '360px' }}>
                <Title ta="left" order={4}>{title}</Title>
                <Text
                    ta="left"
                    sx={{
                        flexWrap: 'wrap',
                    }}
                    style={{
                        height: '116px',
                        fontSize: '12px',
                        overflowY: 'scroll',
                    }}
                >
                    {description}
                </Text>
                <Group>
                    {chips && chips.map((text) => (
                        <Chip checked={false}>{text}</Chip>
                    ))}
                </Group>
            </Stack>
        </Group>
    </Card>;
};

export default ListCard;