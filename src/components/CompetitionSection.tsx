import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trophy, Calculator, Users, Zap, Video, Camera, FlaskConical, Landmark, BookText, Pencil } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

export default function CompetitionSection() {
    const competitions = [
      {
      icon: <Users className="w-8 h-8" />,
      title: "Lomba Nasyid",
      description: "Adu bakat grup vokal Islami dalam harmoni syiar dan syair untuk siswa tingkat SMA/SMK/MA/Sederajat.",
      category: "Seni",
      color: "from-teal-500 to-teal-600",
      whatsappLink: 'https://chat.whatsapp.com/IgP5tpgfky8Ka0VMLHRpEc', 
      registrationLink: 'https://forms.gle/eTgoapDsz8yFvy7C9'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Lomba Tari Kreasi",
      description: "Kompetisi tari kreasi nusantara yang energik dan penuh makna untuk siswa tingkat SMA/SMK/MA/Sederajat.",
      category: "Seni",
      color: "from-blue-500 to-blue-600",
      whatsappLink: 'https://chat.whatsapp.com/BQqsUmnHbc1G6Xxe2yhALw', 
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe7xGA5IAybyh87ygOblcC-zRWmua7CqOQNEMiLKtx7fNOjUw/viewform?usp=header'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Lomba Fotografi Siswa",
      description: "Ajang kreativitas fotografi bertema 'Mewujudkan Generasi Berbudaya yang Cendekia dan Berwawasan Ekoteologi' untuk siswa tingkat SMA/SMK/MA/Sederajat.",
      category: "Seni",
      color: "from-indigo-500 to-indigo-600",
      whatsappLink: 'https://chat.whatsapp.com/KehGQCDFInWFG2Zw4E28nh', 
      registrationLink: 'https://forms.gle/8xdoFhia9oTvtwdM9'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Lomba Fotografi Guru",
      description: "Kompetisi kreativitas fotografi untuk para guru dengan tema 'Mewujudkan Generasi Berbudaya yang Cendekia dan Berwawasan Ekoteologi'.",
      category: "Khusus Guru",
      color: "from-pink-500 to-pink-600",
      whatsappLink: 'https://chat.whatsapp.com/JcW5UHWCqgBHNUk2wMM9Ng', 
      registrationLink: 'https://forms.gle/3PsoYpaubySzGiEw7'
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Lomba Video Pendek Guru",
      description: "Ajang kreativitas guru bertema 'Dari Perubahan Kecil Menuju Prestasi Besar: 10 Tahun Mewujudkan Generasi yang Cendekia dan Berwawasan Ekoteologi'.",
      category: "Khusus Guru",
      color: "from-green-500 to-green-600",
      whatsappLink: 'https://chat.whatsapp.com/H1NCHZmcazn04M9m9fxqTO', 
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdSU9Y4ar61rlFAbGoBc-HdYezsHPE00lCrrXYB-c4bPREXzA/viewform?usp=header'
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Olimpiade Matematika",
      description: "Ajang asah logika matematika dan kemampuan berhitung untuk siswa tingkat SMP/MTs/Sederajat.",
      category: "MIPA",
      color: "from-purple-500 to-purple-600",
      whatsappLink: 'https://chat.whatsapp.com/CLUSBVjqOPL1YsZWlwIRUF', 
      registrationLink: 'https://forms.gle/pPrr4KexMa3WLNse7'
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: "Olimpiade IPA",
      description: "Kompetisi pemahaman konsep Sains (Fisika & Biologi) untuk siswa tingkat SMP/MTs/Sederajat.",
      category: "MIPA",
      color: "from-orange-500 to-orange-600",
      whatsappLink: 'https://chat.whatsapp.com/CLUSBVjqOPL1YsZWlwIRUF', 
      registrationLink: 'https://forms.gle/pPrr4KexMa3WLNse7'
    },
    {
      icon: <Landmark className="w-8 h-8" />,
      title: "Olimpiade IPS",
      description: "Adu wawasan Ilmu Sosial (Sosiologi, Geografi, Ekonomi) untuk siswa tingkat SMP/MTs/Sederajat.",
      category: "IPS",
      color: "from-amber-500 to-amber-600",
      whatsappLink: 'https://chat.whatsapp.com/CLUSBVjqOPL1YsZWlwIRUF', 
      registrationLink: 'https://forms.gle/pPrr4KexMa3WLNse7'
    },
    {
      icon: <BookText className="w-8 h-8" />,
      title: "Olimpiade PAI",
      description: "Kompetisi pengetahuan seputar Pendidikan Agama Islam untuk siswa tingkat SMP/MTs/Sederajat.",
      category: "Keagamaan",
      color: "from-emerald-500 to-emerald-600",
      whatsappLink: 'https://chat.whatsapp.com/CLUSBVjqOPL1YsZWlwIRUF', 
      registrationLink: 'https://forms.gle/pPrr4KexMa3WLNse7'
    },
    {
      icon: <Pencil className="w-8 h-8" />,
      title: "TO SNPDB",
      description: "Simulasi ujian sebagai persiapan menghadapi Seleksi Nasional Peserta Didik Baru (SNPDB) untuk siswa tingkat SMP/MTs/Sederajat.", // Deskripsi disesuaikan
      category: "Akademik",
      color: "from-cyan-500 to-cyan-600",
      whatsappLink: 'https://chat.whatsapp.com/CLUSBVjqOPL1YsZWlwIRUF', 
      registrationLink: 'https://forms.gle/pPrr4KexMa3WLNse7'
    }
  ];

  return (
    <section id="competitions" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            Kategori <span className="text-yellow-500">Lomba</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Berbagai kompetisi menarik untuk menguji kemampuan dan bakat siswa dari seluruh Indonesia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competitions.map((competition, index) => (
            <Card 
              key={competition.title} // Changed key from index to title for best practice
              className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden hover:-translate-y-2 lg:last:col-start-2 flex flex-col" // 1. ADDED flex flex-col
            >
              <div className={`h-2 bg-gradient-to-r ${competition.color}`}></div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${competition.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {competition.icon}
                  </div>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    {competition.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 group-hover:text-yellow-600 transition-colors duration-300">
                  {competition.title}
                </h3>
              </CardHeader>
              <CardContent className="pt-0 flex flex-col flex-grow justify-between"> {/* 2. ADDED flex classes */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {competition.description}
                </p>
                <div className="mt-auto flex items-center gap-3">
                  <Button 
                    asChild
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-semibold rounded-full group-hover:shadow-lg transition-all duration-300"
                  >
                    <a 
                      href={competition.registrationLink}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      Daftar Sekarang
                    </a>
                  </Button>
                  <a 
                    href={competition.whatsappLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Gabung Grup WhatsApp"
                    className="flex-shrink-0"
                  >
                    <Button 
                      size="icon" 
                      className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-md hover:shadow-lg transform group-hover:scale-105 transition-all duration-300"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 text-blue-900 text-center">
            <h3 className="text-2xl font-bold mb-4">Hadiah Menarik Menanti!</h3>
            <p className="text-lg mb-6">
              Para pemenang di setiap kategori akan mendapatkan piala, sertifikat penghargaan, dan hadiah uang pembinaan.
            </p>
            <div className="mt-4 inline-block bg-blue-900 text-white px-6 py-3 rounded-full shadow-lg">
              <p className="text-xl font-bold tracking-wider">
                TOTAL HADIAH PULUHAN JUTA RUPIAH
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}