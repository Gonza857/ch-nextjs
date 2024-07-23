import Image from "next/image";

const links = ["link1", "link2", "link3", "link4"];

export default function Home() {
  return (
    <>
      <nav className="w-full bg-slate-800 h-20 flex items-center border border-white justify-between">
        <h1 className="border border-red-600">Logo</h1>
        <ul className="flex gap-5">
          {links.map((link) => (
            <li>
              <a>{link}</a>
            </li>
          ))}
        </ul>
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-500">
        <div>
          <h1>Hello World!</h1>
        </div>
      </main>
      <footer className="w-full h-40">
        <h1>Footer</h1>
      </footer>
    </>
  );
}
