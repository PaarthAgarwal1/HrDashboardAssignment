import { Bar, Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    LineElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    PointElement,
} from "chart.js";

import { useState } from "react";
import Sidebar from "../components/sidebar";

ChartJS.register(
    BarElement,
    LineElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    PointElement
);

export default function Analytic() {
    const departmentRatings = {
        Engineering: 4.2,
        Marketing: 3.8,
        HR: 4.5,
        Sales: 3.9,
        Design: 4.0,
    };

    const bookmarkTrends = [
        { month: "Jan", bookmarks: 10 },
        { month: "Feb", bookmarks: 18 },
        { month: "Mar", bookmarks: 25 },
        { month: "Apr", bookmarks: 22 },
        { month: "May", bookmarks: 30 },
        { month: "Jun", bookmarks: 26 },
    ];

    const departmentData = {
        labels: Object.keys(departmentRatings),
        datasets: [
            {
                label: "Average Rating",
                data: Object.values(departmentRatings),
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
        ],
    };

    const bookmarkData = {
        labels: bookmarkTrends.map((item) => item.month),
        datasets: [
            {
                label: "Bookmarks",
                data: bookmarkTrends.map((item) => item.bookmarks),
                backgroundColor: "rgba(153, 102, 255, 0.6)",
                borderColor: "rgba(153, 102, 255, 1)",
                borderWidth: 2,
                fill: false,
                tension: 0.4,
            },
        ],
    };

    const [tab, setTab] = useState("");
    return (
        <div className="dashboard flex w-full h-screen">
            <Sidebar />
            <div className="p-6 w-4/5 overflow-y-auto">
                <h1 className="text-2xl font-bold mb-6">Analytics Dashboard</h1>
                <div className="flex justify-around mb-6 gap-8">
                    <button className="text-xl font-semibold" onClick={() => setTab('department')}>Department Rating</button>
                    <button className="text-xl font-semibold" onClick={() => setTab('bookmark')}>Bookmark Trends</button>
                </div>

                <div className="w-full">
                    {tab === 'department' && (
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h2 className="text-xl font-semibold mb-4">📊 Department Ratings</h2>
                            <Bar data={departmentData} />
                        </div>
                    )}

                    {tab === 'bookmark' && (
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h2 className="text-xl font-semibold mb-4">📈 Bookmark Trends</h2>
                            <Line data={bookmarkData} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
