import Link from "next/link";
import React from "react";

function DesktopLink(props: any) {
  const { children, linkText, hrefAttr } = props;
  return (
    <>
      <li className="flex relative underline-effect mx-4 py-3">
        {children}
        <Link href={hrefAttr}>{linkText}</Link>
      </li>
    </>
  );
}

export default DesktopLink;
