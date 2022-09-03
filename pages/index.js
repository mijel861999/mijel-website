import { Image, Icon, Container, Button, Heading, Box, useColorModeValue, SimpleGrid, Link } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import NextLink from 'next/link'
import CarouselWorks from '../components/carousel-works'
import PostWorkCard from '../components/post-work-card'
import {
	IoLogoTwitter,
	IoLogoInstagram,
	IoLogoGithub
} from 'react-icons/io5'

const Page = () => {

	return (
		<Container mt={4}>
			 <motion.div
				initial={{ x: -10, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.2 }}
			>
				<CarouselWorks />
			</motion.div>
			<Heading as='h2' fontSize='2xl'>Soy Mijel</Heading>
			<Box
				bg={useColorModeValue('gray.600', 'gray.900')}
				color={useColorModeValue('gray.200', 'gray.50')}
				m={5}
				p={4}
				borderRadius='lg'
				textAlign='center'
				lineHeight={2}
			>
				<b>Este es mi portafolio y blog personal, espero que te guste!</b>
				<br/>
				Soy un ingeniero de sistemas que le apasiona los proyectos, la música y el baloncesto.
			</Box>

			<Box
					flexShrink={0}
					mt={{ base: 4, md: 0 }}
					ml={{ md: 6 }}
					align="center"
				>
					<Image 
						borderColor="gray.900"
						borderWidth={2}
						borderStyle="solid"
						borderRadius='lg'
						maxWidth="150px"
						display="inline-block"
						src="/images/perfil.jpg"
						alt="Profile Image"
					/>
			</Box>
			
			<Box m={5} textAlign='center'>
				<Link href='https://drive.google.com/file/d/1GwzknlX5yv9ztmhZ71vjN6DEHP13LW2-/view?usp=sharing' isExternal>
					<Button
						bg={useColorModeValue('#214d34', '#7e1b24')}
						color={useColorModeValue('gray.200', 'gray.50')}
						m={2}
					>
						Descarga mi C.V
					</Button>
				</Link>	
				<NextLink href='/textMe'>
					<Link
						m={2}
						fontWeight='bold'
					>
						<Button
							border='1px solid'
						>
							Trabaja conmigo
						</Button>
					</Link>
				</NextLink>	
			</Box>

			<SimpleGrid w='100%'  alignItems='center' justify='center' textAlign='center' columns={[1, 1, 2]} gap={10}>
				<PostWorkCard
					heading='Lastes works'
					title='Pomopapp'
					image='/images/works/pomopapp.png'
					link='https://pomopapp-arq.vercel.app/'
				/>
				<PostWorkCard
					heading='Lastes Works'
					title='Password Generator'
					image='/images/works/password.png'
					link='https://password-generator-mijel861999.vercel.app/'
				/>
				
			</SimpleGrid>

			<SimpleGrid w='100%'  alignItems='center' justify='center' textAlign='center' columns={[1, 1, 2]} gap={10}>
				<PostWorkCard
					heading='Lastes posts'
					title='Simplitor'
					image='/images/posts/1.png'
					link='https://medium.com/@mijel.dev/simplitor-un-bloc-de-notas-minimalista-a6a577d1e407'
				/>
				<PostWorkCard
					heading='Lastes posts'
					title='Tailwind y Next js'
					image='/images/posts/2.png'
					link='https://medium.com/@mijel.dev/c%C3%B3mo-crear-un-proyecto-con-next-js-y-tailwind-css-953fdd422317'
				/>
			</SimpleGrid>

			<Heading mt={4} as='h2' fontSize='3xl'>Social Media</Heading>

			<SimpleGrid w='100%' columns={[1, 1, 1]} mt={4}>
				<Link href='https://github.com/mijel861999' isExternal>
					<Button fontSize='lg' variant='ghost' leftIcon={<Icon as={IoLogoGithub} />}>
						@mijel861999
					</Button>
				</Link>
				<Link href='https://www.instagram.com/mijel.dev/' isExternal>
					<Button fontSize='lg' variant='ghost' leftIcon={<Icon as={IoLogoInstagram} />}>
						@mijel.dev
					</Button>
				</Link>
				<Link href='https://twitter.com/MijelDev' isExternal>
					<Button fontSize='lg' variant='ghost' leftIcon={<Icon as={IoLogoTwitter} />}>
						@MijelDev
					</Button>
				</Link>
			</SimpleGrid>
		</Container>
	)
}

export default Page

