'use client'
import React, { useState } from 'react'
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
import { motion,useMotionValue,useMotionValueEvent, useScroll } from "framer-motion"





function ContactForm() {

  const [progress,setProgress] = useState(0)
  const progressValue = useMotionValue(0);
  const { scrollY} = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setProgress((latest/1800))
  })



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
      <div className={`${styles.callTo}`}>
        <p className={`${styles.greeting} tracking-widest pl-4`}>Hi! <span className={`text-6xl font-extrabold text-emerald-300 `}>,</span></p>
        <motion.div className={`${styles.call1}`} style={{translateX:50*progress}} >Turn your vision into <span className={`text-4xl font-extrabold font tracking-wider uppercase text-emerald-500`}>pixels</span></motion.div>
        <motion.div className={`${styles.call2} text-violet`} style={{translateX:150*progress}}>Let&apos;s build something <span className={`text-5xl text-blue-3a00 font-extrabold font tracking-wider uppercase text-violet-500`}>epic.</span></motion.div>
      </div>
    <div className={`${styles['form-container']}`}>
      <h1 className={`mb-4 text-3xl`}>Contact Me</h1>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`${styles['form-container']}space-y-8`}>

      <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className={`mb-4 `}>
              <FormLabel className={`${styles[`form-field`]}`}>Name</FormLabel>
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
            <FormItem className={`mb-4`}>
              <FormLabel className={`${styles[`form-field`]}`}>Email</FormLabel>
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
              <FormLabel className={`${styles[`form-field`]}`}>Subject</FormLabel>
              <FormControl>
                <Textarea className={`${styles[`form-textArea`]}`} placeholder="enter your text here" {...field}/>
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />

      


        <Button className={`mt-4 ${styles[`submit-btn`]}`}type="submit">Submit</Button>
      </form>
    </Form>
    </div>
    </div>
  )
}

export default ContactForm