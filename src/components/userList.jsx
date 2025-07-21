import { useEffect,useState } from "react";
import { useUserStore } from "../store/userStore";
import UserCard from "./userCard";
export default function UserList() {
  const { users, fetchUsers } = useUserStore();
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  // useEffect(() => {
  //   fetchUsers();
  // }, [fetchUsers])

  const filteredUsers = users.filter(user => {
    return (
      (name ? user.firstName.toLowerCase().includes(name.toLowerCase()) || user.lastName.toLowerCase().includes(name.toLowerCase()) : true) &&
      (email ? user.email.toLowerCase().includes(email.toLowerCase()) : true) &&
      (department ? user.department === department : true)
    );
  })
  return (
    <div className="user-list-container flex flex-col items-center w-4/5 p-4 overflow-y-auto gap-8 bg-gray-200">

      <div className="w-full gap-4 flex ">
        <input className="shadow h-10 w-1/3 p-2 rounded-md bg-gray-200" value={name} onChange={(e)=>setName(e.target.value)} placeholder="enter the name"/>
        <input className="shadow h-10 w-1/3 p-2 rounded-md bg-gray-200" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="enter the email"/>
        <select className="shadow h-10 w-1/3 p-2 rounded-md bg-gray-200" value={department} onChange={(e)=>setDepartment(e.target.value)} placeholder="select the department">
          <option value="">Select Department</option>
          <option value="HR">HR</option>
          <option value="Engineering">Engineering</option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
          <option value="Finance">Finance</option>  
        </select>
      </div>
      <div className="user-list grid grid-cols-3 justify-center gap-4 ">
        {filteredUsers.length == 0 ? <p>Loading...</p> : filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}