import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import FormItem from '../components/FormItem.jsx'
import './Tambah.css'

const AWAL = { 
  judul: '', 
  kategori: 'Makanan Utama', 
  daerahAsal: '', 
  waktuMasak: '', 
  tingkatKesulitan: 'mudah' 
}

export default function Tambah() {
  const { tambah } = useKoleksi()
  const navigate = useNavigate()
  const [form, setForm] = useState(AWAL)
  const [galat, setGalat] = useState('')

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const simpan = (e) => {
    e.preventDefault()
    if (form.judul.trim().length < 3) {
      setGalat('Judul wajib diisi, minimal 3 karakter.')
      return
    }
    setGalat('')
    tambah({ ...form, judul: form.judul.trim() })
    navigate('/koleksi')
  }

  return (
    <FormItem form={form} onUbah={ubah} onSubmit={simpan} galat={galat} />
  )
}