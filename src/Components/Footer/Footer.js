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
    {name:'Instgram',icon:faInstagram,link:'https://www.instagram.com/ahmadmsoftware/'},
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

              
        <div class="flex items-center justify-between">
            
            <div class="flex -mx-2">
                {
                    SocialMedia.map((platform)=>(
                        <a href={platform.link} target='_blank' class="mx-2 text-gray-600 transition-colors duration-300  hover:text-blue-500 " aria-label="Reddit">
                        <FontAwesomeIcon icon={platform.icon} title={platform.name} className="h-6 w-6 text-gray-600 hover:text-white transition duration-200" aria-hidden="true"/>
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