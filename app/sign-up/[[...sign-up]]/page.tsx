import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col items-center mt-24">
      <SignUp />
    </div>
  );
}
