"use client"
import DashboardCard from '@/components/dashboard/DashboardCard';
import TasksTable from '@/components/tasks/TasksTable';
import AnalyticsChart from '@/components/dashboard/AnalyticsChart';
import { Folder, MessageCircle, Newspaper, User } from 'lucide-react';
import { createThirdwebClient } from 'thirdweb';
import { fraxMainnet } from '@/config/Chains';
import { FraxtalPointSystemABI } from '@/config/ContractABI';
import { useActiveAccount, useActiveWallet, useActiveWalletConnectionStatus, useConnect, useContractEvents, useReadContract, useWalletInfo } from 'thirdweb/react';
import { createPublicClient, getContract, http } from 'viem';
import { fraxtal } from 'viem/chains'
import { useEffect, useState } from 'react';
export default function Home() {

  const activeAccount = useActiveAccount();

  const status = useActiveWalletConnectionStatus();

  const [fxtlPoints, setFxtlPoints] = useState(0);

  const client = createThirdwebClient({ clientId: '55691db011a0294906c77ced2fea9718' });

  const getFxtlPoints = async () => {
    const publicClient = createPublicClient({
      chain: fraxtal,
      transport: http(),
    })

    const contract = getContract({
      address: '0xab4b7c5c9a7c8ebb97877085a6c3550ad4ed3f97',
      abi: FraxtalPointSystemABI,
      client: publicClient,
    })

    console.log("Contract instance >>>", contract);

    // const points = await contract.read.balanceOf(['0x59cfcd384746ec3035299d90782be065e466800b'])
    const points = await contract.read.balanceOf([activeAccount?.address])
    const intVal = Number(points);
    setFxtlPoints(intVal);
  }

  useEffect(() => {
    if (status == 'connected') {
      getFxtlPoints();
    }

    if (status == 'disconnected') {
      setFxtlPoints(0)
    }

  }, [status])



  return (
    <>
      <h1 className='text-center text-blue-400'>FXTL Points Dashboard</h1>

      <div className='flex flex-col md:flex-row justify-between gap-5 mb-5'>
        <DashboardCard
          title='FXTLPoints'
          count={fxtlPoints}
          icon={<Newspaper className='text-slate-500' size={72} />}
        />
        <DashboardCard
          title='Earn'
          count={12}
          icon={<Folder className='text-slate-500' size={72} />}
        />
        <DashboardCard
          title='Total Users'
          count={33432}
          icon={<User className='text-slate-500' size={72} />}
        />
      </div>
      <AnalyticsChart />
    </>
  );
}
