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

const Home = () => {
    return (
        <>
            <Helmet>
                <title>القائمة الرئيسية</title>
                <link rel="canonical" href="/" />
                <meta name="description" content="الموقع الرسمي احمد محمد - Software" />
            </Helmet>

            <section dir="rtl" class="container px-6 py-16 mx-auto text-center">
                <div class="max-w-4xl mx-auto">
                    <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-5xl">نبذة عن احمد محمد</h1>
                    <p class="mt-6 text-blue-600  text-lg">
                    Full-Stack Developer | Mobile & Desktop App Developer | DevOps | Content Creator

                    </p>
                    <p class="mt-4 text-gray-500  text-xl">
                        أهلاً وسهلاً بكم في موقعي الشخصي! هنا ستجدون معلومات حول مهاراتي، مشاريعي، والمحتوى التعليمي الذي أقدمه. استكشفوا واستمتعوا بمعرفة المزيد عن رحلتي في عالم البرمجة.
                    </p>
                    <HashLink smooth to="/#Skills"><button class="group w-fit px-3 pr-4 py-2 mt-6 text-base font-semibold tracking-wider text-black uppercase transition-colors duration-200 transform bg-yellow-400 rounded-lg lg:w-auto hover:bg-green-600 focus:outline-none animate-bounce shadow-md hover:text-white">ابدء الاكتشاف <Icon className="animate-spin mr-4 text-gray-950 group-hover:text-white transition duration-200" iconSet={iconSet} icon="explore" size={30} aria-hidden="true"/></button></HashLink>

                </div>
            </section>
            <Skills />
            <Frameworks />
            <Services />
            <Features/>
        </>
    );
}

export default Home;
