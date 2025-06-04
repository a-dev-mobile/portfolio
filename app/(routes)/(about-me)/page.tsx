'use client'

import Image from 'next/image'
import Header from '../../components/Header'
import { useTranslation } from '../../hooks/useTranslation'

export default function Home() {
  const { t } = useTranslation()

  return (
    <Header title={t.about.title}>
      <div className='space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0'>
        <div className='flex flex-col items-center pt-8'>
          <Image
            alt='Picture of Dmitriy Trofimov'
            src='./me.jpg'
            className='h-48 w-48 rounded-full object-cover object-top shadow-lg'
            unoptimized={true}
            width={192}
            height={192}
            priority 
          />

          <h3 className='pt-4 pb-2 text-2xl font-bold'>{t.about.name}</h3>
          <p className='text-gray-500 text-center'>
            {t.about.role} <br /> 
            <span className='text-teal-500 font-bold'>{t.about.yearsExperience}</span>
          </p>
          
          <div className='flex pt-6 space-x-5'>
            <a href="https://github.com/a-dev-mobile" target='_blank' aria-label="GitHub">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className='w-8 h-8 text-teal-600 hover:text-teal-700 transition-colors'>
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
              </svg>
            </a>

            <a href="https://play.google.com/store/apps/developer?id=Dmitry+Trofimov" target='_blank' aria-label="Google Play">
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                className='w-7 h-8 text-teal-600 hover:text-teal-700 transition-colors'
              >
                <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295zM1 13.396V2.603L6.846 8 1 13.396zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27z" />
              </svg>
            </a>

            <a href="https://t.me/dmitriy_tr" target='_blank' aria-label="Telegram">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className='w-8 h-8 text-teal-600 hover:text-teal-700 transition-colors'
              >
                <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
              </svg>
            </a>

            <a href="https://www.linkedin.com/in/a-dev-mobile/" target='_blank' aria-label="LinkedIn">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className='w-8 h-8 text-teal-600 hover:text-teal-700 transition-colors'
              >
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
              </svg>
            </a>

            <a href="https://pub.dev/publishers/wayofdt.com/packages" target='_blank' aria-label="Pub.dev">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className='w-7 h-8 text-teal-600 hover:text-teal-700 transition-colors'
              >
                <path d="M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 011.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9-9C.303 14.5 0 13.795 0 13.105c0-.319.18-.818.316-1.105l3.789-7.895zm.679.679v11.787c.002.543.021 1.024.498 1.508L10.204 23h8.533v-4.263L4.784 4.784zm12.055-.678c-.899-.896-1.809-1.78-2.74-2.643-.302-.267-.567-.468-1.07-.462-.37.014-.87.195-.87.195L6.341 4.105l10.498.001z" />
              </svg>
            </a>

            <a href="mailto:wayofdt@gmail.com" target='_blank' aria-label="Email">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className='w-8 h-8 text-teal-600 hover:text-teal-700 transition-colors'
              >
                <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 01194 256h648.8a7.2 7.2 0 014.4 12.9z" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="prose max-w-none prose-lg pt-8 pb-7 dark:prose-invert lg:col-span-2">
          <section>
            <h2 className="text-2xl font-bold mb-5">{t.about.aboutEducation}</h2>
            <p className="mb-3">
              Я Flutter (FullStack) разработчик с более чем 3-летним опытом в мобильной и веб-разработке. Официально с 2015 года занимаюсь программированием, начинал с Python для машиностроительного оборудования.
            </p>
            <p className="mb-3">
              <strong>Образование:</strong>
            </p>
            <ul className="list-disc pl-5 mb-3">
              <li>{t.about.education.university}</li>
              <li>{t.about.education.college}</li>
              <li>{t.about.education.techSchool}</li>
            </ul>
            <p className="mb-3">
              <strong>{t.about.courses.title}</strong>
            </p>
            <ul className="list-disc pl-5 mb-3">
              <li>{t.about.courses.esprit}</li>
              <li>{t.about.courses.technologies}</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-5">{t.about.currentPosition}</h2>
            <p className="mb-3">{t.about.currentWork.description}</p>
            <ul className="list-disc pl-5 mb-5">
              {t.about.currentWork.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-5">{t.about.itExperience}</h2>
            <ul className="list-disc pl-5 mb-5">
              <li>{t.about.experience.years}</li>
              {t.about.experience.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-5">{t.about.personalProjects}</h2>
            <ul className="list-disc pl-5 mb-5">
              <li>{t.about.projects.apps}</li>
              <li>{t.about.projects.technical}</li>
              <li>{t.about.projects.telegram}</li>
              <li>{t.about.projects.packages}</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-5">{t.about.personalQualities}</h2>
            <ul className="list-disc pl-5">
              {t.about.qualities.map((quality, index) => (
                <li key={index}>{quality}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </Header>
  )
}