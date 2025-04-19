"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const images = [
  "/placeholder.svg?height=800&width=600",
  "/placeholder.svg?height=800&width=600",
  "/placeholder.svg?height=800&width=600",
  "/placeholder.svg?height=800&width=600",
]

function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={src || "/placeholder.svg"} alt={`Affiliate Success ${index + 1}`} fill className="object-cover" />
        </div>
      ))}
    </>
  )
}

export default function AffiliateSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="w-full min-h-screen mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Content */}
        <div className="bg-gradient-to-br from-white to-[#e8e8f0] p-8 md:p-16 flex flex-col justify-center">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-raleway text-darkBlue">
              Gabung Jadi Agen Kami!!!
            </h2>
            <p className="text-lg md:text-xl mb-8 font-montserrat text-darkBlue/80">
              dapatkan komisi sampai 50% setiap pembelian.
            </p>
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button className="bg-[#B79237] hover:bg-[#B79237]/90 text-white font-montserrat px-8 py-6 rounded-full text-lg">
                  Syarat & Ketentuan
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="font-raleway text-xl">Syarat & Ketentuan</DialogTitle>
                  <DialogDescription className="font-montserrat">
                    <div className="mt-4 space-y-4">
                      <h3 className="font-semibold text-foreground">Persyaratan Umum:</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Minimal usia 18 tahun</li>
                        <li>Memiliki KTP yang valid</li>
                        <li>Memiliki rekening bank aktif</li>
                        <li>Bersedia mengikuti training produk</li>
                      </ul>

                      <h3 className="font-semibold text-foreground pt-2">Komisi & Pembayaran:</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Komisi 50% dari setiap penjualan produk</li>
                        <li>Pembayaran komisi setiap minggu</li>
                        <li>Minimum withdraw Rp 100.000</li>
                        <li>Bonus tambahan untuk pencapaian target</li>
                      </ul>

                      <p className="text-sm text-muted-foreground pt-4">
                        *Syarat dan ketentuan dapat berubah sewaktu-waktu
                      </p>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Right Image Slideshow */}
        <div className="relative min-h-[400px] lg:min-h-screen">
          <ImageSlideshow />
        </div>
      </div>
    </section>
  )
}

