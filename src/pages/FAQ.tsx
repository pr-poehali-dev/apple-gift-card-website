
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="apple-container py-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-center mb-4">Часто задаваемые вопросы</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Ответы на самые распространенные вопросы о подарочных картах Apple
          </p>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg py-4">Как я получу подарочную карту после покупки?</AccordionTrigger>
                <AccordionContent className="pb-4 text-gray-600">
                  После успешной оплаты подарочная карта будет немедленно отправлена на указанный вами адрес электронной почты. 
                  Вы получите код активации и инструкции по использованию. Также, вы можете выбрать отправку карты на email получателя 
                  с возможностью добавления персонального сообщения.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg py-4">Могу ли я использовать подарочную карту для покупки устройств Apple?</AccordionTrigger>
                <AccordionContent className="pb-4 text-gray-600">
                  Нет, подарочные карты Apple Gift Card могут быть использованы только для цифровых покупок в App Store, iTunes Store, 
                  Apple Books и для оплаты подписок Apple (Apple Music, Apple TV+, iCloud+ и др.). Для покупки устройств Apple в 
                  официальных магазинах используются отдельные подарочные карты Apple Store Gift Card (в России не представлены).
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg py-4">Есть ли срок действия у подарочной карты?</AccordionTrigger>
                <AccordionContent className="pb-4 text-gray-600">
                  Нет, подарочные карты Apple не имеют срока действия. После активации средства будут доступны на вашем Apple ID 
                  без ограничения по времени до тех пор, пока вы их не используете.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg py-4">Можно ли вернуть или обменять подарочную карту?</AccordionTrigger>
                <AccordionContent className="pb-4 text-gray-600">
                  В соответствии с политикой Apple, цифровые подарочные карты не подлежат возврату или обмену, за исключением случаев, 
                  предусмотренных законодательством. После активации карты средства не могут быть переведены другому пользователю 
                  или обменены на наличные.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg py-4">Какие способы оплаты доступны при покупке?</AccordionTrigger>
                <AccordionContent className="pb-4 text-gray-600">
                  Мы принимаем оплату банковскими картами Visa, MasterCard, МИР, а также с помощью электронных платежных систем 
                  и мобильных платежей (Apple Pay, Google Pay). Все платежи обрабатываются через защищенное соединение.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg py-4">Нужен ли Apple ID для использования подарочной карты?</AccordionTrigger>
                <AccordionContent className="pb-4 text-gray-600">
                  Да, для активации и использования подарочной карты Apple необходим Apple ID. Если у получателя ещё нет 
                  Apple ID, он может создать его бесплатно на сайте Apple или при первой настройке устройства Apple.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg py-4">Что делать, если код подарочной карты не работает?</AccordionTrigger>
                <AccordionContent className="pb-4 text-gray-600">
                  Если у вас возникли проблемы с активацией подарочной карты, пожалуйста, убедитесь, что вы правильно вводите код, 
                  включая все символы и дефисы. Если проблема сохраняется, обратитесь в нашу службу поддержки через раздел «Контакты» 
                  или напрямую в службу поддержки Apple.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="mt-12 p-6 bg-[#f5f5f7] rounded-xl text-center">
              <h2 className="text-xl font-medium mb-2">Остались вопросы?</h2>
              <p className="text-gray-600 mb-4">
                Если вы не нашли ответа на свой вопрос, свяжитесь с нашей службой поддержки
              </p>
              <a 
                href="/contact" 
                className="inline-block text-apple-blue hover:underline font-medium"
              >
                Перейти к разделу контактов
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
