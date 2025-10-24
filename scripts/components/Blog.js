function Blog() {
    try {
        const posts = [
            {title: "Entendendo a Ansiedade", excerpt: "A ansiedade é uma resposta natural do corpo, mas quando em excesso pode afetar a qualidade de vida.", date: "15 de Março, 2025", image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600"},
            {title: "Benefícios da Terapia Online", excerpt: "A terapia online oferece flexibilidade e conforto, mantendo a mesma eficácia da presencial.", date: "10 de Março, 2025", image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=600"},
            {title: "O que é Neuropsicologia", excerpt: "A neuropsicologia estuda a relação entre o cérebro e o comportamento humano.", date: "05 de Março, 2025", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600"}
        ];

        return (
            <section id="blog" className="section bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="section-title">Blog</h2>
                    <p className="section-subtitle">Artigos e informações sobre saúde mental e bem-estar</p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                <img src={post.image} alt={post.title} className="w-full h-48 object-cover"/>
                                <div className="p-6">
                                    <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                                    <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                    <a href="#blog" className="text-blue-600 hover:text-blue-800 font-semibold">Ler mais →</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Blog error:', error);
        return null;
    }
}