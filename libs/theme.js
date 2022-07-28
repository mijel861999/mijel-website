import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
	global: props => ({
		body: {
			bg: mode('white', '#1A2601')(props)
		}
	})
}

const fonts = {
	heading: "'Inter'",
	body: "'Inter'"
}

const components = {
	Heading: {
		variants: {
			'section-title': {
				textDecoration: 'underline',
				fontSize: 20,
				textUnderLineOffset: 6,
				textDecorationColor: 'black',
				textDecorationThickness: 4,
				marginTop: 3,
				marginBottom: 4
			}
		}
	}
}

const config = {
	initialColorMode: 'dark',
	useSystemColorMode: true
}

const theme = extendTheme({
	config,
	styles,
	components,
	fonts
})

export default theme
