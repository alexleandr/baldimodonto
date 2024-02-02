import { TbDentalBroken } from 'react-icons/tb'

export function ServicesCard(props) {
    return (
        <li className='flex flex-col items-center gap-4 p-4 border border-teal-300 rounded'>
            <div className='border border-teal-600 rounded-full p-3'>
                <TbDentalBroken
                    size='72'
                    className='bg-teal-600 text-teal-50 rounded-full p-4'
                />
            </div>
            
            <h4 className='text-teal-950 text-xl'>
                {props.title}
            </h4>

            <p className='text-teal-600 text-sm'>
                {props.description}
            </p>
        </li>
    )
}