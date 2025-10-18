import { Separator } from '@/components/ui/separator';
import { Heart, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/favicon.ico" // Ganti dengan path logo Anda
                alt="Logo MAN IC Siak"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold text-xl">MAN Insan Cendekia Siak</h3>
                <p className="text-blue-200 text-sm">Madrasah Unggul, Berakhlak, dan Berprestasi</p>
              </div>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Merayakan 10 tahun perjalanan dalam mencetak generasi unggul yang beriman, 
              berilmu, dan berprestasi untuk kemajuan bangsa.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-yellow-400">Menu Cepat</h4>
            <div className="space-y-2">
              {[
                { label: 'Tentang Acara', id: 'about' },
                { label: 'Kategori Lomba', id: 'competitions' },
                { label: 'Timeline Kegiatan', id: 'timeline' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-blue-200 hover:text-yellow-400 transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-yellow-400">Kontak Kami</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <p className="text-blue-100 text-sm">
                  Jl. Pemda No.Km 11, Perawang Bar., Kec. Tualang, Kabupaten Siak, Riau 28685
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-yellow-400" />
                <p className="text-blue-100">+62 822 8407 9621</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-yellow-400" />
                <p className="text-blue-100">humasmanicsiak@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-blue-700" />

        {/* Bottom Section */}
        <div className="w-full flex justify-center md:justify-end">
          <div className="text-center md:text-right">
            <p className="text-blue-200 text-sm">
              © 2025 MAN Insan Cendekia Siak.
            </p>
            <p className="text-blue-300 text-xs mt-1">
              Website resmi HarLah 10 Tahun MAN IC Siak
            </p>
          </div>
        </div>

        {/* Slogan */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-full inline-block">
            "Madrasah Unggul, Berakhlak, dan Berprestasi"
          </div>
        </div>
      </div>
    </footer>
  );
}