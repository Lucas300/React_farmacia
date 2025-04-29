import { Link } from 'react-router-dom';
import Produto from '../../../model/Produto';

interface CardProdutosProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutosProps) {
  return (
    <div className="border rounded-md overflow-hidden shadow-sm p-6 w-full sm:w-80 hover:shadow-md transition-shadow flex flex-col justify-between mx-auto relative">
      {/* Checkbox em formato de coração no canto superior direito */}
      <div className="absolute top-6 right-2"> {/* Ajuste o `top` para mover o coração para baixo */}
        <input
          type="checkbox"
          id={`favorite-${produto.id}`}
          className="hidden peer"
        />
        <label
          htmlFor={`favorite-${produto.id}`}
          className="text-gray-500 peer-checked:text-red-500 cursor-pointer text-4xl" // Aumentei o tamanho do coração
        >
          ♥
        </label>
      </div>

      <div className="relative">
        <img
          src={produto.foto}
          alt={produto.nome}
          className="w-full h-40 object-contain"
        />
      </div>

      <div className="mt-6 flex-1 flex flex-col justify-between">
        <h2 className="text-base font-normal text-gray-700">{produto.nome}</h2>
        <h4 className="text-sm font-semibold text-gray-500 uppercase mt-2">
          {produto.laboratorio}
        </h4>
        <p className="text-sm text-gray-400 mt-1">{produto.categoria?.descricao}</p>

        <div className="mt-6">
          <p className="text-sm text-gray-400 line-through">R$ {(produto.preco * 1.1).toFixed(2)}</p>
          <p className="text-2xl font-bold text-black">R$ {produto.preco.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex mt-4">
        <Link
          to={`/editarproduto/${produto.id}`}
          className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarproduto/${produto.id}`}
          className="text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardProduto;