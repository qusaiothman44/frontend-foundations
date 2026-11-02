import { useForm } from "react-hook-form";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input
         className="input"
          type="text"
          name="name"
          {...register("name", { required: "name is required ", minLength:{
            value: 4,
            message:'name must be at least 4'
          } })}
        />
        {errors.name && (<span>{errors.name.message}</span>)}

         <label>Email</label>
        <input
        className="input"
          type="email"
          name="email"
          {...register("email", { required: "email is required ", pattern:{
            value: /\S+@\S+\.\S+/,
            message:'email is invalid'
          } })}
        />
        {errors.email && (<span>{errors.email.message}</span>)}

        
         <label>Password</label>
        <input
         className="input"
          type="password"
          name="password"
          {...register("password", { required: "password is required ", minLength:{
            value: 8,
            message:'password must be at least 8 length'
          } })}
        />
        {errors.password && (<span>{errors.password.message}</span>)}

        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
