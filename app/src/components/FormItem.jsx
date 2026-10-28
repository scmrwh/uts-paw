export default function FormItem({ form, onUbah, onSubmit, galat }) {
  return (
    <form className="formulir" onSubmit={onSubmit} noValidate>
      <h1>Tambah Resep</h1>

      <label htmlFor="judul">Judul</label>
      <input id="judul" name="judul" value={form.judul} onChange={onUbah} />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="kategori">Kategori</label>
      <select id="kategori" name="kategori" value={form.kategori} onChange={onUbah}>
        <option>Makanan Utama</option>
        <option>Kudapan</option>
        <option>Minuman</option>
        <option>Sambal</option>
      </select>

      <label htmlFor="daerahAsal">Daerah Asal</label>
      <input id="daerahAsal" name="daerahAsal" value={form.daerahAsal} onChange={onUbah} />

      <label htmlFor="waktuMasak">Waktu Masak (menit)</label>
      <input id="waktuMasak" name="waktuMasak" type="number" min="0" value={form.waktuMasak} onChange={onUbah} />

      <label htmlFor="tingkatKesulitan">Tingkat Kesulitan</label>
      <select id="tingkatKesulitan" name="tingkatKesulitan" value={form.tingkatKesulitan} onChange={onUbah}>
        <option value="mudah">Mudah</option>
        <option value="sedang">Sedang</option>
        <option value="sulit">Sulit</option>
      </select>

      <button type="submit">Simpan</button>
    </form>
  )
}