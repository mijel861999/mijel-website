import React from 'react'
import { Container, Badge, Link, List, ListItem, Text } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
  return (
    <Container m={3}>
      <Title>
        IBM - Landing Page <Badge>2022</Badge>
      </Title>
      <Text>Una landing page inspirada en las laptops thinkpad</Text>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Landing Page</Meta>
          <Link href="https://ibm-landing-page-uvq1.vercel.app/" isExternal>
            https://ibm-landing-page-uvq1.vercel.app/{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <Text display="inline">Web</Text>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <Text display="inline">React, Tailwindcss, NextJs</Text>
        </ListItem>
      </List>

      <WorkImage src="/images/works/ibm.png" alt="Ibm" />
    </Container>
  )
}

export default Work
