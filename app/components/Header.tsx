import { ReactNode } from "react";





type HeaderProps = {
    title: string;
    children?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, children }) => {
    return (<div className='divide-y divide-gray-300 dark:divide-gray-700'>
        <div className='pt-5 pb-8'>
            <h1 className='text-3xl font-bold '>
                {title}
            </h1>
        </div>
        {children}
    </div>)
}
export default Header