import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  { id: 1, name: "Perceuse Bosch", price: 89.99, img: "/images/perceuse.jpg" },
  { id: 2, name: "Clé à chocs", price: 129.99, img: "/images/cle-choc.jpg" },
  { id: 3, name: "Disque de rechange", price: 14.50, img: "/images/disque.jpg" },
];

function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Bienvenue sur BASH</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((p) => (
          <Card key={p.id}>
            <CardContent className="p-4">
              <img src={p.img} alt={p.name} className="h-40 w-full object-cover mb-4 rounded-xl" />
              <h2 className="text-xl font-semibold">{p.name}</h2>
              <p className="text-gray-600">{p.price.toFixed(2)} €</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Panier({ cart, removeFromCart }) {
  const total = cart.reduce((sum, p) => sum + p.price, 0);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Votre panier</h1>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <span>{item.name}</span>
              <span>{item.price.toFixed(2)} €</span>
              <Button variant="destructive" onClick={() => removeFromCart(index)}>Supprimer</Button>
            </div>
          ))}
          <div className="mt-4 font-bold">Total : {total.toFixed(2)} €</div>
        </div>
      )}
    </div>
  );
}

function Pro() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Accès Professionnels</h1>
      <form className="space-y-4">
        <input placeholder="Nom de l'entreprise" className="w-full p-2 border rounded-xl" />
        <input placeholder="SIRET" className="w-full p-2 border rounded-xl" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded-xl" />
        <Button type="submit">S'inscrire</Button>
      </form>
    </div>
  );
}

function CGV() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Conditions Générales de Vente</h1>
      <p>Insérez ici vos conditions générales de vente...</p>
    </div>
  );
}

function Reclamation() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Réclamation</h1>
      <form className="space-y-4">
        <input placeholder="Nom" className="w-full p-2 border rounded-xl" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded-xl" />
        <textarea placeholder="Votre réclamation..." className="w-full p-2 border rounded-xl"></textarea>
        <Button type="submit">Envoyer</Button>
      </form>
    </div>
  );
}

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));

  return (
    <Router>
      <nav className="flex justify-around bg-gray-800 text-white p-4">
        <Link to="/">Produits</Link>
        <Link to="/panier">Panier</Link>
        <Link to="/pro">Accès Pro</Link>
        <Link to="/cgv">CGV</Link>
        <Link to="/reclamation">Réclamation</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/panier" element={<Panier cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/pro" element={<Pro />} />
        <Route path="/cgv" element={<CGV />} />
        <Route path="/reclamation" element={<Reclamation />} />
      </Routes>
    </Router>
  );
}

export default App;
