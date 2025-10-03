import Card from "@/components/Card";

export default function AboutPage() {
	return (
		<main className="w-full bg-gray-100 px-6 py-25 md:py-35">
			<div className="max-w-7xl mx-auto flex flex-col gap-y-12">
				<Card className="flex flex-col items-center">
					<p>About KosPrice</p>
					<p>Explain the purpose and functionality of KosPrice.</p>
				</Card>
				<Card>Features</Card>
				<Card>Data Source</Card>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8 grid-flow-row-dense">
					<Card>technology-1</Card>
					<Card>technology-2</Card>
					 <Card>technology-3</Card>
				</div>
				<Card>Version</Card>
				<Card>License</Card>
				<Card>Developed By</Card>
				<Card>Contact</Card>
			</div>
		</main>
	);
}
