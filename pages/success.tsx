import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdKeyboardBackspace } from 'react-icons/md';
import success from '../public/assets/success.png';

function Success() {
  return (
    <>
      <Head>
        <title>Perfect SAP | Email Confirmation</title>
        <link rel="icon" href="/assets/PerfectSAP.ico" />
      </Head>
      <div>
        <div className="flex items-center justify-center">
          <div>
            <div className="flex flex-col justify-center items-center space-y-5 h-screen">
              <Image
                width="128px"
                height="128px"
                layout="intrinsic"
                src={success}
              ></Image>
              <h1 className="text-4xl font-bold">Thank You !</h1>
              <p className="text-xl">
                We got your mail! We will get back to you as soon as possible.
              </p>
              <button className="bg-blue-500 text-xl p-3 rounded text-white flex items-center">
                <span>
                  <MdKeyboardBackspace size={30} />
                </span>
                <Link href="/" className="text-sm font-medium">
                  Home
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Success;
