# React Custom Hooks

Custom hooks for React to make life easy!

## Installation

You can easily install React Custom Hooks by yarn, npm or pnpm.

#### yarn
```bash
yarn add @arshazar/react-custom-hooks
```

#### npm
```bash
npm i @arshazar/react-custom-hooks
```

#### pnpm
```bash
pnpm add @arshazar/react-custom-hooks
```



**Table of Hooks**

<!-- prettier-ignore-start -->

- [useUpdate](#useUpdate)
- [useDebounce](#useDebounce)
- [useTimeout](#useTimeout)
- [useThrottle](#useThrottle)




<!-- prettier-ignore-end -->

## useUpdate

usage: `useUpdate(callback, [dependencies])`

```js
import { useUpdate } from '@arshazar/react-custom-hooks';

useUpdate(() => {
   setSource(images)
}, [images])
```

## useDebounce

usage: `useDebounce(value, delay, callback)`

```js
import { useDebounce } from '@arshazar/react-custom-hooks';

const debounceValue = useDebounce(value, 1, handleChangeColor);
```

## useTimeout

usage: `useTimeout(callback, delay)`

```js
import { useTimeout } from '@arshazar/react-custom-hooks';

useTimeout(handleFadeAnimation, 200)
```

## useThrottle

usage: `useThrottle(callback, period, delay)`

```js
import { useThrottle } from '@arshazar/react-custom-hooks';

useThrottle(handleChangeCover, 5000, 10)
```
