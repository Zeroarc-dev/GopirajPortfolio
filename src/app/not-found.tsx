import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center text-paper">
      <p className="h-display text-[32vw] text-accent sm:text-[14rem]">404</p>
      <h1 className="mt-2 text-xl font-bold">This page got cut from the final edit.</h1>
      <Link href="/" className="btn-accent mt-8">
        Back to home
      </Link>
    </main>
  );
}
