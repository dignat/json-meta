import React, { useEffect, useState } from 'react';
import { Note } from '@contentful/f36-components';
import { SidebarExtensionSDK } from '@contentful/app-sdk';
import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';

const Sidebar = () => {
  const sdk = useSDK<SidebarExtensionSDK>();
  const [characterCount, setCharacterCount] = useState(0);

  useEffect(() => {
    sdk.window.startAutoResizer();
    const meta = sdk.entry.fields.meta.getValue();
    setCharacterCount(meta.wordCount)
  })
  /*
     To use the cma, inject it as follows.
     If it is not needed, you can remove the next line.
  */
  // const cma = useCMA();

  return <Note>Chracter Count: {characterCount}</Note>;
};

export default Sidebar;
