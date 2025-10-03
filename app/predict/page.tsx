import Card from "@/components/Card";

export default function PredictPage() {
	return (
		<main className="w-full bg-gray-100 px-6 py-25 md:py-35">
			<div className="max-w-6xl mx-auto flex flex-col gap-y-12">
				<Card>Jenis Kos</Card>
				<Card>Lokasi</Card>
				<Card>Fasilitas</Card>
				<Card>Rata-Rata Jarak Fasilitas Umum</Card>
				<Card>Dekat Kampus (y/n)</Card>
				<Card>Predict</Card>
			</div>
		</main>
	);
}
