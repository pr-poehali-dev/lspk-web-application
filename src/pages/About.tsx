import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const About = () => {
  const achievements = [
    "Аккредитованное учебное заведение",
    "Более 50 лет опыта в образовании",
    "Современная материально-техническая база",
    "Квалифицированные преподаватели",
  ];

  const specialties = [
    "Дошкольное образование",
    "Преподавание в начальных классах",
    "Коррекционная педагогика",
    "Социальная работа",
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="pt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              О колледже
            </h1>
            <p className="text-xl text-slate-600">
              ГАПОУ КК "Ленинградский социально-педагогический колледж"
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="School" className="mr-2" size={24} />
                  История и миссия
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-4">
                  Ленинградский социально-педагогический колледж - ведущее
                  образовательное учреждение Краснодарского края,
                  специализирующееся на подготовке высококвалифицированных
                  педагогических кадров.
                </p>
                <p className="text-slate-700">
                  Наша миссия - формирование компетентных специалистов в области
                  образования и социальной работы, готовых к профессиональной
                  деятельности в современных условиях.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Award" className="mr-2" size={24} />
                  Достижения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center">
                      <Icon
                        name="CheckCircle"
                        size={16}
                        className="text-green-600 mr-2"
                      />
                      <span className="text-slate-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="BookOpen" className="mr-2" size={24} />
                Специальности
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {specialties.map((specialty, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-blue-50 rounded-lg"
                  >
                    <Icon
                      name="GraduationCap"
                      size={20}
                      className="text-blue-600 mr-3"
                    />
                    <span className="font-medium text-slate-900">
                      {specialty}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">
                  <Icon
                    name="Users"
                    size={32}
                    className="mx-auto mb-2 text-blue-600"
                  />
                  Студенты
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  1200+
                </div>
                <p className="text-slate-600">активных студентов</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">
                  <Icon
                    name="UserCheck"
                    size={32}
                    className="mx-auto mb-2 text-green-600"
                  />
                  Преподаватели
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">85</div>
                <p className="text-slate-600">
                  квалифицированных преподавателей
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">
                  <Icon
                    name="Trophy"
                    size={32}
                    className="mx-auto mb-2 text-yellow-600"
                  />
                  Выпускники
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  95%
                </div>
                <p className="text-slate-600">трудоустройство</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
