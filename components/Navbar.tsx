import Image from 'next/image';
import Link from 'next/link';
import logo from '../img/logo.png';
import ThemeToggler from '@/components/ThemeToggler';
import { ConnectButton } from "thirdweb/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import { createThirdwebClient } from 'thirdweb';
import { polygon } from "thirdweb/chains";
import { fraxMainnet, fraxtalTesnet } from '@/config/Chains';


const Navbar = () => {
  const client = createThirdwebClient({ clientId: '55691db011a0294906c77ced2fea9718' });

  return (
    <div className='bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between'>
      <Link href='/'>
        <Image src={logo} alt='logo' width={40} />
      </Link>

      <div className='flex items-center'>
        <ConnectButton client={client} chains={[fraxMainnet, fraxtalTesnet]} />
        <ThemeToggler />
      </div>
    </div>
  );
};

export default Navbar;
