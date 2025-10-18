import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CompetitionSection from '@/components/CompetitionSection';
import TimelineSection from '@/components/TimelineSection';
import RegistrationForm from '@/components/RegistrationForm';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen font-['Poppins']">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CompetitionSection />
      <TimelineSection />
      {/* <RegistrationForm /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}