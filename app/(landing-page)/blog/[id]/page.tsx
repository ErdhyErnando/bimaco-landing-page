import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

// This would typically come from a database or API
const blogPosts = [
  {
    id: 1,
    title: "5 Steps To Get Healthy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    image: "/placeholder.svg?height=400&width=600",
    category: "health",
    date: "2024-03-01",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
      <h2>Step 1: Regular Exercise</h2>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
      
      <h2>Step 2: Balanced Diet</h2>
      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
    `,
  },
  // Add more blog posts...
]

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === Number.parseInt(params.id))

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="min-h-screen bg-[#08112E] pb-16">
      <div className="container mx-auto px-4 pt-24">
        <Link href="/blog">
          <Button variant="ghost" className="mb-8 text-white hover:text-[#B79237]">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <article className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-xl">
          {/* Hero Image */}
          <div className="relative aspect-[21/9]">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="inline-block bg-[#B79237] text-white px-3 py-1 rounded-full text-sm font-montserrat mb-4">
              #{post.category}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-raleway text-darkBlue">{post.title}</h1>

            <div
              className="prose prose-lg max-w-none font-montserrat"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </div>
    </div>
  )
}

