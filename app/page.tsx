import UsersList from "@/components/Users";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-end justify-center px-20 gap-4">
      <Link className="bg-blue-500 px-8 py-2 mt-4 rounded-md text-white" href="/add">Add user</Link>
      <UsersList/>
    </div>
  );
}
