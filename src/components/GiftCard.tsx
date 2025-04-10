import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export type GiftCardProps = {
  price: number;
  description: string;
  isPopular?: boolean;
};

const GiftCard = ({ price, description, isPopular = false }: GiftCardProps) => {
  const [isSelected, setIsSelected] = useState(false);
  
  const formattedPrice = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);

  return (
    <div 
      className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer relative ${
        isSelected ? 'border-apple-blue shadow-md' : 'border-gray-200 hover:shadow-sm'
      } ${isPopular ? 'bg-white/80' : 'bg-white'}`}
      onClick={() => setIsSelected(!isSelected)}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-apple-blue text-white text-xs py-1 px-3 rounded-full">
          Популярный выбор
        </div>
      )}
      
      <div className="aspect-video bg-apple-gray rounded-lg mb-4 flex items-center justify-center">
        <div className="w-[80%] h-[65%] bg-gradient-to-r from-gray-100 to-white rounded-lg shadow-md flex items-center justify-center">
          <img 
            src="/placeholder.svg" 
            alt="Apple Gift Card" 
            className="w-1/2 h-auto opacity-60"
          />
        </div>
      </div>

      <div className="text-center">
        <div className="text-2xl font-medium mb-1">{formattedPrice}</div>
        <p className="text-gray-500 text-sm mb-4">{description}</p>
        
        <Button 
          variant={isSelected ? "default" : "outline"}
          className={`w-full py-5 ${isSelected ? 'bg-apple-blue hover:bg-apple-blueHover' : ''}`}
        >
          {isSelected ? (
            <span className="flex items-center">
              <Check className="mr-2 h-4 w-4" /> Выбрано
            </span>
          ) : (
            "Выбрать"
          )}
        </Button>
      </div>
    </div>
  );
};

export default GiftCard;