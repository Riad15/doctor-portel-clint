import React, { useEffect, useState } from 'react';
import BookingAppointmentCart from './BookingAppointmentCart';
import BookingModel from './BookingModel';

const BookingAppointment = () => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('Service.json')
            .then(rsc => rsc.json())
            .then(data => setServices(data))
    }, [])
    console.log(treatment);
    return (
        <div>
            <h1 className='text-secondary text-center p-3 m-4 text-[22px]'>Available Appointments on April 30, 2022</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    services.map(data => <BookingAppointmentCart
                        key={data._id}
                        service={data}
                        setTreatment={setTreatment}
                    ></BookingAppointmentCart>)
                }
            </div>
            {
                treatment && <BookingModel
                    key={treatment._id}
                    treatment={treatment}

                ></BookingModel>
            }

        </div>
    );
};

export default BookingAppointment;