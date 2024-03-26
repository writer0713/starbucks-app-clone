import BottomAppBar from '@/components/footer';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default async function PayPage() {
  // await new Promise((resolve) => setTimeout(resolve, 500));
  return (
    <div className="w-full min-h-screen max-h-full bg-white *:text-black pt-20 pb-40">
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col px-4 gap-y-5">
          {/* top - title */}
          <div>
            <h1 className="text-3xl font-bold">Pay</h1>
          </div>

          {/* center */}
          <div className="w-full flex flex-col items-center shadow-xl p-6 h-[500px] gap-3">
            {/* card place-holder */}
            <div className="flex justify-center items-center w-full h-48 bg-[#F7F7F8] border border-gray-400 border-dashed rounded-lg">
              <FontAwesomeIcon
                icon={faCirclePlus}
                className="text-gray-400 size-10"
              />
            </div>

            <h1 className="text-lg font-semibold">
              스타벅스 카드를 등록해보세요.
            </h1>

            <div className="flex flex-col items-center leading-5 text-slate-600 text-md">
              <p>매장과 사이렌오더에서 쉽고 편리하게</p>
              <p>사용할 수 있고, 별도 적립할 수 있습니다.</p>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="relative w-full h-24">
          <Image
            src={'/banner.png'}
            alt="banner"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      <BottomAppBar />
    </div>
  );
}
