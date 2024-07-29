export type Project = {
    title: string;
    description: string;
    date: Date;
    pinned: boolean;
    company?: string;
    tools: string[];
    link?: string;
    imagePath?: string;
};
