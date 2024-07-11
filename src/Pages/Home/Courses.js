import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Helmet } from "react-helmet-async";
import {faPaperPlane,faSpinner} from "@fortawesome/free-solid-svg-icons"
const Courses = () => {
    const [coursesInfo, setCoursesInfo] = useState(null);
    const [IsLoading,setIsLoading] = useState(true);

    useEffect(() => {
        async function getCourses() {
            try {
                let response = await fetch("https://wkzacnpyvqeytgqzbzsv.supabase.co/rest/v1/courses?select=*", {
                    method: 'GET',
                    headers: {
                        "apikey":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndremFjbnB5dnFleXRncXpienN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA1MzUwNzIsImV4cCI6MjAzNjExMTA3Mn0.w_Yn4z3z0bzTiwiBA9lmu1Ng_U72qkOyWZ3jhY2jlC0",
                        "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndremFjbnB5dnFleXRncXpienN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA1MzUwNzIsImV4cCI6MjAzNjExMTA3Mn0.w_Yn4z3z0bzTiwiBA9lmu1Ng_U72qkOyWZ3jhY2jlC0"
                    }
                });

                if (response.ok) {
                    let data = await response.json();
                    setCoursesInfo(data);
                    setIsLoading(false)
                } 
            } catch (error) {
                setIsLoading(false)
            }
        }

        getCourses();
    }, []); // Empty dependency array ensures useEffect runs only once on mount

    return (
        <>
        <Helmet>
            <title>الكورسات</title>
            <link rel="canonical" href="/" />
            <meta name="description" content="كورسات احمد محمد" />
        </Helmet>


        <div dir='rtl' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  min-h-screen">
            <h2 className="text-3xl font-bold mb-4 pt-3">الكورسات</h2>
            {IsLoading && <FontAwesomeIcon icon={faSpinner} className="h-8 w-8 text-blue-600 animate-spin" aria-hidden="true"/>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {coursesInfo ? (
                    coursesInfo.map(course => (
                        <a key={course.id} href={course.url} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                            <img src={course.imageurl} alt={course.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                                <p className="text-gray-700">{course.description}</p>
                            </div>
                        </a>
                    ))
                ) : (
                    <div className="flex justify-center">
                        <p>انتظر من فضلك...</p>
                    </div>
                    )}
            </div>
        </div>
        </>
    );
};

export default Courses;
