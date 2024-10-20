"use client"
import { FC, useCallback } from "react";
import SectionBox from "../section-box";
import Input from "@/shared/input";
import Textarea from "@/shared/textarea";
import Button from "@/shared/button";
import { useForm } from "react-hook-form";

type ContactForm = {
  name: string
  email: string
  message: string
};

const ContactUs: FC = () => {
  const { register, watch, handleSubmit } = useForm<ContactForm>();
  
  const onSubmit = useCallback(async (values: ContactForm) => {
    console.log(values);
  }, []);

  return (
    <section id={"contact-us"} className="pt-28 container mx-auto grid place-items-center">
      <SectionBox isReverse>
        <div className="py-14 flex-1 flex-shrink-0">
          <div className="px-20 space-y-5">
            <h2 className="text-5xl font-bold text-primary">Contact us</h2>
            <form className="grid space-y-3.5" onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="name" className="flex flex-col gap-1">
                <span className="text-sm text-primary">Name</span>
                <Input id="name" defaultValue={watch("name")} {...register("name", {
                  required: "Name is required"
                })} />
              </label>
              <label htmlFor="email" className="flex flex-col gap-1">
                <span className="text-sm text-primary">E-mail</span>
                <Input id="email" defaultValue={watch('email')} {...register("email", {
                  required: "E-mail is required"
                })} />
              </label>
              <label htmlFor="message" className="flex flex-col gap-1">
                <span className="text-sm text-primary">Message</span>
                <Textarea id="message" defaultValue={watch('message')} {...register('message', {
                  required: "Message is required"
                })} />
              </label>
              <div className="flex justify-end">
                <Button type={"submit"}>Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </SectionBox>
    </section>
  )
};

export default ContactUs;