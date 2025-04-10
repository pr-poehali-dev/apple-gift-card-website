import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroBanner from '@/components/HeroBanner';
import FeatureSection from '@/components/FeatureSection';
import GiftCardSection from '@/components/GiftCardSection';
import HowItWorks from '@/components/HowItWorks';
import Checkout from '@/components/Checkout';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroBanner />
        <FeatureSection />
        <GiftCardSection />
        <HowItWorks />
        <Checkout />
      </main>
      <Footer />
    </div>
  );
};

export default Index;