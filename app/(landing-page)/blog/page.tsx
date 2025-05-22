"use client"

import { useState } from "react"
import BlogCard from "@/components/blog-card"
import { Button } from "@/components/ui/button"

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "5 Steps To Get Healthy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    image: "https://images.unsplash.com/photo-1556911073-52527ac43761?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "health",
    date: "2024-03-01",
  },
  {
    id: 2,
    title: "Benefits of Natural Coffee",
    description:
      "Discover the amazing health benefits of drinking natural, organic coffee and how it can improve your daily life.",
    image: "https://images.unsplash.com/photo-1629248989876-07129a68946d?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "coffee",
    date: "2024-03-02",
  },
  {
    id: 3,
    title: "Understanding Coffee Quality",
    description:
      "Learn how to identify high-quality coffee beans and what makes premium coffee stand out from regular varieties.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "education",
    date: "2024-03-03",
  },
  {
    id: 4,
    title: "Natural Energy Boosters",
    description:
      "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image: "/placeholder.svg?height=400&width=600",
    category: "health",
    date: "2024-03-04",
  },
]

// Get unique categories from blog posts
const categories = ["all", ...new Set(blogPosts.map((post) => post.category))]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredPosts =
    selectedCategory === "all" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  return (
    <div className="min-h-screen bg-[#08112E] pb-16">
      {/* Main Content */}
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 font-raleway text-white">Bimaco Blog</h1>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant="outline"
              className={`rounded-full px-6 py-2 font-montserrat ${selectedCategory === category
                ? "bg-[#B79237] text-white hover:bg-[#B79237]/90"
                : "bg-darkBlue text-white hover:bg-[#B79237]/10"
                }`}
            >
              #{category}
            </Button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

