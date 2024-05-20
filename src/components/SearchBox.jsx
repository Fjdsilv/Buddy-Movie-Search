import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SearchBox = ({ searchValue, setSearchValue }) => {
  return (
    <Form>
        <Row>
          <Col xs="auto">
            <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                valeu={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                />
            </Col>
        </Row>
    </Form>
  )
}
export default SearchBox