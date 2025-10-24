function Process() {
    try {
        const steps = [
            {title: "Contato Inicial", description: "Primeiro contato para entender suas necessidades", icon: "fa-comments"},
            {title: "Sessão de Avaliação", description: "Avaliação detalhada da sua situação", icon: "fa-clipboard-list"},
            {title: "Plano Terapêutico", description: "Desenvolvimento do plano personalizado", icon: "fa-tasks"},
            {title: "Sessões Regulares", description: "Acompanhamento contínuo do seu progresso", icon: "fa-calendar-check"}
        ];

        return (
            <section className="section bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="section-title">Como Funciona</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 mx-auto bg-blue-600 rounded-full flex items-center justify-center mb-4">
                                    <i className={`fas ${step.icon} text-2xl text-white`}></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Process error:', error);
        return null;
    }
}