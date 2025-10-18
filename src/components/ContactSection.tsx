import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Instagram, MessageCircle, Clock } from 'lucide-react';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "WhatsApp",
      info: "+62 823 8691 7237 (Delviani Marzal, M.Pd.)",
      action: "https://wa.me/6282386917237"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "WhatsApp",
      info: "+62 812 6810 1493 (Alfianri, S.Pd.)",
      action: "https://wa.me/6281268101493"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "humasmanicsiak@gmail.com",
      action: "mailto:humasmanicsiak@gmail.com"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram",
      info: "@harlah_icsi",
      action: "https://www.instagram.com/harlah_icsi"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Lokasi & <span className="text-yellow-500">Kontak</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Hubungi panitia untuk informasi lebih lanjut atau kunjungi langsung kampus kami
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="space-y-6">
            <Card className="overflow-hidden shadow-xl border-0">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-yellow-500"></div>
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-blue-50 to-yellow-50 p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2 flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-yellow-500" />
                    MAN Insan Cendekia Siak
                  </h3>
                  <p className="text-gray-700">
                    Jl. Pemda No.Km 11, Perawang Bar., Kec. Tualang, Kabupaten Siak, Riau 28685
                  </p>
                </div>
                <div className="h-80 bg-gray-200 relative overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.5326127911317!2d101.56108557501247!3d0.6856847993076299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d44e5c7392bc85%3A0x90f4a1e1a9464d9b!2sMAN%20Insan%20Cendekia%20Siak!5e0!3m2!1sid!2sid!4v1760531318843!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-yellow-500" />
                  Jam Operasional Panitia
                </h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Senin - Jumat</span>
                    <span className="font-medium">08:00 - 16:00 WIB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu</span>
                    <span className="font-medium">08:00 - 12:00 WIB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Minggu</span>
                    <span className="font-medium text-red-500">Tutup</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="grid gap-6">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-blue-500 to-yellow-500"></div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-r from-blue-100 to-yellow-100 rounded-full text-blue-600 group-hover:scale-110 transition-transform duration-300">
                        {contact.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-900">{contact.title}</h3>
                        <p className="text-gray-600">{contact.info}</p>
                      </div>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400"
                    >
                      <a href={contact.action} target="_blank" rel="noopener noreferrer">
                        Hubungi
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              ))}
            </div>

            <div className="text-center p-6 bg-gradient-to-r from-yellow-50 to-blue-50 rounded-2xl">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Ikuti Media Sosial MAN IC Siak</h3>
              <p className="text-gray-600 mb-4">Dapatkan update terbaru seputar kegiatan Kami</p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.instagram.com/manic_siak" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </a>
                </Button>
              </div>
            </div>

            <Card className="bg-gradient-to-r from-blue-900 to-blue-800 text-white border-0 shadow-xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Butuh Bantuan?</h3>
                <p className="text-blue-100 mb-6">
                  Tim panitia siap membantu Anda 24/7 melalui WhatsApp untuk pertanyaan seputar pendaftaran dan teknis lomba.
                </p>
                <Button
                  asChild
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-semibold rounded-full"
                >
                  <a href="https://wa.me/6282386917237" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}