function Footer() {
    try {
        return (
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Victor Florenzano</h3>
                            <p className="text-gray-400">Psicólogo Clínico e Neuropsicólogo especializado em Avaliação Neuropsicológica, Psicologia Social, Antropologia e Análise Reichiana.</p>
                            <p className="text-gray-400 mt-4">CRP 05/74008</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
                            <ul className="space-y-2">
                                <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
                                <li><a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Sobre</a></li>
                                <li><a href="#servicos" className="text-gray-400 hover:text-white transition-colors">Serviços</a></li>
                                <li><a href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#contato" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Contato</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><i className="fas fa-phone mr-2"></i>(21) 98349-9170</li>
                                <li><i className="fab fa-whatsapp mr-2"></i>WhatsApp</li>
                                <li><i className="fas fa-map-marker-alt mr-2"></i>Niterói e Tijuca - RJ</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 Victor Florenzano - Psicólogo Clínico. Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer error:', error);
        return null;
    }
}