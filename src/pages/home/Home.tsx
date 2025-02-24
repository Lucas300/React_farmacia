

function Home() {
    return (
        <>
            <div className="bg-red-600 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Drograria São Paulo
                        </h2>
                        <p className='text-xl'>
                            O melhor Preço de Itaquaquecetuba
                        </p>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://images.weare365.io/filters:format(.webp)/1920x0/BR_Drogaria_Sao_Paulo_fc4122f334.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
     
        </>
    )
}

export default Home