The `useComponentSlot` hooks allows you to easily implement component slots in your React components.

## Installation

pnpm:

```bash
pnpm add use-component-slot
```

```bash
npm install use-component-slot
```

yarn:

```bash
yarn add use-component-slot
```

## API

The `useComponentSlot` accepts a single argument, which can be either:

- [Custom component](#custom-components)
- [React element](#react-elements)
- [String](#strings)

```jsx
import { useComponentSlot } from "use-component-slot";

const Form = (props) => {
  const [Input, inputProps] = useComponentSlot(props.input || "input");

  return (
    <form>
      <Input type="text" name="name" {...inputProps} />
      <Input type="text" name="surname" {...inputProps} />
      <button>submit</button>
    </form>
  );
};
```

## Usage

There are a couple of use cases for the `useComponentSlot`.

### Custom Component

You can utilize the `useComponentSlot` hook to create custom components that can be used to either override or extend the default rendering.

```jsx
const CustomInput = (props) => {
  return (
    <input
      {...props}
      placeholder={
        props.name === "name" ? "Enter your name" : "Enter your surname"
      }
    />
  );
};

function App() {
  return <Form input={CustomInput} />;
}
```

### React Elements

You can also pass a React element to the `useComponentSlot` hook. This is useful when you want to override the default rendering of a component.

```jsx
function App() {
  return (
    <Form
      input={<input style={{color: "red"}}>}
    />
  );
}
```

### Strings

You can also pass a string to the `useComponentSlot` hook. This is useful when you want to override the default rendering of a component.

```jsx
function App() {
  return <Form input="textarea" />;
}
```
