import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Post = () => {
    const [postInfo, setPostInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const urlParameters = window.location.search;
    const getPostParam = new URLSearchParams(urlParameters).get('Id');

    useEffect(() => {
        async function getPost() {
            try {
                let response = await fetch(`https://wkzacnpyvqeytgqzbzsv.supabase.co/rest/v1/posts?id=eq.${getPostParam}&select=*`, {
                    method: 'GET',
                    headers: {
                        "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndremFjbnB5dnFleXRncXpienN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA1MzUwNzIsImV4cCI6MjAzNjExMTA3Mn0.w_Yn4z3z0bzTiwiBA9lmu1Ng_U72qkOyWZ3jhY2jlC0",
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndremFjbnB5dnFleXRncXpienN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA1MzUwNzIsImV4cCI6MjAzNjExMTA3Mn0.w_Yn4z3z0bzTiwiBA9lmu1Ng_U72qkOyWZ3jhY2jlC0"
                    }
                });
                
                if (response.ok) {
                    let data = await response.json();
                    setPostInfo(data[0]);
                    setIsLoading(false);
                    document.title = data[0].title;
                }
                setIsLoading(false);

            } catch (error) {
                setIsLoading(false);
            }
        }

        getPost();
    }, [getPostParam]);

    return (
        <div dir='rtl' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 min-h-screen">
            {isLoading && <FontAwesomeIcon icon={faSpinner} className="h-8 w-8 text-blue-600 animate-spin" aria-hidden="true" />}
            {!isLoading && !postInfo && <p>غير متوفر</p>}
            {postInfo && (
                <div dir='rtl'>
                    <h2 className="text-3xl font-bold mb-4 pt-3">{postInfo.title}</h2>
                    <hr />

                    <img src={postInfo.imageurl} className='pt-5 w-full h-auto' alt="Post" />
                    <div className='pt-8 text-lg mb-5 select-text' dangerouslySetInnerHTML={{ __html: postInfo.text }} />

                    <hr />
                    {
                    postInfo.action != null &&
                    <div className='pb-7'>
                    <a href={postInfo.actiondata}>
                    <button  dir="rtl" className="w-72 px-6 py-3 mt-6 text-base font-medium tracking-wide text-white capitalize transition-transform duration-300 transform bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-md hover:scale-105 focus:outline-none focus:ring focus:ring-purple-400 focus:ring-opacity-50">
                            {postInfo.action}
                        </button>
                    </a>
                </div>
                    }

                </div>
            )}
        </div>
    );
};

export default Post;
