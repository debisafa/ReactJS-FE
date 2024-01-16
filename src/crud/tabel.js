import React from "react";
import { Table } from "react-bootstrap";

const Tabel = ({bukus, editData, hapusData}) => {
    return (
        <Table striped bordered hover >
            <thead className="table-info">
                <tr>
                    <th>No.</th>
                    <th>Nama Peminjam</th>
                    <th>Tanggal Keluar</th>
                    <th>Tanggal Masuk</th>
                    <th>Nama Buku</th>
                    <th>Author</th>
                    <th>Deskripsi</th>
                    <th>Harga</th>
                </tr>
            </thead>
            <tbody className="table-light">
            {bukus.map((buku, index) => {
                return(
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{buku.nama_pinjam}</td>
                        <td>{buku.tgl_keluar}</td>
                        <td>{buku.tgl_masuk}</td>
                        <td>{buku.nama_buku}</td>
                        <td>{buku.author}</td>
                        <td>{buku.deskripsi}</td>
                        <td>{buku.harga}</td>
                        <td>
                            <button className="btn btn-warning mr-1" onClick={() => editData(buku.id)}>Edit</button>
                            <button className="btn btn-danger mr-1" onClick={() => hapusData(buku.id)}>Hapus</button>
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </Table>
    )
}

export default Tabel