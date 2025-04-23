
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GiftCard from '@/components/GiftCard';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const Catalog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="apple-container py-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-center mb-4">Подарочные карты Apple</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Выберите номинал подарочной карты и подарите близкому возможность приобрести именно то, что он хочет
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <GiftCard price={1000} description="Идеально для небольших покупок" />
            <GiftCard price={2500} description="Для покупки приложений и подписок" isPopular={true} />
            <GiftCard price={5000} description="Для серьезных приобретений" />
          </div>
          
          <div className="mt-16 text-center">
            <Button size="lg" className="bg-apple-blue hover:bg-apple-blueHover">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Перейти к оформлению
            </Button>
            
            <p className="mt-4 text-sm text-gray-500">
              Подарочные карты доступны только в электронном формате
            </p>
          </div>
          
          <div className="mt-20">
            <h2 className="text-2xl font-semibold text-center mb-8">Преимущества подарочных карт Apple</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[#f5f5f7] rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🎁</span>
                </div>
                <h3 className="font-medium mb-2">Идеальный подарок</h3>
                <p className="text-gray-600 text-sm">Универсальное решение для любого случая и получателя</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[#f5f5f7] rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-medium mb-2">Мгновенная доставка</h3>
                <p className="text-gray-600 text-sm">Доставляется по электронной почте сразу после оплаты</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[#f5f5f7] rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="font-medium mb-2">Безопасно и надежно</h3>
                <p className="text-gray-600 text-sm">Привязывается к Apple ID получателя</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
