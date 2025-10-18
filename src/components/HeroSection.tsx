import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToCompetitions = () => {
    document.getElementById('competitions')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
              HarLah 10 Tahun
            </span>
            <br />
            <span className="text-yellow-400">MAN Insan Cendekia Siak</span>
          </h1>
        </div>
        
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <p className="text-xl md:text-2xl text-blue-100 mb-8 font-medium">
            Mewujudkan Generasi Emas Melayu yang Cendekia dan Berwawasan Ekoteologi
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-white opacity-70" />
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <Button 
              onClick={scrollToCompetitions}
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Daftar Sekarang
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}