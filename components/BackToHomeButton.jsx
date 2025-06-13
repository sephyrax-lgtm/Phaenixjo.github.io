// components/BackToHomeButton.jsx
"use client";
import Link from "next/link";

export default function BackToHomeButton() {
  return (
    <div style={{ marginTop: "20px" }}>
      <Link href="/">
        <button style={{
          backgroundColor: "#00ff7f",
          color: "#000",
          padding: "10px 20px",
          borderRadius: "10px",
          fontWeight: "bold",
          cursor: "pointer",
        }}>
          ← Retour à l'accueil
        </button>
      </Link>
    </div>
  );
}
