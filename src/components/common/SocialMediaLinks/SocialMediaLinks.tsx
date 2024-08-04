import { Group } from '@mantine/core';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

const SocialMediaLinks = () => {
    return (
        <Group>
            <SocialMediaButton
                link="https://www.linkedin.com/in/benjaminmckinley/"
                icon={['fab', 'linkedin']}
            />
            <SocialMediaButton
                link="https://github.com/benjaminmckinley/"
                icon={['fab', 'github']}
            />
            <SocialMediaButton
                link="https://github.com/benjaminmckinley/"
                icon={['fab', 'goodreads']}
            />
            <ResumeButton />
        </Group>
    );
};

const SocialMediaButton = ({
                               link,
                               ...props
                           }: { link: string } & Omit<FontAwesomeIconProps, 'color'>) => {
    return (
        <a href={link} target="_blank" referrerPolicy="no-referrer">
            <FontAwesomeIcon size="lg" color="white" {...props} sx={{ ':hover': {
                color: 'grey'
                }}} />
        </a>
    );
};

const ResumeButton = () => {
    return <span>Resume <FontAwesomeIcon icon="fa-solid fa-cloud-arrow-down" /></span>;
};

export default SocialMediaLinks;
