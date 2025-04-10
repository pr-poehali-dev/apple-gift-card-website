import { Gift, ShoppingBag, CreditCard } from 'lucide-react';

const features = [
  {
    icon: <Gift className="h-10 w-10 text-apple-blue" />,
    title: 'Идеальный подарок',
    description: 'Apple Gift Card - универсальный подарок для любителей устройств Apple и цифрового контента.'
  },
  {
    icon: <ShoppingBag className="h-10 w-10 text-apple-blue" />,
    title: 'Бесконечные возможности',
    description: 'Используйте для покупки приложений, игр, музыки, фильмов, подписки Apple Music и Apple TV+.'
  },
  {
    icon: <CreditCard className="h-10 w-10 text-apple-blue" />,
    title: 'Моментальная доставка',
    description: 'После оплаты код активации будет отправлен на указанный email или номер телефона.'
  }
];

const FeatureSection = () => {
  return (
    <div className="bg-white py-12" id="gift-cards">
      <div className="apple-container">
        <h2 className="text-3xl font-semibold text-center mb-12">Почему стоит выбрать Apple Gift Card</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;