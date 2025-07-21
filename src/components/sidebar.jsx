import { Link } from "react-router-dom";
import { useUserStore } from "../store/userStore";
import Bookmarks from "./Bookmarks";
import { IoArrowBackCircle } from "react-icons/io5";

export default function Sidebar() {
    const { isBookmarkUser, setIsBookmarkUser } = useUserStore();
    return (
        <aside className="sidebar bg-gray-800 text-white p-4 w-1/5 flex-col flex text-2xl gap-4">
            <div className="flex justify-center gap-2 items-center" >
                <Link to="/">
                    <button className="text-yellow-500 rounded-full hover:text-yellow-600 text-3xl">
                        <IoArrowBackCircle />
                    </button>
                </Link>
                <h2 className="text-3xl font-bold">HR-DashBoard</h2>

            </div>
            
            <ul className="flex flex-col gap-4">
                <Link to="/bookmarks">
                    <button className= "w-full bg-gray-500 px-3 py-1 rounded text-white hover:bg-yellow-500 focus:bg-yellow-600 text-lg">
                        View Bookmarks
                    </button>
                </Link>
                <Link to="/analytics">
                    <button className= "w-full bg-gray-500 px-3 py-1 rounded text-white hover:bg-yellow-500 focus:bg-yellow-600 text-lg">
                        Analytics
                    </button>
                </Link>
            </ul>
        </aside>
    );
}