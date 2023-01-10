import { useState, useEffect, useRef } from 'react'
import {motion} from 'framer-motion'


import f1 from '../../assets/img/arts/1.jpg'
import f2 from '../../assets/img/arts/2.jpg'
import f3 from '../../assets/img/arts/3.png'
import f4 from '../../assets/img/arts/4.jpg'
const imgs = [f1, f2, f3,f4];

function Galeria({nome}){

    const  slide = useRef()
    const  [width, setWidth] = useState(0)
    useEffect(() =>{
        setWidth(slide.current?.scrollWidth - slide.current?.offsetWidth)
    }, [])

    return (
        <section className="galeria">
          <h1>A {nome} é a melhor, Veja o porque !</h1>
            <div className='content2'>
              <motion.div ref={slide} className='slide2' whileTap={{cursor: "grabbing" }}>
                  <motion.div className='inner2' drag='x' dragConstraints={{right: 0, left: -width}}>
                  {imgs.map(image => (
                          <img src={image} className='img2' alt="None" />
                      ))}
                  </motion.div>
              </motion.div>
            </div>
        </section>
    )
}

export default Galeria

  