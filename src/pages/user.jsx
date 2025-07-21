import { useLocation } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Rating from "../components/rating";
import { useState } from "react";

export default function UserProfile() {
    const location = useLocation();
    const user = location.state?.user;
    const [tab, setTab] = useState('overview');

    if (!user) {
        return <div className="text-red-500 text-center mt-10">No user data provided.</div>;
    }

    const feedbacks = [
        {
            id: 1,
            reviewer: "Amit Sharma",
            date: "2025-06-15",
            comment: "Excellent work ethic and attention to detail. Always meets deadlines with high quality output.",
            rating: 5
        },
        {
            id: 2,
            reviewer: "Neha Verma",
            date: "2025-05-30",
            comment: "Great team player but needs improvement in communication during meetings.",
            rating: 4
        }
    ];


    const departmentProjects = {
        "Engineering": [
            {
                id: 1,
                name: "AI Model Optimization",
                description: "Improved model efficiency by 35% using TensorRT.",
                duration: "6 months",
                status: "Completed"
            },
            {
                id: 2,
                name: "Microservices Migration",
                description: "Refactored monolithic app into microservices.",
                duration: "4 months",
                status: "In Progress"
            }
        ],

        "Sales": [
            {
                id: 3,
                name: "CRM Revamp",
                description: "Integrated new features in Salesforce CRM.",
                duration: "3 months",
                status: "Completed"
            },
            {
                id: 4,
                name: "Quarterly Sales Campaign",
                description: "Led Q2 digital campaign resulting in 22% revenue growth.",
                duration: "2 months",
                status: "Completed"
            }
        ],

        "Marketing": [
            {
                id: 5,
                name: "Brand Awareness Campaign",
                description: "Managed influencer strategy on Instagram and YouTube.",
                duration: "5 months",
                status: "Completed"
            },
            {
                id: 6,
                name: "Product Launch Strategy",
                description: "Planned and executed launch of the new mobile app.",
                duration: "1 month",
                status: "In Progress"
            }
        ],

        "HR": [
            {
                id: 7,
                name: "Diversity Training Program",
                description: "Rolled out company-wide DEI training initiative.",
                duration: "2 months",
                status: "Completed"
            },
            {
                id: 8,
                name: "Employee Engagement Survey",
                description: "Designed and analyzed quarterly feedback survey.",
                duration: "1 month",
                status: "Completed"
            }
        ],

        "Finance": [
            {
                id: 9,
                name: "Expense Tracker Automation",
                description: "Built internal tool to automatically audit expenses.",
                duration: "3 months",
                status: "In Progress"
            },
            {
                id: 10,
                name: "Annual Budget Forecasting",
                description: "Created data-driven forecast model for FY25.",
                duration: "4 months",
                status: "Completed"
            }
        ]
    };


    return (
        <div className="dashboard flex w-full h-screen">
            <Sidebar />
            <div className="p-6">
                <h1 className="text-3xl font-bold mb-4">{user.firstName} {user.lastName}</h1>
                <img src={user.image} alt="User" className="w-32 rounded-full" />
                <p className="text-lg text-gray-600 mb-2">{user.address.address}, {user.address.city}</p>
                <p className="text-lg text-gray-600 mb-2">Phone: {user.phone}</p>
                <p className="text-lg text-gray-600 mb-2">Email: {user.email}</p>

                <div className="mt-4">
                    <h2 className="text-2xl font-semibold mb-2">Performance Rating</h2>
                    <Rating rating={user.rating} />
                </div>
                <div>
                    <button className="text-xl font-semibold" onClick={() => setTab('overview')}>Overview</button>
                    <button className="text-xl font-semibold mx-6" onClick={() => setTab('projects')}>Projects</button>
                    <button className="text-xl font-semibold " onClick={() => setTab('feedback')}>Feedback</button>
                </div>
                <div>
                    {tab === 'overview' && (
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold">Overview</h3>
                            <div>
                                <p className="text-lg text-gray-600">Department: {user.department}</p>
                                <p className="text-lg text-gray-600">Age: {user.age}</p>
                                <p className="text-lg text-gray-600">Height: {user.height}</p>
                                <p className="text-lg text-gray-600">Weight: {user.weight}</p>
                                <p className="text-lg text-gray-600">Title: {user.company.title}</p>
                            </div>
                        </div>
                    )}
                    {tab === 'projects' && (
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold">Projects</h3>
                            <ul className="list-disc pl-5">
                                {departmentProjects[user.department]?.map(project => (
                                    <li key={project.id} className="mb-2">
                                        <strong>{project.name}</strong> - {project.description} <br />
                                        <span className="text-sm text-gray-500">Duration: {project.duration} | Status: {project.status}</span>
                                    </li>
                                )) || <p>No projects found for this department.</p>}
                            </ul>
                        </div>
                    )}
                    {tab === 'feedback' && (
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold">Feedback</h3>
                            <ul>
                                {feedbacks.map(feedback => (
                                    <li key={feedback.id} className="mb-4 p-4 border rounded-lg">
                                        <p className="text-sm text-gray-500">{feedback.date} - {feedback.reviewer}</p>
                                        <p className="text-lg">{feedback.comment}</p>
                                        </li>
                                    )) || <p>No feedback available.</p>}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
