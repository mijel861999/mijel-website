import React from 'react'
import { Container, Badge, Link, List, ListItem, Text } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
	return( 
		<Container m={3}>
				<Title>
					Pomopapp <Badge>2022</Badge>
				</Title>
				<Text>Aplicación para hacer pomodoros</Text>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Aplicación web</Meta>
						<Link href='https://pomopapp-arq.vercel.app/' isExternal>
							https://pomopapp-arq.vercel.app/ <ExternalLinkIcon mx='2px' />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<Text display='inline'>Web</Text>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<Text display='inline'>React, Styled components</Text>
					</ListItem>
				</List>

				<WorkImage src='/images/works/pomopapp.png' alt='Pomopapp' />
		</Container>
	)
}

export default Work

