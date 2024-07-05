"use client"
import DashboardCard from '@/components/dashboard/DashboardCard';
import PostsTable from '@/components/posts/PostsTable';
import AnalyticsChart from '@/components/dashboard/AnalyticsChart';
import { Folder, MessageCircle, Newspaper, User } from 'lucide-react';
import { createThirdwebClient } from 'thirdweb';
import { fraxMainnet } from '@/config/Chains';
import { FraxtalPointSystemABI } from '@/config/ContractABI';
import { useContractEvents } from 'thirdweb/react';
import { createPublicClient, getContract, http } from 'viem';
import { fraxtal } from 'viem/chains'
export default function Home() {

  const client = createThirdwebClient({ clientId: '55691db011a0294906c77ced2fea9718' });

  const getContractInstance = async () => {

    // const contract = getContract({
    //   client,
    //   chain: fraxMainnet,
    //   address: "0xab4b7c5c9a7c8ebb97877085a6c3550ad4ed3f97",
    // });

    // console.log("Contract instance >>>", contract);

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

  }

  return (
    <>
      <h1 className='text-center text-blue-400'>FXTL Points Dashboard</h1>

      <div onClick={getContractInstance}> Contract Instance </div>
      <div className='flex flex-col md:flex-row justify-between gap-5 mb-5'>
        <DashboardCard
          title='FXTLPoints'
          count={100}
          icon={<Newspaper className='text-slate-500' size={72} />}
        />
        <DashboardCard
          title='Earn'
          count={12}
          icon={<Folder className='text-slate-500' size={72} />}
        />
        <DashboardCard
          title='Users'
          count={750}
          icon={<User className='text-slate-500' size={72} />}
        />
        <DashboardCard
          title='Comments'
          count={1200}
          icon={<MessageCircle className='text-slate-500' size={72} />}
        />
      </div>
      <AnalyticsChart />
      <PostsTable title='Latest Posts' limit={5} />
    </>
  );
}
