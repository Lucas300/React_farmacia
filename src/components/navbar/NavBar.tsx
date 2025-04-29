import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-full bg-red-900 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://images.weare365.io/filters:format(.webp)/1920x0/BR_Drogaria_Sao_Paulo_fc4122f334.png"
              alt="Imagem Página Home"
              className="w-28"
            />
          </Link>

          {/* Hamburger Icon */}
          <button
            className="text-white text-2xl md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            ☰
          </button>

          {/* Links */}
          <div
            className={`hidden md:flex md:items-center md:gap-6 text-lg ${
              isOpen ? "hidden" : ""
            }`}
          >
            <Link to="/categorias" className="hover:underline">
              Categorias
            </Link>
            <Link to="/cadastrarcategoria" className="hover:underline">
              Cadastrar Categoria
            </Link>
            <Link to="/" className="hover:underline">
              Produtos
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-red-800 text-white text-center py-4">
            <Link
              to="/categorias"
              className="block py-2 hover:bg-red-700"
              onClick={toggleMenu}
            >
              Categorias
            </Link>
            <Link
              to="/cadastrarcategoria"
              className="block py-2 hover:bg-red-700"
              onClick={toggleMenu}
            >
              Cadastrar Categoria
            </Link>
            <Link
              to="/produtos"
              className="block py-2 hover:bg-red-700"
              onClick={toggleMenu}
            >
              Produtos
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;