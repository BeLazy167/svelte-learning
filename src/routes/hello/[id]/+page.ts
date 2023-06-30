import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const ref = params.id;

	const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${ref}`).then((r) =>
		r.json()
	);

	return res;
}) satisfies PageLoad;
