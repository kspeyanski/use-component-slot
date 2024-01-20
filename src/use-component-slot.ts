import React from "react";

export type ComponentSlot<P = unknown> =
  | React.ComponentType<P>
  | React.ReactElement<Partial<P>>
  | string;

const EMPTY_COMPONENT = () => null;
const FRAGMENT_COMPONENT: any = ({
  children,
}: {
  children?: React.ReactNode;
}) => children;

export const useComponentSlot = <P = unknown>(
  slot: ComponentSlot<P> | null | typeof React.Fragment
): [React.ComponentType<P> | string, Partial<P>] => {
  if (slot === null) {
    return [EMPTY_COMPONENT, {} as Partial<P>];
  } else if (slot === React.Fragment || slot === undefined) {
    return [FRAGMENT_COMPONENT, {} as Partial<P>];
  } else if (React.isValidElement(slot)) {
    return [slot.type, slot.props as P];
  }

  return [slot as any, {} as P];
};
