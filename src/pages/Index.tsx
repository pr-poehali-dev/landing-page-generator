import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '' });
  };

  const directions = [
    { icon: 'Music', title: 'Вокал' },
    { icon: 'Piano', title: 'Фортепиано' },
    { icon: 'Guitar', title: 'Гитара' },
    { icon: 'Drum', title: 'Барабаны' },
    { icon: 'Music2', title: 'Баян' },
    { icon: 'Theatre', title: 'Актёрское мастерство' }
  ];

  const advantages = [
    { 
      icon: 'Users',
      title: 'Гибкость',
      description: 'Занятия проходят индивидуально и в малых группах до 5 человек. Выберите удобный формат сами'
    },
    { 
      icon: 'Award',
      title: 'Опыт',
      description: 'Преподаватели - практикующие музыканты и актёры с опытом работы на сцене более 10 лет'
    },
    { 
      icon: 'Heart',
      title: 'Подход',
      description: 'Индивидуальный подход к каждому ученику. Мы учитываем ваши цели, темп обучения и музыкальные предпочтения'
    },
    { 
      icon: 'Target',
      title: 'Качество',
      description: 'Студия 35 кв.м укомплектована современным оборудованием. Запись на студии включена в стоимость уроков'
    }
  ];

  const benefits = [
    'Начните, смело и свободно',
    'Пошагайте, двигайтесь и развивайтесь',
    'Запишитесь, пойте и общайтесь'
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#4a5d6f] text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <Icon name="Music" className="text-[#4a5d6f]" size={32} />
              </div>
              <div>
                <h1 className="text-xl font-bold">Школа музыки и актёрского мастерства</h1>
                <p className="text-sm opacity-90">О`ТРАЖЕНИЕ</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:+79288289230" className="text-xl font-bold hover:opacity-80 transition-opacity">
                +7 (928) 828-92-30
              </a>
              <div className="flex gap-2">
                <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Icon name="Instagram" size={18} />
                </a>
                <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Icon name="Send" size={18} />
                </a>
                <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Icon name="MessageCircle" size={18} />
                </a>
              </div>
            </div>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 mt-4 text-sm">
            <a href="#main" className="hover:text-gray-200 transition-colors">Главная</a>
            <a href="#about" className="hover:text-gray-200 transition-colors">О нас</a>
            <a href="#teachers" className="hover:text-gray-200 transition-colors">Преподаватели</a>
            <a href="#contact" className="hover:text-gray-200 transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="main" className="relative py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#4a5d6f] mb-6">
                  Здесь начинается Ваше творческое "Я"
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Школа музыки и актёрского мастерства в Ставрополе для взрослых и детей от 4 и лет
                </p>
                <Button size="lg" className="bg-[#7a6651] hover:bg-[#6a5641] text-white px-8 py-6 text-lg">
                  Записаться на пробное занятие
                </Button>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/files/2a8b8109-ead4-4107-891d-b5d643d0997f.jpg" 
                  alt="Ученики школы" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4a5d6f] mb-12">
              Ваш путь к сцене и творчеству
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center p-6 border-2 border-[#7a6651]/20 hover:border-[#7a6651] transition-colors">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-[#4a5d6f] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      {index + 1}
                    </div>
                    <p className="text-lg font-semibold text-gray-800">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4a5d6f] mb-4">
              О школе
            </h2>
            <p className="text-center text-xl text-[#7a6651] mb-12">1 год учитель</p>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="p-6 bg-gray-50">
                  <CardContent className="pt-6">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-[#7a6651] mt-1 flex-shrink-0" size={20} />
                        <span>Дети и подростки</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-[#7a6651] mt-1 flex-shrink-0" size={20} />
                        <span>Взрослые от 18 лет</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-[#7a6651] mt-1 flex-shrink-0" size={20} />
                        <span>Чтобы развивать музыкальный слух и память</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-[#7a6651] mt-1 flex-shrink-0" size={20} />
                        <span>Научиться играть на инструменте для себя</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-gray-50">
                  <CardContent className="pt-6">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-[#7a6651] mt-1 flex-shrink-0" size={20} />
                        <span>Чтобы петь караоке в любой тональности</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-[#7a6651] mt-1 flex-shrink-0" size={20} />
                        <span>Развить актёрские способности и снять блоки</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-[#7a6651] mt-1 flex-shrink-0" size={20} />
                        <span>Развить уверенность в себе и своих талантах</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="aspect-square rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://cdn.poehali.dev/files/2a8b8109-ead4-4107-891d-b5d643d0997f.jpg"
                      alt={`Фото ${item}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#4a5d6f] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Чем занимаемся
            </h2>
            
            <div className="max-w-5xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Направления</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {directions.map((direction, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Icon name={direction.icon} size={32} />
                      </div>
                      <p className="text-sm font-medium">{direction.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#7a6651] rounded-2xl p-8 max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">Направления:</h3>
              <div className="space-y-4 text-lg">
                <p>• Вокал: эстрада, джаз, фолк, народный</p>
                <p>• Фортепиано, гитара, укулеле, баян, барабаны</p>
                <p>• Сольфеджио</p>
                <p>• Актёрское мастерство</p>
                <p>• Ораторское искусство</p>
                <p>• Английский разговорный клуб с носителем</p>
                <p>• Концерты, квартирники, мастер-классы, сольные вечера</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4a5d6f] mb-12">
              Преимущества нашей школы
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {advantages.map((advantage, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-[#7a6651]">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-[#4a5d6f] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={advantage.icon} size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-[#4a5d6f] mb-3">{advantage.title}</h3>
                    <p className="text-gray-700">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="bg-[#7a6651] text-white rounded-2xl p-8 shadow-2xl">
                <h2 className="text-3xl font-bold text-center mb-3">
                  Запишитесь на пробное занятие —
                </h2>
                <p className="text-center text-lg mb-8">
                  лучше один раз попробуете!
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Имя:"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-white text-gray-900 placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон:"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-white text-gray-900 placeholder:text-gray-500"
                    />
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <input type="checkbox" required className="mt-1" />
                    <label>Я согласен с политикой конфиденциальности</label>
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-[#4a5d6f] hover:bg-[#3a4d5f] text-white text-lg py-6">
                    ЗАПИСАТЬСЯ
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section id="teachers" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4a5d6f] mb-12">
              Наша команда
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="text-center">
                  <div className="aspect-square rounded-full overflow-hidden shadow-lg mb-4 mx-auto max-w-[200px]">
                    <img 
                      src="https://cdn.poehali.dev/files/2a8b8109-ead4-4107-891d-b5d643d0997f.jpg"
                      alt={`Преподаватель ${item}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#4a5d6f] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Атмосфера и события школы
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[1, 2].map((item) => (
                <div key={item} className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://cdn.poehali.dev/files/2a8b8109-ead4-4107-891d-b5d643d0997f.jpg"
                    alt={`Событие ${item}`}
                    className="w-full h-auto hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-center text-[#4a5d6f] mb-3">
                  Начните сейчас!
                </h2>
                <p className="text-center text-lg text-gray-700 mb-8">
                  Можно уже сегодня на ступеньку — шаг на пути к своему звучанию.<br />
                  Не откладывайте себя в этом
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Имя:"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-white"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон:"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-white"
                    />
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <input type="checkbox" required className="mt-1" />
                    <label>Я согласен с политикой конфиденциальности</label>
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-[#4a5d6f] hover:bg-[#3a4d5f] text-white text-lg py-6">
                    ЗАПИСАТЬСЯ
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-4">
                <Icon name="MapPin" size={48} className="text-gray-400" />
              </div>
            </div>
            
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-[#4a5d6f] mb-4">Контакты</h3>
                <div className="space-y-3">
                  <p className="flex items-center gap-2 text-lg">
                    <Icon name="MapPin" size={20} className="text-[#7a6651]" />
                    г. Ставрополь, ул. Ленина, д. 1
                  </p>
                  <p className="flex items-center gap-2 text-lg">
                    <Icon name="Phone" size={20} className="text-[#7a6651]" />
                    <a href="tel:+79288289230" className="hover:text-[#7a6651] transition-colors">
                      +7 (928) 828-92-30
                    </a>
                  </p>
                  <p className="flex items-center gap-2 text-lg">
                    <Icon name="Mail" size={20} className="text-[#7a6651]" />
                    info@otrajenie.ru
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-[#4a5d6f] text-white rounded-full flex items-center justify-center hover:bg-[#7a6651] transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-[#4a5d6f] text-white rounded-full flex items-center justify-center hover:bg-[#7a6651] transition-colors">
                  <Icon name="Send" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-[#4a5d6f] text-white rounded-full flex items-center justify-center hover:bg-[#7a6651] transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
              </div>

              <div className="text-sm text-gray-600">
                <a href="#" className="hover:text-[#7a6651] transition-colors">Политика конфиденциальности</a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-300 text-center text-gray-600">
            <p>&copy; 2024 Школа музыки и актёрского мастерства О`ТРАЖЕНИЕ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
