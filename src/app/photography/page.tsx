export default function photography() {

    return (
        <>
            <div className='w-11/12 max-w-5xl text-center mx-auto h-screen flex flex-col justify-center items-center gap-6 px-4'>
                <section className="items-center">
                    <h1 className="text-8xl font-bold pt-6">I have not slept yet I tried I thnk imma try again</h1>
                    <p className="text-2xl mt-4 text-balance">
                        I love to capture moments and create memories through photography.
                        Here are some of my favorite shots from various events and places I've visited.
                    </p>
                </section>
                <section title="intro_pics">
                    <div className=" rounded-2xlp-2 flex flex-row space-x-2">
                        <img src="Jewelry/_A7R2790_2.jpg" height="250px" width="250px" className="rounded-xl"></img>
                        <img src="Jewelry/_A7R2790_2.jpg" height="250px" width="250px" className="rounded-xl"></img>
                        <img src="Jewelry/_A7R2790_2.jpg" height="250px" width="250px" className="rounded-xl"></img>
                    </div>
                </section>
                <section title="Photography" className="flex flex-row">
                    {/* <img src="Jewelry/_A7R6914-2.jpg" className="rounded-xl"></img>
                    <img src="Jewelry/_A7R6966-2.jpg" className="rounded-xl"></img>
                    <img src="Jewelry/_A7R6748.jpg" className="rounded-xl"></img> */}
                </section>

                <section title="Videography">

                </section>

            </div>
        </>
    );
}