import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'Tentang' },
    { id: 'competitions', label: 'Lomba' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'contact', label: 'Kontak' },
    { href: 'https://drive.google.com/drive/folders/1uVq_JD7YVqEIzcl7DeB76WyZqqsHPsx4?hl=id', label: 'Juknis' }
  ];

  const renderNavItem = (item: any, isMobile = false) => {
    const desktopClasses = `font-medium transition-colors duration-300 hover:text-yellow-500 ${isScrolled ? 'text-gray-700' : 'text-white'}`;
    const mobileClasses = "block w-full text-left py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-300";

    const key = item.label; 

    if (item.href) {
      return (
        <a key={key} href={item.href} target="_blank" rel="noopener noreferrer" className={isMobile ? mobileClasses : desktopClasses}>
          {item.label}
        </a>
      );
    }

    return (
      <button key={key} onClick={() => scrollToSection(item.id)} className={isMobile ? mobileClasses : desktopClasses}>
        {item.label}
      </button>
    );
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src="/favicon.ico" alt="Logo MAN IC Siak" className="w-10 h-10 rounded-full object-cover" />
            <div className={`font-bold text-lg ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
              MAN Insan Cendekia Siak
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => renderNavItem(item))}
            <Button
              onClick={() => scrollToSection('competitions')}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-semibold rounded-full px-6"
            >
              Daftar Sekarang
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className={`md:hidden p-2 ${isScrolled ? 'text-blue-900' : 'text-white'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4">
            <div className="flex flex-col items-center gap-2">
              {navItems.map((item) => renderNavItem(item, true))}
              <Button
                onClick={() => {
                  scrollToSection('competitions');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full mt-2 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-semibold rounded-full"
              >
                Daftar Sekarang
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}