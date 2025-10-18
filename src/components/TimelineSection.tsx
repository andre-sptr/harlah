import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, CheckCircle, Clock, MapPin, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

const getTimelineStatus = (startDateStr: string, endDateStr: string) => {
  const now = new Date();
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);

  // Set waktu ke awal hari untuk perbandingan yang akurat
  now.setHours(0, 0, 0, 0);
  startDate.setHours(0, 0, 0, 0);
  endDate.setHours(0, 0, 0, 0);

  if (now > endDate) {
    return 'done'; // Sudah Lewat
  }
  if (now >= startDate && now <= endDate) {
    return 'active'; // Sedang Berlangsung
  }
  return 'upcoming'; // Akan Datang
};

export default function TimelineSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set target date (example: March 15, 2025)
  const targetDate = new Date('2025-11-19T08:00:00').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timelineData = [
    {
      phase: "Pendaftaran Peserta",
      date: "18 Oktober - 13 November 2025",
      startDate: '2025-10-18', 
      endDate: '2025-11-13',
      description: "Pendaftaran dibuka untuk peserta dari seluruh wilayah Indonesia.",
      icon: <Users className="w-5 h-5" />
    },
    {
      phase: "Pengunggahan Video",
      date: "1 - 13 November 2025",
      startDate: '2025-11-1', 
      endDate: '2025-11-13',
      description: "Periode pengunggahan video untuk peserta kategori Nasyid, Tari Kreasi, Video Pendek, dan Fotografi.",
      icon: <Users className="w-5 h-5" />
    },
    {
      phase: "Babak Penyisihan Online", // Judul dibuat lebih umum
      date: "14 November 2025",
      startDate: '2025-11-14', 
      endDate: '2025-11-14',
      description: "Penilaian babak penyisihan oleh juri untuk kategori Nasyid, Tari Kreasi, Video Pendek, dan Fotografi.", // Kalimat diperbaiki
      icon: <Clock className="w-5 h-5" />
    },
    {
      phase: "Pengumuman Finalis",
      date: "15 November 2025",
      startDate: '2025-11-15', 
      endDate: '2025-11-15',
      description: "Pengumuman 5 finalis terbaik yang lolos untuk kategori Nasyid, Tari Kreasi, Video Pendek, dan Fotografi.",
      icon: <Clock className="w-5 h-5" />
    },
    {
      phase: "Technical Meeting",
      date: "16 November 2025",
      startDate: '2025-11-16', 
      endDate: '2025-11-16',
      description: "Penjelasan teknis dan pembagian jadwal lomba melalui Zoom Meeting.",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      phase: "Acara Puncak",
      date: "19 November 2025",
      startDate: '2025-11-19', 
      endDate: '2025-11-19',
      description: "Pelaksanaan seluruh kategori lomba dan perayaan puncak HarLah.",
      icon: <MapPin className="w-5 h-5" />
    },
    {
      phase: "Pengumuman Pemenang",
      date: "19 November 2025",
      startDate: '2025-11-19', 
      endDate: '2025-11-19',
      description: "Pengumuman seluruh pemenang lomba dan acara penyerahan hadiah.",
      icon: <Users className="w-5 h-5" />
    }
  ];

  const statusConfig = {
    active: { text: 'Sedang Berlangsung', badge: 'bg-yellow-500', border: 'border-yellow-400', iconBg: 'bg-yellow-100 text-yellow-600', dot: 'bg-yellow-400 border-yellow-500' },
    upcoming: { text: 'Akan Datang', badge: '', border: 'border-gray-200', iconBg: 'bg-blue-100 text-blue-600', dot: 'bg-blue-400 border-blue-500' },
    done: { text: 'Selesai', badge: 'bg-gray-400', border: 'border-gray-300', iconBg: 'bg-gray-100 text-gray-600', dot: 'bg-gray-400 border-gray-500' }
  };

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Timeline <span className="text-yellow-500">Kegiatan</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Jadwal lengkap kegiatan HarLah 10 Tahun MAN Insan Cendekia Siak
          </p>
        </div>

        {/* Countdown */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-6">Countdown Hari Puncak</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-400">{timeLeft.days}</div>
                <div className="text-sm text-blue-200">Hari</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-400">{timeLeft.hours}</div>
                <div className="text-sm text-blue-200">Jam</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-400">{timeLeft.minutes}</div>
                <div className="text-sm text-blue-200">Menit</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-400">{timeLeft.seconds}</div>
                <div className="text-sm text-blue-200">Detik</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 h-full w-1 transform bg-gradient-to-b from-blue-300 to-yellow-300 md:left-1/2 md:-translate-x-1/2"></div>
          <div className="space-y-8">
            {timelineData.map((item, index) => {
              const status = getTimelineStatus(item.startDate, item.endDate);
              const config = statusConfig[status as keyof typeof statusConfig];
              const iconToRender = status === 'done' ? <CheckCircle className="w-5 h-5" /> : item.icon;

              return (
                <div key={item.phase} className="md:relative">
                  {/* === Tampilan untuk MOBILE (SUDAH DIPERBAIKI) === */}
                  <div className="flex items-start gap-4 md:hidden">
                    <div className="relative z-10 mt-1 flex-shrink-0">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full border-4 ${config.dot}`}>
                        <div className="text-white">{iconToRender}</div>
                      </div>
                    </div>
                    <div className="flex-grow pt-1">
                      <Card className={config.border}>
                        <CardContent className="p-4">
                          <Badge variant="secondary" className={`mb-3 ${config.badge}`}>
                            {config.text}
                          </Badge>
                          <h3 className="text-lg font-semibold text-blue-900">{item.phase}</h3>
                          <p className="text-yellow-600 font-medium text-sm mb-2">{item.date}</p>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* === Tampilan untuk DESKTOP (SUDAH DIPERBAIKI) === */}
                  <div className={`hidden md:flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <Card className={`${config.border} hover:shadow-xl transition-all`}>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`p-2 rounded-full ${config.iconBg}`}>{iconToRender}</div>
                            <Badge variant="secondary" className={config.badge}>
                              {config.text}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-semibold text-blue-900 mb-2">{item.phase}</h3>
                          <p className="text-yellow-600 font-medium mb-2">{item.date}</p>
                          <p className="text-gray-600">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="relative z-10">
                      <div className={`h-4 w-4 rounded-full border-4 ${config.dot}`}></div>
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}