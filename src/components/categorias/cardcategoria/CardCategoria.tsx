import { Link } from 'react-router-dom'
import Categoria from '../../../model/Categorias'


interface CardCategiasProps {
    categoria: Categoria
}

function CardCategorias({ categoria }: CardCategiasProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-red-800 text-white font-bold text-2xl'>
                Categoria
            </header>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.nome}</p>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.descricao}</p>
            <div className="flex">
                <Link to={`/editarcategoria/${categoria.id}`}
                    className='w-full text-black bg-	indigo-400 hover:bg-indigo-500 
    flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarcategoria/${categoria.id}`}
                    className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
		flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardCategorias