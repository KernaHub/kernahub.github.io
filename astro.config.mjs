import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://kernahub.github.io',
	integrations: [
		starlight({
			title: 'Kernadoc',
			customCss: [
				// Fichiers Fontsource pour les graisses regular et semi-bold.
				'@fontsource/jetbrains-mono/400.css',
				'@fontsource/jetbrains-mono/600.css',
				'/src/styles/custom.css',
			],
			social: {
				github: 'https://github.com/KernaHub/kernadoc',
			},
			sidebar: [
				{
					label: 'Informations',
					autogenerate: { directory: 'info' },
				},
			],
		}),
	],
});
