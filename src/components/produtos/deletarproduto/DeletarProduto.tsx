import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscar, deletar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import Produto from "../../../model/Produto";

function DeletarProduto() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [produto, setProduto] = useState<Produto>({} as Produto);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto);
    } catch (error: any) {
      console.error("Erro ao buscar produto:", error);
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarProduto() {
    setIsLoading(true);

    try {
      await deletar(`/produtos/${id}`);
      alert("Produto apagado com sucesso");
      retornar();
    } catch (error: any) {
      alert("Erro ao deletar o produto.");
    }

    setIsLoading(false);
  }

  function retornar() {
    navigate("/produtos");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-100 via-white to-indigo-100 px-2">
      <form
        className="flex flex-col w-full max-w-md gap-6 bg-white/95 shadow-2xl rounded-2xl p-8 border border-red-200"
        onSubmit={(e) => {
          e.preventDefault();
          deletarProduto();
        }}
      >
        <div className=" flex flex-col items-center gap-2">
          <div className="bg-red-100 rounded-full p-4 mb-2 shadow">
            <svg
              className="w-10 h-10 text-red-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-center text-red-600">
            Deletar Produto
          </h2>
          <p className="text-center font-semibold text-gray-700">
            Tem certeza que deseja apagar o produto abaixo?
          </p>
        </div>

        <div className="border-2 border-red-200 rounded-lg p-4 bg-red-50 flex flex-col items-center">
          <img
            src={produto.foto}
            className="w-32 h-32 object-contain rounded shadow mb-2 bg-white"
            alt={produto.nome}
          />
          <p className="text-lg font-bold text-gray-800">{produto.nome}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <button
            type="button"
            className="rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 transition"
            onClick={retornar}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="rounded-lg bg-red-500 hover:bg-red-700 text-white font-bold py-3 flex justify-center items-center transition"
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
      </form>
    </div>
  );
}

export default DeletarProduto;