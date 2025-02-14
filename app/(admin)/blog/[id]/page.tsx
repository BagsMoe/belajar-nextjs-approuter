// server componen
// export default async function BlogDetail ( {params, }: {params: Promise<{id:string}>}) {
//     const id = (await params).id
//     return (
//         <div>
//             Blog Detail page {id}
//         </div>
//     )
// }

"use client"
import { useParams, useSearchParams } from "next/navigation"

export default function BlogDetail () {
    const params = useParams()
    const search = useSearchParams()
    const query = Object.fromEntries(search.entries())
    return (
        <div>
            Blog Detail page {` dynamic : ${params.id},user : ${query.user}, age : ${query.age}`}
        </div>
    )
}