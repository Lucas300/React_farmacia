import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscar, atualizar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import Produto from "../../../model/Produto";
import Categoria from "../../../model/Categorias";

function FormProduto() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: "",
    descricao: "",
  });
  const [produto, setProduto] = useState<Produto>({} as Produto);

  const { id } = useParams<{ id: string }>();

  async function buscarProdutoPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto);
    } catch (error: any) {
      alert("Erro ao buscar o Produto");
    }
  }

  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias);
    } catch (error: any) {
      alert("Erro ao buscar o Categoria");
    }
  }

  useEffect(() => {
    buscarCategorias();
    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
    // eslint-disable-next-line
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
    });
  }

  function atualizarCategoria(e: ChangeEvent<HTMLSelectElement>) {
    const categoriaSelecionada = categorias.find(
      (cat) => cat.id.toString() === e.target.value
    );
    setCategoria(categoriaSelecionada || { id: 0, nome: "", descricao: "" });
  }

  function retornar() {
    navigate("/produtos");
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/produtos`, produto, setProduto);
        alert("Produto atualizado com sucesso");
      } catch (error: any) {
        alert("Erro ao atualizar o Produto");
      }
    } else {
      try {
        await cadastrar(`/produtos`, produto, setProduto);
        alert("Produto cadastrado com sucesso");
      } catch (error: any) {
        alert("Erro ao cadastrar o Produto");
      }
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-200 px-2">
      <form
        className="mt-2 mb-2 w-full max-w-2xl bg-transparent shadow-2xl rounded-2xl p-8 md:p-12 flex flex-col gap-6"
        onSubmit={gerarNovoProduto}
      >
        <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-2 tracking-tight">
          {id !== undefined ? "Editar Produto" : "Cadastrar Produto"}
        </h2>
        <p className="text-center text-gray-500 mb-4">
          Preencha todos os campos para{" "}
          {id !== undefined ? "editar" : "cadastrar"} um produto.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="nome" className="font-semibold text-gray-700">
              Nome do Produto
            </label>
            <input
              type="text"
              placeholder="Nome do Produto"
              name="nome"
              required
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              value={produto.nome}
              onChange={atualizarEstado}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="laboratorio" className="font-semibold text-gray-700">
              Laboratório
            </label>
            <input
              type="text"
              placeholder="Laboratório"
              name="laboratorio"
              required
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              value={produto.laboratorio}
              onChange={atualizarEstado}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="descricao" className="font-semibold text-gray-700">
            Descrição do Produto
          </label>
          <input
            type="text"
            placeholder="Descrição"
            name="descricao"
            required
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            value={produto.descricao}
            onChange={atualizarEstado}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="quantidade" className="font-semibold text-gray-700">
              Quantidade
            </label>
            <input
              type="number"
              placeholder="Quantidade"
              name="quantidade"
              required
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              value={produto.quantidade}
              onChange={atualizarEstado}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="preco" className="font-semibold text-gray-700">
              Preço
            </label>
            <input
              type="number"
              placeholder="Preço"
              name="preco"
              required
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              value={produto.preco}
              onChange={atualizarEstado}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="foto" className="font-semibold text-gray-700">
            Foto (URL)
          </label>
          <input
            type="text"
            placeholder="URL da Foto"
            name="foto"
            required
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            value={produto.foto}
            onChange={atualizarEstado}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700">Categoria do Produto</label>
          <select
            name="categoria"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            onChange={atualizarCategoria}
            value={produto.categoria?.id || ""}
            required
          >
            <option value="" disabled>
              Selecione uma Categoria
            </option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nome}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="rounded-lg bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-3 flex justify-center items-center transition disabled:bg-gray-300"
          disabled={isLoading || produto.categoria?.id === 0}
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
            <span>{id !== undefined ? "Atualizar" : "Cadastrar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormProduto;