import BottomAppBar from '@/components/footer';

export default async function GiftPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div className="w-full h-screen bg-white *:text-black">
      <h1>Gift</h1>
      <BottomAppBar />
    </div>
  );
}
