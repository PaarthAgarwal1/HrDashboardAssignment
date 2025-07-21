import { useUserStore } from "../store/userStore";
import { BsBookmarkCheck } from "react-icons/bs";
import { BsBookmarkCheckFill } from "react-icons/bs";
import Rating from "./rating";
import { Link, useNavigate } from "react-router-dom";

export default function UserCard({ user }) {
    const { setBookmarkUser } = useUserStore();
    const navigate = useNavigate();

    const goToProfile = () => {
        navigate('/employee', { state: { user } });
    }

    return (
        <div className="user-card bg-white boarder p-4 m-2 shadow-lg rounded-lg w-78 h-60 gap-2 flex flex-col justify-between">
            <div>
                <h2 className="text-xl font-semibold">{user.firstName} {user.lastName}</h2>
                <p className="">Email: {user.email}</p>
                <p>Age : {user.age}</p>
                <p>Department: {user.department}</p>
                <p>Rating: <Rating rating={user.rating} /></p>
            </div>

            <div>
                <button className="bg-blue-500 text-white text-sm px-2 py-1 rounded" onClick={goToProfile}>View Profile</button>

                <button className="text-xl rounded ml-2 text-yellow-500 hover:text-yellow-600" onClick={() => setBookmarkUser(user)}>{!user.bookmark ? <BsBookmarkCheck /> : <BsBookmarkCheckFill />}</button>
                <button className="bg-red-500 text-white text-sm px-2 py-1 rounded ml-2">Promote</button>
            </div>
        </div>
    );
}