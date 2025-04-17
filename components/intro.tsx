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
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 w-full rounded-lg grayscale transition-all hover:grayscale-0'
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
