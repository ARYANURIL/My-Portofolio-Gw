import React from "react";
import { Code, PenTool, Video, Camera, Check } from "lucide-react";

export default function TableService() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      icon: <Code size={40} strokeWidth={1.5} />,
      description: "Menyusun baris kode untuk membangun website responsif dan interaktif dari nol. Mengubah ide menjadi aplikasi fungsional.",
      tools: ["React", "JavaScript", "Python"]
    },
    {
      id: 2,
      title: "UI/UX & Design",
      icon: <PenTool size={40} strokeWidth={1.5} />,
      description: "Merancang antarmuka pengguna yang ramah, intuitif, dan estetis untuk berbagai kebutuhan platform digital.",
      tools: ["Figma", "Canva", "Design"]
    },
    {
      id: 3,
      title: "Video & Photo Editing",
      icon: <Video size={40} strokeWidth={1.5} />,  
      description: "Merangkai potongan video menjadi cerita menarik dan sinematik serta memoles foto agar lebih hidup.",
      tools: ["CapCut", "Premiere", "Coloring"]
    },
    {
      id: 4,
      title: "Photography",
      icon: <Camera size={40} strokeWidth={1.5} />,
      description: "Mengabadikan momen berharga lewat lensa kamera dengan komposisi terbaik untuk portrait maupun acara.",
      tools: ["Sony", "Lighting", "Lightroom"]
    }
  ];

  const photographyPackages = [
    {
      name: "Personal Portrait",
      duration: "1 - 2 Jam",
      outputs: "15 Edited Photos",
      price: "Rp 500.000"
    },
    {
      name: "Event & Graduation",
      duration: "3 - 4 Jam",
      outputs: "40 Edited Photos + All Raw Files",
      price: "Rp 1.200.000"
    },
    {
      name: "Product/Commercial",
      duration: "Sesuai Project",
      outputs: "Katalog & Lisensi Komersial",
      price: "Hubungi Kontak"
    }
  ];

  return (
    <div className="bg-[#0a0a0a] text-white py-12 px-4 md:px-8">
      {/* Bagian Service Utama */}
      <div className="max-w-6xl mx-auto">
        

        {/* Grid Kartu Service */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group border border-neutral-800 bg-[#111111] p-6 rounded-sm hover:border-yellow-400 transition-all duration-300 hover:-translate-y-2 cursor-default flex flex-col justify-between"
            >
              <div>
                {/* Ikon */}
                <div className="text-yellow-400 mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">
                  {service.icon}
                </div>

                {/* Judul Service */}
                <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h3>

                {/* Deskripsi */}
                <p className="text-gray-400 leading-relaxed text-xs md:text-sm mb-6">
                  {service.description}
                </p>
              </div>

              {/* Tag/Tools */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {service.tools.map((tool, index) => (
                  <span 
                    key={index} 
                    className="text-[10px] md:text-xs border border-neutral-700 text-neutral-300 px-2.5 py-0.5 rounded-full group-hover:border-yellow-400/50 group-hover:text-yellow-200 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bagian Tabel Paket Fotografi */}
        <div className="border border-neutral-800 bg-[#111111] rounded-sm p-6 md:p-8">
          <div className="mb-6">
            <h3 className="text-2xl font-serif font-bold text-yellow-400 mb-2">
              Photography Packages
            </h3>
            <p className="text-gray-400 text-sm">
              Daftar estimasi paket dan durasi layanan fotografi yang saya sediakan.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-800 text-yellow-400 text-xs md:text-sm uppercase tracking-wider">
                  <th className="py-4 px-4 font-serif font-bold">Paket Layanan</th>
                  <th className="py-4 px-4 font-serif font-bold">Durasi Sesi</th>
                  <th className="py-4 px-4 font-serif font-bold">Output File</th>
                  <th className="py-4 px-4 font-serif font-bold text-right">Mulai Dari</th>
                </tr>
              </thead>
              <tbody className="text-xs md:text-sm divide-y divide-neutral-800/50">
                {photographyPackages.map((pkg, idx) => (
                  <tr key={idx} className="hover:bg-neutral-900/50 transition-colors group">
                    <td className="py-4 px-4 font-bold text-white group-hover:text-yellow-300 transition-colors flex items-center gap-2">
                      <Check size={16} className="text-yellow-400" />
                      {pkg.name}
                    </td>
                    <td className="py-4 px-4 text-gray-400">{pkg.duration}</td>
                    <td className="py-4 px-4 text-gray-400">{pkg.outputs}</td>
                    <td className="py-4 px-4 text-right font-mono text-yellow-400 font-bold">{pkg.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[11px] text-neutral-500 mt-6 text-center italic">
            *Harga di atas dapat disesuaikan kembali tergantung lokasi acara dan kebutuhan khusus Anda.
          </p>
        </div>

      </div>
    </div>
  );
}