import { useUserStore } from "../store/userStore"
import UserCard from "./userCard";
import Sidebar from "./sidebar";
import { useEffect } from "react";
export default function Bookmarks() {
    const { bookmarksUser } = useUserStore();
    useEffect(() => { }, [bookmarksUser]);

    return (
        <div className="bookmarks-page flex w-full h-screen">
            <Sidebar />
            {bookmarksUser.length === 0 ? (
                <p className="text-center text-2xl mt-10">No Bookmarks Found</p>
            ) : <div className="bookmarks-container flex flex-col items-center w-4/5 p-4 overflow-y-auto gap-8 bg-gray-200">
                <h1 className="text-3xl font-bold text-center">Bookmarked Users</h1>
                <div className="grid justify-center grid-cols-3">
                    {bookmarksUser.map((user, index) => (
                        <UserCard key={index} user={user} />
                    ))}
                </div>
            </div>}
        </div>
    )
}