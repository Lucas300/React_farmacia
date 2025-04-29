import { Link } from 'react-router-dom';
import Categoria from '../../../model/Categorias';

interface CardCategiasProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategiasProps) {
  return (
    <div className="flex items-center justify-center mt-5 max-h-screen bg-gray-100">
      <div className="flex flex-col w-full h-full md:w-auto md:h-auto md:max-w-2xl gap-6 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-indigo-600">
          Categoria {categoria.id}
        </h2>

        <div className="border rounded-lg p-4 bg-gray-100">
          <p className="text-lg font-bold text-gray-700">{categoria.nome}</p>
          <p className="text-gray-600">{categoria.descricao}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            to={`/editarcategoria/${categoria.id}`}
            className="rounded-lg bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 flex justify-center items-center"
          >
            Editar
          </Link>
          <Link
            to={`/deletarcategoria/${categoria.id}`}
            className="rounded-lg bg-red-500 hover:bg-red-700 text-white font-bold py-3 flex justify-center items-center"
          >
            Deletar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardCategorias;