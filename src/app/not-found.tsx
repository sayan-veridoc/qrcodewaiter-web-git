import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="error-section">
      <div className="container mx-auto sm:px-4">
        <div className="grid grid-cols-12 text-center">
          <div className="col-span-12 lg:w-full pr-4 pl-4 text-center">
            <Image
              src="/img/404pageimage.webp"
              className="object-fill m-auto tab:w-[15%] mb-7"
              alt="VeridocLogbook"
              width={650}
              height={550}
            />

            <Button asChild type="button">
              <Link href="/">Go to Home Page</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
