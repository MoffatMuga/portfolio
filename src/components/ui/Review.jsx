"use client"
import React, { useEffect, useState } from 'react';
import { TfiQuoteLeft } from "react-icons/tfi";


const reviews = [
    {
        name: "John Doe",
        date: "31/2/2024",
        message: "An excellent developer who turned our vision into reality. The overall web application performed flawlessly. Great attention to detail and a pleasure to work with!",
        image: '/client1.jpeg'
    },
    {
        name: "Mercy Keino",
        date: "31/2/2024",
        message: "The front-end development skills displayed were amazing. The website was both visually appealing and highly functional. Will definitely work together again!",
        image: '/client2.jpeg'
    },
    {
        name: "Trixie Aora",
        date: "31/2/2024",
        message: "Working with this developer was a fantastic experience. The efficient backend they built for our web application was excellent. Definitely my next stop developer!",
        image: '/client3.jpeg'
    },
    {
        name: "Nesh Maina",
        date: "31/2/2024",
        message: "I am thoroughly impressed with the mobile application created for us. It provided a seamless experience on both iOS and Android platforms. Great job!",
        image: '/client4.jpeg'
    },
    {
        name: "Adrian Ratemo",
        date: "31/2/2024",
        message: "The level of professionalism and expertise demonstrated was outstanding. Our project was delivered on time and met all our requirements. Highly recommend!",
        image: '/client5.jpeg'
    },
    {
        name: "Kimani Wamaitha",
        date: "31/2/2024",
        message: "Exceptional work! The web app developed by this developer exceeded our expectations in terms of functionality and design. The user interface was smooth and responsive.",
        image: '/client6.jpeg'
    }
]

export default function Review
    () {

    const [currentReview, setCurrentReview] = useState(0);
    const [reviewsToShow, setReviewsToShow] = useState(3);

    const nextReview = () => {
        if (currentReview < Math.ceil(reviews.length / reviewsToShow) - 1) {
            setCurrentReview(prev => prev + 1);
        }
    };

    const prevReview = () => {
        if (currentReview > 0) {
            setCurrentReview(prev => prev - 1);
        }
    };

    const goToNextReview = (index) => {
        setCurrentReview(index);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setReviewsToShow(1);
            } else {
                setReviewsToShow(3);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const start = currentReview * reviewsToShow;
    const end = start + reviewsToShow;
    const visibleReviews = reviews.slice(start, end);
    return (

        <div className='relative flex justify-around  items-center '>
            {visibleReviews.map((review, index) => (
                <div key={index} className='w-[220px] h-auto flex flex-col p-0 space-y-2'>
                    <div className='flex gap-1'>
                        <div className='flex items-start'>
                            <TfiQuoteLeft className='text-main' />
                        </div>
                        <div>
                        <p className='text-sm primary'>{review.message}</p>
                    
                        </div>
                    </div>
                    
                    <div>
                        <p className='text-white'>{review.date}</p>
                    </div>
        

                    <div className='flex flex-row items-center gap-2' style={{ flex: `0 0 ${100 / reviewsToShow}%` }}>
                        <img src={review.image} className='rounded-full h-[60px] w-[60px] object-cover border-[2px] p-1' />

                        <span className='text-main'>
                        {review.name}
                        </span>
                    </div>
                </div>
            ))}

          

            <div className="mt-[280px] absolute items-bottom">
                {Array.from({ length: Math.ceil(reviews.length / reviewsToShow) }).map((_, index) => (
                    <span
                        key={index}
                        className={`inline-block w-2 h-2 mx-2 rounded-full ${currentReview === index ? 'bg-main' : 'bg-primary'} cursor-pointer`}
                        onClick={() => goToNextReview(index)}
                    ></span>
                ))}
            </div>
        </div>


    )
}
