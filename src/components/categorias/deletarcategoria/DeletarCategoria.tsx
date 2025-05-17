import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { buscar, deletar } from "../../../services/Service"
import { RotatingLines } from "react-loader-spinner"
import Categoria from "../../../model/Categorias"

function DeletarCategoria() {
    const navigate = useNavigate()

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {}
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarcategoria() {
        setIsLoading(true)
        try {
            await deletar(`/categorias/${id}`)
            alert('Categoria apagada com sucesso')
        } catch (error: any) {
            alert('Erro ao deletar a categoria.')
        }
        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/categorias")
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-100 via-white to-indigo-100 px-2">
            <div className="w-full max-w-md bg-white/95 rounded-2xl shadow-2xl border border-red-200 p-8 flex flex-col gap-6">
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-red-100 rounded-full p-4 mb-2 shadow">
                        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-center text-red-600">
                        Deletar Categoria
                    </h1>
                    <p className="text-center font-semibold text-gray-700">
                        Tem certeza que deseja apagar a categoria abaixo?
                    </p>
                </div>

                <div className="border-2 border-red-200 rounded-lg p-4 bg-red-50 flex flex-col items-center">
                    <p className="text-lg font-bold text-gray-800">{categoria.nome}</p>
                    <p className="text-gray-600">{categoria.descricao}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <button
                        className="rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 transition"
                        onClick={retornar}
                        type="button"
                    >
                        Cancelar
                    </button>
                    <button
                        className="rounded-lg bg-red-500 hover:bg-red-700 text-white font-bold py-3 flex justify-center items-center transition"
                        onClick={deletarcategoria}
                        type="button"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            />
                        ) : (
                            <span>Sim, apagar</span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria