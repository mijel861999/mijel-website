import NextLink from 'next/link'
import {
	Container,
	Box,
	Link,
	Stack,
	Heading,
	Flex,
	Menu,
	MenuItem,
	MenuList,
	MenuButton,
	IconButton,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeButtonToggle from '../components/theme-button-toggle'

const LinkItem = ({ href, children }) => {
	//const active = path === href
	//const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')

	return (
		<NextLink href={href}>
			<Link
				p={2}
			>
				{ children }
			</Link>
		</NextLink>
	)
}

const Navbar = props => {
	const { path } = props

	return (
		<Box
			position='fixed'
			as='nav'
			w='100%'
			style={{ backdropFilter: 'blur(10px)' }}
			zIndex={1}
		>
			<Container display='flex' p={2} maxW='container.md' wrap='wrap' align='center' jusitfy='space-between'>
				<Flex align='center' mr={5}>
					<ThemeButtonToggle />
					<Heading as='h1' size='lg' letterSpacing={'tighter'} ml={4}>
						<NextLink href='/'>
							Mijel
						</NextLink>
					</Heading>
				</Flex>

				<Stack
					direction={{ base: 'column', md: 'row' }}
					display={{ base: 'none', md: 'flex' }}
					width={{ base: 'full', md: 'auto' }}
					alignItems='center'
					flexGrow='center'
					mt={{ base: 4, nmd: 0 }}
				>
					<LinkItem href='/works' path={path}>
						Portfolio
					</LinkItem>	
					<LinkItem href='/posts' path={path}>
						Posts
					</LinkItem>
				</Stack>

				<Box flex={1} align='right'>
					<Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
						<Menu>
							<MenuButton
								as={IconButton}
								icon={<HamburgerIcon />}
								variant='outline'
								arial-label='options'
							/>
							<MenuList>
								<NextLink href='/' passHref>
									<MenuItem as={Link}>About</MenuItem>
								</NextLink>
								<NextLink href='/works' passHref>
									<MenuItem as={Link}>Portfolio</MenuItem>
								</NextLink>
								<NextLink href='/posts' passHref>
									<MenuItem as={Link}>Posts</MenuItem>
								</NextLink>
							</MenuList>
						</Menu>	
					</Box>
				</Box>
			</Container>
		</Box>
	)
}

export default Navbar

