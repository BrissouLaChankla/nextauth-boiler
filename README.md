# 🚀 Next.js 15 - Auth JWT (MongoDB + Server Actions + Cookies)

Un **boilerplate simple et sécurisé** pour l'authentification avec **Next.js 15**, basé sur :

- 🔒 **JWT + Cookies HTTP-Only**
- ⚡ **Server Actions** (pas besoin d'API Routes)
- 🛡 **MongoDB + Mongoose** (gestion des utilisateurs)

---

## 📦 Installation

### 1️⃣ **Cloner le repo & installer les dépendances**

```sh
git clone https://github.com/ton-repo/next15-jwt-auth-boilerplate.git
cd next15-jwt-auth-boilerplate
npm install
```

### 2️⃣ **Configurer `.env`**

```ini
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
JWT_SECRET=super-secret-key
```

### 3️⃣ **Lancer le projet**

```sh
npm run dev
```

---

## 📌 Fonctionnement

1️⃣ **Inscription / Connexion**

- Le mot de passe est hashé avec **bcrypt**
- Un **JWT est généré et stocké en cookie httpOnly**

2️⃣ **Accès aux pages protégées**

- Vérification **côté serveur avant le rendu**
- **Si non connecté → redirection vers `/login`**

3️⃣ **Déconnexion**

- Suppression du cookie JWT

---

## 📂 Structure du projet

```
app/
│── (public)/          # Pages accessibles à tous (login, register)
│── (protected)/       # Pages protégées (dashboard, profile)
│   ├── layout.js      # Vérifie l'authentification avant d'afficher les pages
│── actions/           # Server Actions (login, register, logout)
│── lib/               # Connexion MongoDB, gestion des JWT
│── models/            # Modèle utilisateur MongoDB
│── middleware.js      # (Optionnel) Vérification d'authentification côté serveur
```

---

## 🛠 Dépendances utilisées

- **Next.js 15** - Framework React
- **MongoDB + Mongoose** - Base de données NoSQL
- **bcrypt** - Hashage des mots de passe
- **jsonwebtoken** - Gestion des JWT

---

## 🚀 Améliorations possibles

- 🔄 **Refresh Token**
- 🏷 **Rôles utilisateur (admin, user, etc.)**
- 📧 **Mot de passe oublié / réinitialisation**

---

**Fais-en ce que tu veux !** 🚀🔥
