import React from 'react';

const Service = ({service}) => {
    return (
        <div class="card lg:max-w-lg   shadow-2xl bg-blue-300  mx-2">
            <figure class="px-10 pt-10">
                <img src={service.image} alt="" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center3">
                <h2 class="card-title">{ service.title}</h2>
                <p>{ service.description}</p>
                <div class="card-actions">
                    <button class="btn btn-outline btn-primary">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Service;