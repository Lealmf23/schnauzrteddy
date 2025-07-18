import Hero from './components/Hero/Hero'
import Card from './components/Card/Card'
import TeddyYoutube from './assets/TeddyYoutube.webp'
import Teddy from './assets/Teddy.webp'
import Teddy2 from './assets/Teddy2.webp'
import Teddy4 from './assets/Teddy4.webp'
import Cardpodcast from './components/Cardpodcast/Cardpodcast'

function App() {
    return (
        <section className='container px-2 my-5 md:mt-15 mx-auto md:px-50 grid md:grid-cols-4 gap-4 '>
            <Hero />
            <Card
                description='Videos semanales y aventuras completas de Teddy.'
                linkUrl='https://www.youtube.com/@schnauzrteddy?sub_confirmation=1'
                imageUrl={TeddyYoutube}
                redSocial='bi-youtube'
                colorRed='bg-red-700'
                btnText='Suscribite'
                btnsimbolo='bi-plus'
                color='border-red-700'
            />
            <Card
                description='Clips cortos, humor y la energía imparable de Teddy.'
                linkUrl='https://www.tiktok.com/@schnauzrteddy'
                imageUrl={Teddy}
                redSocial='bi-tiktok'
                colorRed='bg-black'
                btnText='Seguir'
                btnsimbolo='bi-plus'
                color='border-black'
            />
            <Card
                description='Fotos y stories diarias que derriten de ternura schnauzer'
                linkUrl='#'
                imageUrl={Teddy2}
                redSocial='bi-instagram'
                colorRed='bg-purple-700'
                btnText='Seguir'
                btnsimbolo='bi-plus'
                color='border-purple-700'
            />
            <Card
                description='¿Colaboramos? Escríbenos y hagamos algo increíble juntos.'
                linkUrl='mailto:schnauzr.teddy@gmail.com'
                imageUrl={Teddy4}
                redSocial='bi-envelope'
                colorRed='bg-orange-700'
                btnText='Contactar'
                btnsimbolo='bi-envelope-plus'
                color='border-orange-700'
            />

            <Cardpodcast />
        </section>
    )
}

export default App
