import UserHeader from "../components/UserHeader"
import UserPost from "../components/UserPost"

const UserPage = () => {
    return (
        <>
            <UserHeader /> 
            <UserPost likes={1200} replies={243} postTitle="Lets talk avout things" postImage="/src/assets/example.jpeg"/>
            <UserPost likes={130} replies={64} postTitle="Lets call someone things"  />
            <UserPost likes={31} replies={53} postTitle="Lets brokes son things" postImage="/src/assets/example.jpeg"/>
        </>
    )
}

export default UserPage