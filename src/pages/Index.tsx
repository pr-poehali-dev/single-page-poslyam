import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Послоям
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-light">
              Профессиональные решения для вашего бизнеса. Качество, надежность и индивидуальный подход к каждому клиенту.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 h-auto"
              onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Наши преимущества
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "Award",
                title: "Высокое качество",
                description: "Строгий контроль на всех этапах производства и реализации продукции"
              },
              {
                icon: "Clock",
                title: "Точные сроки",
                description: "Гарантируем соблюдение договорных сроков и оперативную доставку"
              },
              {
                icon: "Users",
                title: "Индивидуальный подход",
                description: "Разрабатываем решения под специфические требования каждого клиента"
              },
              {
                icon: "Shield",
                title: "Гарантии надежности",
                description: "Полная техническая поддержка и гарантийное обслуживание"
              },
              {
                icon: "TrendingUp",
                title: "Конкурентные цены",
                description: "Оптимальное соотношение цены и качества без скрытых платежей"
              },
              {
                icon: "Headphones",
                title: "Поддержка 24/7",
                description: "Профессиональная консультация и помощь в любое время"
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="border-border hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name={item.icon} className="text-accent" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Производство продукции",
                description: "Полный цикл производства товаров с использованием современного оборудования и технологий",
                icon: "Factory"
              },
              {
                title: "Оптовые поставки",
                description: "Организация логистики и поставок продукции для корпоративных клиентов",
                icon: "Truck"
              },
              {
                title: "Цифровые решения",
                description: "Разработка и внедрение цифровых продуктов для автоматизации бизнес-процессов",
                icon: "Monitor"
              },
              {
                title: "Консалтинг",
                description: "Экспертные консультации по оптимизации производства и управлению качеством",
                icon: "Lightbulb"
              },
              {
                title: "Техническая поддержка",
                description: "Комплексное обслуживание и модернизация производственных линий",
                icon: "Wrench"
              },
              {
                title: "Обучение персонала",
                description: "Профессиональное обучение сотрудников работе с продукцией и оборудованием",
                icon: "GraduationCap"
              }
            ].map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 mb-6 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name={service.icon} className="text-primary-foreground" size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
              Свяжитесь с нами
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Оставьте заявку, и наш специалист свяжется с вами в ближайшее время
            </p>
            
            <Card className="border-border shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Имя
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Сообщение
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите о вашем проекте или задаче..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-32 resize-none"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 text-base font-semibold"
                  >
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <Icon name="Mail" className="mx-auto mb-3 text-accent" size={32} />
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="font-medium text-foreground">info@posloyam.ru</p>
              </div>
              <div className="p-6">
                <Icon name="Phone" className="mx-auto mb-3 text-accent" size={32} />
                <p className="text-sm text-muted-foreground mb-1">Телефон</p>
                <p className="font-medium text-foreground">+7 (495) 123-45-67</p>
              </div>
              <div className="p-6">
                <Icon name="MapPin" className="mx-auto mb-3 text-accent" size={32} />
                <p className="text-sm text-muted-foreground mb-1">Адрес</p>
                <p className="font-medium text-foreground">Москва, ул. Примерная, 1</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-90">
            © 2024 Послоям. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
