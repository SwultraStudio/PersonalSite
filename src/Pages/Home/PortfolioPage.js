import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const PortfolioPage = () => {
    const [postInfo, setPostInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        async function getPost() {
            try {
                let response = await fetch(`https://wkzacnpyvqeytgqzbzsv.supabase.co/rest/v1/images?projectId=eq.${id}&select=*`, {
                    method: 'GET',
                    headers: {
                        "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndremFjbnB5dnFleXRncXpienN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA1MzUwNzIsImV4cCI6MjAzNjExMTA3Mn0.w_Yn4z3z0bzTiwiBA9lmu1Ng_U72qkOyWZ3jhY2jlC0",
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndremFjbnB5dnFleXRncXpienN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA1MzUwNzIsImV4cCI6MjAzNjExMTA3Mn0.w_Yn4z3z0bzTiwiBA9lmu1Ng_U72qkOyWZ3jhY2jlC0"
                    }
                });

                if (response.ok) {
                    let data = await response.json();
                    setPostInfo(data);
                    setIsLoading(false);
                }
                setIsLoading(false);

            } catch (error) {
                setIsLoading(false);
            }
        }

        getPost();
    }, [id]);

    return (
        <div dir='rtl' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 min-h-screen">
            {isLoading && <FontAwesomeIcon icon={faSpinner} className="h-8 w-8 text-blue-600 animate-spin" aria-hidden="true" />}
            {!isLoading && !postInfo && <p>غير متوفر</p>}
            {postInfo && (
                <div dir='rtl' className='mb-4 flex justify-center items-center flex-col'>

                    {postInfo.map(img => (
                        <div>
                            <img src={img.url} className='pt-5 w-auto h-auto mb-4 object-cover' />

                            <hr />

                        </div>

                    ))}



                </div>
            )}
        </div>
    );
};

export default PortfolioPage;
