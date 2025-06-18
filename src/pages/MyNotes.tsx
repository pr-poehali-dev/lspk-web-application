import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const MyNotes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  const mockNotes = [
    {
      id: 1,
      title: "Методы обучения",
      content: "Современные подходы к педагогике...",
      date: "2024-01-15",
      category: "Педагогика",
    },
    {
      id: 2,
      title: "Психология развития",
      content: "Особенности детского развития...",
      date: "2024-01-10",
      category: "Психология",
    },
  ];

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleCreateNote = () => {
    if (newNote.title && newNote.content) {
      setShowCreateForm(false);
      setNewNote({ title: "", content: "" });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Header />
        <main className="pt-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="text-center py-12">
              <CardContent>
                <Icon
                  name="Lock"
                  size={48}
                  className="mx-auto mb-4 text-slate-400"
                />
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Необходима авторизация
                </h2>
                <p className="text-slate-600 mb-6">
                  Для доступа к заметкам необходимо войти в систему
                </p>
                <Button onClick={handleLogin} className="mr-4">
                  <Icon name="LogIn" size={16} className="mr-2" />
                  Войти в систему
                </Button>
                <Link to="/">
                  <Button variant="outline">Вернуться на главную</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="pt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900">Мои заметки</h1>
            <Button onClick={() => setShowCreateForm(true)}>
              <Icon name="Plus" size={16} className="mr-2" />
              Создать заметку
            </Button>
          </div>

          {showCreateForm && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Новая заметка</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Название заметки"
                  value={newNote.title}
                  onChange={(e) =>
                    setNewNote({ ...newNote, title: e.target.value })
                  }
                />
                <Textarea
                  placeholder="Содержание заметки"
                  rows={6}
                  value={newNote.content}
                  onChange={(e) =>
                    setNewNote({ ...newNote, content: e.target.value })
                  }
                />
                <div className="flex space-x-4">
                  <Button onClick={handleCreateNote}>
                    <Icon name="Save" size={16} className="mr-2" />
                    Сохранить
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowCreateForm(false)}
                  >
                    Отмена
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="grid gap-6">
            {mockNotes.map((note) => (
              <Card key={note.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{note.title}</CardTitle>
                      <p className="text-sm text-slate-500 mt-1">{note.date}</p>
                    </div>
                    <Badge variant="secondary">{note.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">{note.content}</p>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Icon name="Edit" size={14} className="mr-1" />
                      Редактировать
                    </Button>
                    <Button size="sm" variant="outline">
                      <Icon name="Download" size={14} className="mr-1" />
                      Экспорт
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyNotes;
