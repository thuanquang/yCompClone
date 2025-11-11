import Image from "next/image";
import Hello from "../components/hello";
import Albums from "../components/albums";
export default function Home() {
  console.log("what am i doing here? -- SERVER/CLIENT");
  return (
    <>
    <h1 className="text-3xl font-bold underline">Hello World</h1>
    <Hello/>    
    <Albums/>
    </>
  );
}
