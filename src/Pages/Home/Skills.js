import Icon from "../../Icons/Icon";
import iconSet from "../../Icons/Skills/selection.json";

export const Skills = () => {
  return (
<section class="bg-gray-100" id="Skills">
    <div class="container px-6 py-10 mx-auto">
        <h2 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">المهارات</h2>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            <div class="flex flex-col items-center p-6 space-y-3 text-center bg-slate-900 rounded-xl">
            <span className="inline-block p-4 text-white bg-gradient-to-r from-amber-200 to-yellow-500 rounded-xl">
    <Icon iconSet={iconSet} icon="wbs" className="text-black" size={50} />
</span>

                <h1 class="text-xl font-semibold text-white capitalize">تطوير الويب</h1>

                <p dir="rtl" class="text-white font-medium">
                إجادة HTML، CSS، JavaScript، React و Next.js لتطوير واجهات مستخدم تفاعلية وتجربة مستخدم عالية الأداء مع تحسين SEO.
                </p>
            </div>

            <div class="flex flex-col items-center p-6 space-y-3 text-center bg-slate-900 rounded-xl">
            <span className="inline-block p-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl">
                <Icon iconSet={iconSet} icon="mbph" size={60} />
                </span>

                <h1 class="text-xl font-semibold text-white capitalize">تطوير تطبيقات الموبايل</h1>

                <p dir="rtl" class="text-white">
                خبرة في تطوير تطبيقات أندرويد باستخدام Xamarin.Forms مع عدة تطبيقات منشورة على Google Play.
                </p>
            </div>

            <div class="flex flex-col items-center p-6 space-y-3 text-center bg-slate-900 rounded-xl">
            <span className="inline-block p-4 text-white bg-gradient-to-r from-rose-400 to-red-500 rounded-xl">
                <Icon iconSet={iconSet} icon="pc" size={55} />
                </span>

                <h1 class="text-xl font-semibold text-white capitalize">تطوير تطبيقات سطح المكتب</h1>

                <p dir="rtl" class="text-white">
                تطوير تطبيقات سطح المكتب باستخدام .NET و#C، لتوفير حلول برمجية متكاملة.
                </p>
            </div>

            <div class="flex flex-col items-center p-6 space-y-3 text-center bg-slate-900 rounded-xl">
            <span className="inline-block p-4 text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-xl">
                <Icon iconSet={iconSet} icon="dbs" size={60} />
                </span>

                <h1 class="text-xl font-semibold text-white capitalize">إدارة قواعد البيانات</h1>

                <p dir="rtl" class="text-white">
                تصميم وإدارة قواعد البيانات باستخدام PostgreSQL وFirebase وRedis لضمان فعالية وسرعة الوصول إلى البيانات.
                </p>
            </div>

            <div class="flex flex-col items-center p-6 space-y-3 text-center bg-slate-900 rounded-xl">
            <span className="inline-block p-4 text-white bg-gradient-to-r from-green-500 to-blue-500 rounded-xl">
                <Icon iconSet={iconSet} icon="svr" size={55} />
                </span>

                <h1 class="text-xl font-semibold text-white capitalize">تطوير الواجهات الخلفية</h1>

                <p dir="rtl" class="text-white">
                تخصص في تطوير الواجهات الخلفية باستخدام ASP.NET Core Web API وتصميم وإدارة قواعد البيانات.
                </p>
            </div>

            <div class="flex flex-col items-center p-6 space-y-3 text-center bg-slate-900 rounded-xl">
            <span className="inline-block p-4 text-white bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl">
                <Icon iconSet={iconSet} icon="agl" size={60} />
                </span>

                <h1 class="text-xl font-semibold text-white capitalize">DevOps</h1>

                <p dir="rtl" class="text-white">
                معرفة بأدوات ولغات DevOps مثل CI/CD, Docker, Linux , Python , Kubernetes و Git لضمان تسليم البرمجيات بكفاءة وموثوقية.
                </p>
            </div>

            



        </div>
    </div>
</section>
  );
};
export default Skills;
