import React, { ReactChildren, ReactChild } from 'react';

interface AuxProps {
  children: React.ReactNode;
}

function Title({ children }: AuxProps) {
  return <h1 className="text-2xl pb-4">{children}</h1>;
}

export default Title;
