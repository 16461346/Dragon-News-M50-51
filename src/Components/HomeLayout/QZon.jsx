import React from 'react';
import img1 from '../../assets/class.png'
import img2 from '../../assets/playground.png'
import img3 from '../../assets/swimming.png'
import img4 from '../../assets/bg.png'

const QZon = () => {
    return (
        <div>
            <h2 className='font-bold'>Q-Zone</h2>
            <div className='bg-base-300 gap-4 flex flex-col justify-center    '>
                <img src={img1} alt="class" />
                <img src={img2} alt="play-Ground" />
                <img src={img3} alt="Summing" />
                <img src={img4} alt="" />
            </div>
        </div>
    );
};

export default QZon;