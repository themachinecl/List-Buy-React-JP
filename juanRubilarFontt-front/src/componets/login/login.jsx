
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const LoginMenu = ({title,subtitle}) => {

return (
        <>
                        <div className='container'>
                        <div className="row">
                        <Card>
                                <Card.Header> { title } </Card.Header>
                                 <Card.Body>
                                  <Card.Title> { subtitle } </Card.Title>
                                <Card.Text>
                                        </Card.Text>
                                        </Card.Body>
                                  </Card>
                        </div>
                        </div>
      </>
    )
}


export default LoginMenu;