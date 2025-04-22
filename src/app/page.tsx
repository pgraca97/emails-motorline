import Link from 'next/link';

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center py-24">
      <div className="container text-center">
        <h1 className="text-3xl font-bold">
          React Email Examples
        </h1>
        <div className="flex flex-col items-center gap-4 justify-center mt-8">
          <Link href="/send">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-sm hover:bg-blue-600 transition">
              Send the account activation email
            </button>
          </Link>
          <Link href="/send2">
            <button className="px-4 py-2 bg-green-500 text-white rounded-sm hover:bg-green-600 transition">
              Send an email the pass recovery email
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
