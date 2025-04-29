import ListaProdutos from "../../components/produtos/listaprodutos/ListaProdutos";
import ModalProduto from "../../components/produtos/modalproduto/ModalProduto";

function Home() {
  return (
    <>
      <div className="bg-red-600 flex justify-center">
        <div className="container grid grid-cols-1 md:grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4 w-full">
            <h2 className="text-3xl md:text-5xl font-bold">Drograria São Paulo</h2>
            <p className="text-xl">O melhor Preço de Itaquaquecetuba</p>
            <div className="flex justify-around gap-4">
              <div className="flex justify-around gap-4">
                <ModalProduto />
              </div>
            </div>
          </div>

          {/* Imagem - Oculta em telas médias e pequenas */}
          <div className="hidden md:flex justify-center">
            <img
              src="https://images.weare365.io/filters:format(.webp)/1920x0/BR_Drogaria_Sao_Paulo_fc4122f334.png"
              alt="Imagem Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
      <ListaProdutos />
    </>
  );
}

export default Home;