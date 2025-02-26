import { Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faPaperPlane,faSpinner} from "@fortawesome/free-solid-svg-icons"
import {faWhatsapp,faTelegram, faInstagram,} from "@fortawesome/free-brands-svg-icons"

import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';





const Contact = ()=>{

    //variables
    const [Name,setName] = useState(null);
    const [Email,setEmail] = useState(null);
    const [Subject,setSubject] = useState(null);
    const [Industry,setIndustry] = useState(null);
    const [Category,setCategory] = useState(null);
    const [Text,setText] = useState(null);
    const [IsLoading,setIsLoading] = useState(false);
    const [IsSent,setIsSent] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      };


    const showSuccess = (msg) => 
    toast.success(msg);


    const showError = (msg) => 
    toast.error(msg);

    //send the form function
    const Send = (e)=>{
        //to indicate the sending process
        setIsLoading(true);
        //prevent redirect when submit the form
        e.preventDefault();

    //prepare request info
    const url = 'https://wkzacnpyvqeytgqzbzsv.supabase.co/rest/v1/contact';
    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndremFjbnB5dnFleXRncXpienN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA1MzUwNzIsImV4cCI6MjAzNjExMTA3Mn0.w_Yn4z3z0bzTiwiBA9lmu1Ng_U72qkOyWZ3jhY2jlC0';
    const accessToken = apiKey;


        const data = {
            email:Email,
            subject:Subject,
            message:Text,
            name:Name,
          };
          
          const headers = {
            apikey: apiKey,
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            Prefer: 'return=minimal',
          };
          
          const Result = fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
          })
            .then((response) => {
              if (!response.ok) {
                  showError("حدثت مشكلة بالارسال حاول مرة اخرى")
                  console.log(response)
                  console.log(data)

                  setIsLoading(false);
                  return false;
              }
              showSuccess("تم الارسال بنجاح")
              scrollToTop();
              setIsLoading(false);
              setIsSent(true);
              return true;
            })
            .catch((error) => {
            showError("حدثت مشكلة بالارسال")
             setIsLoading(false);
              return false;
            });
    }
    




    return <>

    <Helmet>
        <title>تواصل معي</title>
        <link rel="canonical" href="/Contact"/>
        <meta name="description" content="معلومات الاتصال"/>
    </Helmet>

      <section class="min-h-screen bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 ">
      <div className="pt-5 pb-7">
      <h1 className="font-semibold text-3xl text-white">دعنا نتواصل</h1>
      <h2 dir="rtl" className="font-medium text-xl text-white mt-5">  إذا كنت تريد التواصل معي، يمكنك ملء الاستمارة أدناه وسأكون سعيداً بالرد عليك في أقرب وقت ممكن.</h2>
                    <div class="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl lg:max-w-xl mt-7">
                        <h2 class="text-2xl font-medium text-gray-700 ">معلومات الاتصال</h2>
    
                        {!IsSent && <form class="mt-4" onSubmit={Send}>
                            <div class="flex-1">
                                <label dir="rtl" class="block mb-2 text-right text-lg text-gray-600 ">الاسم :</label>
                                <input 
                                required
                                 dir="rtl" type="text" 
                                 placeholder="اكتب اسمك هنا"
                                 minLength={3}
                                 maxLength={50}
                                 onChange={(e)=>setName(e.target.value)}
                                class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                            </div>

                            <div class="flex-1 mt-3">
                            <label dir="rtl" class="block mb-2 text-right text-lg text-gray-600 ">الايميل :</label>
                            <input type="email" required placeholder="xyz@example.com" 
                            minLength={5}
                            maxLength={100}
                            onChange={(e)=>setEmail(e.target.value)}
                            class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                            </div>
    
                            <div class="flex-1 mt-3">
                            <label dir="rtl" class="block mb-2 text-right text-lg text-gray-600 ">الموضوع : </label>
                            <input dir="rtl" 
                            type="text" placeholder="الموضوع"
                            required
                            minLength={3}
                            maxLength={100}
                            onChange={(e)=>setSubject(e.target.value)}
                            class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                            </div>

                      

                          


                            <div class="w-full mt-6">
                            <label dir="rtl" class="block mb-2 text-right text-lg text-gray-600 ">الرسالة  : </label>
                            <textarea dir="rtl" 
                            required
                            minLength={10}
                            maxLength={10000}
                            onChange={(e)=>setText(e.target.value)}
                            class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" placeholder="نص الرسالة..."></textarea>
                            </div>
                            {IsLoading && <button disabled={true} type="submit" dir="rtl" class="w-full px-6 py-3 mt-6 text-base font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-teal-900 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                                يرجى الانتظار...  <FontAwesomeIcon icon={faSpinner} className="h-6 w-6 text-white animate-spin" aria-hidden="true"/>
                            </button>}

                            {!IsLoading && <button type="submit" dir="rtl" class="w-full px-6 py-3 mt-6 text-base font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                                ارسال  <FontAwesomeIcon icon={faPaperPlane} className="h-6 w-6 text-white" aria-hidden="true"/>
                            </button>}
                        </form>}
                        {IsSent && <div><h2 text-black>تم الارسال بنجاح شكرا لك</h2></div>}
                    </div>
                    </div>



       <div class="container px-6 py-12 mx-auto">
        <div>
            <p class="font-medium text-2xl text-white">وسائل التواصل الاخرى</p>
        </div>

        <div class="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <div class="p-4 rounded-lg bg-blue-50 md:p-6">
                <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </span>

                <h2 class="mt-4 text-xl font-medium text-gray-800 ">الايميل</h2>
                <p class="mt-2 text-base text-gray-500 ">تواصل معي عبر الايميل الرسمي</p>
                <p class="select-text mt-2 text-base text-blue-500 ">Codersbookmark@gmail.com</p>
            </div>

            <div class="p-4 rounded-lg bg-blue-50 md:p-6 ">
                <span class="inline-block p-3 pb-1 text-blue-500 rounded-lg bg-blue-100/80 ">
                <FontAwesomeIcon icon={faTelegram} className="h-7 w-7 text-blue-500" aria-hidden="true"/>
                </span>
                
                <h2 class="mt-4 text-xl font-medium text-gray-800 ">Telegram</h2>
                <p class="mt-2 text-base text-gray-500 ">تواصل معي عبر تيليغرام</p>
                <a href="https://t.me/AhmadMDev" target="_blank"><p class="focus:outline-none mt-2 text-base text-blue-500  border-2 border-violet-600 cursor-pointer rounded-full transition duration-200 hover:text-white hover:bg-violet-600">انقر هنا</p></a>
            </div>

            <div class="p-4 rounded-lg bg-blue-50 md:p-6 ">
                <span class="inline-block p-3 pb-1 text-blue-500 rounded-lg bg-blue-100/80 ">
                <FontAwesomeIcon icon={faInstagram} className="h-7 w-7 text-blue-500" aria-hidden="true"/>
                </span>
                
                <h2 class="mt-4 text-xl font-medium text-gray-800 ">Instagram</h2>
                <p class="mt-2 text-base text-gray-500 ">تواصل معي عبر الانستغرام</p>
                <a href="https://www.instagram.com/devops2x" target="_blank"><p class="focus:outline-none mt-2 text-base text-blue-500  border-2 border-violet-600 cursor-pointer rounded-full transition duration-200 hover:text-white hover:bg-violet-600">انقر هنا</p></a>
            </div>

            <div class="p-4 rounded-lg bg-blue-50 md:p-6 ">
                <span class="inline-block p-3 pb-1 text-blue-500 rounded-lg bg-blue-100/80 ">
                <FontAwesomeIcon icon={faWhatsapp} className="h-7 w-7 text-blue-500" aria-hidden="true"/>

                </span>
                
                <h2 class="mt-4 text-xl font-medium text-gray-800 ">WhatsUp</h2>
                <p class="mt-2 text-base text-gray-500 ">اتصل بي عبر واتساب</p>
                <a href="https://wa.me/9647802327059" target="_blank"><p class="select-none focus:outline-none mt-2 text-base text-blue-500  border-2 border-green-500 cursor-pointer rounded-full transition duration-200 hover:text-white hover:bg-green-500 ">انقر هنا</p></a>
            </div>

            <div class="p-4 rounded-lg bg-blue-50 md:p-6 ">
                <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                </span>
                
                <h2 class="mt-4 text-xl font-medium text-gray-800 ">عبر الهاتف</h2>
                <p class="mt-2 text-base text-gray-500 ">تواصل معي عبر رقم الهاتف</p>
                <p class="select-text mt-2 text-base text-blue-700 ">+964 7802327059</p>
            </div>
        </div>

    </div>
    <Toaster
  toastOptions={{
    className: '',
    duration:5000,
    position:'bottom-right',
    style: {
      padding: '16px',
    },
  }}
/>

    </section>
    </>
}

export default Contact;