'use client'

import Header from '../../components/Header'
import { useTranslation } from '../../hooks/useTranslation'

type Experience = {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
};

const ExperiencePage = () => {
  const { t } = useTranslation()

  const experiences: Experience[] = [
    {
      company: t.experience.mts.company,
      position: t.experience.mts.position,
      period: t.experience.mts.period,
      description: t.experience.mts.description,
      achievements: t.experience.mts.achievements,
      technologies: ["Flutter", "Dart", "Rust", "C#", "PostgreSQL", "Clickhouse", "Kubernetes", "Docker", "Firebase"]
    },
    {
      company: t.experience.aventus.company,
      position: t.experience.aventus.position,
      period: t.experience.aventus.period,
      description: t.experience.aventus.description,
      achievements: t.experience.aventus.achievements,
      technologies: ["Flutter", "Dart", "Firebase", "REST API", "PostgreSQL", "Git", "CI/CD", "BLoC", "GetIt"]
    },
    {
      company: t.experience.freelance.company,
      position: t.experience.freelance.position,
      period: t.experience.freelance.period,
      description: t.experience.freelance.description,
      achievements: t.experience.freelance.achievements,
      technologies: ["Flutter", "Dart", "Android SDK", "Java", "Kotlin", "SQLite", "Firebase", "REST API"]
    },
    {
      company: t.experience.engineering.company,
      position: t.experience.engineering.position,
      period: t.experience.engineering.period,
      description: t.experience.engineering.description,
      achievements: t.experience.engineering.achievements,
      technologies: ["G-code (RS-274)", "Python", "CAD/CAM системы", "3D моделирование", "Технический анализ"]
    }
  ];

  return (
    <Header title={t.experience.title}>
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
              
              <h5 className="font-semibold mb-2">{t.experience.achievements}</h5>
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