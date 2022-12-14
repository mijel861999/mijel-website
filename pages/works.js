import React from 'react'
import { Heading, Container, Box, SimpleGrid, Text } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Simplitor from '../public/images/works/simplitor.png'
import Devfinder from '../public/images/works/devfinder.png'
import Distracker from '../public/images/works/distracker.png'
import Jdilla from '../public/images/works/jdilla-gallery.png'
import Whysup from '../public/images/works/mensajeria1.png'
import Todo from '../public/images/works/todo.png'
import Pomopapp from '../public/images/works/pomopapp.png'
import Password from '../public/images/works/password.png'
import Ibm from '../public/images/works/ibm.png'

const Works = () => {
  return (
    <Container mt={8}>
      <Heading>Portfolio</Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Box m={4}>
          <WorkGridItem id="ibm" title="IBM Landing Page" thumbnail={Ibm}>
            <Text>Aplicación de pomodoro</Text>
          </WorkGridItem>
        </Box>
        <Box m={4}>
          <WorkGridItem id="pomopapp" title="Pomopapp" thumbnail={Pomopapp}>
            <Text>Aplicación de pomodoro</Text>
          </WorkGridItem>
        </Box>
        <Box m={4}>
          <WorkGridItem
            id="password"
            title="Password Generator"
            thumbnail={Password}
          >
            <Text>Aplicación para generar contraseñas</Text>
          </WorkGridItem>
        </Box>
        <Box m={4}>
          <WorkGridItem id="simplitor" title="Simplitor" thumbnail={Simplitor}>
            <Text>Aplicación para edición de texto plano</Text>
          </WorkGridItem>
        </Box>
        <Box m={4}>
          <WorkGridItem id="devfinder" title="Devfinder" thumbnail={Devfinder}>
            <Text>Aplicación para buscar perfiles de github</Text>
          </WorkGridItem>
        </Box>
        <Box m={4}>
          <WorkGridItem
            id="distracker"
            title="Distracker"
            thumbnail={Distracker}
          >
            <Text>
              Aplicación para organizar e informarte sobre tus álbumes de
              música!
            </Text>
          </WorkGridItem>
        </Box>
        <Box m={4}>
          <WorkGridItem id="jdilla" title="Jdilla" thumbnail={Jdilla}>
            <Text>Landing page sobre J Dilla</Text>
          </WorkGridItem>
        </Box>
        <Box m={4}>
          <WorkGridItem id="todo" title="Todo" thumbnail={Todo}>
            <Text>Todo App</Text>
          </WorkGridItem>
        </Box>
        <Box m={4}>
          <WorkGridItem id="whysup" title="Whysup" thumbnail={Whysup}>
            <Text>Aplicación de mensajería</Text>
          </WorkGridItem>
        </Box>
      </SimpleGrid>
    </Container>
  )
}

export default Works
