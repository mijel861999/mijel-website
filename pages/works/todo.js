import React from 'react'
import { Container, Badge, Link, List, ListItem, Text } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
	return( 
		<Container m={3}>
				<Title>
					Todo <Badge>2022</Badge>
				</Title>
				<Text>Todo App</Text>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Aplicación de tareas</Meta>
						<Link href='https://github.com/mijel861999/react-native-todo/' isExternal>
						https://github.com/mijel861999/react-native-todo/ <ExternalLinkIcon mx='2px' />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<Text display='inline'>Ios, Android</Text>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<Text display='inline'>React Native</Text>
					</ListItem>
				</List>

				<WorkImage src='/images/works/todo.png' alt='Todo' />
		</Container>
	)
}

export default Work

