
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Send
} from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="apple-container py-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-center mb-4">Связаться с нами</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Есть вопросы или нужна помощь? Заполните форму ниже, и мы свяжемся с вами в ближайшее время
          </p>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-medium mb-6">Отправить сообщение</h2>
              <form className="space-y-6">
                <div className="space-y-3">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Ваше имя
                  </label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="Иван Иванов" 
                    required 
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-apple-blue"
                  />
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    required 
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-apple-blue"
                  />
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="subject" className="block text-sm font-medium">
                    Тема
                  </label>
                  <Input 
                    id="subject" 
                    type="text" 
                    placeholder="Вопрос о заказе" 
                    required 
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-apple-blue"
                  />
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Сообщение
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Опишите ваш вопрос или проблему..." 
                    required 
                    className="w-full p-3 border rounded-lg min-h-[150px] focus:ring-2 focus:ring-apple-blue"
                  />
                </div>
                
                <Button className="w-full py-6 bg-apple-blue hover:bg-apple-blueHover">
                  <Send className="mr-2 h-5 w-5" />
                  Отправить сообщение
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-medium mb-6">Контактная информация</h2>
              
              <div className="space-y-8">
                <div className="bg-[#f5f5f7] p-6 rounded-xl">
                  <div className="flex">
                    <div className="mr-4 h-12 w-12 bg-white rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-apple-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-gray-600 mb-2">Для общих вопросов:</p>
                      <a href="mailto:support@applegiftcards.ru" className="text-apple-blue hover:underline">
                        support@applegiftcards.ru
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#f5f5f7] p-6 rounded-xl">
                  <div className="flex">
                    <div className="mr-4 h-12 w-12 bg-white rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-apple-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Телефон</h3>
                      <p className="text-gray-600 mb-2">Пн-Пт, 9:00 - 18:00:</p>
                      <a href="tel:+78001234567" className="text-apple-blue hover:underline">
                        +7 (800) 123-45-67
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#f5f5f7] p-6 rounded-xl">
                  <div className="flex">
                    <div className="mr-4 h-12 w-12 bg-white rounded-full flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-apple-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Чат поддержки</h3>
                      <p className="text-gray-600 mb-2">Доступен 24/7:</p>
                      <button className="text-apple-blue hover:underline">
                        Начать чат с оператором
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 border border-gray-200 rounded-xl bg-white">
                <h3 className="font-medium mb-4">Часто задаваемые вопросы</h3>
                <p className="text-gray-600 mb-4">
                  Возможно, вы найдете ответ на свой вопрос в нашем разделе FAQ
                </p>
                <a 
                  href="/faq" 
                  className="inline-block text-apple-blue hover:underline font-medium"
                >
                  Перейти к FAQ
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
