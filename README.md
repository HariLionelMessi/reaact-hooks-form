## REact hook form along with validation

1. input text
     <input type="text" {...register("firstName")} /> => Normal

    below code with validation
     <input type-"text" {...register("firstName", {
        required: "Can't be empty",
        maxLength: { value: 30, message: "Max 30 characters" }
     })} />
     {errors.firstName?.type === "required" && <p>Error</p>}
