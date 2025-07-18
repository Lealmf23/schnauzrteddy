import Btncard from "../Btncard/Btncard"

const borderHover = {
    'border-red-700': 'hover:border-red-700',
    'border-black': 'hover:border-black',
    'border-purple-700': 'hover:border-purple-700',
    'border-orange-700': 'hover:border-orange-700'
}

const Card = (props) => {
    const { description, linkUrl, imageUrl, redSocial, colorRed, btnText, btnsimbolo, color } = props
    return (
        <div className={`group bg-white rounded-3xl shadow-lg overflow-hidden p-2 aspect-square border-1 border-gray-300 transition-colors duration-300 ${borderHover[color]}`}>
            <div
                className='h-full w-full overflow-hidden rounded-2xl bg-cover bg-center relative'
                style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className={`${colorRed} absolute text-white m-2 px-3 rounded-2xl`}>
                    <i className={`bi ${redSocial}`}> </i>
                </div>
                <div className='absolute bottom-0 backdrop-blur-md rounded-b-2xl overflow-hidden text-white p-2'>
                    <p className='mb-2 text-sm'>{description}</p>
                    <p className='text-right'>
                        <Btncard linkUrl={linkUrl} colorRed={colorRed} btnText={btnText} btnsimbolo={btnsimbolo}/>  
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card
