import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-red-600 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        Lucas Daniel | Copyright: {data}
                    </p>
                    <p className='text-lg'>Acesse a minhas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="https://www.linkedin.com/in/lucas-daniel-souza-dias/" target="_blank" rel="noopener noreferrer"><LinkedinLogo size={48} weight='bold' /></a>
                        <a href="https://github.com/Lucas300/React_farmacia " target="_blank"><GithubLogo size={48} weight='bold' /></a>
                        <a href="https://www.instagram.com/lucas.kardashiann/" target="_blank" rel="noopener noreferrer"><InstagramLogo size={48} weight='bold' /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer