import imgHamster from "../../assets/hamster.jpg"

export function AboutSection() {
    return (
        <section id="about" className="lg:h-screen lg:flex-row w-full h-full min-h-screen flex flex-col-reverse items-center justify-center gap-12 px-12 py-7 bg-white">

            <div className="sm:flex-1 flex justify-center">
                <img src={imgHamster} alt="Picture of hamster" className="2xl:w-10/12 xl:w-9/12 sm:rounded-2xl w-full object-cover rounded-full" />
            </div>

            <div className="sm:flex-1">
                <h1 className="2xl:text-5xl md:max-w-4xl sm:text-3xl text-2xl font-bold text-[#8A4FFF] mb-4">Sobre a Pet Love</h1>
                <p className="2xl:text-xl sm:text-lg text-sm text-[#6C6C6C]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices nisl felis, in iaculis lectus feugiat id. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In auctor mi eu lorem suscipit mollis. </p>
                <p className="2xl:text-xl sm:text-lg text-sm text-[#6C6C6C] pt-2">Nunc posuere mi dolor, nec elementum odio pulvinar ut. Quisque sit amet accumsan nulla, a rhoncus odio. Vestibulum condimentum tellus vel aliquam porta. Mauris vel interdum sem.</p>

                <div className="mt-8 flex gap-4">
                    <button className="2xl:text-lg sm:text-base sm:py-2 text-white font-medium text-sm bg-[#8A4FFF] rounded-lg px-3 py-1 cursor-pointer transition-all duration-200 ease-in-out hover:scale-110">
                        Conheça Nossa Equipe
                    </button>
                    <button className="2xl:text-lg sm:text-base sm:py-2 text-[#8A4FFF] font-medium text-sm bg-white border border-[#8A4FFF] rounded-lg px-3 py-1 cursor-pointer transition-all duration-200 ease-in-out hover:scale-110">
                        Nossa História
                    </button>
                </div>
            </div>

        </section>
    )
}