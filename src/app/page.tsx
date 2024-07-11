import dynamic from "next/dynamic";

const ClientComponent = dynamic(() => import("./some-component"), {
  ssr: false,
});

export default async function Home() {
  return (
    <main>
      <h2>React</h2>
      <ClientComponent />
    </main>
  );
}
