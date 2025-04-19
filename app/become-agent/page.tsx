import Image from "next/image"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BecomeAgentPage() {
  return (
    <div className="min-h-screen bg-[#08112E] pb-24">
      {/* Hero Section */}
      <div className="w-full max-w-7xl mx-auto pt-16 pb-12 px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-raleway text-white">
            Jadi Agen Resmi Bimaco
          </h1>
          <p className="text-lg md:text-xl mb-8 font-montserrat text-white/80">
            Bergabunglah dengan jaringan agen kami dan dapatkan penghasilan tambahan dengan komisi hingga 50% dari
            setiap penjualan.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Requirements & Benefits */}
          <div className="space-y-12">
            {/* Requirements Section */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-raleway text-darkBlue">Persyaratan Umum</h2>

              <ul className="space-y-4">
                {[
                  "Minimal usia 18 tahun",
                  "Memiliki KTP yang valid",
                  "Memiliki rekening bank aktif",
                  "Bersedia mengikuti training produk",
                  "Memiliki smartphone dan akses internet",
                  "Memiliki akun media sosial aktif",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-[#B79237] mr-3 mt-1 flex-shrink-0" />
                    <span className="font-montserrat text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits Section */}
            <div className="bg-[#B79237] rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-raleway text-white">Keuntungan Menjadi Agen</h2>

              <ul className="space-y-4">
                {[
                  "Komisi 50% dari setiap penjualan produk",
                  "Pembayaran komisi setiap minggu",
                  "Bonus tambahan untuk pencapaian target",
                  "Pelatihan dan dukungan pemasaran gratis",
                  "Akses ke grup komunitas agen eksklusif",
                  "Kesempatan menghadiri event khusus agen",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-white mr-3 mt-1 flex-shrink-0" />
                    <span className="font-montserrat text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Commission Structure & Registration */}
          <div className="space-y-12">
            {/* Commission Structure */}
            <div className="bg-gradient-to-br from-white to-[#e8e8f0] rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-raleway text-darkBlue">Struktur Komisi</h2>

              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-bold mb-2 font-montserrat text-darkBlue">Komisi Penjualan Langsung</h3>
                  <p className="font-montserrat text-gray-700">50% dari setiap produk yang terjual</p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-bold mb-2 font-montserrat text-darkBlue">Bonus Bulanan</h3>
                  <p className="font-montserrat text-gray-700">
                    Tambahan 5% untuk penjualan di atas 50 produk per bulan
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-bold mb-2 font-montserrat text-darkBlue">Bonus Referral</h3>
                  <p className="font-montserrat text-gray-700">
                    10% dari komisi agen yang Anda rekrut selama 3 bulan pertama
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 font-montserrat text-darkBlue">Minimum Withdraw</h3>
                  <p className="font-montserrat text-gray-700">Rp 100.000 dengan pembayaran setiap hari Jumat</p>
                </div>
              </div>
            </div>

            {/* Registration Form CTA */}
            <div className="bg-darkBlue rounded-xl p-8 shadow-lg border border-[#B79237]">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-raleway text-white">Mulai Perjalanan Anda</h2>
              <p className="font-montserrat text-white/80 mb-8">
                Isi formulir pendaftaran online dan tim kami akan menghubungi Anda dalam 1x24 jam untuk proses
                selanjutnya.
              </p>

              <Button className="w-full py-6 text-lg bg-[#B79237] hover:bg-[#B79237]/90 text-white font-montserrat rounded-full flex items-center justify-center">
                Daftar Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-sm text-white/60 mt-4 text-center font-montserrat">
                Dengan mendaftar, Anda menyetujui syarat dan ketentuan yang berlaku
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 font-raleway text-white">Kisah Sukses Agen Kami</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ahmad Rizky",
                role: "Agen Sejak 2022",
                quote:
                  "Penghasilan bulanan saya meningkat 3x lipat sejak menjadi agen Bimaco. Produknya sangat mudah dijual karena kualitasnya terbukti.",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Siti Nurhaliza",
                role: "Agen Premium",
                quote:
                  "Awalnya hanya coba-coba, tapi sekarang sudah jadi penghasilan utama. Sistem komisinya sangat transparan dan pembayarannya selalu tepat waktu.",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Budi Santoso",
                role: "Agen Sejak 2023",
                quote:
                  "Saya bisa menjual 100+ produk per bulan hanya dengan memanfaatkan media sosial. Dukungan dari tim Bimaco sangat membantu perkembangan bisnis saya.",
                image: "/placeholder.svg?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#B79237]">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="italic text-white/90 mb-4 font-montserrat">"{testimonial.quote}"</p>
                <h3 className="font-bold text-white font-montserrat">{testimonial.name}</h3>
                <p className="text-sm text-[#B79237] font-montserrat">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-raleway text-white">Pertanyaan Umum</h2>
          <p className="text-white/80 mb-8 font-montserrat">
            Masih memiliki pertanyaan? Hubungi kami di <span className="text-[#B79237]">support@bimaco.com</span>
          </p>

          <Link href="/faqs">
            <Button className="bg-transparent border border-white hover:bg-white hover:text-darkBlue text-white font-montserrat px-8 py-3 rounded-full">
              Lihat Semua FAQ
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

