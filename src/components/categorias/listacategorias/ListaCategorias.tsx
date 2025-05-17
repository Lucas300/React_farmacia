import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { buscar } from "../../../services/Service";
import Categoria from "../../../model/Categorias";
import CardCategoria from "../cardcategoria/CardCategoria";

function ListaCategorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias);
        } catch (error: any) {
            console.error("Erro ao buscar categorias:", error);
        }
    }

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length]);

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-fixed"
            style={{
                backgroundImage: "url('https://clinicas.clinicarx.com.br/wp-content/uploads/2020/07/estoque-farmacia.jpg')", // Substitua pelo link da sua imagem
            }}
        >
            {categorias.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className="flex justify-center w-full ">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categorias.map((categoria) => (
                            <CardCategoria key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListaCategorias;