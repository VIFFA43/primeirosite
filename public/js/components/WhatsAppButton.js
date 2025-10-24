function WhatsAppButton() {
    try {
        return (
            <a href="https://wa.me/5521983499170" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors z-50" aria-label="Contato via WhatsApp">
                <i className="fab fa-whatsapp text-3xl"></i>
            </a>
        );
    } catch (error) {
        console.error('WhatsAppButton error:', error);
        return null;
    }
}