import { Tab } from '@headlessui/react'

import { OurStoryTab } from './OurStoryTab'

import tab1 from '../assets/tab1.png'
import tab2 from '../assets/tab2.png'
import tab3 from '../assets/tab3.png'

export function OurStory() {
    return (
        <section
            id='story'
            className='w-full py-24 px-4 text-center flex justify-center bg-teal-50'
        >
            <div className='md:max-w-3xl'>
                <div className='flex flex-col gap-6'>
                    <h2 className='text-teal-950 text-3xl'>
                        NOSSA HISTÓRIA
                    </h2>

                    <p className='text-teal-800 text-lg'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>

                <Tab.Group>
                    <Tab.List className='flex flex-wrap justify-center gap-6 my-8 text-teal-50'>
                        <Tab className='tab-button'>
                            TAB BUTTON 1
                        </Tab>

                        <Tab className='tab-button'>
                            TAB BUTTON 2
                        </Tab>

                        <Tab className='tab-button'>
                            TAB BUTTON 3
                        </Tab>
                    </Tab.List>

                    <Tab.Panels>
                        <OurStoryTab
                            image={tab1}
                            alternativeText='Imagem de teste (temporário).'
                            title='Algum Título Aqui'
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
                        />
                        
                        <OurStoryTab
                            image={tab2}
                            alternativeText='Imagem de teste (temporário).'
                            title='Título'
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
                        />
                        
                        <OurStoryTab
                            image={tab3}
                            alternativeText='Imagem de teste (temporário).'
                            title='Título'
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
                        />
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </section>
    )
}