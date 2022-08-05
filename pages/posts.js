import React from 'react'
import { Box, Heading, Container, Text, SimpleGrid } from '@chakra-ui/react'
import { PostGridItem } from '../components/grid-item'
import PostN1 from '../public/images/posts/1.png'

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
			</SimpleGrid>
		</Container>
	)
}

export default Posts

