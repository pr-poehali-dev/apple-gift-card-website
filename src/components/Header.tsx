
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-[#141414]/90 backdrop-blur-md text-white sticky top-0 z-50">
      <div className="apple-container">
        <div className="flex items-center justify-between h-12 md:h-14">
          {/* Logo */}
          <Link to="/" className="text-2xl" aria-label="Apple">
            <svg height="24" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg" className="fill-current">
              <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
            </svg>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-sm">
            <Link to="/" className={`${isActive('/') ? 'font-medium' : 'opacity-80 hover:opacity-100'}`}>Главная</Link>
            <Link to="/catalog" className={`${isActive('/catalog') ? 'font-medium' : 'opacity-80 hover:opacity-100'}`}>Каталог</Link>
            <Link to="/how-to-use" className={`${isActive('/how-to-use') ? 'font-medium' : 'opacity-80 hover:opacity-100'}`}>Как использовать</Link>
            <Link to="/faq" className={`${isActive('/faq') ? 'font-medium' : 'opacity-80 hover:opacity-100'}`}>FAQ</Link>
            <Link to="/contact" className={`${isActive('/contact') ? 'font-medium' : 'opacity-80 hover:opacity-100'}`}>Контакты</Link>
          </nav>

          {/* Mobile menu toggle */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#141414] absolute w-full">
          <nav className="flex flex-col apple-container py-4 space-y-4 text-lg">
            <Link to="/" className={`py-2 ${isActive('/') ? 'font-medium' : ''}`} onClick={() => setIsMenuOpen(false)}>Главная</Link>
            <Link to="/catalog" className={`py-2 ${isActive('/catalog') ? 'font-medium' : ''}`} onClick={() => setIsMenuOpen(false)}>Каталог</Link>
            <Link to="/how-to-use" className={`py-2 ${isActive('/how-to-use') ? 'font-medium' : ''}`} onClick={() => setIsMenuOpen(false)}>Как использовать</Link>
            <Link to="/faq" className={`py-2 ${isActive('/faq') ? 'font-medium' : ''}`} onClick={() => setIsMenuOpen(false)}>FAQ</Link>
            <Link to="/contact" className={`py-2 ${isActive('/contact') ? 'font-medium' : ''}`} onClick={() => setIsMenuOpen(false)}>Контакты</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
