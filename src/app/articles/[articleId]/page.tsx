'use client'


//async await on server side to await params and searchParams
//{use} is a react hook that allows you to use async/await on the server side


import Link from "next/link";
import { use } from "react";

export default function NewsArticle({ params, searchParams } : {
	params: Promise<{ articleId: string }>;
	searchParams: Promise<{ lang?: 'en' | 'es' | 'fr' }>;
}
	
){

	const { articleId } = use(params);
	const { lang = 'en' } = use(searchParams);
	return <div>
		<h1>News Article {articleId}</h1>
		<p>Reading in {lang}</p>

		<Link href={`/articles/${articleId}?lang=en`}>English</Link>
		<Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
		<Link href={`/articles/${articleId}?lang=fr`}>French</Link>
	</div>
}
