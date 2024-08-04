"use client"
import React, { useEffect, useState } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const reviews = [
    {
        name: "moffat1",
        date: "31/2/2024",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: '/muga.png'
    },
    {
        name: "moffat2",
        date: "31/2/2024",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: '/muga.png'
    },
    {
        name: "moffat3",
        date: "31/2/2024",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: '/muga.png'
    },
    {
        name: "moffat4",
        date: "31/2/2024",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: '/muga.png'
    },
    {
        name: "moffat5",
        date: "31/2/2024",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: '/muga.png'
    },
    {
        name: "moffat6",
        date: "31/2/2024",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: '/muga.png'
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
                    <div>
                        <p className='text-sm'>{review.message}</p>
                    </div>
                    <div>
                        <p>{review.date}</p>
                    </div>
        

                    <div className='flex flex-row items-center gap-2' style={{ flex: `0 0 ${100 / reviewsToShow}%` }}>
                        <img src={review.image} className='rounded-full h-[60px] w-[60px] object-cover border-[1px]' />

                        <span>
                        {review.name}
                        </span>
                    </div>
                </div>
            ))}

            {/* <button className="hidden md:absolute top-1/2 transform -translate-y-1/2 lg:left-4 left-0 bg-gray-800 text-white p-2" onClick={prevReview}>
                <RiArrowLeftSLine />
            </button>
            <button className="hidden md:absolute top-1/2 transform -translate-y-1/2 lg:right-4 right-0 bg-gray-800 text-white p-2" onClick={nextReview}>
                <RiArrowRightSLine />
            </button> */}

            <div className="mt-[280px] absolute items-bottom">
                {Array.from({ length: Math.ceil(reviews.length / reviewsToShow) }).map((_, index) => (
                    <span
                        key={index}
                        className={`inline-block w-4 h-4 mx-2 rounded-full ${currentReview === index ? 'bg-main' : 'bg-primary'} cursor-pointer`}
                        onClick={() => goToNextReview(index)}
                    ></span>
                ))}
            </div>
        </div>


    )
}
