import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Image from 'next/image'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageId: number
  projectName: string
}

const ImageModal = ({ isOpen, onClose, imageId, projectName }: ImageModalProps) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
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
              <Dialog.Panel className="relative max-w-4xl w-full">
                <button
                  onClick={onClose}
                  className="absolute -top-8 right-0 text-white hover:text-gray-300"
                >
                  <XMarkIcon className="h-6 w-6" />
                  <span className="sr-only">Close modal</span>
                </button>
                
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={`/projects/${imageId}.png`}
                    alt={projectName}
                    className="rounded-lg object-contain"
                    fill
                    sizes="(max-width: 1536px) 100vw, 1536px"
                    priority
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ImageModal