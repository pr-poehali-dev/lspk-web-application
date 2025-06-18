import Header from "@/components/Header";
import StatsCard from "@/components/StatsCard";
import DynamicBanner from "@/components/DynamicBanner";
import NotificationSystem from "@/components/NotificationSystem";

const Index = () => {
  const stats = [
    {
      title: "Мои заметки",
      value: "24",
      icon: "FileText",
      description: "активных заметок",
      trend: "up" as const,
      trendValue: "+3",
    },
    {
      title: "Общие заметки",
      value: "156",
      icon: "Users",
      description: "доступных материалов",
      trend: "up" as const,
      trendValue: "+12",
    },
    {
      title: "Уведомления",
      value: "8",
      icon: "Bell",
      description: "новых уведомлений",
      trend: "stable" as const,
      trendValue: "0",
    },
    {
      title: "Экспорт",
      value: "15",
      icon: "Download",
      description: "файлов загружено",
      trend: "up" as const,
      trendValue: "+5",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <NotificationSystem />

      <main className="pt-8">
        {/* Приветственная секция */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Добро пожаловать в систему заметок
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              ГАПОУ КК "Ленинградский социально-педагогический колледж"
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-blue-800">
                Система активна и готова к работе
              </span>
            </div>
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>

          {/* Быстрые действия */}
          <div className="academic-card mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Быстрые действия
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-left">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-slate-900">
                    Создать заметку
                  </h3>
                  <p className="text-sm text-slate-600">
                    Новый учебный материал
                  </p>
                </div>
              </button>

              <button className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors text-left">
                <div className="p-2 bg-green-600 rounded-lg">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-slate-900">Поделиться</h3>
                  <p className="text-sm text-slate-600">Отправить материал</p>
                </div>
              </button>

              <button className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors text-left">
                <div className="p-2 bg-purple-600 rounded-lg">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-slate-900">Экспорт в PDF</h3>
                  <p className="text-sm text-slate-600">Сохранить файл</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Динамический баннер */}
        <DynamicBanner />
      </main>
    </div>
  );
};

export default Index;
