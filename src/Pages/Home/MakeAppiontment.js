import React from 'react';
import appointment from '../../assets/images/appointment.png'
import doctor from '../../assets/images/doctor.png'

const MakeAppiontment = () => {
    return (
        <div style={{ background: `url(${appointment})` }} className='flex m-8 rounded bg-base-100 shadow-xl justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>

                <div className='text-center p-5 text-white'>
                    <p className='text-left text-secondary font-bold'>Appointment</p>
                    <h1 className='text-3xl font-bold text-left'>Make an appointment Today</h1>
                    <p style={{ textAlign: "justify" }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>

                </div>
                <div className="card-actions p-5">
                    <button className="btn btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary">GET STARTED</button>
                </div>

            </div>
        </div>
    );
};

export default MakeAppiontment;