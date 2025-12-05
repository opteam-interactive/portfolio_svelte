<script lang="ts">
	import Block from '$lib/components/Block.svelte';
	import placeholder from '$lib/assets/placeholder.jpg';
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

	type Contact = {
		text: string;
		icon: any;
		url: string;
		color?: string;
	};

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
</script>

<div class="grid grid-cols-2 h-full grow">
	<div class="grid">
		<div class="p-2 m-2 border rounded flex">
			<figure class="relative aspect-square overflow-hidden max-w-[200px] max-h-[200px]">
				<img src={placeholder} class="absolute inset-0 w-full h-full object-cover" />
			</figure>
			<div class="m-2 p-2">
				<h1 class="text-4xl">Loïc Grancher</h1>
				<p class="text-2xl">Développeur Full-Stack</p>
				<div>
					<h2>Contacts</h2>
					<ul>
						{#each contacts as contact}
							<li>
								<a href={contact.url} class="flex gap-2 items-center" target="_blank">
									<svelte:component this={contact.icon} size={20} />
									{contact.text}</a
								>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
		<Block title="Compétences" icon={BadgeCheck}>
			<div class="grid">
				{#each categories as category}
					<div class="my-2 flex flex-col gap-1">
						<h3 class="text-lg">{category.name}</h3>
						<ul class="flex gap-4">
							{#each category.skills as skill}
								<li class="flex gap-2 items-center">
									<img src={skill.icon} alt="" class="w-8" />
									{skill.name}
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</Block>
	</div>

	<div class="grid">
		<Block title="Formation" icon={GraduationCap}></Block>
		<Block title="Expérience professionnelle" icon={BriefcaseBusiness} />
		<Block title="Projets" icon={Presentation} />
		<Block title="Réglages" icon={Settings}>
			<ul class="flex gap-2 justify-evenly items-center">
				<li><Languages size={40} /></li>
				<li><Moon size={40} /></li>
				<li><Palette size={40} /></li>
			</ul>
		</Block>
	</div>
</div>
