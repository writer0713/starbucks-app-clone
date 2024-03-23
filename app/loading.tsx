import BottomAppBar from '@/components/footer';

export default function LoadingPage() {
  return (
    <div className="responsive bg-white w-full h-screen *:text-black flex flex-col justify-between">
      <span className="absolute h-full bg-green-400 place-self-center loading loading-spinner loading-lg"></span>

      {/* top */}
      <div className="flex flex-col gap-10 p-6 top">
        <div className="w-full h-10 bg-slate-100"></div>
        <div className="w-full h-10 bg-slate-100"></div>
      </div>
      {/* top */}

      {/* center */}
      <div className="flex flex-col justify-around w-full p-6 h-60 bg-slate-100">
        <div className="w-1/3 h-10 bg-slate-200"></div>
        <div className="flex justify-between w-full">
          <div className="rounded-full size-32 bg-slate-200"></div>
          <div className="rounded-full size-32 bg-slate-200"></div>
          <div className="rounded-full size-32 bg-slate-200"></div>
        </div>
      </div>
      {/* center */}

      {/* bottom */}
      <div className="w-full h-60 bg-slate-100"></div>
      {/* bottom */}

      <BottomAppBar />
    </div>
  );
}
