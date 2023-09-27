
import { createClient } from '$lib/prismicio';

export const prerender = true

const prismicToken = import.meta.env.VITE_PRISMIC_TOKEN

export async function load({ fetch, request }) {
    // Prismic.io link
	const client = createClient('fdnd-tribes',
    {
        fetch,
        request,
        accesToken: prismicToken
    })

    const page = await client.getByUID('squad', 'squad_collection', {'fetchLinks': ['singlesquad.squad_name']});

    // console.log(page);
    return page.data
}