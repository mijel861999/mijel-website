import  { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Font from '../components/font'
import theme from '../libs/theme'

const Website = ({ Component, pageProps, router }) => {
	return (
		<ChakraProvider theme={theme}>
			<Font />
			<Layout router={router}>
				<Component {...pageProps} key={router.route} />
			</Layout>
		</ChakraProvider>
	)
}

export default Website

