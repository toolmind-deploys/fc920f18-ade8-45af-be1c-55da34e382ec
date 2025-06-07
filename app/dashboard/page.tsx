import { Card } from '@/components/ui/card';
import {
  BarChart3,
  Users,
  DollarSign,
  Activity,
} from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className='min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8'>
      {/* Header */}
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-gray-900'>Dashboard</h1>
        <p className='mt-2 text-gray-600'>Welcome to your dashboard overview</p>
      </div>

      {/* Stats Grid */}
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        <Card className='p-6 hover:shadow-lg transition-shadow'>
          <div className='flex items-center space-x-4'>
            <div className='p-2 bg-blue-100 rounded-lg'>
              <Users className='h-6 w-6 text-blue-600' />
            </div>
            <div>
              <p className='text-sm font-medium text-gray-600'>Total Users</p>
              <h3 className='text-2xl font-bold'>2,543</h3>
            </div>
          </div>
        </Card>

        <Card className='p-6 hover:shadow-lg transition-shadow'>
          <div className='flex items-center space-x-4'>
            <div className='p-2 bg-green-100 rounded-lg'>
              <DollarSign className='h-6 w-6 text-green-600' />
            </div>
            <div>
              <p className='text-sm font-medium text-gray-600'>Revenue</p>
              <h3 className='text-2xl font-bold'>$45,231</h3>
            </div>
          </div>
        </Card>

        <Card className='p-6 hover:shadow-lg transition-shadow'>
          <div className='flex items-center space-x-4'>
            <div className='p-2 bg-purple-100 rounded-lg'>
              <BarChart3 className='h-6 w-6 text-purple-600' />
            </div>
            <div>
              <p className='text-sm font-medium text-gray-600'>Growth</p>
              <h3 className='text-2xl font-bold'>+12.3%</h3>
            </div>
          </div>
        </Card>

        <Card className='p-6 hover:shadow-lg transition-shadow'>
          <div className='flex items-center space-x-4'>
            <div className='p-2 bg-red-100 rounded-lg'>
              <Activity className='h-6 w-6 text-red-600' />
            </div>
            <div>
              <p className='text-sm font-medium text-gray-600'>Active Now</p>
              <h3 className='text-2xl font-bold'>573</h3>
            </div>
          </div>
        </Card>
      </div>

      {/* Main Content Area */}
      <div className='mt-8 grid gap-6 lg:grid-cols-2'>
        <Card className='p-6'>
          <h2 className='text-xl font-semibold mb-4'>Recent Activity</h2>
          <div className='space-y-4'>
            {/* Placeholder content */}
            <div className='h-4 bg-gray-200 rounded w-3/4'></div>
            <div className='h-4 bg-gray-200 rounded w-1/2'></div>
            <div className='h-4 bg-gray-200 rounded w-5/6'></div>
          </div>
        </Card>

        <Card className='p-6'>
          <h2 className='text-xl font-semibold mb-4'>Performance Overview</h2>
          <div className='space-y-4'>
            {/* Placeholder content */}
            <div className='h-4 bg-gray-200 rounded w-2/3'></div>
            <div className='h-4 bg-gray-200 rounded w-3/4'></div>
            <div className='h-4 bg-gray-200 rounded w-1/2'></div>
          </div>
        </Card>
      </div>
    </div>
  );
}