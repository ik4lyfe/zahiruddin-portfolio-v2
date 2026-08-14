import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-24 text-center">
      <div className="text-xs uppercase tracking-widest text-gold mb-4">404</div>
      <h1 className="font-serif text-4xl md:text-5xl text-navy dark:text-gold mb-6">
        This page doesn&apos;t exist.
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
        Like a process nobody documented. But don&apos;t worry — I know where everything is.
      </p>
      <Link href="/" className="px-8 py-3 bg-navy dark:bg-gold text-white dark:text-[#f5f5f5] font-medium rounded-sm hover:opacity-90 transition-opacity">
        Back to home
      </Link>
    </div>
  );
}
