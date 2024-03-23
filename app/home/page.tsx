import BottomAppBar from '@/components/footer';
import {
  faBell,
  faBicycle,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default async function HomePage() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return (
    <div className="responsive w-full min-h-screen max-h-full bg-white *:text-black">
      <div className="flex flex-col gap-5 justify-between pt-20 pb-40 px-4">
        <div className="mb-5">
          <h1 className="text-2xl font-bold">안녕하세요.</h1>
          <h1 className="text-2xl font-bold">스타벅스입니다.</h1>
        </div>

        <div className="flex justify-between items-center rounded-md border px-6 py-5 shadow-xl">
          <div className="flex flex-col gap-5">
            <div className="text-sm">
              <p>스타벅스 리워드</p>
              <p>회원 신규가입 첫 구매 시,</p>
              <p>무료음료 혜택을 드려요!</p>
            </div>

            <div className="flex justify-between gap-3 text-sm">
              <button className="bg-primary px-5 py-1 rounded-full text-white">
                회원 가입
              </button>
              <button className="px-5 py-1 rounded-full border border-primary text-primary">
                로그인
              </button>
            </div>
          </div>
          <Image src={'/coffee.png'} alt="coffee" width={110} height={30} />
        </div>

        <div className="flex justify-between">
          <div className="flex gap-3">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-slate-200 size-6"
            />
            <p className="font-serif font-medium">{`What's New`}</p>
          </div>
          <FontAwesomeIcon
            icon={faBell}
            className="text-slate-200 size-6 place-content-end"
          />
        </div>

        <div className="flex flex-col bg-[#FEFAE9] rounded-md p-6 gap-5">
          <h1 className="text-xl font-sans font-bold">24 SUMMERe-Frequency</h1>
          <div className="text-slate-600 text-sm">
            <p>[적립 기간] 5/10(화) ~ 7/11(월)</p>
            <p>[예약/증정기간] 5/10(화) ~ 7/18(월)</p>
          </div>

          <Image
            src={'/frequency.png'}
            alt="frequency"
            width={150}
            height={50}
          />
          <div className="text-slate-800 text-xs">
            <p>증정품은 매장별 예약 가능 일자 및 재고가 상이할 수 있으며,</p>
            <p>한정 수량 제작되어 조기 소진 될 수 있습니다.</p>
          </div>
        </div>
      </div>

      <div className="fixed flex items-center justify-between bottom-24 right-5 w-40 bg-primary px-6 py-3 rounded-full">
        <FontAwesomeIcon icon={faBicycle} className=" text-white size-8" />
        <p className=" text-white">Delivers</p>
      </div>

      <BottomAppBar />
    </div>
  );
}
