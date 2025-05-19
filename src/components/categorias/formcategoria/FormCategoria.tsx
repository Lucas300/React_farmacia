import { ChangeEvent, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";

import { atualizar, buscar, cadastrar } from "../../../services/Service";
import Categoria from "../../../model/Categorias";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormCategoria() {
    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria);
        } catch (error: any) {
            ToastAlerta("Erro ao buscar a categoria.", "erro");
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        });
    }

    function retornar() {
        navigate("/categorias");
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria);
                ToastAlerta("A categoria foi atualizada com sucesso!",'sucesso');
            } catch (error: any) {
                ToastAlerta("Erro ao atualizar a categoria.",'erro');
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria);
                ToastAlerta("A categoria foi cadastrada com sucesso!",'sucesso');
            } catch (error: any) {
                ToastAlerta("Erro ao cadastrar a categoria.",'erro');
            }
        }

        setIsLoading(false);
        retornar();
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
            style={{
                backgroundImage: "url('https://istoedinheiro.com.br/wp-content/uploads/sites/17/2023/11/medicamentos-ag-brasil-1.jpg')", // Substitua pelo link da sua imagem
            }}
        >
            <div className="container flex flex-col items-center justify-center mb-20 bg-white/90 p-10 rounded-lg shadow-2xl max-w-lg">
                <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
                    {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
                </h1>

                <form className="w-full flex flex-col gap-6" onSubmit={gerarNovaCategoria}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="nome" className="text-gray-700 font-medium">
                            Nome da Categoria
                        </label>
                        <input
                            type="text"
                            placeholder="Digite o nome da categoria"
                            name="nome"
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            value={categoria.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="descricao" className="text-gray-700 font-medium">
                            Descrição da Categoria
                        </label>
                        <input
                            type="text"
                            placeholder="Digite a descrição da categoria"
                            name="descricao"
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            value={categoria.descricao}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <button
                        className="rounded-lg bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 flex justify-center items-center transition-all duration-300"
                        type="submit"
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
                            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default FormCategoria;