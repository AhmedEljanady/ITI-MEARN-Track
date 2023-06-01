import { Input } from "@mui/material";
// import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Form2() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // let { type, setType } = useState("password");
  const onsubmit = (data) => console.log(data);

  const password = watch("password");

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <Input
        placeholder="Email"
        {...register("email", {
          required: "this is required",
          pattern: {
            value: /[A-Za-z]+@[A-Za-z]+\.com/,
            message: "wrong pattern email",
          },
        })}
      />
      <p>{errors.email?.message}</p>
      <Input
        placeholder="Name"
        {...register("name", {
          required: "this is required",
        })}
      />
      <p>{errors.name?.message}</p>
      <Input
        placeholder="userName"
        {...register("userName", {
          required: "this is required",
          pattern: {
            value: /^\S+$/,
            message: "wrong userName pattern",
          },
        })}
      />

      <p>{errors.userName?.message}</p>
      <Input
        id="pass"
        placeholder="Password"
        type="password"
        // value={pass}
        {...register("password", {
          required: "this is required",
          minLength: {
            value: 8,
            message: "min length is 8",
          },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$/,
            message: "wrong Password pattern",
          },
        })}
      />
      <p>{errors.password?.message}</p>
      {/* TODO: confirm  */}
      <Input
        placeholder="Confirm Password"
        type="password"
        {...register("password2", {
          required: true,
          validate: (value) => value === password,
        })}
      />
      <p>
        {errors.password2 && (
          <span>
            {errors.password2.type === "required"
              ? "This field is required"
              : "Passwords must match"}
          </span>
        )}
      </p>
      {/* <Input  {...register("age", { min: 18, max: 99 })} /> */}
      {/* <Button
        variant="outlined"
        onClick={() => {
          setType(type === "password" ? "text" : "password");
        }}
      >
        see
      </Button> */}
      <Input type="submit" />
    </form>
  );
}
