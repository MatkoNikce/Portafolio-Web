import { } from 'react'
import './App.css'
import { Heading, Text, Box, Image, Divider, Button, ChakraProvider } from '@chakra-ui/react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { ArrowUpIcon } from '@chakra-ui/icons'
import AppForm from './Form/AppForm'


function App() {

  return (
    <ChakraProvider>
      <div className="App" >

        <Box bg='#1D1D1D' color='white' p={8}>



          {/* NAVBAR */}

          <Flex justifyContent={'space-between'} marginBottom={100} id='inicio'>
            <Spacer>
              <Breadcrumb fontSize={10} separator=''>
                <Spacer>

                  <BreadcrumbItem margin={5} >
                    <BreadcrumbLink href='#acercaDE'>ACERCA DE</BreadcrumbLink>
                  </BreadcrumbItem>

                </Spacer>


                <Spacer />

                <Flex direction={'column'}>
                  <Spacer>
                    <BreadcrumbItem >
                      <BreadcrumbLink href='#educacion'>EDUCACIÓN</BreadcrumbLink>
                    </BreadcrumbItem>
                  </Spacer>

                  <Spacer>
                    <BreadcrumbItem>
                      <BreadcrumbLink href='#habilidades'>HABILIDADES</BreadcrumbLink>
                    </BreadcrumbItem>
                  </Spacer>

                  <Spacer>
                    <BreadcrumbItem>
                      <BreadcrumbLink href='#testimonios'>TESTIMONIOS</BreadcrumbLink>
                    </BreadcrumbItem>
                  </Spacer>

                  <Spacer>
                    <BreadcrumbItem>
                      <BreadcrumbLink href='#contacto'>CONTACTO</BreadcrumbLink>
                    </BreadcrumbItem>
                  </Spacer>
                </Flex>

                <Spacer />

                <Spacer>
                  <BreadcrumbItem m={5}>
                    <BreadcrumbLink href='#'>EN/ES</BreadcrumbLink>
                  </BreadcrumbItem>
                </Spacer>

              </Breadcrumb>
            </Spacer>
          </Flex>


          {/* TITULO */}
          <Flex direction={'column'}>
            <Spacer>
              <Flex direction={'row'}>
                <Spacer>
                  <Heading fontSize={150} marginLeft={10} id='acercaDe'>MATK</Heading>
                </Spacer>
                <Spacer>
                  <Image src='/src/assets/img/LETS TALK.png' alt='Matko' maxW={'2xl'} marginRight={0} />
                </Spacer>
                <Spacer>
                  <Text w={300} fontSize={13}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam nisi cupiditate iste porro tenetur! Aut, distinctio saepe possimus alias sit veritatis repellat deleniti nisi neque eligendi, exercitationem aspernatur praesentium impedit!</Text>
                </Spacer>
              </Flex>
            </Spacer>
            <Heading fontSize={150} marginLeft={10} >NIKCEVICH</Heading>
          </Flex>

          {/* EDUCACION */}

          <Flex justifyContent={'space-around'} marginBottom={20} >
            <Spacer fontSize={13} color={'#434343'}>
              <Text id='educacion'>Educación</Text>
            </Spacer>
            <Spacer>
              <Text w={400} fontSize={20}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam in et vitae officia saepe vel alias distinctio laborum delectus quia ipsam, dolores aliquid reiciendis! Repudiandae provident vitae amet voluptatum debitis!
              </Text>
            </Spacer>
          </Flex>

          <Divider borderColor={'#434343'} />


          <Flex marginBottom={10}>
            <Spacer>Colegio (2013/2018)</Spacer>
            <Spacer>Dr. Carlos Primo López Piacentini - Orientación en Gestión de Empresas y Economía</Spacer>
          </Flex>

          <Divider borderColor={'#434343'} />

          <Flex flexDirection={'row'} justifyContent={'center'}>
            <Spacer>Cursos completados</Spacer>
            <Spacer>
              <Flex flexDirection={'column'} >
                <Spacer mt={1} mb={1}>UTN Front-End</Spacer>
                <Divider borderColor={'#434343'} />
                <Spacer mt={1} mb={1}>Henry Coding Challenge</Spacer>
              </Flex>
            </Spacer>
          </Flex>

          <Divider borderColor={'#434343'} />

          <Flex flexDirection={'row'} justifyContent={'center'} mb={10}>
            <Spacer>Auto-educación</Spacer>
            <Spacer>
              <Flex flexDirection={'column'} >
                <Spacer mt={1} mb={1}>Henry Prep-Course</Spacer>
                <Divider borderColor={'#434343'} />
                <Spacer mt={1} mb={1}>"Soy Dalto" Curso de Javascript Junior</Spacer>
              </Flex>
            </Spacer>
          </Flex>

          {/*  ESPECIALIDADES */}
          <Heading fontSize={150} id='habilidades'>HABILIDADES</Heading>
          <Flex justifyContent={'space-between'}>
            <Flex flexDirection={'column'} w={500}>
              <Text color={'#434343'}>Habilidades blandas</Text>
              <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique voluptatum totam vitae necessitatibus debitis unde, quod nemo, non ut provident dicta? </Text>
            </Flex>

            <Flex flexDirection={'column'}>
              <Text color={'#434343'}>Idiomas</Text>
              <Text>Español - Nativo</Text>
              <Text>Inglés - B2</Text>
              <Text>Portugues - C2</Text>
            </Flex>

            <Flex flexDirection={'column'}>
              <Text color={'#434343'}>Tecnologías</Text>
              <Text>HTML/HTML5</Text>
              <Text>CSS</Text>
              <Text>Javascript/React.js</Text>
            </Flex>
          </Flex>
          <Image src='/src/assets/img/LETS TALK.png' alt='Matko' maxW={'2xl'}/>

          {/* CONTACTO */}

          <Flex flexDirection={'column'} alignItems={'center'}>

            <Text color={'#434343'} id='contacto'>Contáctame</Text>
            <Heading fontSize={50} mb={10}>MATKONIKCE@GMAIL.COM</Heading>

          </Flex>

          <AppForm/>

         


          {/* FOOTER */}

          <Flex>


            <Spacer>

              <Flex flexDirection={'column'}>
                <Spacer>

                  <Text>Argentina</Text>
                </Spacer>
                <Spacer>

                  <Text>+54362415075371</Text>
                </Spacer>

              </Flex>
            </Spacer>

            <Spacer>
              <Flex >
                <Spacer >

                  <Button>Discord</Button>
                  <Button>GitHub</Button>
                  <Button>LinkedIn</Button>

                </Spacer>
              </Flex>
            </Spacer>

            <Spacer>

              <Flex flexDirection={'column'}  justifyContent={'flex-end'} >

                <Spacer>
                  <Breadcrumb separator=''>
                    <BreadcrumbItem >
                      <BreadcrumbLink href='#inicio' >Inicio de página</BreadcrumbLink>
                    </BreadcrumbItem>
                    <ArrowUpIcon />
                  </Breadcrumb>
                </Spacer>
                <Spacer>
                  <Text>All Rights Reserved</Text>
                </Spacer>

              </Flex>
            </Spacer>

          </Flex>

        </Box>

      </div>
    </ChakraProvider>
  )
}

export default App
