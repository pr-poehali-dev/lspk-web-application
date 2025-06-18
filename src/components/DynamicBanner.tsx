import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface BannerImage {
  id: string;
  url: string;
  title: string;
  description: string;
  link: string;
}

const DynamicBanner = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const bannerImages: BannerImage[] = [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=400&fit=crop",
      title: "Мои заметки",
      description: "Создавайте и управляйте личными заметками",
      link: "/my-notes",
    },
    {
      id: "2",
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop",
      title: "Общие заметки",
      description: "Совместная работа над учебными материалами",
      link: "/shared-notes",
    },
    {
      id: "3",
      url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=400&fit=crop",
      title: "О колледже",
      description: "История и достижения ГАПОУ КК ЛСПК",
      link: "/about",
    },
    {
      id: "4",
      url: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b7c5?w=800&h=400&fit=crop",
      title: "Контакты",
      description: "Свяжитесь с администрацией колледжа",
      link: "/contacts",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  const handleImageClick = (link: string) => {
    navigate(link);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Образовательная платформа ЛСПК
          </h2>
          <p className="text-lg text-gray-600">
            Выберите раздел для работы с заметками
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {bannerImages.map((image) => (
              <div
                key={image.id}
                className="w-full flex-shrink-0 relative cursor-pointer group"
                onClick={() => handleImageClick(image.link)}
              >
                <div className="aspect-[2/1] relative overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-200 transition-colors">
                      {image.title}
                    </h3>
                    <p className="text-lg opacity-90">{image.description}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Индикаторы */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2">
              {bannerImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Стрелки навигации */}
          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === 0 ? bannerImages.length - 1 : prev - 1,
              )
            }
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() =>
              setCurrentIndex((prev) => (prev + 1) % bannerImages.length)
            }
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DynamicBanner;
