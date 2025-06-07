import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartBarIcon, UserGroupIcon, CurrencyDollarIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

async function getDashboardData() {
  const res = await fetch('http://localhost:3000/api/dashboard', {
    cache: 'no-store'
  });
  if (!res.ok) {
    throw new Error('Failed to fetch dashboard data');
  }
  return res.json();
}

export default async function DashboardPage() {
  const data = await getDashboardData();

  return (
    <div className='p-6 space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-bold'>Dashboard</h1>
        <p className='text-sm text-muted-foreground'>
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Total Users</CardTitle>
            <UserGroupIcon className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{data.totalUsers}</div>
            <p className='text-xs text-muted-foreground'>
              +{data.newUsers} new users this week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Total Revenue</CardTitle>
            <CurrencyDollarIcon className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>${data.totalRevenue.toLocaleString()}</div>
            <p className='text-xs text-muted-foreground'>
              +{data.revenueIncrease}% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Active Projects</CardTitle>
            <ChartBarIcon className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{data.activeProjects}</div>
            <p className='text-xs text-muted-foreground'>
              {data.completedProjects} completed this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Growth Rate</CardTitle>
            <ArrowTrendingUpIcon className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{data.growthRate}%</div>
            <p className='text-xs text-muted-foreground'>
              +{data.growthIncrease}% from last quarter
            </p>
          </CardContent>
        </Card>
      </div>

      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
        <Card className='col-span-4'>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              {data.recentActivity.map((activity, index) => (
                <div key={index} className='flex items-center'>
                  <div className='ml-4 space-y-1'>
                    <p className='text-sm font-medium leading-none'>{activity.title}</p>
                    <p className='text-sm text-muted-foreground'>
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className='col-span-3'>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              {data.quickStats.map((stat, index) => (
                <div key={index} className='flex items-center justify-between'>
                  <div className='space-y-1'>
                    <p className='text-sm font-medium leading-none'>{stat.label}</p>
                    <p className='text-sm text-muted-foreground'>{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}