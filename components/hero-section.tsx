import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:w-1/2 space-y-6">
        <div className="space-y-2">
          <h1 className="text-5xl md:text-6xl font-bold font-raleway">Kopi Premium</h1>
          <h2 className="text-2xl md:text-3xl font-raleway">untuk pasangan suami istri</h2>
        </div>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
          <Link
            href="/buy-now"
            className="bg-[#B79237] text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all text-center font-montserrat"
          >
            Beli Sekarang
          </Link>
          <Link
            href="/become-agent"
            className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:bg-opacity-10 transition-all text-center font-montserrat"
          >
            Jadi Agen
          </Link>
        </div>

        <p className="text-sm italic text-gray-300 max-w-md pt-4 font-montserrat">
          *tanpa bahan kimia obat (BKO), aman untuk penderita diabetes & jantung
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0">
        <div className="relative w-64 h-64 md:w-80 md:h-80 bg-[#B79237] rounded-full flex items-center justify-center">
          <Image
            src="/placeholder.svg?height=300&width=300"
            alt="Kopi Premium"
            width={300}
            height={300}
            className="object-contain p-6"
          />
        </div>
      </div>
    </section>
  )
}

