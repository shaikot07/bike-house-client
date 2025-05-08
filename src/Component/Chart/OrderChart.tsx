import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';
  import { useMemo } from 'react';
  
  // Group and flatten data per date with each status as a key
  interface DataItem {
    date: string;
    status: string;
    totalOrders: number;
    totalRevenue: number;
  }
  
  const transformChartData = (rawData: DataItem[] = []) => {
    const grouped: Record<string, any> = {};
  
    rawData.forEach((item: DataItem) => {
      if (!grouped[item.date]) {
        grouped[item.date] = { date: item.date };
      }
      grouped[item.date][`${item.status}_orders`] = item.totalOrders;
      grouped[item.date][`${item.status}_revenue`] = item.totalRevenue;
    });
  
    return Object.values(grouped);
  };
  
  export const OrderChart = ({ rawData }) => {
    const chartData = useMemo(() => transformChartData(rawData), [rawData]);
  
    return (
       <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 2" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Paid_orders" stackId="a" fill="#009432" name="Paid Orders" />
          <Bar dataKey="Pending_orders" stackId="a" fill="#ffc658" name="Pending Orders" />
          <Bar dataKey="Cancelled_orders" stackId="a" fill="#ff7f7f" name="Cancelled Orders" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    );
  };
  