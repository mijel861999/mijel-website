import { Box, Heading, Text, Link, Image } from '@chakra-ui/react'

const PostWorkCard = ({ heading='Last Work', title, image, link }) => {

	return (
		<Box
			w='100%'
			display='flex'
			flexDirection='column'
			justify='center'
			alignItems='center'
		>
			<Heading m={3}>{ heading }</Heading>
			<Box
				w='200px'
				h='200px'	
			>
				<Image 
					border='.5px solid grey'
					borderRadius='lg'
					w='200px'
					h='150px'
					borderStyle="solid"
					display="inline-block"
					src={ image }
					alt="Profile Image"
				/>	
				<Heading as='h3' fontSize='lg' mt={2}><Link href={link} isExternal>{title}</Link></Heading>	
			</Box>
		</Box>
	)
}

export default PostWorkCard

