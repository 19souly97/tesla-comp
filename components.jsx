function Header() {
  return (
    <header>
      <h2>EV Motors</h2>
      <p>Home | Vehicles | Contact</p>
    </header>
  );
}

function Hero() {
  return (
    <section>
      <h1>Welcome to EV Motors</h1>
      <p>Find the electric car that is right for you.</p>
      <button>Learn More</button>
    </section>
  );
}

function ProductCard() {
  return (
    <div>
      <h3>Model 3</h3>
      <p>Starting at $38,990</p>
      <button>View Car</button>
    </div>
  );
}

function ProductGrid() {
  return (
    <section>
      <h2>Our Vehicles</h2>
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  );
}

function TechnologySection() {
  return (
    <section>
      <h2>Our Technology</h2>
      <p>Our cars use modern electric technology.</p>
    </section>
  );
}

function QuestionBox() {
  return (
    <section>
      <h2>Ask a Question</h2>
      <input type="text" placeholder="Write your question" />
      <button>Send</button>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2026 EV Motors</p>
    </footer>
  );
}

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <ProductGrid />
      <TechnologySection />
      <QuestionBox />
      <Footer />
    </div>
  );
}
