function App() {
    try {
        return (
            <div data-name="app">
                <Header />
                <main>
                    <Hero />
                    <About />
                    <Services />
                    <Process />
                    <Testimonials />
                    <Blog />
                    <FAQ />
                    <Booking />
                    <Contact />
                </main>
                <Footer />
                <WhatsAppButton />
            </div>
        );
    } catch (error) {
        console.error('App render error:', error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);