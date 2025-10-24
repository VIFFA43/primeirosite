function Header() {
    try {
        const [isScrolled, setIsScrolled] = React.useState(false);
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);

        React.useEffect(() => {
            const handleScroll = () => setIsScrolled(window.scrollY > 0);
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        return (
            <header 
                className={`fixed w-full z-50 transition-all duration-300 ${
                    isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
                }`}
                data-name="header"
            >
                <div className="container mx-auto px-4">
                    <nav className="flex items-center justify-between h-24">
                        <a href="#inicio" className="flex items-center">
                            <img 
                                src="https://app.trickle.so/storage/public/images/usr_106cc0ff68000001/6f165153-886f-43ec-b8b2-81d023073f7b.png" 
                                alt="Victor Florenzano"
                                className="h-20 w-auto"
                            />
                        </a>
                        <button 
                            className="md:hidden text-gray-700 p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                        </button>
                        <div className={`md:flex items-center space-x-8 ${isMenuOpen ? 'block absolute top-24 left-0 w-full bg-white shadow-md py-4' : 'hidden'} md:static md:bg-transparent md:shadow-none md:py-0`}>
                            <a href="#inicio" className="block py-3 md:py-0 px-4 md:px-0 text-gray-700 hover:text-blue-600 transition-colors">Início</a>
                            <a href="#sobre" className="block py-3 md:py-0 px-4 md:px-0 text-gray-700 hover:text-blue-600 transition-colors">Sobre</a>
                            <a href="#servicos" className="block py-3 md:py-0 px-4 md:px-0 text-gray-700 hover:text-blue-600 transition-colors">Serviços</a>
                            <a href="#blog" className="block py-3 md:py-0 px-4 md:px-0 text-gray-700 hover:text-blue-600 transition-colors">Blog</a>
                            <a href="#agendar" className="block py-3 md:py-0 px-4 md:px-0 text-gray-700 hover:text-blue-600 transition-colors">Agendar</a>
                            <a href="#contato" className="block py-3 md:py-0 px-4 md:px-0 text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
                        </div>
                    </nav>
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header error:', error);
        return null;
    }
}