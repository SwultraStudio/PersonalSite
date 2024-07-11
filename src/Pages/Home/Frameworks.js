import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faReact,
    faDocker,
    faGithub,
}from "@fortawesome/free-brands-svg-icons"

//do not miss Chatgpt icon

import Icon from "../../Icons/Icon";
import iconSet from "../../Icons/Frameworks/selection.json";
import { iconList } from "react-icomoon";


const OtherIcons = iconList(iconSet);


const Frameworks = ()=>{
    const apps =[
        { icon: faReact, name: 'React' },
        { icon: faDocker, name: 'Docker' },
        { icon: faGithub, name: 'GitHub' },

    ]

    return (

        <section class="bg-gray-100 rounded-md py-4 dark:bg-gray-900">

        <h2 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">أطر العمل</h2>
        <div class="container px-6 py-10 mx-auto">
            {
                apps.map((data)=>(
                    <FontAwesomeIcon icon={data.icon} className="h-8 w-8 mr-4 p-3 rounded-md text-gray-600 hover:bg-gradient-to-r from-slate-900 to-slate-700 hover:text-white transition duration-200" aria-hidden="true"/>
                ))
            }
            {
                OtherIcons.map((myIcon)=>(
                    <Icon iconSet={iconSet} icon={myIcon} className="rounded-md mb-10 mr-4 p-3 text-gray-600 hover:bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:text-white transition duration-200 focus:outline-none" size={62} />

                ))
            }
            </div>
            </section>
    );
}

export default Frameworks;