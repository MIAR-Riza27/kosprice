import Card from "@/components/Card";

export default function HistoryPage() {
	return (
		<main className="w-full bg-gray-100 px-6 py-25 md:py-35">
			<div className="max-w-6xl mx-auto flex flex-col gap-y-12">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-8 grid-flow-row-dense">
					{/* function */}
					<Card className="flex flex-col items-center">
						<p>Harga-Recent</p>
						<p>Jenis Kos</p>
						<p>Lokasi</p>
						<p>Rata-Rata Jarak Fasilitas Umum</p>
						<p>Dekat Kampus (y/n)</p>
					</Card>
					<Card className="flex flex-col items-center">
						<p>Harga-Recent</p>
						<p>Jenis Kos</p>
						<p>Lokasi</p>
						<p>Rata-Rata Jarak Fasilitas Umum</p>
						<p>Dekat Kampus (y/n)</p>
					</Card>
					<Card className="flex flex-col items-center">
						<p>Harga-Recent</p>
						<p>Jenis Kos</p>
						<p>Lokasi</p>
						<p>Rata-Rata Jarak Fasilitas Umum</p>
						<p>Dekat Kampus (y/n)</p>
					</Card>
					<Card className="flex flex-col items-center">
						<p>Harga-Recent</p>
						<p>Jenis Kos</p>
						<p>Lokasi</p>
						<p>Rata-Rata Jarak Fasilitas Umum</p>
						<p>Dekat Kampus (y/n)</p>
					</Card>
				</div>
				<table className="w-full bg-white rounded-lg shadow">
					<thead>
						<tr>
							<th className="px-4 py-2">Harga</th>
							<th className="px-4 py-2">Jenis Kos</th>
							<th className="px-4 py-2">Lokasi</th>
							<th className="px-4 py-2">Rata-Rata Jarak Fasilitas Umum</th>
							<th className="px-4 py-2">Dekat Kampus</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="px-4 py-2">Rp 1.000.000</td>
							<td className="px-4 py-2">Putra</td>
							<td className="px-4 py-2">Jakarta</td>
							<td className="px-4 py-2">200m</td>
							<td className="px-4 py-2">Ya</td>
						</tr>
						{/* Tambahkan baris lain sesuai data history */}
					</tbody>
				</table>
			</div>
		</main>
	);
}
