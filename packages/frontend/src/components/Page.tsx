import React from 'react';
import Header from './Header';

const Page = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-1 flex-col overflow-hidden align-middle">
        <Header />

        <div className="absolute top-14 flex h-6 w-full rounded-t-full bg-indigo-900"></div>
        <div className="flex h-full">
          <main className="flex w-full flex-col overflow-y-auto  overflow-x-hidden ">
            <div className="flex h-6 w-full bg-gray-900" />
            <div className="mx-auto flex w-11/12">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Page;
