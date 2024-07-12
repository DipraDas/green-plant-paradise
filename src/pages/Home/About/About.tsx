import plant6 from '../../../assets/images/product/plant-6.png';
import plant3 from '../../../assets/images/product/plant-3.png';
import tools from '../../../assets/images/product/tools.png';

const About = () => {
    return (
        <>
            <div id='about' className='relative'>
                <div className="container mx-auto">
                    <p className="text-center font-semibold tracking-widest text-black text-3xl mb-5">Know About Us</p>
                    <img className='mx-auto mt-3' src={plant3} alt="" />
                    <div className="px-32 mb-32 mt-10">
                        <div className='grid grid-cols-2 gap-10 items-center'>
                            <div>
                                <h1 className='text-5xl tracking-widest leading-snug'>Decor your</h1>
                                <h1 className='text-5xl tracking-widest mb-10'>home with plants</h1>
                                <p className='text-gray-500 text-lg tracking-wider'>Plants are essential to life on Earth, providing oxygen, food, and habitat for countless species. They play a critical role in ecosystems, supporting biodiversity and regulating the climate. Through photosynthesis, plants convert sunlight into energy, producing oxygen and absorbing carbon dioxide, which helps mitigate climate change.</p>
                            </div>
                            <div>
                                <img src={plant6} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute -bottom-64 right-0'>
                    <img src={tools} alt="" />
                </div>
            </div>

        </>
    );
};

export default About;