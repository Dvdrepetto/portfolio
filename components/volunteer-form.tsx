'use client'

import { z } from 'zod'
import { toast } from 'sonner'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { VolunteerFormSchema, VolunteerInputs } from '@/lib/schemas'
import { sendVolunteer } from '@/lib/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Dog } from 'lucide-react'

export default function VolunteerForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } =
    useForm<VolunteerInputs>({
      resolver: zodResolver(VolunteerFormSchema),
      defaultValues: { name: '', email: '', city: '', availability: '' }
    })

    const onSubmit: SubmitHandler<VolunteerInputs> = async (data) => {
      console.log('🚀 onSubmit fired:', data)
      const result = await sendVolunteer(data)
    
      if ('error' in result) {
        toast.error(result.error)
      } else {
        toast.success(
          <div className="flex items-center gap-2">
            <Dog className="w-5 h-5 text-yellow-500" />
            <span>Thank you for joining Petinder Volunteers!</span>
          </div>
        )
        reset()
      }
    }

  return (
    <section>
      <Card className='rounded-lg border-0 dark:border'>
        <CardContent className='flex flex-col gap-8 pt-6 md:flex-row md:justify-between md:pt-8'>
          <div>
            <h2 className='text-2xl font-bold'>Join Petinder Volunteers</h2>
            <p className='text-muted-foreground'>
              Help us connect pets with loving homes.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 w-full md:w-auto'>
            <Input
              {...register('name')}
              placeholder='Your Name'
              className='w-full'
            />
            {errors.name && <p className='text-rose-400 text-sm'>{errors.name.message}</p>}

            <Input
              {...register('email')}
              type='email'
              placeholder='Your Email'
              className='w-full'
            />
            {errors.email && <p className='text-rose-400 text-sm'>{errors.email.message}</p>}

            <Input
              {...register('city')}
              placeholder='Your City (optional)'
              className='w-full'
            />
            {errors.city && <p className='text-rose-400 text-sm'>{errors.city.message}</p>}

            <Textarea
              {...register('availability')}
              placeholder='How much time can you volunteer?'
              className='w-full'
            />
            {errors.availability && <p className='text-rose-400 text-sm'>{errors.availability.message}</p>}

            <Button type='submit' disabled={isSubmitting} className='w-full md:w-auto'>
              {isSubmitting ? 'Submitting...' : 'Join Now'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
