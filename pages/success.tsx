import Link from "next/link";
import React from "react";

function Success() {
  return (
    <div className="flex items-center justify-center">
      <div>
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-4xl font-bold">Thank You !</h1>
          <p>
            Thank you for your interest! Check your email for a link to the
            guide.
          </p>
          <Link href="/" className="text-sm font-medium">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Success;
