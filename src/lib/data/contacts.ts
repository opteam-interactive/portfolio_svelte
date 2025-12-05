import {
    Mail,
    Smartphone,
    Github,
    Linkedin,
    GraduationCap,
    BriefcaseBusiness,
    Presentation,
    Settings,
    BadgeCheck,
    Languages,
    Moon,
    Palette,
    Hexagon
} from '@lucide/svelte';

type Contact = {
    text: string;
    icon: any;
    url: string;
    color?: string;
};

const contacts: Contact[] = [
    {
        text: 'Email : loic.grancher@protonmail.com',
        icon: Mail,
        url: 'mailto:loic.grancher@protonmail.com'
    },
    {
        text: 'Tel : +33679953643',
        icon: Smartphone,
        url: 'tel:+33679953643'
    },
    {
        text: 'Linkedin : Loïc Grancher',
        icon: Linkedin,
        url: 'https://www.linkedin.com/in/loic-grancher-3b586310b'
    },
    {
        text: 'Github : loic-grancher',
        icon: Github,
        url: 'https://github.com/loic-grancher'
    }
];

export default contacts