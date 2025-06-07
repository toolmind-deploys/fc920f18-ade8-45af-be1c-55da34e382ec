import { Card } from '@/components/ui/card';
import {
  ChartBarIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

export default function DashboardPage() {
  return (
    <div className='min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8'>
      <div className='mx-auto max-w-7xl'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-2xl font-bold text-gray-900 sm:text-3xl'>
            Dashboard
          </h1>
          <p className='mt-2 text-sm text-gray-700'>
            Welcome to your dashboard overview
          </p>
        </div>

        {/* Stats Grid */}
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          <Card className='p-6 hover:shadow-lg transition-shadow'>
            <div className='flex items-center'>
              <div className='p-2 bg-blue-100 rounded-lg'>
                <ChartBarIcon className='h-6 w-6 text-blue-600' />
              </div>
              <div className='ml-4'>
                <p className='text-sm font-medium text-gray-600'>Total Views</p>
                <p className='text-lg font-semibold text-gray-900'>2.7K</p>
              </div>
            </div>
          </Card>

          <Card className='p-6 hover:shadow-lg transition-shadow'>
            <div className='flex items-center'>
              <div className='p-2 bg-green-100 rounded-lg'>
                <UserGroupIcon className='h-6 w-6 text-green-600' />
              </div>
              <div className='ml-4'>
                <p className='text-sm font-medium text-gray-600'>Total Users</p>
                <p className='text-lg font-semibold text-gray-900'>1.2K</p>
              </div>
            </div>
          </Card>

          <Card className='p-6 hover:shadow-lg transition-shadow'>
            <div className='flex items-center'>
              <div className='p-2 bg-purple-100 rounded-lg'>
                <CurrencyDollarIcon className='h-6 w-6 text-purple-600' />
              </div>
              <div className='ml-4'>
                <p className='text-sm font-medium text-gray-600'>Revenue</p>
                <p className='text-lg font-semibold text-gray-900'>$45.2K</p>
              </div>
            </div>
          </Card>

          <Card className='p-6 hover:shadow-lg transition-shadow'>
            <div className='flex items-center'>
              <div className='p-2 bg-yellow-100 rounded-lg'>
                <DocumentTextIcon className='h-6 w-6 text-yellow-600' />
              </div>
              <div className='ml-4'>
                <p className='text-sm font-medium text-gray-600'>Projects</p>
                <p className='text-lg font-semibold text-gray-900'>12</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <div className='mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2'>
          <Card className='p-6'>
            <h2 className='text-lg font-semibold text-gray-900'>Recent Activity</h2>
            <div className='mt-4 space-y-4'>
              {/* Activity items */}
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <div className='h-8 w-8 rounded-full bg-gray-200'></div>
                  <div className='ml-4'>
                    <p className='text-sm font-medium text-gray-900'>New user registration</p>
                    <p className='text-sm text-gray-500'>2 minutes ago</p>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <div className='h-8 w-8 rounded-full bg-gray-200'></div>
                  <div className='ml-4'>
                    <p className='text-sm font-medium text-gray-900'>Project update</p>
                    <p className='text-sm text-gray-500'>1 hour ago</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className='p-6'>
            <h2 className='text-lg font-semibold text-gray-900'>Quick Actions</h2>
            <div className='mt-4 grid grid-cols-2 gap-4'>
              <button className='rounded-lg border border-gray-300 p-4 text-center hover:bg-gray-50'>
                <DocumentTextIcon className='mx-auto h-6 w-6 text-gray-400' />
                <span className='mt-2 block text-sm font-medium text-gray-900'>
                  New Project
                </span>
              </button>
              <button className='rounded-lg border border-gray-300 p-4 text-center hover:bg-gray-50'>
                <UserGroupIcon className='mx-auto h-6 w-6 text-gray-400' />
                <span className='mt-2 block text-sm font-medium text-gray-900'>
                  Invite Team
                </span>
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}