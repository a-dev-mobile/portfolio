'use client'

import Header from '../../components/Header'
import ProjectCard from '../../components/ProjectCard'
import { useTranslation } from '../../hooks/useTranslation'
import { Project } from '../../types/project'

const WorkProjects = () => {
  const { t } = useTranslation()

  const projects: Project[] = [
    {
      id: 201,
      name: t.projects.work.myRtk.name,
      description: t.projects.work.myRtk.description,
      technologies: ["Flutter", "Dart", "C#", "Rust", "PostgreSQL", "Kubernetes"]
    },
    {
      id: 202,
      name: t.projects.work.operator.name,
      description: t.projects.work.operator.description,
      technologies: ["Flutter", "Dart", "Rust", "REST API", "Clickhouse", "Firebase"]
    },
    {
      id: 203,
      name: t.projects.work.retailiqa.name,
      description: t.projects.work.retailiqa.description,
      technologies: ["Flutter Web", "C#", "PostgreSQL", "Docker", "Kubernetes"]
    },
    {
      id: 101,
      name: t.projects.work.fintech.name,
      description: t.projects.work.fintech.description,
      technologies: ["Flutter", "Dart", "Firebase", "REST API", "BLoC", "Get_it"]
    },
    {
      id: 102,
      name: t.projects.work.utm.name,
      description: t.projects.work.utm.description,
      technologies: ["Go", "Docker", "Prometheus", "Grafana", "PostgreSQL", "Redis"]
    },
    {
      id: 103,
      name: t.projects.work.dashboard.name,
      description: t.projects.work.dashboard.description,
      technologies: ["Go", "React", "Docker", "WebSockets", "GraphQL", "InfluxDB"]
    },
    {
      id: 104,
      name: t.projects.work.trading.name,
      description: t.projects.work.trading.description,
      technologies: ["Flutter", "WebSocket", "Custom Charts", "Provider"]
    },
    {
      id: 105,
      name: t.projects.work.auth.name,
      description: t.projects.work.auth.description,
      technologies: ["Go", "JWT", "OAuth2", "gRPC", "Consul", "Flutter"]
    },
    {
      id: 106,
      name: t.projects.work.tracker.name,
      description: t.projects.work.tracker.description,
      technologies: ["Go", "Kafka", "Elasticsearch", "Kibana", "RESTful API"]
    }
  ];

  return (
    <Header title={t.projects.work.title}>
      <div className="pb-6 pt-4">
        <p className="text-gray-600 dark:text-gray-300">
          {t.projects.work.disclaimer}
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