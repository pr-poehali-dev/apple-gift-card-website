import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { 
  Card, 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from '@/components/ui/card';

const Checkout = () => {
  const [selectedPrice, setSelectedPrice] = useState(2500);
  const [email, setEmail] = useState('');
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика оформления заказа
    alert(`Заказ оформлен! Карта на сумму ${formatPrice(selectedPrice)} будет отправлена на ${email}`);
  };

  return (
    <div className="apple-container py-12">
      <h2 className="text-3xl font-semibold text-center mb-12">Оформление заказа</h2>
      
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Ваш заказ</CardTitle>
            <CardDescription>
              Apple Gift Card будет отправлена на указанный email
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Выбранный номинал:</h3>
                <div className="grid grid-cols-3 gap-3">
                  {[1000, 2500, 5000].map((price) => (
                    <Button
                      key={price}
                      type="button"
                      variant={selectedPrice === price ? "default" : "outline"}
                      className={selectedPrice === price ? "bg-apple-blue" : ""}
                      onClick={() => setSelectedPrice(price)}
                    >
                      {formatPrice(price)}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email получателя</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@mail.ru"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <Button 
                  type="submit" 
                  className="w-full bg-apple-blue hover:bg-apple-blueHover"
                >
                  Оплатить {formatPrice(selectedPrice)}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-start text-xs text-gray-500">
            <p>Нажимая кнопку "Оплатить", вы соглашаетесь с условиями использования и политикой конфиденциальности.</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Checkout;