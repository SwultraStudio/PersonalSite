import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
 faFacebook,
 faYoutube,
 faTwitter,
 faInstagram,
 faLinkedin,
 faWhatsapp,
 faTelegram,
}from "@fortawesome/free-brands-svg-icons"

//social media
const SocialMedia = [
    {name:'Facebook',icon:faFacebook,link:'https://www.facebook.com/AhmadMohamadSoftware'},
    {name:'Instagram',icon:faInstagram,link:'https://www.instagram.com/devops2x/'},
    {name:'LinkedIn',icon:faLinkedin,link:'https://www.linkedin.com/in/ahmad-al-husseini/'},
    {name:'Twitter',icon:faTwitter,link:'https://twitter.com/AhmadMSoftware'},
    {name:'Whatsapp',icon:faWhatsapp,link:'https://wa.me/9647802327059'},   
    {name:'Telegram',icon:faTelegram,link:'https://t.me/BitOps'},
    {name:'Youtube',icon:faYoutube,link:'https://www.youtube.com/@AhmadMohamadSoftware'},
]





const showSuccess = (msg) => 
toast.success(msg);

const showError = (msg) => 
toast.error(msg);

const notify = (msg) => 
toast(msg);

const Footer = ()=>{

    const [Email,setEmail] = useState(null);
    const [IsLoading,setIsLoading] = useState(false);
    const [IsSub,setIsSub] = useState(false);

    const subscribe = (e)=>{
        //prevent redirect when submit the form
        e.preventDefault();
        setIsLoading(true);
        //prepare request info
        const url = 'https://twyppguaxjkccjcaagby.supabase.co/rest/v1/newsletter';
        const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3eXBwZ3VheGprY2NqY2FhZ2J5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEwNzAyNDEsImV4cCI6MjAwNjY0NjI0MX0.r9JGDMzgMKnp6D1N08ECRKdgI3MfvU7iYpm8e1VyoQ4';
        const accessToken = apiKey;


        const data = {
            email:Email,
            source:'Website'
          };
          
          const headers = {
            apikey: apiKey,
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            Prefer: 'return=minimal',
          };
          
          fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
          })
            .then((response) => {
              if (!response.ok) {
                if(response.status == 409){
                    notify("هذا الايميل موجود بالفعل")
                }
                else{
                    showError("حدثت مشكلة حاول مرة اخرى")
                }

                  setIsLoading(false);
                  return false;
              }
              showSuccess("تم الاشتراك بنجاح")
              setIsLoading(false);
              setIsSub(true);
              return true;
            })
            .catch((error) => {
            showError("حدثت مشكلة حاول مرة اخرى")
            console.log(error)
             setIsLoading(false);
              return false;
            });
    }

    return (
<footer class="bg-slate-950">
    <div class="container px-6 py-12 mx-auto">

    <div className='flex justify-center items-center gap-4 mb-6'>
    <a
      href={SocialMedia.filter(s=> s.name === "Instagram")[0].link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-5 py-2 text-white bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-full shadow-lg hover:from-pink-600 hover:to-purple-700 transition duration-300"
    >
      <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
      <span className="font-semibold">لاتنسى متابعتي</span>
    </a>

    <a
  href={SocialMedia.filter(s => s.name === "Telegram")[0].link}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-5 py-2 text-white bg-gradient-to-r from-[#0088cc] to-[#229ED9] rounded-full shadow-lg hover:from-[#0078B8] hover:to-[#1A8ACB] transition duration-300"
>
  <FontAwesomeIcon icon={faTelegram} className="w-5 h-5" />
  <span className="font-semibold">انضم لقناتي في تيليغرام</span>
</a>


    </div>
        <div class="flex flex-col items-center justify-center">
            <p className='text-white mb-5 text-lg' dir='rtl'> لا تتردد في التواصل معي 💬 </p>
            <div class="flex -mx-2">
                {
                    SocialMedia.map((platform)=>(
                        <a href={platform.link} target='_blank' class="mx-2 text-gray-600 transition-colors duration-300  hover:text-blue-500 " aria-label="Reddit">
                        <FontAwesomeIcon icon={platform.icon} title={platform.name} className="h-7 w-7 text-gray-600 hover:text-white transition duration-200" aria-hidden="true"/>
                        </a>
                    ))
                }
            </div>
        </div>
    </div>

    <div className='flex justify-center pb-2'>
      <p className="text-white">&copy; 2024 Ahmad Mohamad. All rights reserved.</p>
    </div>
    
</footer>

    );
}

export default Footer;