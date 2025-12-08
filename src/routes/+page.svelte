<script lang="ts">
	import Block from '$lib/components/Block.svelte';
	import placeholder from '$lib/assets/placeholder.jpg';
	import categories from '$lib/data/skills.js';
	import contacts from '$lib/data/contacts.js';

	import {
		GraduationCap,
		BriefcaseBusiness,
		Presentation,
		Settings,
		BadgeCheck,
		Languages,
		Moon,
		Palette
	} from '@lucide/svelte';
	import FormationItem from '$lib/components/FormationItem.svelte';
</script>

<div class="grid grid-cols-2 h-full grow">
	<div class="grid h-fit">
		<div class="p-2 m-2 border rounded flex">
			<figure
				class="relative aspect-square overflow-hidden max-w-[200px] max-h-[200px] min-w-[200px] min-h-[200px]"
			>
				<img
					src={placeholder}
					class="absolute inset-0 w-full h-full object-cover rounded border"
					alt=""
				/>
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
		<Block title="Compétences" icon={BadgeCheck} color="teal">
			<div class="grid">
				{#each categories as category}
					<div class="my-2 flex flex-col gap-1">
						<h3 class="text-lg">{category.name}</h3>
						<ul class="flex gap-12">
							{#each category.skills as skill}
								<li class="flex gap-2 items-center">
									<span class="flex items-center gap-2">
										> <img src={skill.icon} alt="" class="w-4" />
										{skill.name}
									</span>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</Block>
		<Block title="Projets" icon={Presentation} />
		<Block title="Réglages" icon={Settings}>
			<ul class="flex gap-2 justify-evenly items-center">
				<li><Languages size={40} /></li>
				<li><Moon size={40} /></li>
				<li><Palette size={40} /></li>
			</ul>
		</Block>
	</div>

	<div class="grid">
		<Block title="Formation" icon={GraduationCap}>
			<div class="flex flex-col gap-4">
				<FormationItem
					title="BAC+3 Développeur d'application Web"
					year="2025"
					location="La Manu Le Havre"
					description="Formation de SvelteKit"
				/>
				<FormationItem
					title="BAC+2 Développeur intégrateur Web"
					year="2024"
					location="Scholarfab Le Havre"
					description="Formation de SvelteKit"
				/>
				<FormationItem
					title="Master Linguistique et enseignement du Français"
					year="2021"
					location="Université Caen Normandie"
					description="Formation de SvelteKit"
				/>
			</div>
		</Block>
		<Block title="Expérience professionnelle" icon={BriefcaseBusiness}>
			<div class="flex flex-col gap-4">
				<FormationItem
					title="Développeur full-stack"
					year="2024-2026"
					location="Opteam Interactive"
					description="Formation de SvelteKit"
				/>
				<FormationItem
					title="Designer Web / Développeur full-stack"
					year="2024"
					location="Enerco SARL"
					description="Formation de SvelteKit"
				/>
				<FormationItem
					title="Stage en développement Web"
					year="2023"
					location="Opteam Interactive"
					description="Formation de SvelteKit"
				/>
				<FormationItem
					title="Assistant de français à Ottawa (Canada)"
					year="2019"
					location="Carleton University"
					description="Formation de SvelteKit"
				/>
			</div>
		</Block>
	</div>
</div>
