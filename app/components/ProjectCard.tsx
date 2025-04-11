'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Project } from '../types/project'

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <>
      <div className="h-full overflow-hidden flex flex-col dark:border-zinc-600 rounded-lg border border-gray-100 bg-white shadow-lg dark:bg-black dark:shadow-gray-700 shadow-teal-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full cursor-pointer transition-opacity hover:opacity-80 relative aspect-video"
        >
          {!imageError ? (
            <Image
              alt={project.name}
              src={`/projects/${project.id}.png`}
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
              <span className="text-3xl font-bold text-teal-500">{project.name[0]}</span>
            </div>
          )}
        </button>

        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            {project.name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 flex-grow mb-4">
            {project.description}
          </p>

          {project.technologies && project.technologies.length > 0 && (
            <div className="mt-auto">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="text-xs bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-100 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {project.storeIcon && project.storeLink && (
          <div className="flex justify-center border-t border-gray-200 dark:border-gray-700 p-2">
            <a
              href={project.storeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <Image 
                src={project.storeIcon}
                alt="Store Icon"
                width={48}
                height={48}
              />
            </a>
          </div>
        )}
      </div>

      <Transition show={isModalOpen} as={Fragment}>
        <Dialog onClose={() => setIsModalOpen(false)} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-4xl">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute -top-10 right-0 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-lg p-1"
                    aria-label="Close modal"
                  >
                    <XMarkIcon className="h-8 w-8" />
                  </button>

                  {!imageError ? (
                    <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
                      <Image
                        src={`/projects/${project.id}.png`}
                        alt={project.name}
                        className="object-contain"
                        fill
                        sizes="(max-width: 1536px) 100vw, 1536px"
                        priority
                        onError={() => setImageError(true)}
                      />
                    </div>
                  ) : (
                    <div className="w-full aspect-video flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl">
                      <div className="text-center">
                        <span className="text-6xl font-bold text-teal-500 block mb-4">{project.name[0]}</span>
                        <h3 className="text-xl text-white">{project.name}</h3>
                      </div>
                    </div>
                  )}

                  <Dialog.Title className="sr-only">
                    {project.name}
                  </Dialog.Title>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default ProjectCard