import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"

interface BlogPost {
  id: number
  title: string
  description: string
  image: string
  category: string
  date: string
}

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.id}`}>
      <Card className="overflow-hidden group bg-[#B79237] border-none transition-transform duration-300 hover:-translate-y-1">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden p-3">
          <div className="relative w-full h-full overflow-hidden border-4 border-[#C9AE6A] rounded-lg">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-2">
          <h2 className="text-lg font-bold mb-2 font-montserrat text-white">{post.title}</h2>
          <p className="text-sm mb-4 font-montserrat text-white/80 line-clamp-2">{post.description}</p>

          {/* Category Tag */}
          <div className="inline-block bg-white/90 text-darkBlue px-3 py-1 rounded-full text-sm font-montserrat">
            #{post.category}
          </div>
        </div>
      </Card>
    </Link>
  )
}

