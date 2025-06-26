import Image from 'next/image'
import authorImage from '@/public/images/authors/david.jpg'

export default function Intro() {
  return (
    <section className="flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center">
  <div className="mt-2 flex-1 md:mt-0">
    <h1 className="title no-underline">Hey, I&apos;m David.</h1>
    <p className="mt-3 font-light text-gray-800 dark:text-gray-200">
      <span className="block hover:text-gray-900 dark:hover:text-white hover:brightness-110 transition-colors duration-300">
        I&apos;m a web developer passionate about building meaningful web experiences.
      </span>
      <br />
      <span className="block hover:text-gray-900 dark:hover:text-white hover:brightness-110 transition-colors duration-300">
        I love building web apps that solve real problems. I&apos;ve trained at Ironhack and Coderhouse, where I learned to work with modern technologies like React, Node.js, and MongoDB, always with an Agile mindset.
      </span>
      <br />
      <span className="block hover:text-gray-900 dark:hover:text-white hover:brightness-110 transition-colors duration-300">
        Before switching to tech, I worked in fast-paced environments like kitchens and buffets — That&apos;s where I picked up teamwork, adaptability, and hustle.
      </span>
      <br />
      <span className="block hover:text-gray-900 dark:hover:text-white hover:brightness-110 transition-colors duration-300">
        Now I&apos;m looking to grow as a Full Stack Developer, keep learning, and join projects that make a real impact.
      </span>
      <br />
      <span className="block hover:text-gray-900 dark:hover:text-white hover:brightness-110 transition-colors duration-300">
        Off the clock, football keeps me sharp — It&apos;s taught me about strategy, leadership, and playing for the team.
      </span>
    </p>
  </div>
  <div className="relative flex h-128 w-64 items-center justify-center rounded-xl overflow-hidden border-2 border-white bg-muted p-1 dark:border-muted">
    <Image
      className="h-8 rounded-lg grayscale transition-all hover:grayscale-0"
      src={authorImage}
      alt="David Repetto"
      width={50}
      height={20}
      layout="responsive"
      priority
    />
  </div>
</section>

  )
}
