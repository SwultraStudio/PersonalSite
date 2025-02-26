import Benefits, { Skills } from "./Skills";
import Services from "./Services";
//import Integrations from "./Integrations";
import Features from "./Features";
import { Helmet } from "react-helmet-async";
import CTA from "./CTA";
import { HashLink } from "react-router-hash-link";
import Icon from "../../Icons/Icon";
import iconSet from "../../Icons/General/selection.json";
import Frameworks from "./Frameworks";
import ProjectsImagesSlider from "../../Components/Projects-Slider/Projects-Slider";

const Home = () => {

const projects = [
    {
        "name":"منصة خريج",
        "imageUrl":"https://ahmad-mohamad-software.web.app/Images/Apps/Graduate.webp",
        "link":"https://play.google.com/store/apps/details?id=com.graduate.gr",
        "description":"تطبيق عراقي تعليمي لنشر الكورسات التدريبية."
    },
    {
        "name":"مدونة شركة البشير العالمية",
        "imageUrl":"https://ahmad-mohamad-software.web.app/Images/Apps/Albasheralalmeia.webp",
        "link":"https://albasheralalmeia.com.iq/",
        "description":"موقع ومدونة شركة البشير العالمية."
    },
    {
        "name":"مكتبة العراق",
        "imageUrl":"https://swultra-studio.web.app/Iraq%20Library.png",
        "link":"https://play.google.com/store/apps/details?id=com.Tekno5Studio.IraqLibrary",
        "description":"تطبيق عراقي يختص بنشر الملازم والكتب للمناهج الاعدادية. نسخة الاندرويد"
    },
    {
        "name":"Shiny Ghast",
        "imageUrl":"https://swultra-studio.web.app/Shiny%20Ghast.png",
        "link":"https://swultra-studio.web.app/Shiny-Ghast/",
        "description":"تطبيق عربي يساعدك على نشر وتنزيل مختلف إنواع الخرائط والمودات في لعبة ماين كرافت."
    },
    {
        "name":"PDF Ximer",
        "imageUrl":"https://swultra-studio.web.app/PDF%20Ximer.png",
        "link":"https://swultra-studio.web.app/PDF-Ximer/",
        "description":"برنامج ويندوز يساعدك على تصفح ملفات PDF واستخراج الصفحات على شكل صور"
    },
    {
        "name":"مكتبة العراق | ويندوز",
        "imageUrl":"https://ahmad-mohamad-software.web.app/Images/Apps/Iraq-Library-pc.webp",
        "link":"https://swultra-studio.web.app/Iraq-Library/",
        "description":"تطبيق عراقي يختص بنشر الملازم والكتب للمناهج الاعدادية."
    },
    {
        "name":"Battlefield 2 Dark",
        "imageUrl":"https://ahmad-mohamad-software.web.app/Images/Apps/Battlefield-2-Dark.png",
        "link":"",
        "description":"تطبيق لنظام الويندوز يساعدك على تجربة الاون لاين في لعبة باتل فيلد 2"
    },
    {
        "name":"IQ4U Plus",
        "imageUrl":"https://ahmad-mohamad-software.web.app/Images/Apps/IQ4UPlus.webp",
        "link":"",
        "description":"تطبيق لنظام الويندوز يساعدك على تنزيل الالعاب والباتشات بشكل مجاني ومميزات عديدة"
    },
    {
        "name":"My Code Editor",
        "imageUrl":"https://ahmad-mohamad-software.web.app/Images/Apps/My-Code-Editor.png",
        "link":"",
        "description":"محرر اكواد ونصوص لنظام الويندوز يتمتع بمميزات عديدة"
    },
]

    return (
        <>
            <Helmet>
                <title>احمد محمد</title>
                <link rel="canonical" href="/" />
                <meta name="description" content="الموقع الالكتروني الشخصي لـ احمد محمد - Software" />
            </Helmet>

            <section dir="rtl" class=" px-6 py-16  text-center">
                <div class="max-w-5xl mx-auto flex justify-center items-center flex-col">
                    <h1 class="text-3xl font-semibold text-gray-800  lg:text-5xl">Ahmad Mohamad</h1>
                    <p class="mt-6 text-blue-600  text-lg">
                    Full-Stack Developer | Mobile & Desktop App Developer | DevOps | صانع محتوى
                    </p>
                    <p class="mt-4 text-gray-500 leading-9 text-xl ">
                    أنا أحمد محمد، شغوف بالبرمجة وتطوير الألعاب منذ الطفولة 🎮. بدأت رحلتي بتعلم برمجة وتصميم المواقع والمودات 🖥️، ثم توسعت إلى تطوير تطبيقات الحاسوب والأندرويد 📱💻، وصولًا إلى بناء الأنظمة والـBack End ⚙️🚀. إلى جانب التقنية، أهتم بريادة الأعمال والمشاريع الناشئة 💼✨.</p>
                    
                    
                    <img loading="eager" className="object-cover w-40 mt-7 rounded-full border-4 border-[#E3A008]" src="https://ahmad-mohamad-software.web.app/Images/Personal/Me.jpeg"/>
                    <HashLink smooth to="/#Skills"><button class="group w-fit px-3 pr-4 py-2 mt-8 text-base font-semibold tracking-wider text-black uppercase transition-colors duration-200 transform bg-yellow-400 rounded-lg lg:w-auto hover:bg-green-600 focus:outline-none animate-bounce shadow-md hover:text-white">المزيد عني  <Icon className="animate-spin mr-4 text-gray-950 group-hover:text-white transition duration-200" iconSet={iconSet} icon="explore" size={30} aria-hidden="true"/></button></HashLink>

                </div>
            </section>
            <Skills />
            <Services />

            <ProjectsImagesSlider projects={projects}/>
            <Features/>
        </>
    );
}

export default Home;
