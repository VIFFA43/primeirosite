function About() {
    try {
        return (
            <section id="sobre" className="section bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img src="https://app.trickle.so/storage/public/images/usr_106cc0ff68000001/0c2e0965-9b34-44a3-a529-d562b7eeaeb8.jpeg" alt="Victor Florenzano" className="rounded-lg shadow-lg aspect-square object-cover"/>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Sobre Mim</h2>
                            <div className="mb-4 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                                <p className="text-blue-800 font-semibold">CRP 05/74008</p>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Sou Victor Florenzano, psicólogo clínico e neuropsicólogo com especializações em Neuropsicologia, 
                                Psicologia Social, Antropologia e Análise Reichiana. Tenho mais de 10 anos de 
                                experiência de vida e trabalho no exterior.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Minha abordagem integra evidências científicas e atenção ao corpo-mente, criando 
                                um espaço acolhedor para você entender padrões emocionais, reduzir a ansiedade e 
                                ressignificar sua história.
                            </p>
                            <a href="https://wa.me/5521983499170" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                <i className="fab fa-whatsapp mr-2"></i>Conversar no WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('About error:', error);
        return null;
    }
}