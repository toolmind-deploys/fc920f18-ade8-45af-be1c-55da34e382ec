import { NextResponse } from 'next/server';
import { initFirebaseAdminSDK } from '@/config/firebase-admin-config';

export async function GET() {
  try {
    // Initialize Firebase Admin SDK
    initFirebaseAdminSDK();

    // In a real application, you would fetch this data from your database
    const dashboardData = {
      totalUsers: 1234,
      newUsers: 56,
      totalRevenue: 50000,
      revenueIncrease: 12,
      activeProjects: 45,
      completedProjects: 8,
      growthRate: 15,
      growthIncrease: 5,
      recentActivity: [
        {
          title: 'New Project Created',
          description: 'Project X was created by Team Alpha'
        },
        {
          title: 'Milestone Achieved',
          description: 'Team Beta completed Phase 1 of Project Y'
        },
        {
          title: 'New Team Member',
          description: 'Alice joined the development team'
        }
      ],
      quickStats: [
        {
          label: 'Average Response Time',
          value: '2.3 hours'
        },
        {
          label: 'Customer Satisfaction',
          value: '94%'
        },
        {
          label: 'Team Productivity',
          value: '87%'
        }
      ]
    };

    return NextResponse.json(dashboardData);
  } catch (error) {
    console.error('Dashboard API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch dashboard data' },
      { status: 500 }
    );
  }
}