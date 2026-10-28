export default function FilterKategori({ nilai, onUbah, daftarKategori }) {
  return (
    <select
      id="filter-kategori"
      aria-label="Kategori"
      value={nilai}
      onChange={(e) => onUbah(e.target.value)}
    >
      {daftarKategori.map((kategori) => (
        <option key={kategori} value={kategori}>
          {kategori}
        </option>
      ))}
    </select>
  )
}