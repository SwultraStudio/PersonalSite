import Icon from "../../Icons/Icon";
import iconSet from "../../Icons/General/selection.json";
import { Link } from "react-router-dom";

const CTA = ()=>{
    return(
<section class="bg-gray-100 pb-9 lg:flex lg:justify-center pt-5">
    <div
        class="overflow-hidden bg-violet-700 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  lg:mx-8 lg:flex lg:max-w-6x2 lg:w-full lg:shadow-md lg:rounded-xl">
        <div class="lg:w-1/2">
            <img loading="lazy" class="h-64 bg-cover mt-6 mx-auto lg:ml-6 rounded-md" src='https://www.assignmentexpert.com/blog/wp-content/uploads/2020/12/self-learning-programming.jpg'></img>
        </div>

        <div class="max-w-xl px-6 py-12 mx-auto lg:ml-6">
        <h2 class="text-2xl font-semibold text-white md:text-3xl">
            لنبدأ <span class="text-yellow-400">التعاون</span>
          </h2>

            <p dir="rtl" class="mt-4 text-white text-xl text-right">
            هل تبحث عن بدء مشروع جديد أو التعاون في فرصة عمل ؟ أنا هنا لمساعدتك في تحقيق أفكارك وتحويلها إلى واقع. تواصل معي الآن لمناقشة كيف يمكننا العمل معًا.
            </p>

            <div class="inline-flex w-full mt-6 sm:w-auto">
                <Link dir="rtl" reloadDocument to="/Posts" class="animate-bounce w-full px-3 pr-8 py-2 text-lg text-white duration-300 bg-transparent rounded-md hover:bg-white hover:text-black border-2">
                    تواصل معي <Icon iconSet={iconSet} className="mr-8" icon="rocket" size={28} />
                </Link>
            </div>
        </div>
    </div>
</section>
    );
}

export default CTA;