"use server";

import { connectToDatabase } from "@/lib/mongoose";
import User from "@/models/User";
import { generateToken, verifyToken } from "@/lib/jwt";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";

// Fonction pour créer un cookie sécurisé
function setAuthCookie(token) {
  cookies().set("auth_token", token, {
    httpOnly: true, // Empêche l'accès via JavaScript
    secure: process.env.NODE_ENV === "production", // Activé en production
    sameSite: "strict", // Protège contre les attaques CSRF
    maxAge: 365 * 24 * 60 * 60, // Expire en 365 jours
    path: "/",
  });
}
// Inscription
export async function register(formData) {
  await connectToDatabase();
  const { email, password } = Object.fromEntries(formData);
  if (!email || !password) return { error: "Email et mot de passe requis" };

  const existingUser = await User.findOne({ email });
  if (existingUser) return { error: "Cet email est déjà utilisé" };

  const newUser = new User({ email, password });
  await newUser.save();

  const token = generateToken(newUser);
  setAuthCookie(token); // Stocke le token dans un cookie

  return { success: true };
}

// Connexion
export async function login(formData) {
  await connectToDatabase();
  const { email, password } = Object.fromEntries(formData);
  if (!email || !password) return { error: "Email et mot de passe requis" };

  const user = await User.findOne({ email });
  if (!user) return { error: "Utilisateur non trouvé" };

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return { error: "Mot de passe incorrect" };

  const token = generateToken(user);
  setAuthCookie(token); // Stocke le token dans un cookie

  return { success: true };
}

// Déconnexion
export async function logout() {
  cookies().set("auth_token", "", { maxAge: 0, path: "/" });
  return { success: true };
}

export async function getUser() {
  const token = cookies().get("auth_token")?.value;
  if (!token) return { error: "Non authentifié" };

  const decoded = verifyToken(token);
  if (!decoded) return { error: "Token invalide ou expiré" };

  await connectToDatabase();
  const user = await User.findById(decoded.userId).select("-password");

  return user ? { user } : { error: "Utilisateur non trouvé" };
}
