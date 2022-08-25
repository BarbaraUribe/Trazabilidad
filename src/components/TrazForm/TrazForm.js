import React, { useState } from 'react';
import students from './../../assets/students.json';

import styles from './TrazForm.module.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Typeahead } from 'react-bootstrap-typeahead';
import { MdAdd } from 'react-icons/md';

export default function TrazForm() {

  const [student, setStudent] = useState([]);

  const handleSubmit = event => {
    // 👇️ prevent page refresh
    event.preventDefault();

    console.log(event.target[0].value); //rut
    console.log(event.target[2].value); //nombre
    console.log(event.target[4].value); //teléfono

  };

  return (
    <><Card className={styles.TrazForm}>
      <Card.Title className="CardTitleForm"> Trazabilidad </Card.Title>
      <Card.Body className="CardBody">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Typeahead
              id="rut"
              key="rut"
              labelKey="rut"
              onChange={setStudent}
              options={students}
              placeholder="Rut"
              selected={student}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Typeahead
              id="name"
              key="name"
              labelKey="name"
              onChange={setStudent}
              options={students}
              placeholder="Nombre"
              selected={student}
            />
          </Form.Group>
                    
          <Form.Group className="mb-3">
            <Typeahead
              id="phone"
              key="phone"
              labelKey="email" //Cambiar a phone
              onChange={setStudent}
              options={students}
              placeholder="Teléfono"
              selected={student}
            />
          </Form.Group>

          <Button className="PrimaryBtn" variant="primary" type="submit">
            <MdAdd className="Plus"/>
             Agregar        
          </Button>
        </Form>
      </Card.Body>
    </Card></>
  );
}
