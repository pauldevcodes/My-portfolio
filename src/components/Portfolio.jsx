import insure from '../assests/portfolio-images/insure.JPG'
import sunnyside from '../assests/portfolio-images/sunnyside.JPG';
import huddle from '../assests/portfolio-images/Huddle.JPG';
import loopstudios from '../assests/portfolio-images/loopstudios.JPG';

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: insure,
            link: 'https://pauldev-insure-landing-page.netlify.app/',
            github: 'https://github.com/pauldevcodes/insure-landing-page'
        },
        {
            id: 2,
            src: sunnyside,
            link: 'https://pauldev-sunnyside.netlify.app/',
            github: 'https://github.com/pauldevcodes/Sunny-Side-Agency-Landing-Page'
        },
        {
            id: 3,
            src: huddle,
            link: 'https://pauldev-huddle-landing-page.netlify.app/',
            github: 'https://github.com/pauldevcodes/Huddle'
        },
        {
            id: 3,
            src: loopstudios,
            link: 'https://pauldev-loopstudios.netlify.app/',
            github: 'https://github.com/pauldevcodes/loopstudios'
        },
    ]

    return (
        <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white pt-20 md:pt-0'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</h2>
                    <p className='py-6'>check out some of my work here</p>
                </div>



                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {portfolios.map(({ id, src, link, github }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                            <div className='flex justify-center items-center my-4'>
                                <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105'><a href={link}>Demo</a></button>
                                <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105'><a href={github}>Github</a></button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Portfolio;