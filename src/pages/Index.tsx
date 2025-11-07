import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#3d5a6c] text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Icon name="Music" className="text-[#3d5a6c]" size={24} />
              </div>
              <div className="text-sm">
                <div className="font-bold">Школа музыки и актёрского мастерства</div>
                <div className="text-xs opacity-90">О`ТРАЖЕНИЕ</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-xs opacity-75">г. Ставрополь</div>
                <div className="text-xs opacity-75">ул. Ленина, д. 1</div>
              </div>
              <div className="text-lg font-bold">+7 (928) 828-92-30</div>
              <div className="flex gap-2">
                <a href="#" className="w-7 h-7 bg-white/20 rounded flex items-center justify-center hover:bg-white/30">
                  <Icon name="MessageCircle" size={14} />
                </a>
                <a href="#" className="w-7 h-7 bg-white/20 rounded flex items-center justify-center hover:bg-white/30">
                  <Icon name="Send" size={14} />
                </a>
                <a href="#" className="w-7 h-7 bg-white/20 rounded flex items-center justify-center hover:bg-white/30">
                  <Icon name="Mail" size={14} />
                </a>
              </div>
            </div>
          </div>
          <nav className="flex justify-center gap-8 text-sm border-t border-white/20 pt-2">
            <a href="#main" className="hover:opacity-80">Главная</a>
            <a href="#about" className="hover:opacity-80">О нас</a>
            <a href="#teachers" className="hover:opacity-80">Преподаватели</a>
            <a href="#contacts" className="hover:opacity-80">Контакты</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="main" className="relative">
          <div className="relative h-[500px]">
            <img 
              src="https://cdn.poehali.dev/files/2a8b8109-ead4-4107-891d-b5d643d0997f.jpg" 
              alt="Класс" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h1 className="text-5xl font-bold text-white text-center max-w-3xl px-4">
                Здесь начинается Ваше творческое "Я"
              </h1>
            </div>
          </div>
          <div className="bg-[#8b7355] text-white text-center py-4">
            <p className="text-xl">Школа музыки и актёрского мастерства в Ставрополе для взрослых и детей от 4 и лет</p>
          </div>
        </section>

        {/* Путь к сцене */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-[#3d5a6c]">
              Ваш путь к сцене и творчеству
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-8 text-center shadow-md">
                <p className="text-lg leading-relaxed">
                  Начните, чтобы<br />
                  не бояться сцены<br />
                  и открыть своего<br />
                  творца
                </p>
              </div>
              <div className="bg-white p-8 text-center shadow-md">
                <p className="text-lg leading-relaxed">
                  Пошагайте,<br />
                  сольфеджио<br />
                  и развивайтесь<br />
                  дальше
                </p>
              </div>
              <div className="bg-white p-8 text-center shadow-md">
                <p className="text-lg leading-relaxed">
                  Запишитесь,<br />
                  чтобы петь<br />
                  караоке с друзьями<br />
                  и общаться
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* О школе */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-2 text-[#3d5a6c]">О школе</h2>
            <p className="text-center text-[#8b7355] text-lg mb-10">1 год учитель</p>
            
            <div className="max-w-4xl mx-auto mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#8b7355] font-bold">✓</span>
                      <span>Дети и подростки</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#8b7355] font-bold">✓</span>
                      <span>Взрослые от 18 лет</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#8b7355] font-bold">✓</span>
                      <span>Чтобы развивать музыкальный слух и память</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#8b7355] font-bold">✓</span>
                      <span>Научиться играть на инструменте для себя и с нами</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#8b7355] font-bold">✓</span>
                      <span>Чтобы петь караоке в любой тональности</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#8b7355] font-bold">✓</span>
                      <span>Развить актёрские способности и снять блоки внутренние</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#8b7355] font-bold">✓</span>
                      <span>Чтобы петь караоке с любой и своего талантах</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square">
                  <img 
                    src="https://cdn.poehali.dev/files/2a8b8109-ead4-4107-891d-b5d643d0997f.jpg"
                    alt={`Фото ${i}`}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Чем занимаемся */}
        <section className="py-16 bg-[#3d5a6c] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">Чем занимаемся</h2>
            
            <div className="max-w-3xl mx-auto bg-[#8b7355] p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Направления:</h3>
              <div className="space-y-3 text-lg">
                <p>• Вокал: эстрада, эстрада, джаз, фолк, народный</p>
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

        {/* Преимущества */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-[#3d5a6c]">
              Преимущества нашей школы
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 border-2 border-[#8b7355]/30">
                <div className="flex items-start gap-4">
                  <div className="text-[#8b7355] text-2xl font-bold">✓</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Гибкость</h3>
                    <p className="text-gray-700">
                      Занятия проходят индивидуально и в малых группах до 5 человек. 
                      Выберите удобный формат сами
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 border-2 border-[#8b7355]/30">
                <div className="flex items-start gap-4">
                  <div className="text-[#8b7355] text-2xl font-bold">✓</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Опыт</h3>
                    <p className="text-gray-700">
                      Преподаватели с опытом выступлений концертной деятельности более 10 лет
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 border-2 border-[#8b7355]/30">
                <div className="flex items-start gap-4">
                  <div className="text-[#8b7355] text-2xl font-bold">✓</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Подход</h3>
                    <p className="text-gray-700">
                      Индивидуальный подход каждому. Темп Ваших занятий. 
                      Это Ваша школа! Вы её ученик
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 border-2 border-[#8b7355]/30">
                <div className="flex items-start gap-4">
                  <div className="text-[#8b7355] text-2xl font-bold">✓</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Качество</h3>
                    <p className="text-gray-700">
                      Студия 35 кв.м уютная, со своей атмосферой и 
                      Репертуар, библиотека, кофе, здесь
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Форма записи 1 */}
        <section id="contacts" className="py-16 bg-[#8b7355]">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-white">
              <h2 className="text-3xl font-bold text-center mb-3">
                Запишитесь на пробное занятие —
              </h2>
              <p className="text-center text-lg mb-8">
                лучше один раз попробуете!
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Имя:"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-white text-gray-900"
                />
                <Input
                  type="tel"
                  placeholder="Телефон:"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-white text-gray-900"
                />
                <div className="flex items-start gap-2 text-sm">
                  <input type="checkbox" required className="mt-1" />
                  <label>Я согласен с политикой конфиденциальности</label>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-[#3d5a6c] hover:bg-[#2d4a5c] text-white py-6 text-lg"
                >
                  ЗАПИСАТЬСЯ
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Команда */}
        <section id="teachers" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-[#3d5a6c]">Наша команда</h2>
            <div className="flex justify-center gap-8 flex-wrap max-w-5xl mx-auto">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-40">
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-3 shadow-lg">
                    <img 
                      src="https://cdn.poehali.dev/files/2a8b8109-ead4-4107-891d-b5d643d0997f.jpg"
                      alt={`Преподаватель ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Атмосфера и события */}
        <section className="py-16 bg-[#3d5a6c] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">
              Атмосфера и события школы
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="rounded overflow-hidden shadow-xl">
                <img 
                  src="https://cdn.poehali.dev/files/2a8b8109-ead4-4107-891d-b5d643d0997f.jpg"
                  alt="Событие 1"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded overflow-hidden shadow-xl">
                <img 
                  src="https://cdn.poehali.dev/files/2a8b8109-ead4-4107-891d-b5d643d0997f.jpg"
                  alt="Событие 2"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Форма записи 2 */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-3 text-[#3d5a6c]">
                Начните сейчас!
              </h2>
              <p className="text-center text-lg mb-8 text-gray-700">
                Можно уже сегодня на ступеньку — шаг на пути к своему звучанию.<br />
                Не откладывайте себя в этом
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Имя:"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-white"
                />
                <Input
                  type="tel"
                  placeholder="Телефон:"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-white"
                />
                <div className="flex items-start gap-2 text-sm">
                  <input type="checkbox" required className="mt-1" />
                  <label>Я согласен с политикой конфиденциальности</label>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-[#3d5a6c] hover:bg-[#2d4a5c] text-white py-6 text-lg"
                >
                  ЗАПИСАТЬСЯ
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-300 rounded h-64 flex items-center justify-center">
              <Icon name="MapPin" size={48} className="text-gray-500" />
            </div>
            
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-[#3d5a6c] mb-6">Начните сейчас!</h3>
              <div className="space-y-3 mb-6">
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={20} className="text-[#8b7355]" />
                  г. Ставрополь, ул. Ленина, 26140, Д. 1
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={20} className="text-[#8b7355]" />
                  +7 (928) 828-92-30
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={20} className="text-[#8b7355]" />
                  info@school.ru
                </p>
                <p className="text-sm text-gray-600">И другие нас:</p>
              </div>
              
              <div className="flex gap-3 mb-6">
                <a href="#" className="w-10 h-10 bg-[#3d5a6c] text-white rounded flex items-center justify-center hover:bg-[#2d4a5c]">
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-[#3d5a6c] text-white rounded flex items-center justify-center hover:bg-[#2d4a5c]">
                  <Icon name="Send" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-[#3d5a6c] text-white rounded flex items-center justify-center hover:bg-[#2d4a5c]">
                  <Icon name="Mail" size={20} />
                </a>
              </div>

              <a href="#" className="text-sm text-[#8b7355] hover:underline">
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
