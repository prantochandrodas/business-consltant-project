import './Technology.css'
import wordprass from '../../assets/wordprass.png'
import laravel from '../../assets/laravel.png'
import react from '../../assets/react.png'
import node from '../../assets/node.png'
import shopify from '../../assets/shopify.png'
import angular from '../../assets/angular.png'
import mern from '../../assets/MERN.png'
import mernfullstack from '../../assets/mern-fullstack.png'

const Technolory = () => {
    return (
        <div className="lg:w-[80%] w-[90%] mx-auto lg:my-10">
            <h1 className='text-center font-semibold lg:text-2xl mb-20'>Technolgies we work </h1>
            <div className='technologies lg:grid lg:grid-cols-4 lg:gap-10 md:grid md:grid-cols-4 md:gap-10 grid grid-cols-2 gap-[20px]'>
                <div className='techology lg:w-[200px] lg:h-[70px] w-[150px] h-[70px]'>
                    <img className='lg:w-[140px] w-[100px] h-[60px] mx-auto my-auto' src={wordprass} alt="" />
                </div>
                <div className='techology lg:w-[200px] lg:h-[70px] w-[150px] h-[70px]'>
                    <img className='lg:w-[140px] w-[100px] h-[70px] mx-auto my-auto' src={laravel} alt="" />
                </div>
                <div className='techology lg:w-[200px] lg:h-[70px] w-[150px] h-[70px]'>
                    <img className='lg:w-[140px] w-[100px] h-[60px] mx-auto my-auto' src={react} alt="" />
                </div>
                <div className='techology lg:w-[200px] lg:h-[70px] w-[150px] h-[70px]'>
                    <img className='lg:w-[140px] w-[100px] h-[60px] mx-auto my-auto' src={node} alt="" />
                </div>
                <div className='techology lg:w-[200px] lg:h-[70px] w-[150px] h-[70px]'>
                    <img className='lg:w-[140px] w-[100px] h-[60px] mx-auto my-auto' src={shopify} alt="" />
                </div>
                <div className='techology lg:w-[200px] lg:h-[70px] w-[150px] h-[70px]'>
                    <img className='lg:w-[140px] w-[100px] h-[60px] mx-auto my-auto' src={angular} alt="" />
                </div>
                <div className='techology lg:w-[200px] lg:h-[70px] w-[150px] h-[70px]'>
                    <img className='lg:w-[140px] w-[100px] h-[60px] mx-auto my-auto' src={mern} alt="" />
                </div>
                <div className='techology lg:w-[200px] lg:h-[70px] w-[150px] h-[70px]'>
                    <img className='lg:w-[180px] w-[100px] h-[60px] mx-auto my-auto' src={mernfullstack} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Technolory;