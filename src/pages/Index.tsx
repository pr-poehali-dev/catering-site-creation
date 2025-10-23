import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: "", email: "", phone: "", eventType: "", message: "" });
  };

  const menuItems = [
    {
      title: "Горячие блюда",
      description: "Изысканные мясные и рыбные деликатесы",
      image: "https://cdn.poehali.dev/projects/2c278eaa-1110-4b57-93ce-468753acaa53/files/27bbdfa1-e4a7-445d-85c2-8abc276c70f6.jpg"
    },
    {
      title: "Закуски",
      description: "Разнообразие холодных и горячих закусок",
      image: "https://cdn.poehali.dev/projects/2c278eaa-1110-4b57-93ce-468753acaa53/files/2a69830c-ff0f-4d60-b0f0-e6912950537a.jpg"
    },
    {
      title: "Десерты",
      description: "Авторские сладости от нашего кондитера",
      image: "https://cdn.poehali.dev/projects/2c278eaa-1110-4b57-93ce-468753acaa53/files/b1e91b3d-9f14-41b2-8ea8-c35de6c43cf1.jpg"
    }
  ];

  const eventTypes = [
    {
      icon: "Heart",
      title: "Свадьбы",
      description: "Незабываемый праздник любви с авторским меню"
    },
    {
      icon: "Briefcase",
      title: "Корпоративы",
      description: "Элегантное обслуживание деловых мероприятий"
    },
    {
      icon: "Cake",
      title: "Дни рождения",
      description: "Яркие праздники для людей любого возраста"
    },
    {
      icon: "Wine",
      title: "Фуршеты",
      description: "Изысканные блюда для светских приемов"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none">
        <img 
          src="https://cdn.poehali.dev/files/b0834f1b-b021-4fa7-bbbc-2056a068ade7.jpg" 
          alt="background pattern" 
          className="w-full h-full object-cover"
        />
      </div>
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border relative">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="relative flex flex-col items-start leading-none">
              <span className="font-handwriting text-3xl text-primary">Смакуем</span>
              <span className="font-display text-5xl font-bold text-foreground tracking-wider -mt-2">КЕЙТЕРИНГ</span>
              <svg className="absolute -bottom-2 left-0 w-64 h-8" viewBox="0 0 250 30" fill="none">
                <path d="M2 15 Q60 5, 120 12 T240 15" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" opacity="0.6"/>
              </svg>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#menu" className="text-foreground hover:text-primary transition-colors">Меню</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:flex">
            <Icon name="Phone" size={16} className="mr-2" />
            Заказать
          </Button>
        </div>
      </header>

      <section id="home" className="pt-32 pb-20 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="relative">
                <div className="absolute -top-8 -left-4 w-32 h-32 opacity-20">
                  <img 
                    src="https://cdn.poehali.dev/files/b258a2cb-7ab9-4ff4-be2e-d769b9b71516.jpg" 
                    alt="decoration" 
                    className="w-full h-full object-contain animate-float"
                  />
                </div>
                <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6">
                  Вкусные блюда<br/>
                  <span className="font-handwriting text-primary text-7xl md:text-8xl">для вашего события</span>
                </h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Превращаем каждое мероприятие в кулинарный шедевр. 
                Свежие продукты, авторские рецепты и безупречный сервис.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8">
                  Посмотреть меню
                  <Icon name="ChefHat" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Оставить заявку
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute top-0 right-0 w-40 h-40 opacity-30 animate-float" style={{ animationDelay: '1s' }}>
                <img 
                  src="https://cdn.poehali.dev/files/b258a2cb-7ab9-4ff4-be2e-d769b9b71516.jpg" 
                  alt="decoration" 
                  className="w-full h-full object-contain"
                />
              </div>
              <img
                src="https://cdn.poehali.dev/projects/2c278eaa-1110-4b57-93ce-468753acaa53/files/27bbdfa1-e4a7-445d-85c2-8abc276c70f6.jpg"
                alt="Catering"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-card/80 backdrop-blur-sm relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">
              <span className="font-handwriting text-accent">Типы</span> мероприятий
            </h2>
            <p className="text-xl text-muted-foreground">Обслуживаем события любого формата</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventTypes.map((event, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Icon name={event.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{event.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">
              Наше <span className="font-handwriting text-secondary">меню</span>
            </h2>
            <p className="text-xl text-muted-foreground">Авторские блюда от шеф-повара</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6 bg-card">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-card/80 backdrop-blur-sm relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">
              <span className="font-handwriting text-primary">Оформить</span> заказ
            </h2>
            <p className="text-xl text-muted-foreground">Заполните форму и мы свяжемся с вами</p>
          </div>
          <Card className="p-8 md:p-12 border-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Тип мероприятия</label>
                  <Input
                    placeholder="Свадьба, Корпоратив..."
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Дополнительная информация</label>
                <Textarea
                  placeholder="Расскажите о вашем мероприятии: количество гостей, дата, особые пожелания..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full text-lg">
                Отправить заявку
                <Icon name="Send" size={20} className="ml-2" />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="relative flex flex-col items-center md:items-start leading-none mb-4">
                <span className="font-handwriting text-2xl text-background">Смакуем</span>
                <span className="font-display text-4xl font-bold text-background tracking-wider -mt-1">КЕЙТЕРИНГ</span>
                <svg className="absolute -bottom-1 left-0 md:left-0 w-48 h-6" viewBox="0 0 200 25" fill="none">
                  <path d="M2 12 Q50 5, 100 10 T195 12" stroke="white" strokeWidth="2" fill="none" opacity="0.8"/>
                </svg>
              </div>
              <p className="opacity-80">Вкусные блюда для вашего события</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 opacity-80">
                <p>+7 (999) 123-45-67</p>
                <p>info@catering.ru</p>
                <p>Москва, ул. Примерная, 123</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button variant="ghost" size="icon" className="text-background hover:text-background/80">
                  <Icon name="Instagram" size={24} />
                </Button>
                <Button variant="ghost" size="icon" className="text-background hover:text-background/80">
                  <Icon name="Facebook" size={24} />
                </Button>
                <Button variant="ghost" size="icon" className="text-background hover:text-background/80">
                  <Icon name="Mail" size={24} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center opacity-60">
            <p>© 2024 Кейтеринг. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;