import { Tab } from '@headlessui/react'

export function OurStoryTab(props) {
    return (
        <Tab.Panel className='flex flex-col items-center gap-4'>
            <img
                src={props.image}
                alt={props.alternativeText}
                className='w-full'
            />

            <h3 className='text-teal-950 text-4xl'>
                {props.title}
            </h3>

            <p className='text-teal-800 text-sm font-semibold'>
                {props.text}
            </p>
        </Tab.Panel>
    )
}