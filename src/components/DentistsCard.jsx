export function DentistsCard(props) {
    return (
        <li className='flex flex-col items-center gap-4'>
            <img
                src={props.image}
                alt={props.name}
                className='rounded'
            />

            <h4 className='text-xl'>
                {props.name}
            </h4>

            <p className='text-md'>
                CRO - {props.cro}
            </p>

            <p className='text-sm font-semibold'>
                {props.description}
            </p>
        </li>
    )
}