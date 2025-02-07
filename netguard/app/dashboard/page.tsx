'use client';
import { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  Filler
);

interface PlatformData {
  platform: string;
  totalComments: number;
  positiveComments: number;
  abusiveComments: number;
}

export default function DashboardPage() {
  const [commentsData, setCommentsData] = useState<PlatformData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/total');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const backendData = await response.json();
        console.log('Backend response:', backendData);

        // Directly set the backend response to state
        if (Array.isArray(backendData)) {
          setCommentsData(backendData);
        } else {
          console.error('Unexpected backend data format:', backendData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const platforms = commentsData.map((data) => data.platform);
  const totalComments = commentsData.map((data) => data.totalComments);
  const positiveComments = commentsData.map((data) => data.positiveComments);
  const abusiveComments = commentsData.map((data) => data.abusiveComments);

  const lineChartData = {
    labels: platforms,
    datasets: [
      {
        label: 'Positive Comments',
        data: positiveComments,
        borderColor: 'green',
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        fill: true,
      },
      {
        label: 'Abusive Comments',
        data: abusiveComments,
        borderColor: 'red',
        backgroundColor: 'rgba(239, 68, 68, 0.2)',
        fill: true,
      },
    ],
  };

  const barChartData = {
    labels: platforms,
    datasets: [
      {
        label: 'Total Comments',
        data: totalComments,
        backgroundColor: 'rgba(75, 85, 99, 0.5)',
      },
      {
        label: 'Positive Comments',
        data: positiveComments,
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
      },
      {
        label: 'Abusive Comments',
        data: abusiveComments,
        backgroundColor: 'rgba(239, 68, 68, 0.5)',
      },
    ],
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {/* Platform-specific comments data */}
      <div className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {commentsData.map((data) => (
            <div key={data.platform} className="p-4 bg-blue-200 rounded shadow">
              <h2 className="text-lg font-semibold">{data.platform}</h2>
              <p>Total Comments: {data.totalComments}</p>
              <p className="text-green-600">Positive Comments: {data.positiveComments}</p>
              <p className="text-red-600">Abusive Comments: {data.abusiveComments}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Charts Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="text-lg font-semibold">Comments Over Time (Line Chart)</h3>
          <Line data={lineChartData} />
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="text-lg font-semibold">Comments Breakdown (Bar Chart)</h3>
          <Bar data={barChartData} />
        </div>
      </div>
    </main>
  );
}
