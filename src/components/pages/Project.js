import { useState, useEffect, useRef } from 'react'

import styles from './Project.module.css'

import {motion} from 'framer-motion'

import parque from '../../img/parque.svg'

const images = [parque, parque, parque]



function Project(){
    const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    })

    return(
        <div className={styles.App}>
             <motion.div ref={carousel} className={styles.carousel} whileTap={{cursor: "grabbing"}}>
                <motion.div className={styles.inner} drag='x' dragConstraints={{right: 0, left: -width}}>
                    {images.map(image => (
                    <motion.div className={styles.item} key={parque}>
                        <img src={image} alt="Parque"/>
                    </motion.div>
                    ))}
                </motion.div>   
            </motion.div>           

        </div>
    )
        

}

export default Project