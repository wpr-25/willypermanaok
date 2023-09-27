import Link from "next/link"

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  const tableItemspendidikan = [
    {
      namasekolah: "Sekolah Dasar Negeri Nagasari v Karawang Barat",
      jurusan: "-",
      nilai: "-",
      lulustahun: "2006"
    },
    {
      namasekolah: "Sekolah Menengah Pertama Negeri 3 Karawang Barat",
      jurusan: "-",
      nilai: "-",
      lulustahun: "2010"
    },
    {
      namasekolah: "Sekolah Menengah Kejuruan Taruna Karya 1.76 Karawang Barat",
      jurusan: "Teknik Mesin",
      nilai: "-",
      lulustahun: "2013"
    },
    {
      namasekolah: "Sekolah Tinggi Manajemen Informatika Rosma Karawang",
      jurusan: "Teknik Informatika",
      nilai: "3.15",
      lulustahun: "2021"
    },

  ]

  const tableItemsorganisasi = [
    {
      namasekolah: "Komunitas Mahasiswa Sistem Informasi (KOMASI)",
      jabatan: "DIV C",
      keterangan: "Sebagai hubungan internal dan eksternal",
      tahunbergabung: "2017",
    },
    {
      namasekolah: "Komunitas Mahasiswa Sistem Informasi (KOMASI)",
      jabatan: "DIV C",
      keterangan: "Sebagai hubungan internal dan eksternal",
      tahunbergabung: "2018",
    },
    {
      namasekolah: "Himpunan Mahasiswa Teknik Informatika (HMTI)",
      jabatan: "Div C",
      keterangan: "Sebagai hubungan internal dan eksternal",
      tahunbergabung: "2019",
    },
    {
      namasekolah: "Komunitas Studi Linux (KSL)",
      jabatan: "Ketua sekaligus pendiri",
      keterangan: "Ethical Hacking, dan Linux Web Server",
      tahunbergabung: "2020",
    },
  ]
  return (
    <div className="bg-white">
      <div className="text-black">
        <section className="py-14">
          <div className="max-w-screen-xl mx-auto md:px-8">
            <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
              <div className="flex-1 sm:hidden lg:block">
                <img src="https://media.licdn.com/dms/image/C4E03AQGcNaNiIsGIIg/profile-displayphoto-shrink_800_800/0/1619941879316?e=2147483647&v=beta&t=FnQJBTndlnUMmfDGipzTdWUT5AIo5bkiqCFM_Y1QHSM" className="md:max-w-lg sm:rounded-lg" alt="FotoCV" />
              </div>
              <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                <h3 className="text-indigo-600 font-semibold">
                  Halo Perkenalkan Saya
                </h3>
                <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                  Willy Permana Ok
                </p>
                <p className="mt-3 text-gray-600 text-justify">
                  Website ini bertujuan untuk menampilkan CV dan Portofolio
                  <br />
                </p>
                <Link href="/Pengalaman-Perkerjaan" className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium">
                  Profile
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Pendidikan
          </h3>
        </div>
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 px-6">Nama Sekolah</th>
                <th className="py-3 px-6">Jurusan</th>
                <th className="py-3 px-6">Nilai</th>
                <th className="py-3 px-6">Tahun Lulus</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {
                tableItemspendidikan.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap">{item.namasekolah}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.jurusan}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.nilai}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.lulustahun}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-10">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Organisasi
          </h3>
        </div>
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 px-6">Nama Organisasi</th>
                <th className="py-3 px-6">Jabatan</th>
                <th className="py-3 px-6">Keterangan</th>
                <th className="py-3 px-6">Tahun Bergabung</th>

              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {
                tableItemsorganisasi.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap">{item.namasekolah}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.jabatan}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.keterangan}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.tahunbergabung}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src="https://i.pinimg.com/564x/de/97/8a/de978a9bff33c90837ce83be98a78db8.jpg"
              className="object-cover w-full h-64 rounded-md"
              alt="ANALISIS BEHAVIOR INTENTION"
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <Link
                  href="https://www.researchgate.net/publication/367595708_ANALISIS_BEHAVIOR_INTENTION_TERHADAP_KEEFEKTIFAN_MEDIA_PROMOSI_DIGITAL_MENGGUNAKAN_AUGMENTED_REALITY"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                >
                  Jurnal
                </Link>
              </p>
              <Link
                href="https://www.researchgate.net/publication/367595708_ANALISIS_BEHAVIOR_INTENTION_TERHADAP_KEEFEKTIFAN_MEDIA_PROMOSI_DIGITAL_MENGGUNAKAN_AUGMENTED_REALITY"
                aria-label="Category"
                title="Visit the East"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700 text-black"
              >
                Karya Tulis
              </Link>
              <p className="mb-2 text-gray-700">
                Jurnal Analisis Behavior Intention ......
              </p>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src="https://www.karawangkab.go.id/sites/default/files/styles/berita_list/public/berita/45860985_1999507016739094_4369598974862092494_n.jpg?itok=7e31yiv7"
              className="object-cover w-full h-64 rounded-md"
              alt="serverhack organization"
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                >
                  Organisasi Aktiv
                </a>

              </p>
              <Link
                href="https://www.karawangkab.go.id/headline/seminar-cyber-security-defence"
                aria-label="Category"
                title="Simple is better"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700 text-black"
              >
                Serverhack Organization
              </Link>
              <p className="mb-2 text-gray-700">
                Serverhack Organization
              </p>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src="https://vpnoverview.com/wp-content/uploads/what-is-a-hacker-what-is-hacking-featured-800x400.png"
              className="object-cover w-full h-64 rounded-md"
              alt="narasumber"

            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <Link
                  href="https://www.youtube.com/watch?v=Eqa0x_y_ld8"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                >
                  Narasumber IT Security
                </Link>
              </p>
              <a
                href="https://www.youtube.com/watch?v=Eqa0x_y_ld8"
                aria-label="Category"
                title="Film It!"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700 text-black"
              >
                Narasumber
              </a>
              <p className="mb-2 text-gray-700">
                Diundang kreator programming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
