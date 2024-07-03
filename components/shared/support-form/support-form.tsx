"use client";

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
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  phone: z.string().regex(/^\d+$/, {
    message: "Phone number must contain only digits.",
  }),
  text: z.string().min(1, {
    message: "Enter your content",
  }),
});

const SupportForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      text: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);

    form.reset()
  };

  return (
    <div >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="form-container w-[693px] flex flex-col gap-y-5 font-medium text-[14px] text-grayscale-100 tracking-[0.01em]">
          {/* Username Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your username"
                    className="border border-line p-0 pl-4 rounded-3xl font-font-family text-grayscale-40 text-[16px] font-medium tracking-[0.01em]"
                  />
                </FormControl>
                <FormMessage className="text-error"/>
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Enter your email"
                    className="border border-line p-0 pl-4 rounded-3xl font-font-family text-grayscale-40 text-[16px] font-medium tracking-[0.01em]"
                  />
                </FormControl>
                <FormMessage className="text-error"/>
              </FormItem>
            )}
          />

          {/* Phone Field */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <div className="flex gap-x-1 items-center">
                  <span>+</span><FormControl>
                  <Input
                    {...field}
                    type="tel"
                    placeholder="Enter your phone number"
                    className="border border-line p-0 pl-4 rounded-3xl font-font-family text-grayscale-40 text-[16px] font-medium tracking-[0.01em]"
                  />
                </FormControl>
                </div>
                
                <FormMessage className="text-error"/>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How can we help?</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Enter your content"
                    className="border border-line pt-4 pl-4 rounded-3xl min-h-32 font-font-family text-grayscale-40 text-[16px] font-medium tracking-[0.01em]"
                  />
                </FormControl>
                <FormMessage className="text-error"/>
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-[32px] py-4 px-8 bg-primary-10 text-white font-second-family font-semibold text-[16px] tracking-[0.01em] w-max mt-10"
            >
              Submit
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SupportForm;