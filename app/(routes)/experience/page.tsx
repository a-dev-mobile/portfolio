import Header from '../../components/Header'

type Experience = {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
};

const ExperiencePage = () => {
  const experiences: Experience[] = [
    {
      company: "МТС Диджитал",
      position: "Flutter (FullStack) разработчик",
      period: "2023 - настоящее время",
      description: "Работа над ключевыми мобильными и веб-проектами для внутренних нужд компании МТС.",
      achievements: [
        "Участие в разработке мобильного приложения «Мой РТК» для сотрудников розничной сети МТС",
        "Разработка мобильного приложения «ОПЕРАТОР+» для операторов поддержки МТС",
        "Создание и поддержка веб-сервиса «RETAILIQA - Контроль качества» для аудита розничной сети",
        "Внедрение CI/CD с использованием Kubernetes и Kustomize для оптимизации процесса разработки",
        "Разработка микросервисной архитектуры с использованием Rust и C#"
      ],
      technologies: ["Flutter", "Dart", "Rust", "C#", "PostgreSQL", "Clickhouse", "Kubernetes", "Docker", "Firebase"]
    },
    {
      company: "Aventus IT",
      position: "Flutter developer",
      period: "Декабрь 2021 - 2023",
      description: "Работа в международной продуктовой IT-компании, разработка мобильных приложений с использованием Flutter (Android/iOS) в сфере Fintech.",
      achievements: [
        "Работа в международной продуктовой IT-компании над мобильными приложениями на Flutter",
        "Разработка и поддержка кроссплатформенных финансовых приложений для Android и iOS",
        "Интеграция платежных систем и аналитических инструментов",
        "Внедрение CI/CD процессов для автоматизации сборки и тестирования",
        "Применение архитектурных паттернов BLoC, Provider, GetIt для поддержки чистой архитектуры",
        "Взаимодействие с REST API и WebSocket для обеспечения актуальности данных в реальном времени"
      ],
      technologies: ["Flutter", "Dart", "Firebase", "REST API", "PostgreSQL", "Git", "CI/CD", "BLoC", "GetIt"]
    },
    {
      company: "Работа фрилансером",
      position: "Android / Flutter разработчик",
      period: "Октябрь 2019 - Декабрь 2021",
      description: "Разработка мобильных приложений под Android и iOS с использованием Flutter и нативного Android SDK.",
      achievements: [
        "Разработка более 10 мобильных приложений для клиентов из различных сфер деятельности",
        "Создание и публикация личных приложений в Google Play и App Store",
        "Интеграция с различными API и сервисами третьих сторон",
        "Оптимизация производительности приложений и улучшение пользовательского опыта",
        "Внедрение новых технологий и лучших практик в процесс разработки"
      ],
      technologies: ["Flutter", "Dart", "Android SDK", "Java", "Kotlin", "SQLite", "Firebase", "REST API"]
    },
    {
      company: "Машиностроительные предприятия",
      position: "Ведущий инженер-программист",
      period: "Сентябрь 2011 - Декабрь 2021",
      description: "Программирование для машиностроительного многоосевого оборудования, управление движущимися частями, анализ и верификация управляющих программ.",
      achievements: [
        "Разработка и оптимизация программ для ЧПУ-оборудования с использованием G-кода",
        "Создание и поддержка технической документации и чертежей",
        "Автоматизация процессов с помощью Python-скриптов",
        "Внедрение системы контроля качества для снижения брака",
        "Обучение персонала работе с новым оборудованием и программным обеспечением"
      ],
      technologies: ["G-code (RS-274)", "Python", "CAD/CAM системы", "3D моделирование", "Технический анализ"]
    }
  ];

  return (
    <Header title="Профессиональный опыт">
      <div className="py-8">
        <div className="relative border-l border-gray-300 dark:border-gray-700 ml-3">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 ml-6">
              <div className="absolute w-6 h-6 bg-teal-500 rounded-full -left-3 border-4 border-white dark:border-gray-900"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {exp.position}
                </h3>
                <time className="text-sm text-gray-500 dark:text-gray-400 sm:text-right">
                  {exp.period}
                </time>
              </div>
              
              <h4 className="text-lg font-semibold text-teal-600 dark:text-teal-500 mb-2">
                {exp.company}
              </h4>
              
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                {exp.description}
              </p>
              
              <h5 className="font-semibold mb-2">Ключевые достижения:</h5>
              <ul className="list-disc pl-5 mb-4 space-y-1 text-gray-600 dark:text-gray-300">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mt-3">
                {exp.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Header>
  );
};

export default ExperiencePage;