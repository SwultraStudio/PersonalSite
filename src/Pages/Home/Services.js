import Icon from "../../Icons/Icon";
import iconSet from "../../Icons/General/selection.json";
import iconSet_2 from "../../Icons/Extra Services/selection.json";
import iconSet_3 from "../../Icons/New/selection.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const Services = () => {
    return (
        <section class="bg-gray-100 mt-5" id="Services">
            <div class=" px-6 ">
                <h2 class="text-2xl font-semibold text-gray-800 capitalize">الخدمات التي <span class="text-blue-500">أقدمها</span></h2>

                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2  xl:grid-cols-4">

                    <div class="group p-8 space-y-3 rounded-xl bg-gradient-to-b from-green-600 to-teal-600 ">
                        <span class="inline-block text-white">
                            <Icon iconSet={iconSet_3} icon="website-marketing" size={90} />
                        </span>
                        <h2 class="text-xl font-semibold text-white capitalize">برمجة المواقع</h2>
                        <p dir="rtl" class="text-white">
                            يمكنني إنشاء موقع إلكتروني يناسب احتياجاتك مثل:
                        </p>
                        <ul dir="rtl" class="text-white space-y-1">
                            <li><FontAwesomeIcon icon={faCheck} className="mr-2" /> موقع تعريفي لشركتك</li>
                            <li><FontAwesomeIcon icon={faCheck} className="mr-2" /> متجر إلكتروني لبيع منتجاتك</li>
                            <li><FontAwesomeIcon icon={faCheck} className="mr-2" /> بروفايل شخصي يعكس هويتك</li>
                        </ul>
                    </div>

                    <div class="group p-8 space-y-3 rounded-xl bg-gradient-to-b from-purple-600 to-pink-600 ">
                        <span class="inline-block text-white">
                            <Icon iconSet={iconSet_3} icon="mobile" size={90} />
                        </span>
                        <h2 class="text-xl font-semibold text-white capitalize">برمجة تطبيقات الموبايل</h2>
                        <p dir="rtl" class="text-white">
                            إذا كنت تفكر في تطوير تطبيق، يمكنني مساعدتك في :
                        </p>
                        <ul dir="rtl" class="text-white space-y-1">
                            <li><FontAwesomeIcon icon={faCheck} className="mr-2" /> تطبيق لمتجرك</li>
                            <li><FontAwesomeIcon icon={faCheck} className="mr-2" /> تطبيق لمشروعك الخاص</li>
                            <li><FontAwesomeIcon icon={faCheck} className="mr-2" /> تطبيق لأي فكرة مبتكرة لديك</li>
                        </ul>
                    </div>

                    <div class="group p-8 space-y-3 rounded-xl bg-gradient-to-b from-red-600 to-orange-600">
                        <span class="inline-block text-white">
                            <Icon iconSet={iconSet_3} icon="server" size={90} />
                        </span>
                        <h2 class="text-xl font-semibold text-white capitalize">استضافة | دومين | سيرفرات</h2>
                        <p dir="rtl" class="text-white">
                            أساعدك في اختيار الخدمات المناسبة لموقعك أو مشروعك مثل :
                        </p>
                        <ul dir="rtl" class="text-white space-y-1">
                            <li><FontAwesomeIcon icon={faCheck} className="mr-2" /> شراء استضافة موثوقة</li>
                            <li><FontAwesomeIcon icon={faCheck} className="mr-2" /> تسجيل دومين خاص بك</li>
                            <li><FontAwesomeIcon icon={faCheck} className="mr-2" /> توفير سيرفرات قوية لـ ASP.NET Core</li>
                        </ul>
                    </div>

                    <div class="group p-8 space-y-3 rounded-xl bg-gradient-to-b from-blue-600 to-indigo-600  ">
                        <span class="inline-block text-white">
                            <Icon iconSet={iconSet_2} icon="laptop" size={90} />
                        </span>
                        <h2 class="text-xl font-semibold text-white capitalize">برمجة تطبيقات الحاسوب</h2>
                        <p dir="rtl" class="text-white">
                            يمكنني تطوير برامج مخصصة تناسب احتياجاتك مثل :
                        </p>
                        <ul dir="rtl" class="text-white space-y-1">
                            <li><FontAwesomeIcon icon={faCheck} className="mr-2" /> نظام لإدارة المدارس والمعاهد</li>
                            <li><FontAwesomeIcon icon={faCheck} className="mr-2" /> نظام مبيعات ومخازن</li>
                            <li><FontAwesomeIcon icon={faCheck} className="mr-2" /> برنامج أرشفة وتنظيم البيانات</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
