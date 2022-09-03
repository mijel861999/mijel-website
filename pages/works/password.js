import React from 'react'
import { Container, Badge, Link, List, ListItem, Text } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
	return( 
		<Container m={3}>
				<Title>
					Password Generator <Badge>2022</Badge>
				</Title>
				<Text>Aplicación para generar contraseñas seguras.</Text>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Aplicación web</Meta>
						<Link href='https://password-generator-mijel861999.vercel.app/' isExternal>
							https://password-generator-mijel861999.vercel.app/ <ExternalLinkIcon mx='2px' />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<Text display='inline'>Web</Text>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<Text display='inline'>Vanilla Js</Text>
					</ListItem>
				</List>

				<WorkImage src='/images/works/password.png' alt='Simplitor' />
		</Container>
	)
}

export default Work

