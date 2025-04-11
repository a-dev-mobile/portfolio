import Header from '../../components/Header'
import { cn } from '../../lib/utils'

type Skill = {
  name: string;
  level: number; // 1-10
  category: 'frontend' | 'backend' | 'mobile' | 'devops' | 'tools';
  icon?: string;
};

const SkillsPage = () => {
  const skills: Skill[] = [
    // Мобильная разработка
    { name: 'Flutter', level: 9, category: 'mobile' },
    { name: 'Dart', level: 9, category: 'mobile' },
    { name: 'BLoC / Cubit', level: 8, category: 'mobile' },
    { name: 'Provider', level: 9, category: 'mobile' },
    { name: 'GetIt', level: 8, category: 'mobile' },
    { name: 'Riverpod', level: 7, category: 'mobile' },
    { name: 'Native Android', level: 7, category: 'mobile' },
    { name: 'iOS (основы)', level: 5, category: 'mobile' },
    
    // Backend разработка
    { name: 'C#', level: 7, category: 'backend' },
    { name: 'Rust', level: 6, category: 'backend' },
    { name: 'Go', level: 7, category: 'backend' },
    { name: 'REST API', level: 8, category: 'backend' },
    { name: 'PostgreSQL', level: 7, category: 'backend' },
    { name: 'Clickhouse', level: 6, category: 'backend' },
    { name: 'Firebase', level: 8, category: 'backend' },
    { name: 'WebSockets', level: 7, category: 'backend' },
    { name: 'gRPC', level: 6, category: 'backend' },
    { name: 'Redis', level: 6, category: 'backend' },
    
    // Frontend
    { name: 'TypeScript', level: 6, category: 'frontend' },
    { name: 'React', level: 6, category: 'frontend' },
    { name: 'Next.js', level: 5, category: 'frontend' },
    { name: 'Tailwind CSS', level: 7, category: 'frontend' },
    
    // DevOps
    { name: 'Docker', level: 8, category: 'devops' },
    { name: 'Kubernetes', level: 4, category: 'devops' },
    { name: 'Kustomize', level: 4, category: 'devops' },
    { name: 'Git', level: 8, category: 'devops' },
    { name: 'CI/CD', level: 7, category: 'devops' },
    { name: 'Prometheus', level: 6, category: 'devops' },
    { name: 'Grafana', level: 6, category: 'devops' },
    
    // Инструменты
    { name: 'Figma', level: 7, category: 'tools' },
    { name: 'Jira', level: 8, category: 'tools' },
    { name: 'VS Code', level: 9, category: 'tools' },
    { name: 'Android Studio', level: 8, category: 'tools' },
  ];

  // Группируем навыки по категориям
  const categories = {
    mobile: { title: 'Мобильная разработка', skills: skills.filter(s => s.category === 'mobile') },
    backend: { title: 'Backend разработка', skills: skills.filter(s => s.category === 'backend') },
    frontend: { title: 'Frontend разработка', skills: skills.filter(s => s.category === 'frontend') },
    devops: { title: 'DevOps', skills: skills.filter(s => s.category === 'devops') },
    tools: { title: 'Инструменты', skills: skills.filter(s => s.category === 'tools') },
  };

  const getLevelColor = (level: number) => {
    if (level >= 9) return 'bg-teal-500';
    if (level >= 7) return 'bg-teal-400';
    if (level >= 5) return 'bg-teal-300';
    return 'bg-gray-300';
  };

  return (
    <Header title="Профессиональные навыки">
      <div className="py-8 space-y-12">
        {Object.entries(categories).map(([key, category]) => (
          <div key={key} className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.skills.map((skill) => (
                <div key={skill.name} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-lg">{skill.name}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.level}/10
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className={cn(
                        "h-2.5 rounded-full", 
                        getLevelColor(skill.level)
                      )} 
                      style={{ width: `${skill.level * 10}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Header>
  );
};

export default SkillsPage;