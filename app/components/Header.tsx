import { ReactNode } from "react";
import { useTranslation } from "../hooks/useTranslation";

type HeaderProps = {
    title?: string;
    children?: ReactNode;
    translationKey?: keyof typeof import('../locales/ru').ru;
}

const Header: React.FC<HeaderProps> = ({ title, children, translationKey }) => {
    const { t } = useTranslation();
    
    // If translationKey is provided, use it; otherwise use the title prop
    const displayTitle = translationKey ? (t as any)[translationKey]?.title || title : title;
    
    return (
        <div className='divide-y divide-gray-300 dark:divide-gray-700'>
            <div className='pt-6 pb-8'>
                <h1 className='text-3xl font-bold relative'>
                    {displayTitle}
                    <span className="absolute left-0 bottom-0 h-1 w-16 bg-teal-500 rounded-full mt-2" />
                </h1>
            </div>
            <div className="py-4">
                {children}
            </div>
        </div>
    )
}

export default Header
