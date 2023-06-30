import type { PageServerLoad, Actions } from './$types';

export const load = (async ({ cookies }) => {
	const randomName = cookies.get('randomName');
	return {
		randomName
	};
}) satisfies PageServerLoad;

export const actions = {
	temp: async ({ request, cookies }) => {
		const formData = await request.formData();
		const randomName = formData.get('randomName') as string;
		cookies.set('randomName', randomName);
	},
	actionname: async ({ request, cookies }) => {
		const formData = await request.formData();
		const randomName = formData.get('randomName') as string;
		cookies.set('randomName', randomName.toUpperCase());
	}
} satisfies Actions;
