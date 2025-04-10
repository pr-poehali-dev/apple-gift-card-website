import GiftCard from '@/components/GiftCard';

const GiftCardSection = () => {
  return (
    <div className="apple-container py-12">
      <h2 className="text-3xl font-semibold text-center mb-2">Выберите номинал</h2>
      <p className="text-center text-gray-500 mb-10">
        Подарите близким возможность выбора из миллионов приложений, игр, фильмов и многого другого.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GiftCard 
          price={1000} 
          description="Идеально для небольших покупок в App Store"
        />
        <GiftCard 
          price={2500} 
          description="Самый популярный вариант для подарка"
          isPopular={true}
        />
        <GiftCard 
          price={5000} 
          description="Для настоящих ценителей Apple"
        />
      </div>
    </div>
  );
};

export default GiftCardSection;