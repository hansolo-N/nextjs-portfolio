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
  cardContent : string
}



function ProjectCard({cardTitle,imgSrc,cardContent}:Props): JSX.Element {
  return (
    <Card className={styles.card}>
        {/* <Image className={styles.cardImg} src={`/${imgSrc}`} alt="image not found" width={100} height={100}/> */}
        <div className={styles.test}></div>
  <CardHeader >
    <CardTitle className={styles[`card-header`]}>{cardTitle}</CardTitle>
  </CardHeader>
  <CardContent className={styles[`card-content`]}>
    {cardContent}
  </CardContent>
  <CardFooter className={styles[`btn-container`]}>
  <Link href='' className={`${buttonVariants({ variant: "outline" })} ${styles.btn}`}>Live Demo</Link>
  <Link href='' className={`${buttonVariants({ variant: "outline" })} ${styles.btn}`}>Github</Link>
  </CardFooter>
</Card>
  )
}

export default ProjectCard