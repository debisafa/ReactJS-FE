import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const Formulir = ({nama_pinjam, nama_buku, tgl_keluar, tgl_masuk, author, deskripsi, harga, handleChange, handleSubmit, id}) => {
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
          <Row>
          <Col>
          <Form.Group className="mb-3" controlId="tgl_keluar">
            <Form.Label>Tanggal Keluar</Form.Label>
            <Form.Control type="date" name="tgl_keluar" value={tgl_keluar} onChange={(event) => handleChange(event)} />
          </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="tgl_masuk">
            <Form.Label>Tanggal Masuk</Form.Label>
            <Form.Control type="date" name="tgl_masuk" value={tgl_masuk} onChange={(event) => handleChange(event)} />
          </Form.Group>
          </Col>
          </Row>
          <Form.Group className="mb-3" controlId="nama_buku">
            <Form.Label>Nama Buku</Form.Label>
            <Form.Control type="text" name="nama_buku" value={nama_buku} onChange={(event) => handleChange(event)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="author">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" name="author" value={author} onChange={(event) => handleChange(event)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="deskripsi">
            <Form.Label>Deskripsi</Form.Label>
            <Form.Control as="textarea" rows="3" name="deskripsi" value={deskripsi} onChange={(event) => handleChange(event)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="harga">
            <Form.Label>Harga Buku</Form.Label>
            <Form.Control type="number" name="harga" value={harga} onChange={(event) => handleChange(event)} />
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

export default Formulir;