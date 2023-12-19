'use client'
import React from 'react'
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import emailSchema from '../emailShema/emailformSchema'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import styles from './ContactForm.module.css'





function ContactForm() {


  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      name: "",
      subject:'',
      email:'nasr@gmail.com'
    },
  })


  function onSubmit(values: z.infer<typeof emailSchema>){
console.log(values)
  }

  return (
    <div className={`${styles['form-container']}`}>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`${styles['form-container']}space-y-8`}>

      <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="type your name..." {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
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
                <Input placeholder="enter your email address" {...field} />
              </FormControl>
              <FormDescription>
                This is your Email name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

       

        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
  )
}

export default ContactForm