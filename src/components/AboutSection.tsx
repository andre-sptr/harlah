import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Star, BookOpen } from 'lucide-react';

export default function AboutSection() {
  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "10 Tahun Berprestasi",
      description: "Satu dekade mengukir prestasi gemilang di tingkat nasional"
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      title: "Ribuan Alumni",
      description: "Telah meluluskan ribuan siswa berprestasi dan berakhlak mulia"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Madrasah Unggul",
      description: "Diakui sebagai madrasah unggulan dengan standar nasional"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-yellow-500" />,
      title: "Pendidikan Berkualitas",
      description: "Menggabungkan pendidikan agama dan sains modern"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Tentang <span className="text-yellow-500">HarLah Ke-10</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Perayaan HarLah ke-10 MAN Insan Cendekia Siak merupakan momentum bersejarah yang menandai 
            satu dekade perjalanan dalam mewujudkan visi menjadi madrasah unggul yang menghasilkan 
            generasi beriman, berilmu, dan berprestasi. Acara ini tidak hanya sebagai refleksi atas 
            pencapaian yang telah diraih, tetapi juga sebagai semangat untuk terus berkembang dan 
            memberikan kontribusi terbaik bagi pendidikan Indonesia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-yellow-50">
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Filosofi Perayaan</h3>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              "HarLah ini bukan hanya perayaan pencapaian masa lalu, tetapi juga komitmen untuk 
              terus melangkah maju dalam mencetak generasi yang unggul dalam iman, ilmu, dan akhlak."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}