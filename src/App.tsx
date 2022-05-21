import React, { useCallback } from "react";
import { useForm } from "react-hook-form";

import "./App.css";

type Inputs = {
  name: string;
  age: number;
};

const App: React.FC<Inputs> = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = useCallback((data: any) => {
    console.log(data);
  }, []);

  return (
    <div className="container">
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name..."
          className="form-control mb2"
          {...register("name", {
            required: {
              value: true,
              message: "This field is required",
            },
            minLength: {
              value: 5,
              message: "Min length is 5",
            },
          })}
        />
        {errors.name && <span>{errors.name.message}</span>}
        <input
          type="number"
          placeholder="Age..."
          className="form-control mb2"
          {...register("age", {
            required: true,
          })}
        />
        {errors.age && <span>This field is required</span>}

        <button className="btn btn-primary btn-block" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
