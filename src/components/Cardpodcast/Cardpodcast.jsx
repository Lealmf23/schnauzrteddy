import TeddyPodcast from '../../assets/TeddyPodcast.webp'
import Btncard from '../Btncard/Btncard';

const Cardpodcast = () => {
    return (
        <div className='group bg-white rounded-3xl shadow-lg overflow-hidden p-2 col-span-2 aspect-video grid grid-cols-2 gap-4 border border-gray-300 transition-colors duration-300 hover:border-green-700 hover:bg-green-100'>
            <div className='relative overflow-hidden '>
                <div className='bg-green-700 text-white absolute m-2 px-3 rounded-2xl'>
                    <i class='bi bi-spotify'> </i>
                </div>
                <div className='absolute bottom-0 '>
                    <p className='mb-2 p-2'>
                        Escucha el podcast <strong>‘Confesiones Caninas’</strong> donde y cuando quieras.
                    </p>
                    <p>
                        <Btncard
                            linkUrl='https://open.spotify.com/show/25cEVJ5MiDHI4HN9NhitAM?si=CfKtNmhATDGpwkJ_iLarWw'
                            colorRed='bg-green-700'
                            btnText='Play'
                            btnsimbolo='bi-play-fill'
                        />
                    </p>
                </div>
            </div>
            <div
                className='h-full w-full overflow-hidden rounded-2xl  bg-cover bg-center relative '
                style={{ backgroundImage: `url(${TeddyPodcast})` }}></div>
        </div>
    )
}
 
export default Cardpodcast;