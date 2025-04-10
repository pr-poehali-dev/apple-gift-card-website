const steps = [
  {
    number: '01',
    title: 'Выберите номинал',
    description: 'Доступны карты на 1 000 ₽, 2 500 ₽ и 5 000 ₽'
  },
  {
    number: '02',
    title: 'Оформите заказ',
    description: 'Укажите email или телефон получателя'
  },
  {
    number: '03',
    title: 'Активируйте карту',
    description: 'Погасите код в App Store или iTunes Store'
  }
];

const HowItWorks = () => {
  return (
    <div className="bg-apple-gray py-12">
      <div className="apple-container">
        <h2 className="text-3xl font-semibold text-center mb-12">Как это работает</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-apple-blue font-medium text-lg mb-2">{step.number}</div>
              <h3 className="text-xl font-medium mb-2">{step.title}</h3>
              <p className="text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;