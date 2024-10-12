
import { useForm } from 'react-hook-form'

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  function onSubmit(data) {
    console.log(data)
    console.log(JSON.stringify(data))
    // console.log(data.highest)
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        {/* <input type="text" {...register("firstName", { required: true })} placeholder='firstName' /> */}
        <input
          placeholder='firstname'
          {...register("firstName", {
            required: "First name is required",
            maxLength: { value: 30, message: "Max 30 characters" }
          })}
        />
        {errors.firstName?.type === 'required' && <p role="alert">{errors.firstName.message}</p>}
        {errors.firstName?.type === 'maxLength' && <p role="alert">{errors.firstName.message}</p>}

        <br />

        <input type="text" {...register("middleName")} placeholder='middleName' />
        <br />

        <input type="text" 
        {...register("lastName", {
          required: "Last name can't be empty",
          maxLength: { value: 30, message: "Max 30 characters" }
        })} placeholder='lastName' />

        {errors.lastName?.type === 'required' && <p role="alert">{errors.firstName.message}</p>}
        {errors.lastName?.type === 'maxLength' && <p role="alert">{errors.firstName.message}</p>}
        <br />


        <label htmlFor="gender">
          gender
        </label>
        <input {...register("gender", { required: "Please select your gender" })} type="radio" value="Male" name="gender" /> Male
        <input {...register("gender", { required: "Please select your gender" })} type="radio" value="Female" name="gender" /> Female

        {errors.gender?.type === 'required' && <p role="alert">{errors.gender.message}</p>}
        <br />


        <label htmlFor="">Checkbox</label>
        <input type="checkbox" {...register("highestQualification", { required: "Qualifications should be selected" })} value="Under Graduate" /> UnderGraduate
        <input type="checkbox" {...register("highestQualification", { required: "Qualifications should be selected" })} value="Post Graduate" /> PostGraduate
        {errors.highestQualification?.type==='required' && <p>{errors.highestQualification.message}</p> }

        <br />
        <select {...register("category", { required: true })}>
          <option value="">Select...</option>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
        </select>
        <br />
        <button type="submit">submit</button>
      </form>
    </>
  )
}

export default App
