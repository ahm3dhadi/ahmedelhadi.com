import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <div className="container py-6">
        <Image src={"images/logo.svg"} alt="Vercel Logo" width={200} height={200} />
      </div>
    </div>
  );
}
