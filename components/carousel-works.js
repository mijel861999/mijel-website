import { useState, useEffect } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

const hola = ['Hello', 'Hola', 'привет', 'Konnichiwa', 'Napaykuyki ']

const CarouselWorks = () => {
	const [carouselWords, setCarouselWords] = useState(hola)
	const [counter, setCounter] = useState(0)

	useEffect(()=> {
		const interval = setInterval(() => {
			setCounter(count => (count < 4) ? count + 1 : 0)
		}, 1500)

		return () => clearInterval(interval)
	}, [counter, setCounter])

	return (
			<motion.div
				key={counter}
				initial={{ x: '-5%' }}
				animate={{ x: '0%' }}
				style={{
					marginTop: '20px',
					marginBottom: '10px'
				}}
			>
				<Text fontSize='lg'>{ carouselWords[counter] }</Text>
		</motion.div>
	)
}

export default CarouselWorks

