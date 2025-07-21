import Sidebar from "../components/sidebar";
import UserList from "../components/userList";
import { useUserStore } from "../store/userStore";

export default function Dashboard() {
    const { isBookmarkUser } = useUserStore();
    return (
        <div className="dashboard flex w-full h-screen">
            <Sidebar/>
            <UserList />   
        </div>
    );
}