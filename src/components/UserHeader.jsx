import { Avatar, Box, Flex,Menu, MenuButton, MenuItem, MenuList, Portal, Text, VStack, useToast } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import {BsLinkedin, BsFilePdf} from 'react-icons/bs'
import {CgMoreO} from 'react-icons/cg'

const UserHeader = () => {
    const toast = useToast()
    const copyLink = () => {
        const currentUrl = window.location.href
        navigator.clipboard.writeText(currentUrl).then(() => (
            toast({
                title:'Profile link copied',
                status: 'success',
                duration: 2000,
                isClosable:true
            })
        ))
    }
    return (
        <VStack gap={4} alignContent={'start'}>
            <Flex justifyContent={'space-between'} w={'full'}>
                <Box>
                    <Text fontSize={'2xl'} fontWeight={'bold'}>
                        User Names
                    </Text>
                    <Flex gap={2} alignItems={'center'}>
                        <Text fontSize={'sm'}>username</Text>
                        <Text 
                            fontSize={'xs'}
                            bg={'gray.dark'}
                            color={'gray.light'}
                            p={1}
                            borderRadius={'full'}
                            >
                                miraidev.com
                        </Text>
                    </Flex>
                    
                </Box>
                <Box>
                    <Avatar
                        name="User"
                        src="/src/assets/light-mode.png"
                        size={'x1'}
                    />
                </Box>
            </Flex>
            <Text>Bioagraphy and more</Text>
            <Flex w={'full'} justifyContent={'space-between'}>
                <Flex gap={2} alignItems={'center'}>
                    <Text color={'gray.light'}>3.2 followers</Text>
                    <Box w={1} h={1} bg={'gray.light'} borderRadius={'full'}></Box>
                    <Link color={'gray.light'}>linktouweb.com</Link>
                </Flex>
                <Flex>
                    <Box className="icon-container">
                        <BsLinkedin size={24} cursor={'pointer'}/>
                    </Box>
                    <Box className="icon-container">
                        <BsFilePdf size={24} cursor={'pointer'}/>
                    </Box>
                    <Box className="icon-container">
                        <Menu>
                            <MenuButton>
                                <CgMoreO size={24} cursor={'pointer'}/>
                            </MenuButton>
                            <Portal>
                                <MenuList bg={'gray.dark'}>
                                    <MenuItem bg={'gray.dark'} onClick={copyLink}>Copy link</MenuItem>
                                </MenuList>
                            </Portal>
                        </Menu>
                    </Box>
                </Flex>
            </Flex>
            <Flex w={'full'}>
                <Flex flex={1} borderBottom={'1.5px solid white'} justifyContent={'center'} pb="3" cursor={'pointer'}>
                    <Text fontWeight={'bold'}>Threads</Text>
                </Flex>
                <Flex flex={1} borderBottom={'1px solid gray'} justifyContent={'center'} pb="3" cursor={'pointer'} color={'gray.light'}>
                    <Text fontWeight={'bold'}>Replieds</Text>
                </Flex>
            </Flex>
        </VStack>
    )
}

export default UserHeader