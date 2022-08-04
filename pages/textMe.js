import React from 'react'
import { Container, FormControl, FormLabel, Input, Heading, Textarea, Button } from '@chakra-ui/react'

const TextMe = () => {
	return (
		<Container mt={6}>
				<Heading align='center'>Trabajemos juntos!</Heading>	
				<FormControl mt={4} align='center'>
					<form action='mailto:mijel.dev@gmail.com' method='POST'>
						<FormLabel>Tu Nombre</FormLabel>
						<Input type='text' name='name' placeholder='Juanito...' />
						<FormLabel mt={4}>Email</FormLabel>
						<Input type='email' name='email' placeholder='example@example.example' />
						<FormLabel mt={4}>Número</FormLabel>
						<Input type='number' name='phone' placeholder='Tu número' />
						<FormLabel>Mensaje</FormLabel>
						<Textarea type='text' name='message' placeholder='Déjame un mensaje...' h='200px' />
						<button>
							<Button m={5}>Enviar</Button>
						</button>
					</form>	
				</FormControl>
		</Container>
	)
}

export default TextMe
