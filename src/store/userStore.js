// store/userStore.js
import { create } from 'zustand';

export const useUserStore = create((set,get) => ({
  users: [],
  bookmarksUser: [],
  isBookmarkUser: false,
  setIsBookmarkUser: (value) => set({ isBookmarkUser: !value }),

  fetchUsers: async () => {
    if(get().users.length > 0) return;
    const res = await fetch('https://dummyjson.com/users?limit=20');
    const data = await res.json();

    const departments = ['HR', 'Engineering', 'Marketing', 'Sales', 'Finance'];
    const usersWithExtras = data.users.map((user) => ({
      ...user,
      department: departments[Math.floor(Math.random() * 5)],
      rating: (Math.random() * 5).toFixed(1),
      bookmark:false,
    }));

    set({ users: usersWithExtras });
  },
  setBookmarkUser: (user) => {
    const { bookmarksUser } = get();
    const {users}=get();
    if (!bookmarksUser.some((u) => u.id === user.id)) {
      set({ bookmarksUser: [...bookmarksUser, user] });
      set({users: users.map((u) => u.id === user.id ? {...u, bookmark:true} : u) });
    }else{
        set({ bookmarksUser: bookmarksUser.filter((u) => u.id !== user.id) });
        set({users: users.map((u) => u.id === user.id ? {...u, bookmark:false} : u) });
    }
  },
}));
