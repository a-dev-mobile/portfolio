import Header from "@/app/components/Header"
import Image from 'next/image'


interface Project {
  id: number;
  name: string;
  description: string;

  storeIcon?: string; 
  storeLink?: string;
}


const WorkProgects = () => {

  return (
    <Header title='В разработке'>
     




            <div className="flex  justify-center   border-t border-gray-200 dark:border-gray-700 p-1 ">




      </div>
    </Header>
  );
}

export default WorkProgects;

