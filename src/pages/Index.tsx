import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  const directions = [
    { title: 'Английский язык', icon: 'GraduationCap', description: 'Изучение английского по современным методикам с носителями языка' },
    { title: 'Математика', icon: 'Calculator', description: 'Развитие логического мышления и математических навыков' },
    { title: 'Творчество', icon: 'Palette', description: 'Рисование, лепка, музыка и другие виды искусства' },
    { title: 'Спорт', icon: 'Trophy', description: 'Физическое развитие через игры и спортивные занятия' },
  ];

  const advantages = [
    { icon: 'Users', title: 'Малые группы', text: 'До 8 человек в группе для максимального внимания каждому ученику' },
    { icon: 'Award', title: 'Опытные педагоги', text: 'Квалифицированные специалисты с многолетним стажем работы' },
    { icon: 'Heart', title: 'Индивидуальный подход', text: 'Учитываем особенности и интересы каждого ребенка' },
    { icon: 'Clock', title: 'Удобное расписание', text: 'Гибкий график занятий, подстраиваемся под ваши потребности' },
  ];

  const team = [
    { name: 'Мария Иванова', role: 'Директор школы', image: 'https://cdn.poehali.dev/projects/c75cf4d4-0837-4c15-9f1f-a26194f908e5/files/9416104e-fc0e-4771-80ae-ca1a46c6b8cc.jpg' },
    { name: 'Анна Петрова', role: 'Преподаватель английского', image: 'https://cdn.poehali.dev/projects/c75cf4d4-0837-4c15-9f1f-a26194f908e5/files/9416104e-fc0e-4771-80ae-ca1a46c6b8cc.jpg' },
    { name: 'Елена Сидорова', role: 'Преподаватель математики', image: 'https://cdn.poehali.dev/projects/c75cf4d4-0837-4c15-9f1f-a26194f908e5/files/9416104e-fc0e-4771-80ae-ca1a46c6b8cc.jpg' },
    { name: 'Ольга Кузнецова', role: 'Преподаватель творчества', image: 'https://cdn.poehali.dev/projects/c75cf4d4-0837-4c15-9f1f-a26194f908e5/files/9416104e-fc0e-4771-80ae-ca1a46c6b8cc.jpg' },
  ];

  const events = [
    { title: 'День открытых дверей', date: '15 марта 2024', image: 'https://cdn.poehali.dev/projects/c75cf4d4-0837-4c15-9f1f-a26194f908e5/files/d1f0fd90-1fe8-4812-b439-541715b1f5e9.jpg' },
    { title: 'Выставка детских работ', date: '22 марта 2024', image: 'https://cdn.poehali.dev/projects/c75cf4d4-0837-4c15-9f1f-a26194f908e5/files/8b90e37b-d5cc-437d-9146-64045f592181.jpg' },
    { title: 'Спортивный праздник', date: '5 апреля 2024', image: 'https://cdn.poehali.dev/projects/c75cf4d4-0837-4c15-9f1f-a26194f908e5/files/d1f0fd90-1fe8-4812-b439-541715b1f5e9.jpg' },
  ];

  const galleryImages = [
    'https://cdn.poehali.dev/projects/c75cf4d4-0837-4c15-9f1f-a26194f908e5/files/8b90e37b-d5cc-437d-9146-64045f592181.jpg',
    'https://cdn.poehali.dev/projects/c75cf4d4-0837-4c15-9f1f-a26194f908e5/files/d1f0fd90-1fe8-4812-b439-541715b1f5e9.jpg',
    'https://cdn.poehali.dev/projects/c75cf4d4-0837-4c15-9f1f-a26194f908e5/files/8b90e37b-d5cc-437d-9146-64045f592181.jpg',
    'https://cdn.poehali.dev/projects/c75cf4d4-0837-4c15-9f1f-a26194f908e5/files/d1f0fd90-1fe8-4812-b439-541715b1f5e9.jpg',
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Icon name="GraduationCap" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-primary">Наша Школа</h1>
            </div>
            <nav className="flex flex-wrap items-center gap-6 text-sm">
              <a href="#about" className="hover:text-primary transition-colors">О школе</a>
              <a href="#directions" className="hover:text-primary transition-colors">Направления</a>
              <a href="#advantages" className="hover:text-primary transition-colors">Преимущества</a>
              <a href="#team" className="hover:text-primary transition-colors">Команда</a>
              <a href="#events" className="hover:text-primary transition-colors">События</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </nav>
            <div className="flex flex-col items-center md:items-end gap-1">
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Phone" size={16} className="text-primary" />
                <a href="tel:+79001234567" className="hover:text-primary transition-colors">+7 (900) 123-45-67</a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Примерная, д. 1</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Развиваем таланты <span className="text-primary">с любовью</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Частная школа для детей от 3 до 16 лет. Индивидуальный подход, современные методики, опытные педагоги
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg" asChild>
                  <a href="#contact">Записаться на пробный урок</a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg" asChild>
                  <a href="#about">Узнать больше</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">О нашей школе</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground">
                    Мы создали уникальное образовательное пространство, где каждый ребенок может раскрыть свой потенциал. Наша школа работает с 2015 года и за это время помогла сотням детей получить качественное образование.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Мы используем современные методики обучения, которые делают процесс увлекательным и эффективным. В нашей школе дети не просто получают знания, но и учатся думать, творить и работать в команде.
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://cdn.poehali.dev/projects/c75cf4d4-0837-4c15-9f1f-a26194f908e5/files/8b90e37b-d5cc-437d-9146-64045f592181.jpg" 
                    alt="Класс" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="directions" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Направления занятий</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {directions.map((direction, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon name={direction.icon} className="text-primary" size={24} />
                    </div>
                    <CardTitle>{direction.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{direction.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="advantages" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Наши преимущества</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {advantages.map((advantage, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                    <Icon name={advantage.icon} className="text-secondary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-3xl text-center">Запись на пробный урок</CardTitle>
                  <CardDescription className="text-center text-lg">
                    Оставьте заявку, и мы свяжемся с вами в ближайшее время
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder="Телефон"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Сообщение (необязательно)"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full text-lg">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="team" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Наша команда</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="events" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Наши события</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {events.map((event, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} />
                      {event.date}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-bold text-center mb-8">Фотогалерея</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                {galleryImages.map((image, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <div className="aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity">
                        <img 
                          src={image} 
                          alt={`Галерея ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <img src={image} alt={`Галерея ${index + 1}`} className="w-full h-auto" />
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="GraduationCap" size={24} />
                Наша Школа
              </h3>
              <p className="text-background/80 mb-4">
                Развиваем таланты с любовью. Частная школа для детей от 3 до 16 лет.
              </p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Twitter" size={24} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-background/80">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (900) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@school.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная, д. 1
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <div className="space-y-2 text-background/80">
                <a href="#" className="block hover:text-primary transition-colors">Публичная оферта</a>
                <a href="#" className="block hover:text-primary transition-colors">Политика конфиденциальности</a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-background/20 text-center text-background/60">
            <p>&copy; 2024 Наша Школа. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
