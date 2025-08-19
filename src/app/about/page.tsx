export default function About() {
    return (
        <div className='w-11/12 max-w-4xl mx-auto min-h-screen flex flex-col justify-center items-center px-4 py-12'>
            <div className="text-center space-y-6">
                <img src="assets/DestinAdamsCartoonProfilePicture.png" alt="Profile" className="rounded-full w-32 h-32 mx-auto mb-4" />
                <h1 className="text-6xl md:text-8xl font-bold text-white">About Me</h1>
                <p className="text-lg md:text-2xl leading-relaxed text-white text-left">
                    I'm a software engineer with a passion for building things that live on the internet. Whether it's developing full-stack applications or experimenting with new technologies, I thrive on creating, solving problems, and continuously learning.
                    <br /><br />
                    I grew up in Cave Creek, Arizona, and now live in Tempe while pursuing a Bachelor's degree in Computer Systems Engineering at Arizona State University.
                    <br /><br />
                    My interest in engineering started in two places: the garage and the gaming world. I spent my early years helping my dad fix cars, learning the value of patience, precision, and curiosity. At the same time, I was a lifelong gamer who couldn’t just play the games—I had to understand how they worked. In middle school, I started exploring game files, learning how to mod, tweak mechanics, and customize experiences. That hands-on tinkering introduced me to programming and sparked my obsession with how software shapes digital experiences.
                    <br /><br />
                    In high school, I took the first coding class ever offered and got my start with Java and HTML/CSS. From there, my passion only grew. I’ve since expanded my skill set with C++, JavaScript, SQL, and database management, and I’m currently diving deeper into backend systems and encryption.
                    <br /><br />
                    For me, software development is more than just a career path—it's a creative outlet, a lifelong pursuit, and a way to turn ideas into reality.
                </p>
            </div>
        </div>
    );
}
