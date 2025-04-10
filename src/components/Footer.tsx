import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f7] text-[#6e6e73] text-sm mt-16">
      <div className="apple-container py-8">
        <div className="border-b border-[#d2d2d7] pb-8">
          <p className="max-w-[980px]">
            Стоимость в рублях указана для образовательных целей. Подарочные карты Apple Gift необходимо активировать в App Store. 
            Для покупки и использования подарочных карт требуется Apple ID и принятие соответствующих условий использования. 
          </p>
        </div>
        
        <div className="py-5 flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <p>© 2023 Apple Inc. Все права защищены.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-xs">
            <Link to="/" className="hover:underline">Политика конфиденциальности</Link>
            <Link to="/" className="hover:underline">Условия использования</Link>
            <Link to="/" className="hover:underline">Продажи и возврат</Link>
            <Link to="/" className="hover:underline">Юридическая информация</Link>
            <Link to="/" className="hover:underline">Карта сайта</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;