import { Form } from "./components/form";
import { Input, InputProps } from "./components/input";

const CustomInput = (props: InputProps) => {
  return <Input {...props} style={{ background: "red" }} />;
};

function App() {
  return (
    <>
      <h3>defaults</h3>
      <Form />
      <h3>custom input as component</h3>
      <Form firstInput={CustomInput} />
      <h3>custom input as jsx</h3>
      <Form firstInput={<Input style={{ background: "blue" }} />} />
      <h3>custom input as string</h3>
      <Form firstInput={"textarea"} />
    </>
  );
}

export default App;
