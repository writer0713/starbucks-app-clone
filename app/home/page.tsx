import BottomAppBar from '@/components/footer';

export default async function HomePage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div className="w-full h-screen bg-white *:text-black">
      <h1>home</h1>
      <BottomAppBar />
    </div>
  );
}
