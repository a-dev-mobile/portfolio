import Header from '../../components/Header'
import ProjectCard from '../../components/ProjectCard'

interface Project {
  id: number;
  name: string;
  description: string;
  storeIcon?: string;
  storeLink?: string;
}

const AllProjects = () => {
  const iconGooglePlay = './svg/google-play.svg'
  const iconTelegram = './svg/telegram.svg'
  
  const projects: Project[] = [
    {
      id: 10,
      name: "KidneySmart",
      description: 'Приложение для мониторинга питания при диализе и проблемах с почками',
    },
    {
      id: 9,
      name: "ГОСТ ISO Метрическая резьба",
      description: "Приложение для машиностроительной резьбы",
      storeIcon: iconGooglePlay,
      storeLink: 'https://play.google.com/store/apps/details?id=a.dev.mobile.threadfon'
    },
    {
      id: 11,
      name: "ProxyFinderBot",
      description: "Телеграм бот ищет прокси из общедоступных источников",
      storeIcon: iconTelegram,
      storeLink: 'https://t.me/turngenbot'
    },
    {
      id: 1,
      name: "Геометрические допуски",
      description: "Справочник по геометрическим допускам в машиностроении. На основе ГОСТ Р 53442–2015",
      storeIcon: iconGooglePlay,
      storeLink: 'https://play.google.com/store/apps/details?id=a.dev.mobile_geometricaltolerance'
    },
    {
      id: 4,
      name: "CncCalc",
      description: "Калькулятор для станков с числовым программным управлением",
      storeIcon: iconGooglePlay,
      storeLink: 'https://play.google.com/store/apps/details?id=a.dev.mobile_cnc'
    },
    {
      id: 5,
      name: "InsertInfo",
      description: "Руководство по износу для металлорежущих пластин",
      storeIcon: iconGooglePlay,
      storeLink: 'https://play.google.com/store/apps/details?id=a.dev.mobile_insert_wear'
    },
    {
      id: 6,
      name: "Резьба UN/ISO/Tr",
      description: "Руководство по параметрам для различных резьб",
      storeIcon: iconGooglePlay,
      storeLink: 'https://play.google.com/store/apps/details?id=a.dev.mobile_threadpro'
    },
    {
      id: 7,
      name: "G - Трубная цилиндрическая резьба",
      description: "Руководство по параметрам трубной резьбы",
      storeIcon: iconGooglePlay,
      storeLink: 'https://play.google.com/store/apps/details?id=a.dev.mobile.gthread'
    },
    {
      id: 8,
      name: "TriangleCalc",
      description: "Калькулятор расчета параметров треугольника",
      storeIcon: iconGooglePlay,
      storeLink: 'https://play.google.com/store/apps/details?id=a.dev.calc_triangle'
    },
    {
      id: 2,
      name: "Квалитеты и допуски",
      description: "Справочник по основным допускам в машиностроении",
      storeIcon: iconGooglePlay,
      storeLink: 'https://play.google.com/store/apps/details?id=a.dev.mobile_tolerance'
    },
    {
      id: 3,
      name: "Расчёт углов",
      description: "Калькулятор угла прямоугольного треугольника",
      storeIcon: iconGooglePlay,
      storeLink: 'https://play.google.com/store/apps/details?id=a.dev.mobile_angle_and_triangle'
    },
  ];

  return (
    <Header title='Личные проекты'>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 pt-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Header>
  );
}

export default AllProjects;