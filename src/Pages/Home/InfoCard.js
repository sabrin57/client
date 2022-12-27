import React from 'react';


const InfoCard = ({imgs,CardTitle,bgClass} ) => {
    return (     
        <div className={` card lg:card-side sm:card-side  bg-base-90 shadow-2xl my-5 mx-9 justify-content: cente bg-slate-300 rounded-lg ${bgClass}`}>
            <figure className='p-3'>
                <img src={imgs} alt="" />
            </figure>
            <div class="card-body pl-5">
                <h2 class="card-title">{CardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
            </div>
          
    );
};

export default InfoCard;