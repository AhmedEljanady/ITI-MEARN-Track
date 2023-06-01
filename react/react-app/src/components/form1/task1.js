// import { Button, Input } from "@mui/material";
import { useForm } from "react-hook-form";

export default function Form1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
  } = useForm();
  const onsubmit = (data) => console.log(data);
  // console.log(watch("password"));
  // const pass = register({ name: "pass" });
  let type = "password";
  // const togglePass = () => {
  //   if (type === "password") {
  //     type = "text";
  //   } else {
  //     type = "password";
  //   }
  // };
  return (
    <form onSubmit={handleSubmit(onsubmit)} className="my-5">
      <input
        className="col d-block"
        {...register("email", {
          required: "this is required",
          pattern: {
            value: /[A-Za-z]+@[A-Za-z]+\.com/,
            message: "wrong pattern",
          },
        })}
      />
      <p>{errors.email?.message}</p>
      <input
        className="col d-block"
        type={type}
        {...register("password", {
          required: "this is required",
          minLength: {
            value: 8,
            message: "min length is 8",
          },
        })}
      />
      <p>{errors.password?.message}</p>
      {/* <input  {...register("age", { min: 18, max: 99 })} /> */}
      {/* <Button
        variant="outlined"
        onClick={() => {
          togglePass();
        }}
      >
        see
      </Button> */}
      <input type="submit" className="col d-block" />
    </form>
  );
}
