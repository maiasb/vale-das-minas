import { Link } from "react-router";

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF7ED] text-center">
      <h1 className="text-6xl font-bold text-orange-500 mb-4">404</h1>
      <p className="text-gray-600 mb-6">
        Oops! A página que você tentou acessar não existe.
      </p>
      <Link
        to="/"
        className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
      >
        Voltar para o início
      </Link>
    </div>
  );
}
