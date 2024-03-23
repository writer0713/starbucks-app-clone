import BottomAppBar from '@/components/footer';

export default function LoadingPage() {
  return (
    <div className="responsive bg-white w-full h-screen *:text-black flex flex-col">
      <span className="absolute h-full bg-primary place-self-center loading loading-spinner loading-lg"></span>

      {/* top */}
      <div className="flex flex-col gap-10 p-6 top pt-20">
        <div className="w-full h-10 bg-slate-100"></div>
        <div className="w-full h-10 bg-slate-100"></div>
      </div>
      {/* top */}

      {/* center */}
      <div className="flex flex-col justify-around w-full p-6 h-80 bg-slate-100">
        <div className="w-3/4 h-10 bg-slate-200 min-w-2xl"></div>
        <div className="flex overflow-x-hidden">
          <div className="flex flex-nowrap gap-8">
            <div className="rounded-full size-16 bg-slate-200"></div>
            <div className="rounded-full size-16 bg-slate-200"></div>
            <div className="rounded-full size-16 bg-slate-200"></div>
          </div>
        </div>
      </div>
      {/* center */}

      {/* bottom */}
      <div className="w-full h-80 bg-slate-200"></div>
      {/* bottom */}

      <BottomAppBar />
    </div>
  );
}
