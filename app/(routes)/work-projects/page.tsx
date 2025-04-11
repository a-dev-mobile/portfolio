import Header from '../../components/Header'
import ProjectCard from '../../components/ProjectCard'
import { Project } from '../../types/project'

const WorkProjects = () => {
  // Рабочие проекты с подробным описанием
  const projects: Project[] = [
    {
      id: 201,
      name: "Мой РТК",
      description: "Приложение для сотрудников розничной сети МТС с уведомлениями о кадровых перемещениях, регистрацией рабочих смен через WFM Verme, информацией о продажах и графиком работы. Включает функционал для задач обучения и возможность сборки заказов интернет-магазина.",
      technologies: ["Flutter", "Dart", "C#", "Rust", "PostgreSQL", "Kubernetes"]
    },
    {
      id: 202,
      name: "ОПЕРАТОР+",
      description: "Мобильное приложение для операторов поддержки МТС, в котором можно узнать свои показатели, ознакомиться с обновлениями СУЗ, проверить график работы и пройти онбординг. Проект направлен на улучшение эффективности сотрудников поддержки и их лояльности.",
      technologies: ["Flutter", "Dart", "Rust", "REST API", "Clickhouse", "Firebase"]
    },
    {
      id: 203,
      name: "RETAILIQA - Контроль качества",
      description: "Веб-сервис для оперативного контроля и анализа качества работы розничной сети магазинов. Система включает веб-сайт и мобильное приложение для проведения электронных проверок, используемых ревизорами, аудиторами и руководителями.",
      technologies: ["Flutter Web", "C#", "PostgreSQL", "Docker", "Kubernetes"]
    },
    {
      id: 101,
      name: "Финтех Платформа",
      description: "Кроссплатформенное финансовое приложение для управления личными финансами, инвестициями и криптовалютными активами с интеграцией платежных систем и биометрической аутентификацией.",
      technologies: ["Flutter", "Dart", "Firebase", "REST API", "BLoC", "Get_it"]
    },
    {
      id: 102,
      name: "UTM Аналитика",
      description: "Микросервис на Go для сбора, обработки и анализа маркетинговых UTM-меток в реальном времени. Система интегрируется с маркетинговыми инструментами и предоставляет детальную аналитику эффективности кампаний.",
      technologies: ["Go", "Docker", "Prometheus", "Grafana", "PostgreSQL", "Redis"]
    },
    {
      id: 103,
      name: "Корпоративная Дашборд Система",
      description: "Внутренняя платформа для мониторинга и управления проектами компании с интеграцией данных из различных источников, включая JIRA, GitHub и внутренние системы. Позволяет визуализировать KPI и метрики в реальном времени.",
      technologies: ["Go", "React", "Docker", "WebSockets", "GraphQL", "InfluxDB"]
    },
    {
      id: 104,
      name: "Trading View",
      description: "Встраиваемый модуль для визуализации рыночных данных в реальном времени. Позволяет пользователям отслеживать котировки акций, криптовалют и других финансовых инструментов с возможностью настраиваемых индикаторов.",
      technologies: ["Flutter", "WebSocket", "Custom Charts", "Provider"]
    },
    {
      id: 105,
      name: "Кросс-платформенная Авторизация",
      description: "Система единой авторизации для экосистемы финансовых приложений компании. Включает в себя многофакторную аутентификацию, биометрическую верификацию и защищенное хранение пользовательских данных.",
      technologies: ["Go", "JWT", "OAuth2", "gRPC", "Consul", "Flutter"]
    },
    {
      id: 106,
      name: "Маркетинговый Трекер",
      description: "Сервис отслеживания эффективности рекламных кампаний с детальной атрибуцией конверсий. Позволяет маркетологам оптимизировать бюджеты и стратегии основываясь на точных данных о поведении пользователей.",
      technologies: ["Go", "Kafka", "Elasticsearch", "Kibana", "RESTful API"]
    }
  ];

  return (
    <Header title='Рабочие Проекты'>
      <div className="pb-6 pt-4">
        <p className="text-gray-600 dark:text-gray-300">
          Ниже представлены некоторые из корпоративных проектов, над которыми я работал в рамках профессиональной деятельности. 
          В соответствии с политикой конфиденциальности, детали реализации и полные технические спецификации не раскрываются.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Header>
  );
}

export default WorkProjects;