import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faReact,
    faDocker,
    faGithub,
    faDigitalOcean
}from "@fortawesome/free-brands-svg-icons"


import Icon from "../../Icons/Icon";
import iconSet from "../../Icons/Frameworks/selection.json";
import { iconList } from "react-icomoon";


const OtherIcons = iconList(iconSet);


const Frameworks = ()=>{
    const apps =[
        { icon: faReact, name: 'React' },
        { icon: faDocker, name: 'Docker' },
        { icon: faGithub, name: 'GitHub' },
        { icon: faDigitalOcean, name: 'Digital Ocean' },

    ]

    return (

        <section class="py-4">

        <h2 class="text-2xl font-semibold text-center text-indigo-600 capitalize lg:text-3x mb-5">أطر العمل والتقنيات</h2>
        
        <div className="bg-indigo-500 rounded-md">
        <div class="container px-6 py-10 mx-auto">
            {
                apps.map((data)=>(
                    <FontAwesomeIcon icon={data.icon} className="h-8 w-8 mr-4 p-3 rounded-md text-white hover:bg-gradient-to-r from-amber-200 to-yellow-400 hover:text-black transition duration-200" aria-hidden="true"/>
                ))
            }
            {
                OtherIcons.map((myIcon)=>(
                    <Icon iconSet={iconSet} icon={myIcon} className="rounded-md mb-10 mr-4 p-3 text-white hover:bg-gradient-to-r from-amber-200 to-yellow-400 hover:text-black transition duration-200 focus:outline-none" size={62} />

                ))
            }
            </div>
        </div>
        

            </section>
    );
}

export default Frameworks;