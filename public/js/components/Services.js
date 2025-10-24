function Services() {
    try {
        const services = [
            {title: "Terapia Individual Presencial", description: "Atendimento em Niterói e Tijuca", icon: "fa-user", price: "Valor à consultar"},
            {title: "Terapia Online Brasil", description: "Atendimento remoto em todo território nacional", icon: "fa-video", price: "Valor à consultar"},
            {title: "Terapia Online Exterior", description: "EUA, Portugal, Reino Unido", icon: "fa-globe", price: "Valor à consultar"},
            {title: "Avaliação Neuropsicológica", description: "Avaliação completa e detalhada", icon: "fa-brain", price: "Valor à consultar"}
        ];

        return (
            <section id="servicos" className="section">
                <div className="container mx-auto px-4">
                    <h2 className="section-title">Serviços</h2>
                    <p className="section-subtitle">Oferecemos diferentes modalidades de atendimento psicológico e avaliação neuropsicológica para melhor atender às suas necessidades</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                                <i className={`fas ${service.icon} text-4xl text-blue-600 mb-4`}></i>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <p className="text-2xl font-bold text-blue-600 mb-4">{service.price}</p>
                                <a href="https://wa.me/5521983499170" target="_blank" rel="noopener noreferrer" className="btn btn-outline w-full">Agendar</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Services error:', error);
        return null;
    }
}