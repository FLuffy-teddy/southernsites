"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { useToast } from "@/hooks/use-toast";

const emptyStringToUndefined = z.literal("").transform(() => undefined);

export function asOptionalField<T extends z.ZodTypeAny>(schema: T) {
  return schema.optional().or(emptyStringToUndefined);
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Name must have at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  message: asOptionalField(
    z
      .string()
      .min(10, {
        message: "Must be at least 10 characters.",
      })
      .max(160, {
        message: "No longer than 160 characters",
      })
  ),
});

export function ContactForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const { toast } = useToast();

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full flex"
      >
        <div className="w-full">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name..." {...field} />
                </FormControl>
                <FormDescription>First and Last Name</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email..." {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="w-full">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Input placeholder="Message..." {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </div>{" "}
      </form>
    </Form>
  );
}
