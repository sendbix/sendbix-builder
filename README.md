# sendbix-builder

## Introduction

Email render and preview container.

## usage

```sh
$ npm install --save sendbix-builder
```

or

```sh
$ yarn add sendbix-builder
```

```js
import React from 'react';
import { BlockManager } from 'sendbix-base';
import { EmailEditor, EmailEditorProvider } from 'sendbix-builder';
import 'sendbix-builder/lib/style.css';

const initialValues = {
  subject: 'Welcome to Easy-email',
  subTitle: 'Nice to meet you!',
  content: BlockManager.getBlockByType(BasicType.PAGE).create({}),
};

export function App() {
  return (
    <EmailEditorProvider
      data={initialValues}
      height={'calc(100vh - 72px)'}
    >
      {({ values }) => {
        return <EmailEditor />;
      }}
    </EmailEditorProvider>
  );
}
```
