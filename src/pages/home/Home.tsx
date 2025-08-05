function Home() {
    return (
        <>
            <div className="bg-emerald-600 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Farmacia Vida: Cuidando de Você e da sua Família
                        </h2>
                        <p className='text-xl'>
                            Encontre medicamentos, cosméticos e tudo para o seu cuidado pessoal.
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                          border-white border-solid border-2 py-2 px-4'
                            >
                                Ver Produtos
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://img.freepik.com/fotos-gratis/closeup-vista-da-mao-do-farmaceutico-tirando-a-caixa-de-remedios-da-prateleira-da-farmacia_342744-320.jpg"
                            alt="Imagem de produtos de farmácia em uma prateleira"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;