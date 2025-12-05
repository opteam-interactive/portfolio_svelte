import Figma from '$lib/assets/icons/figma.svg';
import Php from '$lib/assets/icons/php.svg';
import Laravel from '$lib/assets/icons/laravel.svg';
import Vue from '$lib/assets/icons/vue.svg';
import React from '$lib/assets/icons/react.svg';
import Nodejs from '$lib/assets/icons/nodejs.svg';
import Postgre from '$lib/assets/icons/postgresql.svg';
import Tailwind from '$lib/assets/icons/tailwindcss.svg';
import Symfony from '$lib/assets/icons/symfony.svg';
import Linux from '$lib/assets/icons/linux.svg';
import Wordpress from '$lib/assets/icons/wordpress.svg';
import Javascript from '$lib/assets/icons/javascript.svg';
import Typescript from '$lib/assets/icons/typescript.svg';

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


type Skill = {
    name: string;
    category?: string;
    icon: any;
    level?: number;
};
type Category = {
    name: string;
    icon?: any;
    skills?: Skill[];
};

const categories: Category[] = [
    {
        name: 'Langages',
        icon: Languages,
        skills: [
            {
                name: 'PHP',
                icon: Php,
                level: 80
            },
            {
                name: 'Javascript',
                icon: Javascript,
                level: 80
            },
            {
                name: 'Typescript',
                icon: Typescript,
                level: 80
            },
            {
                name: 'SQL',
                icon: Postgre,
                level: 80
            }
        ]
    },

    {
        name: 'Runtimes & Frameworks',
        icon: Languages,
        skills: [
            {
                name: 'NodeJS',
                icon: Nodejs,
                level: 80
            },
            {
                name: 'Laravel',
                icon: Laravel,
                level: 80
            },
            {
                name: 'Symfony',
                icon: Symfony,
                level: 80
            },
            {
                name: 'React',
                icon: React,
                level: 80
            },
            {
                name: 'Vue',
                icon: Vue,
                level: 80
            },
            {
                name: 'Wordpress',
                icon: Wordpress,
                level: 80
            }
        ]
    },
    {
        name: 'Autres outils',
        icon: Languages,
        skills: [
            {
                name: 'Tailwind CSS',
                icon: Tailwind,
                level: 80
            },
            {
                name: 'Linux',
                icon: Linux,
                level: 80
            },
            {
                name: 'Figma',
                icon: Figma,
                level: 80
            }
        ]
    }
];

export default categories;