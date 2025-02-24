function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-red-900 text-white'>
            
                <div className="container flex justify-between text-lg">
                <div className="flex justify-left ">
                        <img
                            src="https://images.weare365.io/filters:format(.webp)/1920x0/BR_Drogaria_Sao_Paulo_fc4122f334.png"
                            alt="Imagem Página Home"
                            className='w-1/6'
                        />
                    </div>

                    <div className='flex gap-4'>
                        Categorias                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar