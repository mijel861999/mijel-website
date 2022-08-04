import React from 'react'
import { Container, Badge, Link, List, ListItem, Text } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import { ExternalLinkIcon } from '@chakra-ui/icons'


const Work = () => {
	return( 
		<Container m={3}>
				<Title>
					Distracker <Badge>2022</Badge>
				</Title>
				<Text>Aplicación para organizar e informarte sobre tus álbumes de música!</Text>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Aplicación web</Meta>
						<Link href='https://distracker.vercel.app/' isExternal>
						https://distracker.vercel.app/ <ExternalLinkIcon mx='2px' />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<Text display='inline'>Web</Text>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<Text display='inline'>React, Chakra-UI, Framer Motion</Text>
					</ListItem>
				</List>

				<WorkImage src='/images/works/distracker.png' alt='Distracker' />
		</Container>
	)
}

export default Work

