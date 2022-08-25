import React from 'react';
import styles from './ItemList.module.css';
import ListGroup  from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { MdExitToApp, MdEdit } from 'react-icons/md';

const handleCheckOut = event => {
  console.log(event.target.id);

};

const ItemList = (item) => (
  <div className={styles.ItemList}>
    <ListGroup variant='flush'>
        <ListGroup.Item>
          <Container>
          <Row className={styles.ListRow}>
            <Col className={styles.NameCol}>
              {item.item.name}
            </Col>
            <Col xs className={styles.ButtonCol} lg="2">
              <Button className={styles.EditBtn}>
                <MdEdit/>
              </Button>
              {'  '}
              <Button id={item.item.rut} className={styles.ExitBtn} onClick={handleCheckOut}>
                <MdExitToApp />
              </Button>
            </Col>
          </Row>
        </Container>
      </ListGroup.Item>
    </ListGroup>
    <hr/>
  </div>
);

ItemList.propTypes = {};

ItemList.defaultProps = {};

export default ItemList;
