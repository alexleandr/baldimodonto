import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa'

export function Contact() {
    const token = import.meta.env.VITE_MAPS_TOKEN
    const url = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ-apx5PeBy5QRgw1vnpmdQSQ&key=${token}`

    return (
        <footer className='bg-teal-200'>
            <div className='flex justify-center'>
                <ul className='grid md:grid-cols-3 gap-8 md:gap-4 md:max-w-3xl lg:max-w-5xl px-4 py-12'>
                    <li className='flex flex-col gap-6'>
                        <h5 className='text-teal-950 text-lg'>
                            SOBRE NÓS
                        </h5>

                        <p className='text-teal-800 text-sm'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                        </p>
                    </li>

                    <li className='flex flex-col gap-6'>
                        <h5 className='text-teal-950 text-lg'>
                            SOCIAL
                        </h5>

                        <ul className='flex flex-col gap-3 text-teal-800 text-sm'>
                            <li>
                                <a
                                    target='_blank'
                                    href='https://api.whatsapp.com/send?phone=5535991335263'
                                    className='social-link'
                                >
                                    <FaWhatsapp size='22' /> Whatsapp
                                </a>

                                <hr className='bg-teal-600 h-0.5 mt-2' />
                            </li>

                            <li>
                                <a
                                    target='_blank'
                                    href='https://www.facebook.com/consultoriodrajucara'
                                    className='social-link'
                                >
                                    <FaFacebook size='22' /> Facebook
                                </a>

                                <hr className='bg-teal-600 h-0.5 mt-2' />
                            </li>

                            <li>
                                <a
                                    target='_blank'
                                    href='https://www.instagram.com/jucarabaldim/'
                                    className='social-link'
                                >
                                    <FaInstagram size='22' /> Instagram
                                </a>

                                <hr className='bg-teal-600 h-0.5 mt-2' />
                            </li>
                        </ul>
                    </li>

                    <li className='h-56'>
                        <iframe
                            className='h-full w-full rounded-md drop-shadow-sm'
                            loading='lazy'
                            allowFullScreen
                            src={url}
                        ></iframe>
                    </li>
                </ul>
            </div>

            <div className='p-12 bg-teal-950 text-teal-700 text-center font-semibold'>
                Estamos em desenvolvimento.
            </div>
        </footer>
    )
}