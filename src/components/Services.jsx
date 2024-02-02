import { ServicesCard } from './ServicesCard'

export function Services() {
    return (
        <section className='w-full py-24 px-4 text-center flex justify-center bg-teal-50'>
            <div className='md:max-w-3xl lg:max-w-5xl'>
                <div className='flex flex-col gap-6 mb-24'>
                    <h2 className='text-teal-950 text-3xl'>
                        NOSSOS SERVIÇOS
                    </h2>

                    <p className='text-teal-800 text-lg'>
                        Temos atendimento diferenciado, digital e analógico. Trabalhando com a tecnologia do escaneamento para serviços com maior precisão e eficácia.
                    </p>
                </div>

                <ul
                    className='grid md:grid-cols-3 gap-8 md:gap-4'
                    data-aos='fade-up'
                    data-aos-duration='1000'
                >
                    <ServicesCard
                        title='ORTODONTIA'
                        description='Trabalhamos com aparelho fixo autoligado, aparelho removível e alinhador invisível. Nossa especialista irá avaliar e te indicar qual a melhor opção para o seu caso.'
                    />

                    <ServicesCard
                        title='PRÓTESE'
                        description='Realizamos coroas, prótese total (dentadura), prótese de grampos removível, placa de bruxismo e prótese sobre implante (unitária e protocolo).'
                    />
                    
                    <ServicesCard
                        title='IMPLANTODONTIA'
                        description='O implante é indicado quando o paciente perdeu totalmente a coroa e a raíz do dente, podendo ser unitário ou múltiplos. Nesses casos é feito a instalação de implantes (em titânio) para reabilitação.'
                    />

                    <ServicesCard
                        title='TRATAMENTO ENDODÔNTICO (CANAL)'
                        description='O tratamento endodôntico ou tratamento de canal consiste em retirar a polpa do dente (que fica localizada na parte interna da raiz), isso indica que o dente sofreu algum dano e já atingiu a polpa.'
                    />

                    <ServicesCard
                        title='CIRURGIA SISO'
                        description='A extração do siso é indicada sempre que há presença de dor, está prejudicando os molares ou encontra-se em posição desconfortável (que não vai nascer) ou que vai prejudicar a mordida.'
                    />

                    <ServicesCard
                        title='CLÍNICO GERAL/ESTÉTICA'
                        description='Trabalhamos com o atendimento clínico realizando vários tipos de procedimentos: restaurações, profilaxia/aplicação flúor, raspagem, extração, radiografia periapical, reconstituição em resina (faceta) e clareamento dental.'
                    />
                </ul>
            </div>
        </section>
    )
}