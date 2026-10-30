import { useEffect, useState } from 'react'
import { KoleksiContext, VERSI_SKEMA } from './koleksiContext.js'
import useLocalStorage from '../hooks/useLocalStorage.js'

export function KoleksiProvider({ children }) {
  const [items, setItems] = useLocalStorage('uts-paw:k7', null)
  const [loading, setLoading] = useState(items === null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (items !== null) return
    async function muatKoleksiAwalK7() {
      try {
        const res = await fetch(`${import.meta.env.BASE_URL}data/koleksi.json`)
        if (!res.ok) throw new Error(`Gagal memuat data (status ${res.status})`)
        setItems(await res.json())
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    muatKoleksiAwalK7()
  }, [items, setItems])

  const tambah = (item) => setItems((lama) => [...(lama ?? []), { ...item, id: String(Date.now()) }])
  const hapus = (id) => setItems((lama) => lama.filter((item) => item.id !== id))

  return (
    <KoleksiContext.Provider value={{ items: items ?? [], loading, error, tambah, hapus, versiSkema: VERSI_SKEMA }}>
      {children}
    </KoleksiContext.Provider>
  )
}