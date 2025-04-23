import { useState,  useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { buscar, atualizar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import Produto from "../../../model/Produto";
import Categoria from "../../../model/Categorias";

function FormProduto() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)


    const [categorias, setCategorias] = useState<Categoria[]>([])
    const [categoria, setCategoria] = useState<Categoria>({ id: 0, nome: '', descricao: '', })
    const [produto, setProduto] = useState<Produto>({} as Produto)

    const { id } = useParams<{ id: string }>()

    async function buscarProdutoPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto)
        } catch (error: any) {
            alert('Erro ao buscar o Produto')
        }
    }

    

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias)
        } catch (error: any) {
            alert('Erro ao buscar o Categoria')
        }
    }

    useEffect(() => {
        buscarCategorias()

        if (id !== undefined) {
            buscarProdutoPorId(id)
        }
    }, [id])

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria,
        })
    }, [categoria])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value
        });
    }
    
    function atualizarCategoria(e: ChangeEvent<HTMLSelectElement>) {
        const categoriaSelecionada = categorias.find(cat => cat.id.toString() === e.target.value);
        setCategoria(categoriaSelecionada || { id: 0, nome: '', descricao: '' });
    }

    function retornar() {
        navigate('/produtos');
    }

    async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/produtos`, produto, setProduto);

                alert('Produto atualizado com sucesso')

            } catch (error: any) {
                alert('Erro ao atualizar o Produto')
            }

        } else {
            try {
                await cadastrar(`/produtos`, produto, setProduto)
                alert('Produto cadastrado com sucesso');

            } catch (error: any) {
                alert('Erro ao cadastrar o Produto')
            }
        }

        setIsLoading(false)
        retornar()
    }

    
    return (
        <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovoProduto}>
            <div className="flex flex-col gap-2">
                <label htmlFor="nome">Nome do Produto</label>
                <input
                    type="text"
                    placeholder="Nome do Produto"
                    name="nome"
                    required
                    className="border-2 border-slate-700 rounded p-2"
                    value={produto.nome}
                    onChange={atualizarEstado}
                />
            </div>
    
            <div className="flex flex-col gap-2">
                <label htmlFor="descricao">Descrição do Produto</label>
                <input
                    type="text"
                    placeholder="Descrição"
                    name="descricao"
                    required
                    className="border-2 border-slate-700 rounded p-2"
                    value={produto.descricao}
                    onChange={atualizarEstado}
                />
            </div>
    
            <div className="flex flex-col gap-2">
                <label htmlFor="quantidade">Quantidade</label>
                <input
                    type="number"
                    placeholder="Quantidade"
                    name="quantidade"
                    required
                    className="border-2 border-slate-700 rounded p-2"
                    value={produto.quantidade}
                    onChange={atualizarEstado}
                />
            </div>
    
            <div className="flex flex-col gap-2">
                <label htmlFor="laboratorio">Laboratório</label>
                <input
                    type="text"
                    placeholder="Laboratório"
                    name="laboratorio"
                    required
                    className="border-2 border-slate-700 rounded p-2"
                    value={produto.laboratorio}
                    onChange={atualizarEstado}
                />
            </div>
    
            <div className="flex flex-col gap-2">
                <label htmlFor="preco">Preço</label>
                <input
                    type="number"
                    placeholder="Preço"
                    name="preco"
                    required
                    className="border-2 border-slate-700 rounded p-2"
                    value={produto.preco}
                    onChange={atualizarEstado}
                />
            </div>
    
            <div className="flex flex-col gap-2">
                <label htmlFor="foto">Foto</label>
                <input
                    type="text"
                    placeholder="URL da Foto"
                    name="foto"
                    required
                    className="border-2 border-slate-700 rounded p-2"
                    value={produto.foto}
                    onChange={atualizarEstado}
                />
            </div>
    
            <div className="flex flex-col gap-2">
                <label>Categoria do Produto</label>
                <select
                    name="categoria"
                    className='border p-2 border-slate-800 rounded'
                    onChange={atualizarCategoria}
                    value={produto.categoria?.id || ""}
                >
                    <option value="" disabled>Selecione uma Categoria</option>
                    {categorias.map((categoria) => (
                        <option key={categoria.id} value={categoria.id}>
                            {categoria.nome}
                        </option>
                    ))}
                </select>
            </div>
    
            <button
                type='submit'
                className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto py-2 flex justify-center'
                disabled={isLoading || produto.categoria?.id === 0}
            >
                {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> : 
                <span>{id !== undefined ? 'Atualizar' : 'Cadastrar'}</span>}
            </button>
        </form>
    );
}

export default FormProduto;