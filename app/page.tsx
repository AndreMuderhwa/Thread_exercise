import { Button } from "@/components/ui/button";
import { getAuthSession } from "@/lib/auth";
import Image from "next/image";

export default async function Home() {
  const session= await getAuthSession();
  return (
   <div>
    <p>
      {JSON.stringify(session,null,2)}
    </p>
        <Button>Click me</Button>
   </div>
  );
}
