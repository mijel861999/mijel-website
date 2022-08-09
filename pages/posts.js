import React from 'react'
import { Box, Heading, Container, Text, SimpleGrid } from '@chakra-ui/react'
import { PostGridItem } from '../components/grid-item'
import PostN1 from '../public/images/posts/1.png'
import PostN2 from '../public/images/posts/2.png'

const Posts = () => {
	return (
		<Container mt={8}>
			<Heading>Portfolio</Heading>
			<SimpleGrid columns={[1, 1, 2]} gap={ 6 }>
				<Box m={4}>
					<PostGridItem
						link='https://medium.com/@mijel.dev/simplitor-un-bloc-de-notas-minimalista-a6a577d1e407'
						title='Simplitor'
						thumbnail={ PostN1 }
					>
						<Text>Un bloc de notas minimalista</Text>	
					</PostGridItem>
				</Box>
				<Box m={4}>
					<PostGridItem
						link='https://medium.com/@mijel.dev/c%C3%B3mo-crear-un-proyecto-con-next-js-y-tailwind-css-953fdd422317'
						title='Next js y Tailwind'
						thumbnail={ PostN2 }
					>
						<Text>Cómo crear un proyecto con Next.js y Tailwind</Text>	
					</PostGridItem>
				</Box>
			</SimpleGrid>
		</Container>
	)
}

export default Posts

