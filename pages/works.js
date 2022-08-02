import React from 'react'
import { Container, Heading, SimpleGrid, Section, Text, useColorModeValue } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/articles'
import Simplitor from '../public/images/works/simplitor.png'

const Works = () => {
	return (
		<Layout>
			<Container>
				<Heading as="h3" fontSize={20} mb={4}>
					Trabajos
				</Heading>

				<SimpleGrid columns={[1, 1, 2]} gap={ 6 }>
					<Section>
							<Text color={useColorModeValue('white', 'black')}>Aplicación de organización de albumes de música</Text>
					</Section>
				</SimpleGrid>
			</Container>	
		</Layout>
	)
}

export default Works

