function Hero() {
    try {
        return (
            <section 
                id="inicio"
                className="min-h-screen flex items-center pt-20 relative"
                style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)), url('https://app.trickle.so/storage/public/images/usr_106cc0ff68000001/49d92937-d1dc-4f50-8476-24e417120c08.jpeg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="text-gray-800 text-center md:text-left">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                                Victor Florenzano
                                <span className="block text-3xl md:text-4xl mt-3 text-blue-600 font-semibold">Psicólogo Clínico e Neuropsicólogo</span>
                            </h1>
                            <p className="text-xl md:text-2xl mb-10 text-gray-700 leading-relaxed max-w-2xl mx-auto md:mx-0">
                                Abordagem integrada - psicanálise e neurociências aplicadas promovendo a sua Saúde Mental
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <a href="https://wa.link/9nisct" target="_blank" rel="noopener noreferrer" className="btn btn-primary shadow-lg text-lg px-8 py-4 font-semibold hover:scale-105 transition-transform">
                                    <i className="fas fa-calendar-plus mr-2"></i>Agendar Consulta
                                </a>
                                <a href="#sobre" className="btn btn-outline border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-lg px-8 py-4 font-semibold transition-all">
                                    Saiba Mais
                                </a>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <img src="https://app.trickle.so/storage/public/images/usr_106cc0ff68000001/e0cade30-c1dd-40d3-95cf-889b84f82d09.jpeg" alt="Victor Florenzano" className="rounded-lg shadow-2xl aspect-square object-cover border-4 border-white w-full max-w-md mx-auto"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero error:', error);
        return null;
    }
}