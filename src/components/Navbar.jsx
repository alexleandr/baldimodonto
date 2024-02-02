import { FaWhatsapp } from 'react-icons/fa'

import logo from '../assets/dark-logo.png'

export function Navbar() {
    return (
        <header className='flex justify-center w-full p-4 bg-teal-50'>
            <nav className='flex justify-between items-center w-full md:max-w-3xl lg:max-w-5xl'>
                <a href='/' className='hover:brightness-125 transition duration-300'>
                    <img
                        src={logo}
                        alt='Logotipo de Baldim Odontologia Especializada.'
                        className='w-52'
                    />
                </a>

                <a
                    target='_blank'
                    href='https://api.whatsapp.com/send?phone=5535991335263'
                    className='text-teal-950 hover:text-teal-600 transition duration-300'
                >
                    <span className='flex items-center gap-1'>
                        <FaWhatsapp size='24' />
                        
                        <span className='hidden lg:inline'>Fale Conosco</span>
                    </span>
                </a>
            </nav>
        </header>
    )
}