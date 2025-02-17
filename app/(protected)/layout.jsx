import { redirect } from "next/navigation";
import { getUser } from "@/actions/auth";

export default async function ProtectedLayout({ children }) {
  const result = await getUser(); // Vérifie l'authentification côté serveur

  if (result.error) {
    redirect("/login"); // Redirige avant d'afficher quoi que ce soit
  }

  return <>{children}</>; // Affiche la page si l'utilisateur est authentifié
}
