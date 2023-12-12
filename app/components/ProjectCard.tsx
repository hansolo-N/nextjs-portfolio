import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import styles from './ProjectCard.module.css'
import Image from "next/image"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

interface Props{
  cardTitle : string,
  imgSrc: string
}



function ProjectCard({cardTitle,imgSrc}:Props): JSX.Element {
  return (
    <Card className={styles.card}>
        <Image className={styles.cardImg} src={`/${imgSrc}`} alt="image not found" width={100} height={100}/>
  <CardHeader>
    <CardTitle>{cardTitle}</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter className={styles[`btn-container`]}>
  <Link href='' className={`${buttonVariants({ variant: "outline" })} ${styles.btn}`}>Live Demo</Link>
  <Link href='' className={`${buttonVariants({ variant: "outline" })} ${styles.btn}`}>Github</Link>
  </CardFooter>
</Card>
  )
}

export default ProjectCard