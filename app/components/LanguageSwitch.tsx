
// components/LanguageSwitch.tsx
'use client'

import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Locale } from '../types/i18n';
import { cn } from '../lib/utils';

export const LanguageSwitch: React.FC = () => {
  const { locale, setLocale } = useTranslation();

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale);
  };

  return (
    <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
      <button
        onClick={() => handleLocaleChange('ru')}
        className={cn(
          'px-3 py-1 text-sm font-medium rounded-md transition-all duration-200',
          locale === 'ru'
            ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
        )}
        aria-label="Переключить на русский язык"
      >
        RU
      </button>
      <button
        onClick={() => handleLocaleChange('en')}
        className={cn(
          'px-3 py-1 text-sm font-medium rounded-md transition-all duration-200',
          locale === 'en'
            ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
        )}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
};