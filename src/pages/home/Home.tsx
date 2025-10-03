import ListaProdutos from "../../components/produtos/listaprodutos/ListaProdutos";
import ModalProduto from "../../components/produtos/modalproduto/ModalProduto";
import fotosobre from "../../assets/images/fm1.png"

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
              src={fotosobre}
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