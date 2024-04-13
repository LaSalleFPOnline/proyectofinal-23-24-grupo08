import { Input } from "../Input/Input";
import { FormProvider, useForm } from "react-hook-form";
import {
  name_validation,
  email_validation,
  password_validation,
  username_validation,
} from "../Input/helpers";
import { useState } from "react";
import { Button } from "../button/Button";
import { useNavigate } from "react-router-dom";

// TODO: refactor this component to use the useUser hook

export const FormRegister = () => {
  const methods = useForm();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    methods.reset();
    setSuccess(true);

    if (Object.keys(data).length) {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        username: data.username,
        firstName: data.name,
        email: data.email,
        password: data.password,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:9000/api/user", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
    }

    console.log("User has been registered successfully");
    console.log("Redirecting to login page");
    console.log(data);
    navigate("/login");
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={(e) => e.preventDefault()} noValidate autoComplete="off">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-2">Welcome</h1>
          <p className="text-sm text-gray-500	font-bold">
            Let's start with your data
          </p>
        </div>
        <div className="border-black">
          <Input {...name_validation} />
          <Input {...username_validation} />
          <Input {...email_validation} />
          <Input {...password_validation} />
        </div>
        <div className="mt-5">
          {success ? console.log("Form has been submitted successfully") : null}
          <Button onClick={onSubmit} text="Register" />
        </div>
      </form>
    </FormProvider>
  );
};
