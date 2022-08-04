import React from 'react'
import { Container, Badge, Link, List, ListItem, Text } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
	return( 
		<Container m={3}>
				<Title>
					Devfinder <Badge>2020</Badge>
				</Title>
				<Text>Aplicación web para buscar perfiles de github.</Text>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Aplicación web</Meta>
						<Link href='https://github-search-mijel861999.vercel.app/' isExternal>
						https://github-search-zeta-liart.vercel.app/ <ExternalLinkIcon mx='2px' />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<Text display='inline'>Web</Text>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<Text display='inline'>JS, CSS, HTML</Text>
					</ListItem>
				</List>

				<WorkImage src='/images/works/devfinder.png' alt='Devfinder' />
		</Container>
	)
}

export default Work

