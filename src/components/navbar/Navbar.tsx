import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
                            bg-emerald-600 text-white'>

                <div className="container flex justify-between text-lg items-center">
                    <div className='text-2xl font-bold'>
                        <Link to='/home' className="text-2xl font-bold">Farmácia Vida</Link>
                    </div>

                    <div className='flex gap-4'>
                        <div>Produtos</div>
                        <div>Categorias</div>
                        <div>Cadastrar Categoria</div>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar