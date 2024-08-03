import { Card, Chip, Group, Image, Stack, Text, Title } from '@mantine/core';
import './ListCard.css';

export type ListCardProps = {
    title: string;
    description: string;
    imagePath?: string;
    chips?: string[];
    link?: string;
};

const ListCard = ({ imagePath, title, description, chips, link }: ListCardProps) => {
    return (
        <Card
            className="list-card"
            onClick={() => {
                if (link) {
                    window.open(link, '_blank');
                }
            }}
            style={{
                cursor: Boolean(link) ? 'pointer' : 'auto',
            }}>
            <Group style={{ borderRadius: '8px', padding: '8px' }}>
                <Image height="116px" src={imagePath} alt={`${title} graphic`} />
                <Stack style={{ width: '360px' }}>
                    <Title ta="left" order={4}>
                        {title}
                    </Title>
                    <Text
                        ta="left"
                        sx={{
                            flexWrap: 'wrap',
                        }}
                        style={{
                            height: '116px',
                            fontSize: '12px',
                            overflowY: 'auto',
                        }}>
                        {description}
                    </Text>
                    <Group>
                        {chips &&
                            chips.map((text, i) => (
                                <Chip key={i} checked={false}>
                                    {text}
                                </Chip>
                            ))}
                    </Group>
                </Stack>
            </Group>
        </Card>
    );
};

export default ListCard;
