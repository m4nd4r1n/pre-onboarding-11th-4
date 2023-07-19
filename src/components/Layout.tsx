import type { PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <main className='mx-auto h-screen max-w-lg'>{children}</main>;
};

export default Layout;
