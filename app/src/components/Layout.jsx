import { NavLink, Outlet } from 'react-router-dom'
import './Layout.css'

const MENU = [
  { ke: '/', label: 'Beranda' },
  { ke: '/koleksi', label: 'Koleksi' },
  { ke: '/tambah', label: 'Tambah' },
  { ke: '/statistik', label: 'Statistik' },
  { ke: '/tentang', label: 'Tentang' },
]

export default function Layout() {
  return (
    <div id="kerangka-utama" className="kerangka">
      <header className="kepala">
        <strong>Resep Masakan Nusantara</strong>
        <nav id="menu-utama" className="menu" aria-label="Navigasi utama">
          {MENU.map(({ ke, label }) => (
            <NavLink key={ke} to={ke} end={ke === '/'}>
              {label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main id="isi-utama" className="isi">
        <Outlet />
      </main>
      <footer className="kaki" data-skema="k7.2">
        UTS Pengembangan Aplikasi Web · Resep Masakan Nusantara
      </footer>
    </div>
  )
}