import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface Notification {
  id: string;
  title: string;
  message: string;
  type: "note" | "comment" | "share" | "system";
  isRead: boolean;
  timestamp: Date;
  from?: string;
}

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "Новая заметка",
      message: "Преподаватель Иванов И.И. добавил заметку по математике",
      type: "note",
      isRead: false,
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      from: "Иванов И.И.",
    },
    {
      id: "2",
      title: "Комментарий к заметке",
      message: 'Новый комментарий к вашей заметке "Алгебра - основы"',
      type: "comment",
      isRead: false,
      timestamp: new Date(Date.now() - 15 * 60 * 1000),
      from: "Петрова М.А.",
    },
    {
      id: "3",
      title: "Общий доступ",
      message: 'С вами поделились заметкой "История России"',
      type: "share",
      isRead: true,
      timestamp: new Date(Date.now() - 60 * 60 * 1000),
      from: "Сидоров А.В.",
    },
  ]);

  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    // Симуляция новых уведомлений
    const interval = setInterval(() => {
      const newNotification: Notification = {
        id: Date.now().toString(),
        title: "Новое уведомление",
        message: "Добавлена новая заметка по предмету",
        type: "note",
        isRead: false,
        timestamp: new Date(),
        from: "Система",
      };

      setNotifications((prev) => [newNotification, ...prev]);

      // Показать toast уведомление
      toast.success("Новая заметка!", {
        description: newNotification.message,
        action: {
          label: "Просмотреть",
          onClick: () => setShowPanel(true),
        },
      });

      // Звуковое уведомление (опционально)
      const audio = new Audio(
        "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmceByGH0fPTgjMGHm7A7+OZURE",
      );
      audio.volume = 0.3;
      audio.play().catch(() => {}); // Игнорируем ошибки автоплея
    }, 30000); // Каждые 30 секунд

    return () => clearInterval(interval);
  }, []);

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification,
      ),
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({ ...notification, isRead: true })),
    );
  };

  const getTypeIcon = (type: Notification["type"]) => {
    switch (type) {
      case "note":
        return "FileText";
      case "comment":
        return "MessageCircle";
      case "share":
        return "Share2";
      case "system":
        return "Settings";
      default:
        return "Bell";
    }
  };

  const getTypeColor = (type: Notification["type"]) => {
    switch (type) {
      case "note":
        return "bg-blue-100 text-blue-700";
      case "comment":
        return "bg-green-100 text-green-700";
      case "share":
        return "bg-purple-100 text-purple-700";
      case "system":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);

    if (minutes < 1) return "только что";
    if (minutes < 60) return `${minutes} мин назад`;
    if (hours < 24) return `${hours} ч назад`;
    return date.toLocaleDateString();
  };

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  if (!showPanel) {
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setShowPanel(true)}
        className="relative"
      >
        <Icon name="Bell" size={20} />
        {unreadCount > 0 && (
          <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs bg-red-500 hover:bg-red-600">
            {unreadCount}
          </Badge>
        )}
      </Button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-end pt-16 pr-4">
      <Card className="w-96 max-h-[80vh] overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-lg">Уведомления</CardTitle>
          <div className="flex items-center space-x-2">
            {unreadCount > 0 && (
              <Button variant="ghost" size="sm" onClick={markAllAsRead}>
                Отметить все
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowPanel(false)}
            >
              <Icon name="X" size={16} />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0 max-h-96 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              <Icon name="Bell" size={48} className="mx-auto mb-2 opacity-50" />
              <p>Нет уведомлений</p>
            </div>
          ) : (
            <div className="space-y-1">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 border-b cursor-pointer transition-colors ${
                    notification.isRead
                      ? "bg-white hover:bg-gray-50"
                      : "bg-blue-50 hover:bg-blue-100"
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-start space-x-3">
                    <div
                      className={`p-2 rounded-full ${getTypeColor(notification.type)}`}
                    >
                      <Icon
                        name={getTypeIcon(notification.type) as any}
                        size={14}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {notification.title}
                        </p>
                        {!notification.isRead && (
                          <div className="w-2 h-2 bg-blue-600 rounded-full ml-2" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {notification.message}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        {notification.from && (
                          <span className="text-xs text-gray-500">
                            от {notification.from}
                          </span>
                        )}
                        <span className="text-xs text-gray-500">
                          {formatTime(notification.timestamp)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default NotificationSystem;
