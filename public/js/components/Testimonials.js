function Testimonials() {
    try {
        const testimonials = [
            {name: "FL", text: "Estou cada vez mais contente de ter encontrado este psicólogo na minha vida. Super dedicado e atencioso, é atento em cada detalhe da sessão. Minha total confiança.", rating: 5},
            {name: "AC", text: "Quero compartilhar minha experiência incrível com meu psicólogo Victor Fagundes! Um profissional excelente, que me fez sentir acolhida e compreendida em cada sessão.", rating: 5},
            {name: "SV", text: "O Doutor Victor é uma pessoa maravilhosa. Um psicólogo muito atencioso e humano. Eu o conheci em um dos piores momentos de minha vida e ele me ajudou a passar.", rating: 5}
        ];

        return (
            <section className="section">
                <div className="container mx-auto px-4">
                    <h2 className="section-title">O que dizem meus pacientes</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                                <div className="flex justify-center mb-4">
                                    <img src={`https://ui-avatars.com/api/?name=${testimonial.name}&background=random`} alt={testimonial.name} className="w-16 h-16 rounded-full"/>
                                </div>
                                <p className="text-gray-600 mb-4 text-center italic">"{testimonial.text}"</p>
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold">{testimonial.name}</span>
                                    <div className="flex text-yellow-400">
                                        {[...Array(testimonial.rating)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Testimonials error:', error);
        return null;
    }
}