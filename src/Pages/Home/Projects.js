
import { Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons"
const apps = [
  { name: 'شركة البشير العالمية', image: "/Images/Apps/Albasheralalmeia.webp",href:'https://albasheralalmeia.com.iq/',action:'زيارة'},
  { name: 'Iraq Library', image: "https://swultra-studio.web.app/Iraq%20Library.png",href:'https://swultra-studio.web.app/Iraq-Library/',action:'المزيد' },
  { name: 'Shiny Ghast', image: "https://swultra-studio.web.app/Shiny%20Ghast.png",href:'https://swultra-studio.web.app/Shiny-Ghast/',action:'المزيد'},
  { name: 'PDF Ximer', image: "https://swultra-studio.web.app/PDF%20Ximer.png",href:'https://swultra-studio.web.app/PDF-Ximer/' ,action:'المزيد'},
  { name: 'تطبيق خريج', image: "/Images/Apps/Graduate.webp",href:'https://play.google.com/store/apps/details?id=com.graduate.gr',action:'تنزيل'},

];

const Projects = () => {
  return <>
  <Helmet>
        <title>المشاريع</title>
        <link rel="canonical" href="/Projects"/>
    </Helmet>
    <section>
    <h1 className="text-4xl mt-4">المشاريع</h1>
    <div className="bg-gray-100 container px-6 py-10 mx-auto flex flex-wrap justify-center">
      {apps.map((app) => (
        <div key={app.name} className="m-4 flex-shrink-0 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white border border-gray-200 rounded-lg shadow p-6">
          <img className="w-20 h-20 m-auto" src={app.image} alt={app.name} />
          <div className="p-5">
              <h5 className="mb-2 text-2xl tracking-tight text-gray-900">{app.name}</h5>
            <a href={app.href} target="_blank" className="transition-colors duration-200 cursor-pointer inline-flex items-center mt-3 pr-3 pl-2 py-2 text-base font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              <FontAwesomeIcon icon={faCircleInfo} className="h-5 w-5 text-white mr-5" aria-hidden="true"/>
              {app.action}
            </a>
          </div>
        </div>
      ))}

    </div>
    </section>
  </>
};

export default Projects;
