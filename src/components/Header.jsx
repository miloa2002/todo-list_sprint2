import { useState, useEffect } from 'react'
import Form from './Form'
import bgLight from '../assets/bg-desktop-light.jpg'
import bgDark from '../assets/bg-desktop-dark.jpg'
import iconSun from '../assets/icon-sun.svg'
import iconMoon from '../assets/icon-moon.svg'

const Header = () => {

    const [cambioImg, setCambioImg] = useState(false)

    useEffect(() => {
        if (cambioImg) {
            document.body.style.backgroundColor = "hsl(235, 21%, 11%)";
            return;
        }
        document.body.style.backgroundColor = "hsl(0, 0%, 98%)"
    }, [cambioImg])

    const handleClick = () => {
        if (!cambioImg) {
            setCambioImg(true)
            return;
        }
        setCambioImg(false)
    }



    return (
        <div className='relative'>
            <div>
                <img
                    className='hero h-80 w-screen'
                    src={cambioImg ? bgDark : bgLight}
                    alt="hero"
                />
            </div>
            <div className='w-1/2 flex items-center justify-between absolute top-20 right-0 left-0 mx-auto'>
                <h1 className='font-bold text-5xl uppercase text-white tracking-widest'>Todo</h1>
                <img
                    onClick={handleClick}
                    src={cambioImg ? iconSun : iconMoon}
                    alt="icono sol"
                    className='cursor-pointer'
                />
            </div>
                <Form cambioImg={cambioImg}/>
        </div>
    )
}

export default Header
