import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Berapakah Dosis Yang Boleh diminum dalam 1 hari?",
    answer:
      "Untuk hasil optimal, disarankan mengkonsumsi 1 sachet kopi Bimaco 30-60 menit sebelum aktivitas. Maksimal 2 sachet per hari dengan jarak minimal 8 jam antar konsumsi.",
  },
  {
    question: "Apakah ada efek samping dari mengkonsumsi Kopi Bimaco?",
    answer:
      "Kopi Bimaco terbuat dari 100% bahan alami dan telah teruji klinis, sehingga aman dikonsumsi dan tidak memiliki efek samping berbahaya. Namun, disarankan untuk tidak melebihi dosis yang dianjurkan.",
  },
  {
    question: "Berapa lama efek Kopi Bimaco dapat bertahan?",
    answer:
      "Efek Kopi Bimaco dapat bertahan 3-4 jam setelah konsumsi, tergantung pada metabolisme dan aktivitas fisik masing-masing individu.",
  },
  {
    question: "Apakah Kopi Bimaco aman untuk penderita diabetes dan jantung?",
    answer:
      "Ya, Kopi Bimaco aman dikonsumsi oleh penderita diabetes dan jantung karena tidak mengandung bahan kimia obat (BKO) dan telah melalui uji klinis. Namun, tetap disarankan untuk berkonsultasi dengan dokter sebelum mengkonsumsi.",
  },
  {
    question: "Bagaimana cara menjadi agen resmi Kopi Bimaco?",
    answer:
      "Untuk menjadi agen resmi Kopi Bimaco, Anda dapat mendaftar melalui website kami atau menghubungi customer service. Syarat minimal usia 18 tahun, memiliki KTP yang valid, dan mengikuti training produk yang kami sediakan.",
  },
]

export default function FaqsPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 font-raleway text-darkBlue">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-gray-600 mb-12 font-montserrat">
          Temukan jawaban untuk pertanyaan yang sering diajukan tentang Kopi Bimaco dan program keagenan kami.
        </p>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6 py-2">
              <AccordionTrigger className="text-left font-montserrat text-lg hover:text-[#B79237] hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-montserrat text-gray-600">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

