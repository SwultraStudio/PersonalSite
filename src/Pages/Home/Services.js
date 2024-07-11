import Icon from "../../Icons/Icon";
import iconSet from "../../Icons/General/selection.json";
import iconSet_2 from "../../Icons/Extra Services/selection.json";

export const Services = () => {
    return (
        <section class="bg-gray-100 " id="Services">
            <div class="container px-6 mx-auto">
                <h2 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl "> الخدمات التي <span class="text-blue-500"> اقدمها</span></h2>

                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                    <div class="group p-8 space-y-3  rounded-xl bg-gradient-to-b from-yellow-600 to-red-600">
                        <span class="inline-block text-white">
                            <Icon iconSet={iconSet} icon="machine-learning" size={90} />

                        </span>

                        <h2 dir="rtl" class="text-xl font-semibold text-white capitalize">بناء الباك إند باستخدام ASP.NET Core</h2>

                        <p dir="rtl" class="text-white">
                        أقدم خدمات تطوير الباك إند باستخدام ASP.NET Core Web API، لتوفير حلول موثوقة وقابلة للتطوير. سواء كنت تحتاج إلى بناء واجهات برمجة تطبيقات قوية، أو إدارة قواعد بيانات معقدة، أو دمج خدمات خارجية، يمكنني مساعدتك في تحقيق أهدافك.


                        </p>
                    </div>

                    <div class="group p-8 space-y-3 border-2  rounded-xl bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">
                        <span class="inline-block text-white">
                        <Icon iconSet={iconSet_2} icon="website-2" size={90} />

                        </span>

                        <h2 class="text-xl font-semibold text-white capitalize">برمجة المواقع</h2>

                        <p dir="rtl" class="text-white">
                        أقدم خدمات تصميم وبرمجة مواقع الإنترنت، حيث أعمل على إنشاء مواقع جذابة وسهلة الاستخدام. أسعى لتحقيق التوازن بين الإبداع والتكنولوجيا الحديثة لضمان تقديم تجربة مستخدم مميزة تلبي احتياجاتك.

                        </p>


                    </div>


                   
                    <div class="group p-8 space-y-3 border-2  rounded-xl bg-black transition-colors duration-200">
                        <span class="inline-block text-white">
                            <Icon iconSet={iconSet_2} icon="laptop" size={90} />

                        </span>

                        <h2 class="text-xl font-semibold text-white capitalize">برمجة تطبيقات الحاسوب</h2>

                        <p dir="rtl" class="text-white">
                        أقدم خدمات تطوير تطبيقات سطح المكتب باستخدام أحدث التقنيات لضمان تقديم حلول برمجية فعالة وعالية الأداء. سواء كنت بحاجة إلى تطبيق مخصص لأغراض الأعمال أو أداة لتسهيل العمليات اليومية، سأعمل على تحقيق رؤيتك بأفضل صورة ممكنة.

                        </p>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Services;