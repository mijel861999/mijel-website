import React from 'react'
import { Container, Badge, Link, List, ListItem, Text } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
	return( 
		<Container m={3}>
				<Title>
					Whysup <Badge>2021</Badge>
				</Title>
				<Text>Landing page sobre J Dilla</Text>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Aplicación de mensajería</Meta>
						<Link href='https://github.com/mijel861999/whysup' isExternal>
						https://github.com/mijel861999/whysup/ <ExternalLinkIcon mx='2px' />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<Text display='inline'>Web</Text>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<Text display='inline'>Socket.IO, React, Node, Express, Syled Components, React Router, Redux</Text>
					</ListItem>
				</List>

				<WorkImage src='/images/works/mensajeria1.png' alt='Whysup' />
		</Container>
	)
}

export default Work

