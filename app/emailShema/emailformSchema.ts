import {z} from 'zod'

const customEmailRegExp = /^.+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;

const emailSchema = z.object({
    name: z.string().min(3,{
      message: "your name must be at least 3 characters long"
    }).max(20,{
      message: "your name cannot exceed more than 20 characters"
    }),
    email: z.string().email().refine((value) => customEmailRegExp.test(value), {
      message: 'Email address must be in the format username@somedomain.tld',
    }),
    subject: z.string()
  });

export default emailSchema