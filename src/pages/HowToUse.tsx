
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';

const HowToUse = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="apple-container py-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-center mb-4">Как использовать подарочную карту</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Простое руководство по активации и использованию подарочной карты Apple
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-2xl font-medium mb-6">Активация карты</h2>
                <ol className="space-y-6">
                  <li className="flex">
                    <div className="mr-4 flex-shrink-0 h-8 w-8 rounded-full bg-apple-blue text-white flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Получите карту</h3>
                      <p className="text-gray-600 text-sm">Проверьте электронную почту или сообщения для получения цифрового кода карты.</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="mr-4 flex-shrink-0 h-8 w-8 rounded-full bg-apple-blue text-white flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Откройте App Store</h3>
                      <p className="text-gray-600 text-sm">Запустите приложение App Store на своем устройстве Apple.</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="mr-4 flex-shrink-0 h-8 w-8 rounded-full bg-apple-blue text-white flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Войдите в аккаунт</h3>
                      <p className="text-gray-600 text-sm">Убедитесь, что вы вошли в свой Apple ID.</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="mr-4 flex-shrink-0 h-8 w-8 rounded-full bg-apple-blue text-white flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Активируйте карту</h3>
                      <p className="text-gray-600 text-sm">Нажмите на свой профиль, выберите «Пополнить счет» и введите или отсканируйте код.</p>
                    </div>
                  </li>
                </ol>
              </div>
              
              <div>
                <h2 className="text-2xl font-medium mb-6">Использование средств</h2>
                <div className="bg-[#f5f5f7] rounded-xl p-6 mb-8">
                  <h3 className="font-medium mb-4">Доступные покупки:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-apple-blue mr-2 flex-shrink-0 mt-0.5" />
                      <span>Приложения и игры из App Store</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-apple-blue mr-2 flex-shrink-0 mt-0.5" />
                      <span>Подписки (Apple Music, Apple TV+, iCloud+)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-apple-blue mr-2 flex-shrink-0 mt-0.5" />
                      <span>Покупки внутри приложений</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-apple-blue mr-2 flex-shrink-0 mt-0.5" />
                      <span>Фильмы и сериалы в iTunes Store</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-apple-blue mr-2 flex-shrink-0 mt-0.5" />
                      <span>Книги в Apple Books</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-[#f5f5f7] rounded-xl p-6">
                  <h3 className="font-medium mb-2">Проверка баланса</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Чтобы проверить текущий баланс вашего счета Apple ID:
                  </p>
                  <ol className="space-y-2 text-gray-600 text-sm">
                    <li>1. Откройте App Store</li>
                    <li>2. Нажмите на иконку профиля в правом верхнем углу</li>
                    <li>3. Ваш баланс будет отображаться под именем</li>
                  </ol>
                </div>
              </div>
            </div>
            
            <div className="mt-16 p-6 border border-gray-200 rounded-xl bg-white">
              <h2 className="text-xl font-medium mb-4">Важные примечания</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Подарочные карты Apple не имеют срока действия</li>
                <li>• Средства нельзя перевести другому пользователю</li>
                <li>• Невозможно обменять карту на наличные</li>
                <li>• Для активации карты требуется Apple ID</li>
                <li>• Средства можно использовать только в цифровых магазинах Apple</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowToUse;
