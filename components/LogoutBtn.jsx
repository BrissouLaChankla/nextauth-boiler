"use client";

import { logout } from "@/actions/auth";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await logout();
    router.push("/login"); // Redirection après la suppression du cookie
  }

  return <button onClick={handleLogout}>Se déconnecter</button>;
}
