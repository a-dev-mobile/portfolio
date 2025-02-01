'use client'

import Image from 'next/image'
import { useState } from 'react'
import { cn } from '../lib/utils'
import type { Project } from '../types/project'

interface ProjectCardProps {
  project: Project
  priority?: boolean
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className={cn(
      "h-full overflow-hidden flex flex-col",
      "border border-gray-100 dark:border-zinc-600 rounded-lg",
      "bg-white dark:bg-black",
      "shadow-lg dark:shadow-gray-700 shadow-teal-100",
      "transition-transform hover:scale-[1.02]"
    )}>
      <div className="relative aspect-video">
        <Image
          src={!imageError ? `/projects/${project.id}.png` : '/placeholder.png'}
          alt={project.name}
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
          onError={() => setImageError(true)}
        />
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
          {project.name}
        </h3>
        
        <p className="text-sm text-gray-500 dark:text-gray-400 flex-1">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech: string) => (
            <span 
              key={tech}
              className="px-2 py-1 text-xs rounded-full bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {project.storeLink && (
        <div className="border-t border-gray-200 dark:border-gray-700 p-4">
          <a
            href={project.storeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-teal-600 hover:text-teal-700"
          >
            {project.storeIcon && (
              <Image 
                src={project.storeIcon} 
                alt="" 
                width={24} 
                height={24} 
                className="w-6 h-6"
              />
            )}
            View in Store
          </a>
        </div>
      )}
    </div>
  )
}