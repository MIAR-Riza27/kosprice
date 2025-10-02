import Card from "../components/Card";

export default function Home() {
  return (
    <main className="w-full bg-gray-100 px-6 py-25 md:py-35">
      <div className="max-w-7xl mx-auto flex flex-col gap-y-12">
        <Card className="flex flex-col items-center">
          <p>
            Predict kos price
          </p>
          <p>
            Welcome to <span className="font-bold">KosPrice</span>
            * Penjelasan
            | Predict |
          </p>
        </Card>
        <Card>Penjelasan</Card>
        <Card>preview use</Card>
        <Card>Features</Card>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8 grid-flow-row-dense">
          <Card>technology-1</Card>
          <Card>technology-2</Card>
          <Card>technology-3</Card>
        </div>
        <Card>Start Predict</Card>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8 grid-flow-row-dense">
          <Card>Testimony-1</Card>
          <Card>Testimony-2</Card>
          <Card>Testimony-3</Card>
        </div>
      </div>
    </main>
  );
}
