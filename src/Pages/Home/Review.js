import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 font-serif text-xl shadow-xl bg-indigo-200 hover:from-pink-500 hover:to-yellow-500 ">
            <div class="card-body m-5 p-0 ">
                <p>{review.description}</p>
                <div>
                    <div class="avatar flex">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.image} alt="review" />
                        </div>
                        <div className='text-teal-900'>
                            <h2  class="card-title">{review.title}</h2>
                            <h4>{ review.location}</h4>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;