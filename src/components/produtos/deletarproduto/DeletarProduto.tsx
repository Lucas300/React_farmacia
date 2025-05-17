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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="flex flex-col w-full h-full md:w-auto md:h-auto md:max-w-2xl gap-6 bg-white shadow-md rounded-lg p-6 sm:mt-[-20px]"
        onSubmit={(e) => {
          e.preventDefault();
          deletarProduto();
        }}
      >
        <h2 className="text-2xl font-bold text-center text-indigo-600">
          Deletar Produto
        </h2>

        <p className="text-center font-semibold">
          Você tem certeza de que deseja apagar o produto abaixo?
        </p>

        <div className="border rounded-lg p-4 bg-gray-100">
          <p className="text-lg font-bold text-gray-700">{produto.nome}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            type="button"
            className="rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-3"
            onClick={retornar}
          >
            Não
          </button>
          <button
            type="submit"
            className="rounded-lg bg-red-500 hover:bg-red-700 text-white font-bold py-3 flex justify-center items-center"
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
              <span>Sim</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default DeletarProduto;