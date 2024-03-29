import { Button, Container } from "@chakra-ui/react"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import UserPage from './pages/UserPage'
import PostPage from "./pages/PostPage"
import Header from "./components/Header"

const App = () => {
  return ( 
    <Container maxn="620px">
      <Header />
      <Routes>
        <Route path="/:username" element={<UserPage />}/>
        <Route path="/:username/post/:pid" element={<PostPage />}/>
      </Routes>
    </Container>
  )
}

export default App
