// juliotbr/farmaciareact/farmaciaReact-73dbde89db60b28079b3711c6ff17fc3854a2557/src/components/navbar/Navbar.tsx
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
                        <Link to='/produtos' className='hover:underline'>Produtos</Link>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categoria</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar