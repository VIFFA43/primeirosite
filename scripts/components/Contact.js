function Contact() {
    try {
        const [formData, setFormData] = React.useState({name: '', email: '', phone: '', message: ''});
        const handleSubmit = (e) => {
            e.preventDefault();
            const whatsappMessage = `Olá! Meu nome é ${formData.name}. ${formData.message}`;
            window.open(`https://wa.me/5521983499170?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
        };

        return (
            <section id="contato" className="section bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="section-title">Entre em Contato</h2>
                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <i className="fas fa-phone text-blue-600 text-xl mr-4 mt-1"></i>
                                    <div>
                                        <p className="font-semibold">Telefone</p>
                                        <a href="tel:+5521983499170" className="text-gray-600 hover:text-blue-600">(21) 98349-9170</a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <i className="fab fa-whatsapp text-blue-600 text-xl mr-4 mt-1"></i>
                                    <div>
                                        <p className="font-semibold">WhatsApp</p>
                                        <a href="https://wa.me/5521983499170" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">(21) 98349-9170</a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <i className="fas fa-map-marker-alt text-blue-600 text-xl mr-4 mt-1"></i>
                                    <div>
                                        <p className="font-semibold">Locais de Atendimento</p>
                                        <p className="text-gray-600">Niterói - RJ</p>
                                        <p className="text-gray-600">Tijuca - RJ</p>
                                        <p className="text-gray-600">Online - Brasil e Exterior</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input type="text" placeholder="Seu Nome" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                                <input type="email" placeholder="Seu E-mail" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                                <input type="tel" placeholder="Seu Telefone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                                <textarea placeholder="Sua Mensagem" rows="5" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required></textarea>
                                <button type="submit" className="btn btn-primary w-full">Enviar Mensagem</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact error:', error);
        return null;
    }
}
