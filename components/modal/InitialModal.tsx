"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useEffect, useState } from "react";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Servername must be at least 1 character.",
  }),
  imageurl: z.string().min(1, {
    message: "Server Image is required.",
  }),
});

const InitialModal = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      imageurl: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  if (!isMounted) {
    return null; //prevents hydrartion error
  }
  return (
    <Dialog open>
      <DialogContent className="bg-white text-black p-5 overflow-hidden rounded-lg">
        <DialogHeader className=" px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Create your server
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Give your server a personality with a name and an image. You can
            always change it later.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Server name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your server name"
                      className="bg-slate-200/50 border-0 text-black"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="bg-gray-100 p-2">
              <Button type="submit" variant="primary">
                Submit
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default InitialModal;
