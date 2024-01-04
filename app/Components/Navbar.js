import React from "react";
import Link from "next/link";

export default function navbar() {
  return (
    <div>
      <nav className='m-2 p-5 flex justify-center gap-5 text-xl bg-purple-500 text-yellow-100 list-none'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/service'>Service</Link>
        </li>
      </nav>
    </div>
  );
}
