import BottomAppBar from '@/components/footer';

export default async function PayPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div className="w-full h-screen bg-white *:text-black">
      <h1>Pay</h1>
      <BottomAppBar />
    </div>
  );
}
