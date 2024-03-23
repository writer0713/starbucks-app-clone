import {
  faEllipsis,
  faGift,
  faHouse,
  faMoneyCheck,
  faMugSaucer,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function BottomAppBar() {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-around w-full h-20 p-3 rounded-t-lg bg-slate-100 ring ring-white">
      <Link href="/home">
        <div className="flex flex-col items-center justify-center *:text-[#01B275] home">
          <FontAwesomeIcon icon={faHouse} width="35" height="35" />
          <span className="text-xs">Home</span>
        </div>
      </Link>

      <Link href="/pay">
        <div className="flex flex-col items-center justify-center *:text-slate-400 pay">
          <FontAwesomeIcon icon={faMoneyCheck} width="35" height="35" />
          <span className="text-xs">Pay</span>
        </div>
      </Link>

      <Link href="/order">
        <div className="flex flex-col items-center justify-center *:text-slate-400 order">
          <FontAwesomeIcon icon={faMugSaucer} width="35" height="35" />
          <span className="text-xs">Order</span>
        </div>
      </Link>

      <Link href="/gift">
        <div className="flex flex-col items-center justify-center *:text-slate-400 gift">
          <FontAwesomeIcon icon={faGift} width="35" height="35" />
          <span className="text-xs">Gift</span>
        </div>
      </Link>

      <Link href="/other">
        <div className="flex flex-col items-center justify-center *:text-slate-400 other">
          <FontAwesomeIcon icon={faEllipsis} width="35" height="35" />
          <span className="text-xs">Other</span>
        </div>
      </Link>
    </div>
  );
}
