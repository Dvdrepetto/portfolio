import Image from 'next/image'
import authorImage from '@/public/images/authors/david.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&apos;m David.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&apos;m a web developer based in Marbella, Spain.<br />
          During my time at the Ironhack bootcamp, I developed strong skills in modern technologies and agile methodologies, enabling me to build high-quality web applications.<br />
          My previous training in JavaScript at Coderhouse further strengthened my foundation and problem-solving abilities in front-end development.<br />
          I&apos;m proficient in HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB, and I have experience working with Agile methodologies and Git version control.<br />
          Before transitioning into tech, I developed teamwork and adaptability in fast-paced environments during buffet and kitchen services.<br />
          My short-term goal is to continue enhancing my technical expertise and problem-solving skills as a Full Stack Developer on innovative projects.<br />
          Outside of technology, my lifelong passion for football has taught me the value of teamwork, leadership, and strategic decision-making—qualities I bring to every professional endeavor.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1  w-full h-96 rounded-lg grayscale  transition-all hover:grayscale-0'
          src={authorImage}
          alt='David Repetto'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
