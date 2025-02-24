import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-red-900 text-white'>
            
                <div className="container flex justify-between text-lg">
                <div className="flex justify-left ">
                <Link to='/' className='hover:underline'>        
                        <img
                            src="https://images.weare365.io/filters:format(.webp)/1920x0/BR_Drogaria_Sao_Paulo_fc4122f334.png"
                            alt="Imagem Página Home"
                            className='w-1/6'
                        />
                </Link>
                    </div>

                    <div className='flex gap-4'>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>  
                        <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar categoria</Link>                    
                        <Link to='/produtos' className='hover:underline'>Produtos</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar