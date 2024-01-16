import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const FormPinjam = ({nama_pinjam, nama_buku, tgl_keluar, tgl_masuk, handleChange, handleSubmit, id}) => {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <h4>{id ? "Edit Data" : "Tambah Data"}</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="nama_pinjam">
              <Form.Label>Nama Peminjam</Form.Label>
              <Form.Control type="text" name="nama_pinjam" value={nama_pinjam} onChange={(event) => handleChange(event)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="nama_buku">
              <Form.Label>Nama Buku</Form.Label>
              <Form.Control type="text" name="nama_buku" value={nama_buku} onChange={(event) => handleChange(event)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="tgl_keluar">
              <Form.Label>Tangga Keluar</Form.Label>
              <Form.Control type="date" name="tgl_keluar" value={tgl_keluar} onChange={(event) => handleChange(event)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="tgl_masuk">
              <Form.Label>Tanggal Masuk</Form.Label>
              <Form.Control type="date" name="tgl_masuk" value={tgl_masuk} onChange={(event) => handleChange(event)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default FormPinjam;