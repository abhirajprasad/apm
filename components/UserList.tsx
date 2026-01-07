'use client';

interface User {
  name: string;
  avatar?: string;
}

const users: User[] = [
  { name: 'a1lon9' },
  { name: 'orangie' },
  { name: 'CookerFlips' },
  { name: 'devfun' },
  { name: 'notthreadguy' },
  { name: 'toly' },
  { name: 'Vibhu' },
  { name: '0xmert' },
];

export default function UserList() {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {users.map((user, index) => (
        <div
          key={index}
          className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
        >
          <span className="text-sm md:text-base text-white/90">{user.name}</span>
        </div>
      ))}
    </div>
  );
}

