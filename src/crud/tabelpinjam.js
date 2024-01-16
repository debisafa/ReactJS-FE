import React from "react";
import { Table } from "react-bootstrap";

const TabelPinjam = ({pinjams, editData, hapusData}) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nama Peminjam</th>
                    <th>Nama Buku</th>
                    <th>Tanggal Keluar</th>
                    <th>Tanggal Masuk</th>
                </tr>
            </thead>
            <tbody>
            {pinjams.map((pinjam, index) => {
                return(
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{pinjam.nama_pinjam}</td>
                        <td>{pinjam.nama_buku}</td>
                        <td>{pinjam.tgl_keluar}</td>
                        <td>{pinjam.tgl_masuk}</td>
                        <td>
                            <button className="btn btn-warning mr-1" onClick={() => editData(pinjam.id)}>Edit</button>
                            <button className="btn btn-danger mr-1" onClick={() => hapusData(pinjam.id)}>Hapus</button>
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </Table>
    )
}

export default TabelPinjam