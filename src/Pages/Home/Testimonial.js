import React from 'react';
import qouteimage from '../../icons/quote.svg';
import people from '../../images/people-1.png'
import people2 from '../../images/people-2.png'
import people3 from '../../images/people-3.png'
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            title: 'Dany ALbez',
            description: 'Awesome Service provided they are Awesome Service provided they areAwesome Service provided they areAwesome Service provided they areAwesome Service',
            image: people,
            location: 'Australia'
        },
        {
            _id: 2,
            title: 'Neymar Jr',
            description: 'Awesome Service provided they are Awesome Service provided they areAwesome Service provided they areAwesome Service provided they areAwesome Service',
            image: people2,
            location: 'Brazil'
        },
        {
            _id: 3,
            title: ' Lionel Messi',
            description: 'Awesome Service provided they are Awesome Service provided they areAwesome Service provided they areAwesome Service provided they areAwesome Service provided',
            image: people3,
            location: 'Argentina'
        },
        {
            _id: 4,
            title: ' Shariar ',
            description: 'Awesome Service provided they are Awesome Service provided they areAwesome Service provided they areAwesome Service provided they areAwesome Service provided',
            image: people,
            location: 'Argentina'
        }
    ]
    return (
        <section className='my-28'>
            <div className='section-content shadow-2xl flex justify-between items-center bg-indigo-50 my-5'>
                <div className=' text-3xl  font-bold font-serif '>
                    <h3 className='text-orange-700  '>Testimonial</h3>
                    <h3 className='text-yellow-800 p-5'>Our patient Says </h3>
                </div>
                <div className=''>
                    <img src={qouteimage} className='w-24 lg:w-48' alt="" />
                </div>
            </div>
            <div className='section-testimonial grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review ={review}
                    ></Review>)
                }
            </div>
        </section>

    );
};

export default Testimonial;