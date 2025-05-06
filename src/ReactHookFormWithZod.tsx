/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, TsignUpSchema } from "./types";



const ReactHookFormWithZod = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TsignUpSchema>({ resolver: zodResolver(signUpSchema) });

  const onSubmit = async (data: TsignUpSchema) => {
    await new Promise((_res, _rej) =>
      setTimeout(() => {
        console.log(data);
        _res("Resolved");
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
                {...register("email")}
                type="email"
                placeholder="Enter email"
              />
              {errors.email && (
                <p className="text-red-500">Email is required.</p>
              )}
              <Input
                {...register("password")}
                placeholder="Enter password"
                type="password"
              />
              {errors.password && (
                <p className="text-red-500">{`${errors.password.message}`}</p>
              )}
              <Input
                {...register("confirmPassword")}
                placeholder="Enter password again"
                type="password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
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

export default ReactHookFormWithZod;
