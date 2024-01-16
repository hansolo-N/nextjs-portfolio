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
    <div className={styles.container}>
      <div>
        <p>hello</p>
      </div>
    <div className={`${styles['form-container']}`}>
      <h1>Contact Me</h1>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`${styles['form-container']}space-y-8`}>

      <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl >
                <Input className={`${styles[`form-input`]} border-b border-2 border-solid border-t-0 border-r-0 border-l-0 `} placeholder="type your name..." {...field} />
              </FormControl>
            
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
                <Input  className={`${styles[`form-input`]}  border-solid border-t-0 border-r-0 border-l-0 `} placeholder="enter your email address" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />

          <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Textarea className={`${styles[`form-textArea`]}`} placeholder="enter your text here" {...field}/>
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />

      


        <Button className={`mt-4`}type="submit">Submit</Button>
      </form>
    </Form>
    </div>
    </div>
  )
}

export default ContactForm