import React from 'react';
import NavbarComponent from './NavbarComponent';
import Tabel from './tabel'
import Formulir from './Formulir';

export default class Crud extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            bukus : [],
            nama_pinjam : "",
            tgl_keluar : "",
            tgl_masuk : "",
            nama_buku : "",
            author : "",
            deskripsi : "",
            harga : "",
            id : "",
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if(this.state.id === "") {
            this.setState({
                bukus: [
                    ...this.state.bukus,
                    {
                        id: this.state.bukus.length + 1,
                        nama_pinjam: this.state.nama_pinjam,
                        tgl_keluar: this.state.tgl_keluar,
                        tgl_masuk: this.state.tgl_masuk,
                        nama_buku: this.state.nama_buku,
                        author: this.state.author,
                        deskripsi: this.state.deskripsi,
                        harga: this.state.harga
                    },
                ],
            });
        } else {
            const bukuYangSelainDiPilih = this.state.bukus
            .filter((buku) => buku.id !== this.state.id)
            .map((filterBuku) => {
                return filterBuku
            });

            this.setState({
                bukus: [
                    ...bukuYangSelainDiPilih,
                    {
                        id: this.state.bukus.length + 1,
                        nama_pinjam: this.state.nama_pinjam,
                        tgl_keluar: this.state.tgl_keluar,
                        tgl_masuk: this.state.tgl_masuk,
                        nama_buku: this.state.nama_buku,
                        author: this.state.author,
                        deskripsi: this.state.deskripsi,
                        harga: this.state.harga
                    },
                ],
            });
        }

        this.setState({
            nama_pinjam : "",
            tgl_keluar : "",
            tgl_masuk : "",
            nama_buku : "",
            author : "",
            deskripsi : "",
            harga : "0",
            id : "",
        });
    }

    editData = (id) => {
        const bukuYangDiPilih = this.state.bukus
        .filter((buku) => buku.id === id)
        .map((filterBuku) => {
            return filterBuku
        })

        this.setState({
            nama_pinjam : bukuYangDiPilih[0].nama_pinjam,
            tgl_keluar : bukuYangDiPilih[0].tgl_keluar,
            tgl_masuk : bukuYangDiPilih[0].tgl_masuk,
            nama_buku : bukuYangDiPilih[0].nama_buku,
            author : bukuYangDiPilih[0].author,
            deskripsi : bukuYangDiPilih[0].deskripsi,
            harga : bukuYangDiPilih[0].harga,
            id : bukuYangDiPilih[0].id,
        });
    }

    hapusData = (id) => {
        const bukuBaru = this.state.bukus
        .filter((buku) => buku.id !== id)
        .map((filterBuku) => {
            return filterBuku
        })

        this.setState({
            bukus : bukuBaru
        });
    }

    render() {
        return (
             <div>
                <NavbarComponent />
                <div className='container mt-4'>
                    <Tabel bukus={this.state.bukus} editData={this.editData} hapusData={this.hapusData} />
                    <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                </div>
             </div>
        );
    }
}