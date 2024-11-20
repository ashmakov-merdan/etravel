"use client"
import { FC, useCallback } from "react";
import Input from "@/shared/input";
import Textarea from "@/shared/textarea";
import Button from "@/shared/button";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import CustomMap from "@/components/map";
import waveBlue from '@/assets/wave-blue.svg'
import Image from "next/image";

type ContactForm = {
  name: string
  email: string
  message: string
};

const ContactUs: FC = () => {
  const t = useTranslations('contact-us');
  const { register, watch, handleSubmit } = useForm<ContactForm>();

  const onSubmit = useCallback(async (values: ContactForm) => {
    console.log(values);
  }, []);


  return (
    <section id="contact-us" className="pt-24 px-4 2xl:px-0 container mx-auto">
      <div className="relative grid grid-cols-1 lg:grid-cols-2 rounded-[100px] overflow-hidden">
        <div className="max-md:aspect-square">
          <CustomMap />
        </div>
        <div className="relative px-6 md:px-14 py-10 lg:px-20 bg-primary-100">
          <div className="space-y-5 lg:space-y-8">
            <h2 className="text-2xl md:text-3xl xl:text-5xl font-bold text-primary">{t('heading')}</h2>
            <form className="w-full grid space-y-5 2xl:max-w-[480px]" onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="name" className="flex flex-col gap-1">
                <span className="text-sm text-primary">{t('name')}</span>
                <Input id="name" defaultValue={watch("name")} {...register("name", {
                  required: "Name is required"
                })} />
              </label>
              <label htmlFor="email" className="flex flex-col gap-1">
                <span className="text-sm text-primary">{t('email')}</span>
                <Input id="email" defaultValue={watch('email')} {...register("email", {
                  required: "E-mail is required"
                })} />
              </label>
              <label htmlFor="message" className="flex flex-col gap-1">
                <span className="text-sm text-primary">{t('message')}</span>
                <Textarea id="message" defaultValue={watch('message')} {...register('message', {
                  required: "Message is required"
                })} />
              </label>
              <div className="flex justify-end">
                <Button type={"submit"}>{t('send')}</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
};

export default ContactUs;