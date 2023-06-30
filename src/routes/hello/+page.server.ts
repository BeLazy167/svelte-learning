import type { PageServerLoad } from './$types';

export const load = (async () => {
	// {"userId":1,"id":1,"title":"delectus aut autem","completed":false}
	return {
		userId: Math.floor(Math.random() * 100),
		id: 1,
		title: 'Random Data',
		completed: false
	};
}) satisfies PageServerLoad;
