import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import SearchBox from './SearchBox';

const Header = ({ searchValue, setSearchValue }) => {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="#home"><h2>🍿Buddy Movie ⚛️</h2></Navbar.Brand>
            {/* SearchBox Component */}
            <SearchBox 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
        </Container>
    </Navbar>
    </>
  )
}
export default Header