import React from "react"
import { Link } from "gatsby"
import { Container, Heading, Text, Grid, Card } from 'theme-ui'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Heading as="h1">Good fruit</Heading>
      <Grid columns={3} gap={20}>
        <Card>
          <Heading>Fresh</Heading>
          <Text>
            from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit.
          </Text>
        </Card>
        <Card>
            <Heading>Tasty</Heading>
            <Text>
The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.
            </Text>
       </Card>
        <Card>
            <Heading>Organic</Heading>
            <Text>
              Look at that text! Would anyone use that? Can you imagine that, the text of your next webpage?! It’s about making placeholder text great again. That’s what people want, they want placeholder text to be great again. The concept of Lorem Ipsum was created by and for the Chinese in order to make U.S. design jobs non-competitive.
            </Text>
        </Card>
      </Grid>
    </Container>
  </Layout>
)
  
export default IndexPage
