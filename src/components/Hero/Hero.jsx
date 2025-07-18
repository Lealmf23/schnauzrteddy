import Teddy3 from '../../assets/Teddy3.webp'
import Btncard from '../Btncard/Btncard'

const Hero = () => {
    return (
        <div className='bg-white  rounded-3xl shadow-lg row-span-3 col-span-2 p-2 border-1 border-gray-300'>
            <img
                src={Teddy3}
                alt='Smiling person facing forward in a bright and friendly setting with a neutral'
                className='w-full  object-cover rounded-2xl aspect-video md:aspect-square'
            />
            <div className='p-5'>
                <h1 className='text-4xl font-bold mb-3'>Hola! Soy Teddy 🐾</h1>
                <p className='text-gray-600'>
                    Un schnauzer lleno de energía, amor y un toque de travesura. Encuentra mis podcast y aventuras diarias, momentos divertidos, y
                    tips para cuidar a perritos como yo.
                </p>
            </div>
            <div className='flex p-5 gap-4 '>
                <a
                    href='https://www.youtube.com/@schnauzrteddy?sub_confirmation=1'
                    className=' my-2' title='YouTube'>
                    <i class='bi bi-youtube hover:text-red-700'></i>
                </a>
                <a
                    href='https://www.tiktok.com/@schnauzrteddy'
                    className=' my-2 hover:text-red-700' title='TikTok'>
                    <i class='bi bi-tiktok'></i>
                </a>
                <a
                    href='https://www.instagram.com/schnauzrteddy'
                    className=' my-2 hover:text-red-700' title='Instagram'>
                    <i class='bi bi-instagram'></i>
                </a>
                <a
                    href='https://open.spotify.com/show/25cEVJ5MiDHI4HN9NhitAM?si=CfKtNmhATDGpwkJ_iLarWw'
                    className=' my-2 hover:text-red-700' title='Spotify'>
                    <i class='bi bi-spotify'></i>
                </a>
                <a
                    href='mailto:schnauzr.teddy@gmail.com'
                    className=' my-2 hover:text-red-700' title='Email'>
                    <i class='bi bi-envelope'></i>
                </a>

                <Btncard
                    linkUrl='https://vm.tiktok.com/ZMStUQd5h/'
                    colorRed='bg-red-700'
                    btnText='Apoya a Teddy'
                    btnsimbolo='bi-heart'
                />
            </div>
        </div>
    )
}

export default Hero
