import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Обработка отправки формы
    console.log("Форма отправлена:", form);
    setForm({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: "MapPin",
      title: "Адрес колледжа",
      content:
        "353740, Краснодарский край, Ленинградский район, ст.Ленинградская ул.Красная 152",
    },
    {
      icon: "Phone",
      title: "Директор",
      content: "+7 (861) 457-01-40 - Бауэр Герман Владимирович",
    },
    {
      icon: "Phone",
      title: "Приемная директора",
      content: "+7 (861) 457-35-10 - Ткаченко Алена Александровна",
    },
    {
      icon: "Mail",
      title: "Email",
      content: "lpk31@mail.ru",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Логотип и заголовок */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center shadow-xl mx-auto mb-6">
              <Icon name="GraduationCap" size={48} className="text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Контакты ЛСПК
            </h1>
            <p className="text-xl text-muted-foreground">
              ГАПОУ КК "Ленинградский социально-педагогический колледж"
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Icon
                    name={item.icon as any}
                    size={32}
                    className="mx-auto text-blue-600 mb-2"
                  />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Send" className="mr-2" size={24} />
                  Обратная связь
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Ваше имя"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                  />
                  <Textarea
                    placeholder="Сообщение"
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    required
                  />
                  <Button type="submit" className="w-full">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="MapPin" className="mr-2" size={24} />
                  Как нас найти
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted rounded-lg p-4 text-center">
                    <Icon
                      name="Map"
                      size={48}
                      className="mx-auto text-muted-foreground mb-2"
                    />
                    <p className="text-muted-foreground">
                      Карта будет загружена
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Icon
                        name="Car"
                        size={16}
                        className="text-blue-600 mr-2 mt-1"
                      />
                      <div>
                        <p className="font-medium text-foreground">
                          На автомобиле
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Парковка доступна на территории колледжа
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Icon
                        name="Bus"
                        size={16}
                        className="text-green-600 mr-2 mt-1"
                      />
                      <div>
                        <p className="font-medium text-foreground">
                          Общественный транспорт
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Автобусы №5, 12 до остановки "Колледж"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contacts;
