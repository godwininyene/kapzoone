import { Link, Head } from '@inertiajs/react';
import BaseLayout from '@/Layouts/BaseLayout';
import Hero from '@/Components/Hero';
import {BiWorld} from 'react-icons/bi'
import Lady from '@/Img/lady-2.png'
export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
    
        <BaseLayout>
            <Head title="Kapzoone">
                <meta name="keyword" content="Graphic designer, web development, kapzoone" />
                <meta name="description" content="Welcome to kapzoone where all your digital problems are solve" />
            </Head>

            <div className=''>
                <Hero />
            </div>
            <main className=''>
                {/* Step section start */}
                <section className='bg-white py-20'>
                    <div className='max-w-6xl mx-auto w-full'>
                        <div className="shadow-xl py-5 px-7 rounded">
                            <h2 className='text-green-600 text-center text-2xl font-medium'>Fastest Solution</h2>
                            <h1 className="font-semibold text-3xl uppercase text-center">Easy Steps To Get Your Solution</h1>
                            {/* <p className="max-w-4xl mx-auto text-center lg:text-xl lg:font-semibold my-3">
                                We provide a comprehensive set of end-to-end IT services & support, 
                                by enabling our intelligent automation and implementing agility
                            </p> */}


                            <div className="flex flex-wrap flex-col lg:flex-row mt-20">

                                <div className="flex-shrink-0 w-full lg:w-2/6 px-0 lg:px-5 mb-6 lg:mb-0">
                                    <div className="pb-3 rounded-lg border-b-[2px] border-b-green-600 text-center h-full">
                                        <div className="w-12 h-12 rounded-full bg-grey  text-center leading-[46px] inline-block">
                                            <BiWorld className="text-3xl text-green-600 inline-block" />
                                        </div>
                                        <h2 className="font-semibold text-lg mt-2">Check Our Gallery</h2>
                                        <p className="mt-2">
                                            We are dedicated to delivering exceptional software engineering 
                                            solutions tailored to meet your unique business needs. We build software applications for 
                                            different platforms ranging from desktop to mobile and web applications
                                        </p>
                                    </div>
                                </div>

                                <div className="flex-shrink-0 w-full lg:w-2/6 px-0 lg:px-5 mb-6 lg:mb-0">
                                    <div className="pb-3 rounded-lg border-b-[2px] border-b-green-600 text-center h-full">
                                        <div className="w-12 h-12 rounded-full bg-grey  text-center leading-[46px] inline-block">
                                            <BiWorld className="text-3xl text-green-600 inline-block" />
                                        </div>
                                        <h2 className="font-semibold text-lg mt-2">Request Consultation</h2>
                                        <p className="mt-2">
                                            We are dedicated to delivering exceptional software engineering 
                                            solutions tailored to meet your unique business needs. We build software applications for 
                                            different platforms ranging from desktop to mobile and web applications
                                        </p>
                                    </div>
                                </div>

                                <div className="flex-shrink-0 w-full lg:w-2/6 px-0 lg:px-5 mb-6 lg:mb-0">
                                    <div className="pb-3 rounded-lg border-b-[2px] border-b-green-600 text-center h-full">
                                        <div className="w-12 h-12 rounded-full bg-grey  text-center leading-[46px] inline-block">
                                            <BiWorld className="text-3xl text-green-600 inline-block" />
                                        </div>
                                        <h2 className="font-semibold text-lg mt-2">Received Consultation</h2>
                                        <p className="mt-2">
                                            We are dedicated to delivering exceptional software engineering 
                                            solutions tailored to meet your unique business needs. We build software applications for 
                                            different platforms ranging from desktop to mobile and web applications
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
                {/* Step section end */}
                
                {/* Section About Start */}
                <section className='bg-slate-100 pb-20 pt-12'>
                    <div className='max-w-6xl mx-auto w-full'>
                        <div className="bg-[#191c24] rounded h-96">
                            <div className="flex flex-wrap flex-col lg:flex-row h-full ">

                            <div className="flex-shrink-0 w-full lg:w-2/6 px-0 lg:px-5 mb-6 lg:mb-0 relative overflow-y-clip">
                                <img src={Lady} alt="" className='w-full absolute -top-16'/>
                            </div>

                                <div className="flex-shrink-0 h-full w-full lg:w-2/6 px-0 lg:px-5 mb-6 lg:mb-0 grow">
                                    <div className="py-5 px-7 h-full  w-full flex flex-col  justify-center ">
                                        <h2 className="font-semibold text-2xl  mt-2 text-white">Our Story</h2>
                                        <p className="mt-2 text-white">
                                            We are dedicated to delivering exceptional software engineering 
                                            solutions tailored to meet your unique business needs. We build software applications for 
                                            different platforms ranging from desktop to mobile and web applications
                                        </p>

                                        <div className='mt-7'>
                                            <a  href='https://fpno.edu.ng/' target='_blank' className={`py-3 px-5 mx-2 md:mx-0 rounded-3xl transition-all duration-100 bg-green-600 hover:bg-green-800 text-white font-bold`}>
                                                Get Started
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Section About End */}
            </main>
           
       </BaseLayout>
    
    );
}
