import React from 'react';
import chair from '../../images/chair.png';
import bgimg from '../../images/bg.png'

const Banner = () => {
    
    return (
        <div style={{ background: `url(${bgimg})`, height: '600px', }} class="hero  min-h-screen ">
            <div class="hero-content grid lg:grid-cols-2 sm:grid-cols-1 m-5 ">
                <div className='justify-start font-serif text-xl p-10'>
                    <h1 class="text-3xl font-bold font-serif animate__animated animate__zoomInUp animate__repeat-2 animate__delay-2s">Get Excellent Service And Own BEatiful Life</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi.
                        In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn bg-gradient-to-r from-cyan-500 to-blue-500">Get AppointMent</button>
                </div>
                <div>
                    <img src={chair} class=" rounded-lg shadow-2xl my-16" alt="banner" />
                </div>

            </div>
        </div>
    );
};

export default Banner;