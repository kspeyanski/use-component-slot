import { useComponentSlot, type ComponentSlot } from "../../../src";
import { Input, InputProps } from "./input";
import { Button, ButtonProps } from "./button";

export type FormProps = {
  firstInput?: ComponentSlot<InputProps>;
  secondInput?: ComponentSlot<InputProps>;
  submitButton?: ComponentSlot<ButtonProps>;
};

export const Form = (props: FormProps) => {
  const [FirstInput, firstInputProps] = useComponentSlot(
    props.firstInput ?? Input
  );
  const [SecondInput, secondInputProps] = useComponentSlot(
    props.secondInput ?? Input
  );
  const [SubmitButton, submitButtonProps] = useComponentSlot(
    props.submitButton ?? Button
  );

  return (
    <form>
      <FirstInput type="text" {...firstInputProps} />
      <SecondInput type="range" {...secondInputProps} />
      <SubmitButton type="submit" {...submitButtonProps}>
        Submit
      </SubmitButton>
    </form>
  );
};
