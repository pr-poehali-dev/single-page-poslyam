import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
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

  const advantages = [
    { icon: "Award", title: "Высокое качество" },
    { icon: "Clock", title: "Точные сроки" },
    { icon: "Users", title: "Индивидуальный подход" },
    { icon: "Shield", title: "Гарантии надежности" },
    { icon: "TrendingUp", title: "Конкурентные цены" },
    { icon: "Headphones", title: "Поддержка 24/7" }
  ];

  const services = [
    { title: "Производство", icon: "Factory" },
    { title: "Поставки", icon: "Truck" },
    { title: "Цифровые решения", icon: "Monitor" },
    { title: "Консалтинг", icon: "Lightbulb" },
    { title: "Техподдержка", icon: "Wrench" },
    { title: "Обучение", icon: "GraduationCap" }
  ];

  const products = [
    { 
      title: "Промышленная продукция", 
      image: "https://cdn.poehali.dev/projects/2b169222-6780-4222-94a7-610835a75454/files/1e91f3be-68bd-4805-b853-1abba233e19b.jpg",
      price: "от 5 000 ₽"
    },
    { 
      title: "Цифровые продукты", 
      image: "https://cdn.poehali.dev/projects/2b169222-6780-4222-94a7-610835a75454/files/2da8ebe2-d209-4be7-88ae-303e805cb1e4.jpg",
      price: "от 15 000 ₽"
    },
    { 
      title: "Консалтинговые услуги", 
      image: "https://cdn.poehali.dev/projects/2b169222-6780-4222-94a7-610835a75454/files/76d11a50-83a5-4668-b0a6-aeb962df0539.jpg",
      price: "от 10 000 ₽"
    }
  ];

  return (
    <div className="h-screen overflow-y-auto bg-primary text-primary-foreground">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 py-8 relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-3 tracking-tight">
            Послоям
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">Создание 3D моделей тактильных пособий </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">Преимущества</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {advantages.map((item, index) => (
                <Card 
                  key={index} 
                  className="border-border/50 bg-background/95 hover:bg-background hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <CardContent className="p-4 text-center">
                    <Icon name={item.icon} className="text-accent mx-auto mb-2" size={32} />
                    <h3 className="text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">Услуги</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="border-border/50 bg-background/95 hover:bg-background hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon name={service.icon} className="text-primary-foreground" size={24} />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {service.title}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Наши товары</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {products.map((product, index) => (
              <Card 
                key={index} 
                className="border-border/50 bg-background/95 hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {product.title}
                    </h3>
                    <p className="text-accent text-xl font-bold mb-3">
                      {product.price}
                    </p>
                    <Button 
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                      onClick={() => console.log(`Заказ: ${product.title}`)}
                    >
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8"
              >
                <Icon name="Mail" size={20} className="mr-2" />
                Связаться
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Свяжитесь с нами</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Ваше сообщение..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-24 resize-none"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                  Отправить
                </Button>
              </form>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 border-primary-foreground/20 hover:bg-primary-foreground/10"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Контакты
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Контактная информация</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div className="flex items-center gap-3">
                  <Icon name="Mail" className="text-accent" size={24} />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">info@posloyam.ru</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="text-accent" size={24} />
                  <div>
                    <p className="text-sm text-muted-foreground">Телефон</p>
                    <p className="font-medium">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" className="text-accent" size={24} />
                  <div>
                    <p className="text-sm text-muted-foreground">Адрес</p>
                    <p className="font-medium">Москва, ул. Примерная, 1</p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <footer className="text-center py-4 text-sm opacity-80">
          © 2024 Послоям. Все права защищены.
        </footer>
      </div>
    </div>
  );
};

export default Index;