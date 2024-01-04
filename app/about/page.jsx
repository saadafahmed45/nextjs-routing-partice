import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <Link href='/about/help'>help</Link>
      <h2 className='text-3xl text-center'>about</h2>
    </div>
  );
}
