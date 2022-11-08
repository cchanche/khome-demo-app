import React from 'react';
import Header from './Header';

const Page = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex h-screen bg-gray-900">
      <div className="flex flex-1 flex-col overflow-hidden align-middle">
        <Header />
        <div className="flex h-full rounded-t-3xl bg-blue-900 pt-5">
          <main className="flex w-full flex-col overflow-y-auto  overflow-x-hidden ">
            <div className="mx-auto flex w-11/12">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Page;
