import React from 'react';
import { useState } from 'react';
//import PropTypes from 'prop-types';
import ItemList from '../ItemList/ItemList';

import styles from './TrazList.module.css';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


import { MdSearch } from 'react-icons/md';

import students_json from './../../assets/students.json';

const getFiltered = (query, students) => {
    if(!query){
      return students;
    }
    return students.filter(student => student.name.toLowerCase().includes(query.toLowerCase()));
}

function checkNull(attendances) {
  attendances.forEach(
    function(attendance){
      if (attendance.checkout != null) {
        return false;
      }
    }
  );
  return true;
}

export default function TrazList(){

  const [query, setQuery] = useState("");

  const students = students_json;

  let shown = [];

  students.forEach(function(student){
    if(checkNull(student.attendance)){
      shown.push(student);
    }
  });

  const filtered = getFiltered(query, shown);

  return (
    <><Card className={styles.TrazList}>
      <Card.Title className="CardTitle">
        <Container>
          <Row>
            <Col>
              Asistentes
            </Col>
            <Col className={styles.SearchCol}>
              <InputGroup onChange={e => setQuery(e.target.value)} className="mb-3">
                <InputGroup.Text><MdSearch/></InputGroup.Text>
                <Form.Control
                  placeholder="Búsqueda"
                  aria-label="Búsqueda"
                />
              </InputGroup>
            </Col> 
          </Row>
        </Container>
      </Card.Title>
      <Card.Body className="AttendanceCardBody">
          {filtered.map(value => 
          <ItemList key={value.rut} item={value}></ItemList>
          )}
      </Card.Body>
    </Card></>
  );
}
