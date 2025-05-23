import Link from "next/link";

export default function Home() {
	return (
		<div>
			<h1>Home page</h1>
				<div>
					<Link href='/blog'>
						Blog
					</Link>
				</div>

				<div>
					<Link href='/products'>
						Products
					</Link>

					<Link href='/articles/breaking-news-123?lang=en'>Read in English</Link>
					<Link href='/articles/breaking-news-123?lang=fr'>Read in French</Link>
				</div>
		</div>
	)
}
