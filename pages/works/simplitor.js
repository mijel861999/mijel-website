import React from 'react'
import { Container, Badge, Link, List, ListItem, Text } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
	return( 
		<Container m={3}>
				<Title>
					Simplitor <Badge>2022</Badge>
				</Title>
				<Text>Aplicación para edición de texto plano.</Text>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Aplicación de escritorio</Meta>
						<Link href='https://github.com/mijel861999/simplitor' isExternal>
							https://github.com/mijel861999/simplitor/ <ExternalLinkIcon mx='2px' />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<Text display='inline'>PC</Text>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<Text display='inline'>Electron</Text>
					</ListItem>
				</List>

				<WorkImage src='/images/works/simplitor.png' alt='Simplitor' />
				<WorkImage src='/images/works/simplitor-new.png' alt='Simplitor' />
				<WorkImage src='/images/works/simplitorNote.png' alt='Simplitor' />
		</Container>
	)
}

export default Work

