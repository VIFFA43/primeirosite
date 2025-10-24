function Booking() {
    try {
        return (
            <section id="agendar" className="section bg-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Pronto para começar?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Agende sua primeira consulta e dê o primeiro passo para uma vida com mais equilíbrio e bem-estar
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://wa.link/9nisct" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                            <i className="fab fa-whatsapp mr-2 text-2xl"></i>Agendar pelo WhatsApp
                        </a>
                        <a href="tel:+5521983499170" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center">
                            <i className="fas fa-phone mr-2"></i>Ligar Agora
                        </a>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Booking error:', error);
        return null;
    }
}