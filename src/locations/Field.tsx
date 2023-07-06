import React, { useEffect, useState } from 'react';
import { Note } from '@contentful/f36-components';
import { FieldExtensionSDK } from '@contentful/app-sdk';
import {  useCMA, useSDK } from '@contentful/react-apps-toolkit';

const Field = () => {
  const sdk = useSDK<FieldExtensionSDK>();
  const cma = useCMA();

  const [characterCount, setCharacterCount] = useState(0);
  

  useEffect(() => {
    sdk.window.startAutoResizer();
    const referencePost = sdk.entry.fields.post.getValue();

    cma.entry.get({entryId: referencePost.sys.id}).then((data) => {
        const title = data.fields.title['en-US'];
        setCharacterCount(title.length);
        sdk.field.setValue({wordCount: title.length})
    });
  })
  /*
     To use the cma, inject it as follows.
     If it is not needed, you can remove the next line.
  */
  // const cma = useCMA();
  // If you only want to extend Contentful's default editing experience
  // reuse Contentful's editor components
  // -> https://www.contentful.com/developers/docs/extensibility/field-editors/
  return (
    <>
      <Note>
        Character count: {characterCount}
      </Note>
    </>
  );
};

export default Field;
