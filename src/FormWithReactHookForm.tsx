/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FieldValues, useForm } from "react-hook-form";
const FormWithReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    await new Promise((_res,_rej) =>
      setTimeout(() => {
        console.log(data);
      }, 3000)
    );
    reset();
  };

  return (
    <main className="min-h-screen flex flex-row items-start justify-between gap-6 p-6 bg-gray-50">
      <section className="w-full max-w-md space-y-2">
        <h1 className="text-3xl font-bold">📝 Employee Manager</h1>

        <Card className="w-full max-w-md">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Input
                {...register("email", { required: true })}
                type="email"
                placeholder="Enter email"
              />
              {errors.email && <p>Email is required.</p>}
              <Input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Must be at least 8 characters",
                  },
                })}
                placeholder="Enter password"
                type="password"
              />
              {errors.password && <p>{`${errors.password.message}`}</p>}
              <Input
                {...register("confirmPassword", {
                  required: "Confirm password is required",
                  minLength: {
                    value: 8,
                    message: "Must be at least 8 characters",
                  },
                  validate: (val) =>
                    val == getValues("password") || "Password must match",
                })}
                placeholder="Enter password again"
                type="password"
              />
              {errors.confirmPassword && (
                <p>{`${errors.confirmPassword.message}`}</p>
              )}

              <Button
                disabled={isSubmitting}
                type="submit"
                className="w-full cursor-pointer"
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default FormWithReactHookForm;
