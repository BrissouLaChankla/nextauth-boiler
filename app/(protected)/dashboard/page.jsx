import { logout } from "@/actions/auth";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/LogoutBtn";
export default function Dashboard() {
  return (
    <div className="p-8 max-w-4xl mx-auto text-center flex justify-center items-center flex-col h-screen">
      <h1 className="text-5xl font-black">Dashboard</h1>
      <p className="text-gray-600 mt-4">
        Bienvenue dans votre espace sécurisé !
      </p>
      <LogoutButton />
    </div>
  );
}
