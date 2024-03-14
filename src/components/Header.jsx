import { Flex, Image, useColorMode } from "@chakra-ui/react"

const Header = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Flex justifyContent={"center"} mt={6} mb={12}>
      <Image
        cursor={"pointer"}
        alt="mode"
        w={6}
        src={colorMode === 'dark'? "/src/assets/light-mode.png": "/src/assets/dark-mode.png"}
        onClick={toggleColorMode}
      />
    </Flex>
  )
}

export default Header