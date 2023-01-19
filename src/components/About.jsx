const About = () => {
    return (
        <div name='about' className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <h2 className="text-4xl font-bold inline border-b-4 border-x-gray-500">About</h2>
                </div>

                <p className="text-xl mt-20">
                    Hello my name is Paul Okwulu, i'm a Front-end Developer located in Lagos, Nigeria.

                    <br /> <br />

                    I am a hard worker, problem solver, resilient, focused, a keen eye for detail, and eager to learn new things.

                    <br /> <br />

                    I'm interested in working at a company / on projects where i can deliver business value and also level up my skills as a developer.
                </p>
            </div>
        </div>
    );
}

export default About;