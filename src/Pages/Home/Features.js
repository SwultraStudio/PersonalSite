import Icon from "../../Icons/Icon";
import iconSet from "../../Icons/Skills/selection.json";
import iconSet_2 from "../../Icons/New/selection.json";

const Features = ()=>{

const openLink = (targetUrl)=>{
  switch (targetUrl) {
    case "Youtube":
      window.open("https://www.youtube.com/@AhmadMohamadSoftware");
      break;
    case "Courses":
      window.location.href = "/Courses";
      break;
    case "CV":
      window.location.href = "";
      break;
      case "Portfolio":
        window.location.href = "Portfolio";
      break; 
    default:
      break;
  }
};

    return(
        <div class=" mb-10 mx-3 md:px-6 pt-10" id="Features">
          <section class="mb-20 text-center">
          <h2 class="text-2xl mb-20 font-semibold text-gray-800 capitalize  ">المزيد</h2>
        
            <div class="grid lg:grid-cols-4 lg:gap-x-12">
              <div class="mb-12 lg:mb-0">
              <div onClick={()=>openLink("Youtube")} class="group cursor-pointer block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:bg-gradient-to-br from-rose-700 to-pink-600 transition duration-200">
                  <div class="flex justify-center">

                    <div class="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md group-hover:bg-gradient-to-r from-amber-200 to-yellow-400 transition duration-200">
                      <Icon iconSet={iconSet} icon="youtube" className="h-11 w-11 text-black group-hover:text-black" aria-hidden="true"/>
                    </div>
                  </div>
                  <div class="p-6">
                    <h5 class="mb-4 text-xl font-semibold group-hover:text-white transition duration-200">قناتي</h5>
                    <p dir="rtl" className="group-hover:text-white transition duration-200 text-lg">
                    تعرف على أحدث الفيديوهات التعليمية من خلال قناتي على يوتيوب.
                    </p>
                  </div>
                </div>
              </div>
        
              <div class="mb-12 lg:mb-0">
              <div onClick={()=>openLink("Courses")} class="group cursor-pointer block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  hover:bg-gradient-to-br from-slate-900 to-slate-700 transition duration-200">
                  <div class="flex justify-center">

                    <div class="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md group-hover:bg-gradient-to-r from-indigo-500 to-blue-500 transition duration-200">
                    <Icon iconSet={iconSet} icon="onl" className="h-10 w-10 text-black group-hover:text-white" aria-hidden="true"/>
                    </div>
                  </div>
                  <div class="p-6">
                    <h5 class="mb-4 text-xl font-semibold group-hover:text-white transition duration-200">الكورسات</h5>
                    <p dir="rtl" className="group-hover:text-white transition duration-200 text-lg">
                    اكتشف الدورات التدريبية المتاحة لتحسين مهاراتك.
                    </p>
                  </div>
                </div>
              </div>


              <div class="mb-12 lg:mb-0">
              <div onClick={()=>openLink("Portfolio")} class="group cursor-pointer block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  hover:bg-gradient-to-r from-amber-500 to-pink-500 transition duration-200">
                  <div class="flex justify-center">

                    <div class="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md group-hover:bg-gradient-to-r from-fuchsia-600 to-pink-600 transition duration-200">
                    <Icon iconSet={iconSet_2} icon="portfolio" className="h-10 w-10 text-black group-hover:text-white" aria-hidden="true"/>
                    </div>
                  </div>
                  <div class="p-6">
                    <h5 class="mb-4 text-xl font-semibold group-hover:text-white transition duration-200">نماذج أعمالي</h5>
                    <p dir="rtl" className="group-hover:text-white transition duration-200 text-lg">
                    مجموعة من أعمالي والمشاريع السابقة التي أنجزتها
                    </p>
                  </div>
                </div>
              </div>

              
        
              <div class="mb-12 lg:mb-0">
              <div
                  class="group cursor-pointer block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  hover:bg-gradient-to-br from-blue-600 to-violet-600 transition duration-200">
                  <div class="flex justify-center">

                    <div class="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md group-hover:bg-gradient-to-br from-orange-400 to-rose-400 transition duration-200">
                    <Icon iconSet={iconSet} icon="cv" className="h-10 w-10 text-black group-hover:text-white" aria-hidden="true"/>
                    </div>
                  </div>
                  <div class="p-6">
                    <h5 class="mb-4 text-xl font-semibold group-hover:text-white transition duration-200">CV</h5>
                    <p dir="rtl" className="group-hover:text-white transition duration-200 text-lg">
                    اطلع على سيرتي الذاتية وخبراتي.

                      </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    );
}

export default Features;