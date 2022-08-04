import React from 'react'
import { Container, Badge, Link, List, ListItem, Text } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import { ExternalLinkIcon } from '@chakra-ui/icons'


const Work = () => {
	return( 
		<Container m={3}>
				<Title>
					Jdilla Gallery <Badge>2021</Badge>
				</Title>
				<Text>Landing page sobre J Dilla</Text>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Landing page</Meta>
						<Link href='https://jdilla-gallery.vercel.app/' isExternal>
						https://jdilla-gallery.vercel.app/ <ExternalLinkIcon mx='2px' />
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

				<WorkImage src='/images/works/jdilla-gallery.png' alt='Jdilla Gallery' />
		</Container>
	)
}

export default Work

