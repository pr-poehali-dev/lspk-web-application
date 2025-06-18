import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Icon from "@/components/ui/icon";

type UserRole = "student" | "teacher";

const Header = () => {
  const [userRole, setUserRole] = useState<UserRole>("student");
  const [notificationCount, setNotificationCount] = useState(3);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная", icon: "Home" },
    { path: "/my-notes", label: "Мои заметки", icon: "FileText" },
    { path: "/about", label: "О колледже", icon: "School" },
    { path: "/contacts", label: "Контакты", icon: "Phone" },
  ];

  const toggleRole = () => {
    setUserRole((prev) => (prev === "student" ? "teacher" : "student"));
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Логотип */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center shadow-lg">
              <Icon name="GraduationCap" className="text-white" size={28} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">ГАПОУ КК ЛСПК</h1>
              <p className="text-xs text-gray-500">Система заметок</p>
            </div>
          </div>

          {/* Навигация */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.slice(0, 3).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.path
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <Icon name={item.icon as any} size={16} />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Действия */}
          <div className="flex items-center space-x-4">
            {/* Переключатель ролей */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleRole}
              className="space-x-2"
            >
              <Icon
                name={userRole === "student" ? "User" : "UserCheck"}
                size={16}
              />
              <span className="capitalize">
                {userRole === "student" ? "Студент" : "Преподаватель"}
              </span>
            </Button>

            {/* Уведомления */}
            <div className="relative">
              <Button variant="ghost" size="sm">
                <Icon name="Bell" size={20} />
                {notificationCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs bg-red-500 hover:bg-red-600">
                    {notificationCount}
                  </Badge>
                )}
              </Button>
            </div>

            {/* Меню пользователя */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Icon name="Settings" size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Icon name="User" size={16} className="mr-2" />
                  Профиль
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Icon name="Download" size={16} className="mr-2" />
                  Экспорт заметок
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Icon name="LogOut" size={16} className="mr-2" />
                  Выход
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
