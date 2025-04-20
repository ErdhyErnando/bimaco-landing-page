import { Coffee, Heart, Star, Zap, Shield, Trophy } from "lucide-react";

const features = [
  {
    icon: Coffee,
    title: "Premium Quality",
    description: "Bahan berkualitas tinggi untuk hasil terbaik",
  },
  {
    icon: Heart,
    title: "100% Natural",
    description: "Tanpa bahan kimia berbahaya",
  },
  {
    icon: Star,
    title: "Best Seller",
    description: "Produk terlaris dengan review positif",
  },
  {
    icon: Zap,
    title: "Fast Effect",
    description: "Hasil yang cepat dan tahan lama",
  },
  {
    icon: Shield,
    title: "Safe & Tested",
    description: "Teruji klinis dan aman dikonsumsi",
  },
  {
    icon: Trophy,
    title: "Award Winning",
    description: "Penghargaan kualitas internasional",
  },
];

export default function WhyBimacoSection() {
  return (
    <section id="why-bima" className="w-full py-16 px-6 md:px-12 relative">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-raleway text-white">
        WHY BIMACO?
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="relative pt-8 group">
              {/* Icon Circle */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-darkBlue flex items-center justify-center border-4 border-white shadow-lg transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(183,146,55,0.7)] group-hover:scale-110 group-hover:border-[#B79237]">
                <Icon className="w-8 h-8 text-[#B79237] transition-all duration-300 group-hover:text-white" />
              </div>

              {/* Card */}
              <div className="bg-[#B79237] rounded-xl p-6 pt-12 text-center min-h-[200px] flex flex-col items-center justify-center">
                <h3 className="text-xl font-bold mb-2 font-montserrat text-white">
                  {feature.title}
                </h3>
                <p className="text-sm font-montserrat text-white/90">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Separator Line */}
      <div className="mt-24 mb-8 max-w-4xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-[#B79237] to-transparent opacity-70"></div>
      </div>
    </section>
  );
}
