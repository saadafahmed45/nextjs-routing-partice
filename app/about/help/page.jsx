"use client";

export default function Help() {
  const saadaf = () => {
    console.log("click me");
    alert("click me");
  };
  return (
    <div className='text-center'>
      <h2 className='text-3xl '>Help page</h2>
      <button
        className='bg-blue-700 p-2  text-white mt-3'
        onClick={() => saadaf()}>
        {" "}
        click me
      </button>
    </div>
  );
}
