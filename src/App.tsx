import React, { useCallback } from "react";
import { useForm } from "react-hook-form";

import "./style.css";

type Inputs = {
  name?: string;
  age?: number;
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
    <div className="min-hei container d-flex flex-column justify-content-center">
      <h2 className="text-white">Formulário</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name..."
          className="form-control mb-3"
          {...register("name", {
            required: {
              value: true,
              message: "Nome é obrigatório",
            },
            minLength: {
              value: 5,
              message: "Min length is 5",
            },
          })}
        />
        {errors.name && (
          <span className="d-block p-1">{errors.name.message}</span>
        )}
        <input
          type="number"
          placeholder="Age..."
          className="form-control mb-2"
          {...register("age", {
            required: true,
          })}
        />
        {errors.age && <span className="d-block p-1 ">Idade obrigatório</span>}

        <button className="btn btn-primary btn-block" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
