'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface Project {
  id: number;
  name: string;
  description: string;
  storeIcon?: string;
  storeLink?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="h-full overflow-hidden flex flex-col dark:border-zinc-600 rounded-lg border border-gray-100 bg-white shadow-lg dark:bg-black dark:shadow-gray-700 shadow-teal-100">
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full cursor-pointer transition-opacity hover:opacity-80 relative aspect-video"
        >
          <Image
            alt={project.name}
            src={`/projects/${project.id}.png`}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </button>

        <h3 className="p-2 text-lg font-medium text-gray-900 dark:text-white">
          {project.name}
        </h3>
        <p className="p-2 text-sm text-gray-500 dark:text-gray-400 flex-1">
          {project.description}
        </p>

        {project.storeIcon && project.storeLink && (
          <div className="flex justify-center border-t border-gray-200 dark:border-gray-700 p-1">
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
            <div className="fixed inset-0 bg-black/70" />
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
                    className="absolute -top-8 right-0 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-lg"
                  >
                    <XMarkIcon className="h-6 w-6" />
                    <span className="sr-only">Close modal</span>
                  </button>

                  <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
                    <Image
                      src={`/projects/${project.id}.png`}
                      alt={project.name}
                      className="object-contain"
                      fill
                      sizes="(max-width: 1536px) 100vw, 1536px"
                      priority
                    />
                  </div>

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