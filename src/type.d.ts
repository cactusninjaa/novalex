declare module "*.md" {
    const content: {
        title: string;
        hero_image: string;
        description: string;
        featured_realisations: Array<string>;
        engagements: Array<{
            title: string;
            description: string;
        }>;
        expertises: Array<{
            title: string;
            description: string;
        }>;
        equipe: {
            name: string;
            description: string;
            image: string;
        };
        certifications: Array<{
            title: string;
            description: string;
            image: string;
        }>; 
    };
    export default content;
}