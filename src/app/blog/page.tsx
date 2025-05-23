import { Metadata } from "next"

export const metadata: Metadata = {
	title: {
		absolute: 'Blog',
	}
}

export default async function Blog () {
	await new Promise(resolve => {
		setTimeout(() => {
			resolve('delayed')
		}, 2000)
	})

	return <h1>Blog Page</h1>
}
