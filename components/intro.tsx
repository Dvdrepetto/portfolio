import Image from 'next/image'
import authorImage from '@/public/images/authors/david.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&apos;m David.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          <span className='hover:text-white hover:brightness-125 transition duration-300'>
            I&apos;m a web developer passionate about building meaningful web experiences.
          </span>
          <br />
          <span className='hover:text-white hover:brightness-125 transition duration-300'>
            I love building web apps that solve real problems. I&apos;ve trained at Ironhack and Coderhouse, where I learned to work with modern technologies like React, Node.js, and MongoDB, always with an Agile mindset.
          </span>
          <br />
          <span className='hover:text-white hover:brightness-125 transition duration-300'>
            Before switching to tech, I worked in fast-paced environments like kitchens and buffets — That&#39;s where I picked up teamwork, adaptability, and hustle.
          </span>
          <br />
          <span className='hover:text-white hover:brightness-125 transition duration-300'>
            Now I&#39;m looking to grow as a Full Stack Developer, keep learning, and join projects that make a real impact.
          </span>
          <br />
          <span className='hover:text-white hover:brightness-125 transition duration-300'>
            Off the clock, football keeps me sharp — It&apos;s taught me about strategy, leadership, and playing for the team.
          </span>
        </p>

      </div>
      <div className="relative w-full">
        <Image
          className="w-full rounded-lg grayscale transition-all hover:grayscale-0"
          src={authorImage}
          alt="David Repetto"
          width={500}
          height={400}
          layout="responsive"
          priority
        />
      </div>
    </section>
  )
}
