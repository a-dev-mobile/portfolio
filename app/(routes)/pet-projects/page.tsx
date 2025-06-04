'use client'

import Header from '../../components/Header'
import ProjectCard from '../../components/ProjectCard'
import { useTranslation } from '../../hooks/useTranslation'
import { Project } from '../../types/project'

const AllProjects = () => {
  const { t } = useTranslation()
  const iconGooglePlay = './svg/google-play.svg'
  const iconTelegram = './svg/telegram.svg'
  
  const projects: Project[] = [
    {
      id: 10,
      name: t.projects.personal.kidneySmart.name,
      description: t.projects.personal.kidneySmart.description,
      technologies: ['Flutter', 'Firebase', 'SQLite']
    },
    {
      id: 9,
      name: t.projects.personal.gostThread.name,
      description: t.projects.personal.gostThread.description,
      technologies: ['Flutter', 'Dart'],
      storeIcon: iconGooglePlay,
      storeLink: 'https://play.google.com/store/apps/details?id=a.dev.mobile.threadfon'
    },
    {
      id: 11,
      name: t.projects.personal.proxyBot.name,
      description: t.projects.personal.proxyBot.description,
      technologies: ['Go', 'Telegram API'],
      storeIcon: iconTelegram,
      storeLink: 'https://t.me/turngenbot'
    },
    {
      id: 1,
      name: t.projects.personal.geometrical.name,
      description: t.projects.personal.geometrical.description,
      technologies: ['Flutter', 'SQLite'],
      storeIcon: iconGooglePlay,
      storeLink: 'https://play.google.com/store/apps/details?id=a.dev.mobile_geometricaltolerance'
    },
    {
      id: 4,
      name: t.projects.personal.cncCalc.name,
      description: t.projects.personal.cncCalc.description,
      technologies: ['Flutter'],
      storeIcon: iconGooglePlay,
      storeLink: 'https://play.google.com/store/apps/details?id=a.dev.mobile_cnc'
    },
    {
      id: 5,
      name: t.projects.personal.insertInfo.name,
      description: t.projects.personal.insertInfo.description,
      technologies: ['Flutter', 'Dart'],
      storeIcon: iconGooglePlay,
      storeLink: 'https://play.google.com/store/apps/details?id=a.dev.mobile_insert_wear'
    },
    {
      id: 6,
      name: t.projects.personal.threadPro.name,
      description: t.projects.personal.threadPro.description,
      technologies: ['Flutter', 'SQLite'],
      storeIcon: iconGooglePlay,
      storeLink: 'https://play.google.com/store/apps/details?id=a.dev.mobile_threadpro'
    },
    {
      id: 7,
      name: t.projects.personal.gThread.name,
      description: t.projects.personal.gThread.description,
      technologies: ['Flutter'],
      storeIcon: iconGooglePlay,
      storeLink: 'https://play.google.com/store/apps/details?id=a.dev.mobile.gthread'
    },
    {
      id: 8,
      name: t.projects.personal.triangleCalc.name,
      description: t.projects.personal.triangleCalc.description,
      technologies: ['Flutter', 'Dart'],
      storeIcon: iconGooglePlay,
      storeLink: 'https://play.google.com/store/apps/details?id=a.dev.calc_triangle'
    },
    {
      id: 2,
      name: t.projects.personal.tolerances.name,
      description: t.projects.personal.tolerances.description,
      technologies: ['Flutter', 'SQLite'],
      storeIcon: iconGooglePlay,
      storeLink: 'https://play.google.com/store/apps/details?id=a.dev.mobile_tolerance'
    },
    {
      id: 3,
      name: t.projects.personal.angleCalc.name,
      description: t.projects.personal.angleCalc.description,
      technologies: ['Flutter'],
      storeIcon: iconGooglePlay,
      storeLink: 'https://play.google.com/store/apps/details?id=a.dev.mobile_angle_and_triangle'
    },
  ];

  return (
    <Header title={t.projects.personal.title}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 pt-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Header>
  );
}

export default AllProjects;