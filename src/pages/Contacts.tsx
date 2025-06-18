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
      title: "Адрес",
      content: "353740, Краснодарский край, г. Ленинградская, ул. Красная, 145",
    },
    {
      icon: "Phone",
      title: "Телефон",
      content: "+7 (86145) 3-12-34",
    },
    {
      icon: "Mail",
      title: "Email",
      content: "info@lspk.ru",
    },
    {
      icon: "Clock",
      title: "Время работы",
      content: "Пн-Пт: 8:00-17:00, Сб: 9:00-14:00",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="pt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Контакты</h1>
            <p className="text-xl text-slate-600">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
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
                  <p className="text-slate-700">{item.content}</p>
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
                  <div className="bg-slate-100 rounded-lg p-4 text-center">
                    <Icon
                      name="Map"
                      size={48}
                      className="mx-auto text-slate-400 mb-2"
                    />
                    <p className="text-slate-600">Карта будет загружена</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Icon
                        name="Car"
                        size={16}
                        className="text-blue-600 mr-2 mt-1"
                      />
                      <div>
                        <p className="font-medium text-slate-900">
                          На автомобиле
                        </p>
                        <p className="text-sm text-slate-600">
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
                        <p className="font-medium text-slate-900">
                          Общественный транспорт
                        </p>
                        <p className="text-sm text-slate-600">
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
