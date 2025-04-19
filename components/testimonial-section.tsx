"use client"

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"

// Testimonial data
const testimonials = [
  {
    rating: 5,
    highlight: "efeknya kerasa banget!",
    description: "setelah minum 2x istri saya suruh restock!",
    image: "/placeholder.svg?height=60&width=60",
    name: "Deez Nuts",
  },
  {
    rating: 5,
    highlight: "efeknya kerasa banget!",
    description: "setelah minum 2x istri saya suruh restock!",
    image: "/placeholder.svg?height=60&width=60",
    name: "Tiger",
  },
  {
    rating: 5,
    highlight: "efeknya kerasa banget!",
    description: "setelah minum 2x istri saya suruh restock!",
    image: "/placeholder.svg?height=60&width=60",
    name: "Deez Nuts",
  },
  // Add more testimonials as needed
  {
    rating: 4,
    highlight: "efeknya tahan 3 jam!",
    description: "setelah minum 1x istri saya suruh restock!",
    image: "/placeholder.svg?height=60&width=60",
    name: "Boofa",
  },
]

export default function TestimonialSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="w-full py-16 px-6 md:px-12">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-raleway text-white">Dinikmati Oleh</h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4">
                <div className="bg-[#F5F5DC] rounded-2xl p-6 flex flex-col items-center text-center">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-[#B79237] text-[#B79237]" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <h3 className="text-xl font-bold mb-2 font-montserrat text-black">{testimonial.highlight}</h3>
                  <p className="text-sm mb-6 font-montserrat text-gray-600">{testimonial.description}</p>

                  {/* Profile Image */}
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Name */}
                  <p className="font-medium font-montserrat text-black">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === selectedIndex ? "bg-[#B79237] w-8" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

