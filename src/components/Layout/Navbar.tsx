import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/images/logowhite.svg';

interface NavbarProps {
  link1: string;
  link2: string;
  link3: string;
  link4: string;
  link1To: string;
  link2To: string;
  link3To: string;
  link4To: string;
  setShowModal: any;
}

const Navbar: React.FC<NavbarProps> = ({
  link1,
  link2,
  link3,
  link4,
  link1To,
  link2To,
  link3To,
  link4To,
  setShowModal,
}) => {
  return (
    <div className="fixed w-full py-5  z-50 px-10 top-0 flex-col items-between  backdrop-blur-sm bg-black/50 text-white  shadow-lg">
      <nav className="flex items-center justify-between ">
        <Link href={'/'}>
          <Image src={Logo} alt={'logo'} />
        </Link>
        <div className="hidden lg:flex items-center space-x-9">
          <Link href={link1To}>{link1}</Link>
          <Link href={link2To}>{link2}</Link>
          <Link href={link3To}>{link3}</Link>
          <button type="button" onClick={setShowModal}>
            <div
              style={{
                paddingTop: '1px',
                paddingBottom: '1px',
                paddingLeft: '1px',
                paddingRight: '1px',
              }}
              className="w-fit h-fit cursor-pointer rounded-full"
            >
              <div className="bg-[#00ad98] rounded-full px-5 py-[7px]">
                <span className=" font-bold ">{link4}</span>
              </div>
            </div>
          </button>
        </div>

        <button
          onClick={() => {
            document.querySelector('.mobile-menu')!.classList.toggle('hidden');
          }}
          className="lg:hidden flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>
      <div className="mobile-menu hidden bg-black border border-white rounded-b-2xl">
        <div className="flex  flex-col items-center space-y-2 px-4 pt-3 pb-3 text-sm">
          <Link href={link1To}>{link1}</Link>
          <Link href={link2To}>{link2}</Link>
          <Link href={link3To}>{link3}</Link>

          <button type="button" onClick={setShowModal}>
            <div
              style={{
                paddingTop: '1px',
                paddingBottom: '1px',
                paddingLeft: '1px',
                paddingRight: '1px',
              }}
              className="w-fit h-fit cursor-pointer rounded-full"
            >
              <div className="bg-[#00ad98] rounded-full px-5 py-[7px]">
                <span className=" font-bold ">{link4}</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
