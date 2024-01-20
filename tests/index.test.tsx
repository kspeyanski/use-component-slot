import React from "react";
import { expect, test, afterEach } from "vitest";
import { useComponentSlot } from "../src";
import { render, cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

test("should handle custom component", () => {
  const CustomComponent = (props: { className?: string }) => {
    return <button {...props}>test</button>;
  };
  const [Component, props] = useComponentSlot(CustomComponent);

  expect(Component).toEqual(CustomComponent);
  expect(props).toEqual({});
});

test("should handle custom react.element with props", () => {
  const CustomComponent = (props: { className?: string }) => {
    return <button {...props}>test</button>;
  };
  const [Component, props] = useComponentSlot(
    <CustomComponent className="test" />
  );

  expect(Component).toEqual(CustomComponent);
  expect(props).toEqual({ className: "test" });
});

test("should handle custom component with children", () => {
  const CustomComponent = (props: { children?: React.ReactNode }) => {
    return <button>{props.children}</button>;
  };
  const [Component, props] = useComponentSlot(
    <CustomComponent>test</CustomComponent>
  );

  expect(Component).toEqual(CustomComponent);
  expect(props).toEqual({ children: "test" });
});

test("should handle element as string", () => {
  const [Component, props] = useComponentSlot("button");
  const { asFragment } = render(<Component {...props} />);

  expect(Component).toEqual("button");
  expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  <button />
</DocumentFragment>`);

  expect(props).toEqual({});
});

test("should handle custom component with children and props", () => {
  const CustomComponent = (props: {
    className?: string;
    children?: React.ReactNode;
  }) => {
    return <button {...props}>{props.children}</button>;
  };
  const [Component, props] = useComponentSlot(
    <CustomComponent className="test">test</CustomComponent>
  );

  expect(Component).toEqual(CustomComponent);
  expect(props).toEqual({ className: "test", children: "test" });
});

test("should handle `null` as value and render nothing", () => {
  const [Component, props] = useComponentSlot(null);
  const { asFragment } = render(
    <span>
      <Component {...props} />
    </span>
  );

  expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  <span />
</DocumentFragment>`);

  expect(props).toEqual({});
});

test("should handle `fragment` as value and render it's children without interfering the props", () => {
  const [Component, props] = useComponentSlot(React.Fragment);
  const { asFragment } = render(
    <span>
      <Component {...props}>test</Component>
    </span>
  );

  expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  <span>
    test
  </span>
</DocumentFragment>`);

  expect(props).toEqual({});
});
