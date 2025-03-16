import Link from "next/link";
import LogoWhite2 from "../../../public/assets/imgs/logo/logo-white.png";
import Image from "next/image";

const DesignStudioLogo = () => {
  return (
    <>
      <div className='header__logo-2'>
        <Link href={"/design-studio"}>
          <Image
            priority
            style={{ width: "auto", height: "auto" }}
            src={LogoWhite2}
            alt='Site Logo'
          />
        </Link>
      </div>
    </>
  );
};

export default DesignStudioLogo;
