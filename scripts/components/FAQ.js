function FAQ() {
    try {
        const [openIndex, setOpenIndex] = React.useState(null);
        const faqs = [
            {question: "Como funciona a terapia online?", answer: "A terapia online funciona da mesma forma que a presencial, mas através de videochamadas seguras. Você pode fazer de qualquer lugar com internet estável."},
            {question: "Quanto tempo dura cada sessão?", answer: "Cada sessão tem duração de 50 minutos, seguindo o padrão internacional de atendimento psicológico."},
            {question: "Com que frequência devo fazer terapia?", answer: "Geralmente recomenda-se sessões semanais, mas a frequência pode ser ajustada conforme sua necessidade e disponibilidade."},
            {question: "O que é avaliação neuropsicológica?", answer: "É um processo de investigação das funções cognitivas através de testes padronizados, auxiliando no diagnóstico e planejamento terapêutico."}
        ];

        return (
            <section className="section">
                <div className="container mx-auto px-4">
                    <h2 className="section-title">Perguntas Frequentes</h2>
                    <div className="max-w-3xl mx-auto">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
                                <button className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                                    <span className="font-semibold text-lg">{faq.question}</span>
                                    <i className={`fas fa-chevron-${openIndex === index ? 'up' : 'down'} text-blue-600`}></i>
                                </button>
                                {openIndex === index && <div className="px-6 pb-6"><p className="text-gray-600">{faq.answer}</p></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('FAQ error:', error);
        return null;
    }
}