import { useState, useEffect } from "react";


import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";
import Produto from "../../../model/Produto";
import CardProduto from "../cardproduto/CardProduto";

function ListaProdutos() {



    const [produtos, setProdutos] = useState<Produto[]>([]);

 
    async function buscarProdutos() {
        try {
            await buscar('/produtos', setProdutos)

        } catch (error: any) {

        }
    }

   

    useEffect(() => {
        buscarProdutos()
    }, [produtos.length])

    return (
        <>
            {produtos.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className="flex justify-center items-center w-full my-4 min-h-screen">
  <div className="container flex flex-col mx-2">
    <div className="container mx-auto my-4 
      grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      {produtos.map((produto) => (
        <CardProduto key={produto.id} produto={produto} />
      ))}
    </div>
  </div>
</div>
        </>
    );
}

export default ListaProdutos;