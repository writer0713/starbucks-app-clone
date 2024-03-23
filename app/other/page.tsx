import BottomAppBar from '@/components/footer';

export default async function OtherPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div className="w-full h-screen bg-white *:text-black">
      <h1>Other</h1>
      <BottomAppBar />
    </div>
  );
}
