'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NotFound() {

	const pathname = usePathname();
	const productId = pathname.split('/')[2];
	const reviewId = pathname.split('/')[4];
	return (
		<div>
			<h2>Review {reviewId} Not Found for product {productId}</h2>
			<Link href="/">Return Home</Link>
		</div>)
}
