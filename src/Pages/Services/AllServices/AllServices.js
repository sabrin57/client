import React from 'react';
import Service from '../Service/Service';
import dentalimg from '../../../images/fluoride.png';
import eyeimg from '../../../images/cavity.png';
import Drugimg from '../../../images/whitening.png';
import Footer from '../../Shared/Footer/Footer';

const AllServices = () => {
    const services = [
        {
            _id: 1,
            title: 'Dental Treatment',
            description: 'Dentistry, also known as dental medicine and oral medicine, is the branch of medicine focused on the teeth, gums, and mouth. It consists of the study, diagnosis, prevention, ',
            image: dentalimg
        },
        {
            _id: 2,
            title: 'Eye Treatment',
            description: 'Dentistry, also known as dental medicine and oral medicine, is the branch of medicine focused on the teeth, gums, and mouth. It consists of the study, diagnosis, prevention, ',
            image: eyeimg
        },
        {
            _id: 3,
            title: 'Drug Treatment',
            description: 'Dentistry, also known as dental medicine and oral medicine, is the branch of medicine focused on the teeth, gums, and mouth. It consists of the study, diagnosis, prevention, ',
            image: Drugimg
        }
    ]
    return (
        <div className='my-5'>
            <div className='text-center m-5 text-3xl font-serif'>
                <h3 className='text-primary'>Our Services</h3>
                
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    >

                    </Service>)
                }
            </div>
        
           
        </div>

    
    );
};

export default AllServices;