import { DentistsCard } from './DentistsCard'

import dentist from '../assets/dentist.png'

export function Dentists() {
    return (
        <section className='w-full py-24 px-4 text-center flex justify-center bg-teal-950 text-teal-50'>
            <div className='md:max-w-3xl'>
                <div className='flex flex-col gap-6 mb-24'>
                    <h2 className='text-3xl'>
                        QUEM SOMOS NÓS
                    </h2>

                    <p className='text-lg'>
                        Aqui você encontra profissionais qualificados em diversas áreas para atender você e sua família, fazendo tratamentos completos ou atuando na prevenção (retorno 6 em 6 meses). Venha nos conhecer, agende sua consulta.
                    </p>
                </div>

                <ul
                    className='grid md:grid-cols-2 gap-12'
                    data-aos='fade-up'
                    data-aos-duration='1000'
                >
                    <DentistsCard
                        image={dentist}
                        name='Dra. Juçara Baldim'
                        cro='MG 16429'
                        description='Especialista em Ortodontia e Prótese'
                    />

                    <DentistsCard
                        image={dentist}
                        name='Dra. Poliana Ap. Cintra'
                        cro='MG 59145'
                        description='Clínica Geral'
                    />

                    <DentistsCard
                        image={dentist}
                        name='Dra. Roberta Baptista'
                        cro='MG 53702'
                        description='Especialista em Endodontia'
                    />

                    <DentistsCard
                        image={dentist}
                        name='Dra. Carmen Martins'
                        cro='MG 056778'
                        description='Especialista em Implante'
                    />
                </ul>
            </div>
        </section>
    )
}