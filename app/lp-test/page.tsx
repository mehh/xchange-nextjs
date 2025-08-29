import Link from "next/link";

export default function LPTest() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="mb-8 text-4xl font-bold text-black">TMOD Landing Pages</h1>
        <div className="space-y-4">
          <div>
            <Link 
              href="/lp" 
              className="inline-block rounded-lg bg-[#595E48] px-8 py-4 text-white transition-colors hover:bg-[#4a5139]"
            >
              View New LP Page
            </Link>
          </div>
          <div>
            <Link 
              href="/" 
              className="inline-block rounded-lg border border-[#595E48] bg-transparent px-8 py-4 text-[#595E48] transition-colors hover:bg-[#595E48] hover:text-white"
            >
              View Original Landing Page
            </Link>
          </div>
        </div>
        <p className="mt-8 text-gray-600">
          The LP page is a clean, responsive version of the landing page design.
        </p>
      </div>
    </div>
  );
}
