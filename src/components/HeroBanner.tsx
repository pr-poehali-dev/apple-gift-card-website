const HeroBanner = () => {
  return (
    <div className="bg-apple-gray py-14 md:py-20">
      <div className="apple-container text-center">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Apple Gift Card
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 mb-6 max-w-2xl mx-auto">
          Один подарок. Бесконечные возможности.
        </p>
        <p className="max-w-2xl mx-auto mb-8 text-gray-600">
          Подарите близким возможность приобрести любимые приложения, игры, музыку, фильмы, сериалы, iCloud и многое другое.
        </p>
        <a href="#gift-cards" className="apple-button inline-block">
          Выбрать Gift Card
        </a>
      </div>
    </div>
  );
};

export default HeroBanner;