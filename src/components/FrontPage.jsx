import Button from "./Button";

function FrontPage() {
  return (
    <div className="bg-[url('code-background-3.jpg')] bg-cover bg-center h-screen w-full text-white px-72 py-40">
      <h1 className=" text-9xl font-bold">
        Hi !
        <br /> I am Yiwen Wang
      </h1>
      <p className="text-gray-300 py-6 text-xl">
        Need a talented full-stack developer? Let me turn your ideas into
        reality.
      </p>
      <div className="flex flex-row gap-4">
        <Button variation="secondary">Hire me</Button>
        <Button variation="secondary">Download resume</Button>
      </div>
    </div>
  );
}

export default FrontPage;
