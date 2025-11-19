import React from 'react'
import { formatDate } from '../lib/utils'
import { EyeIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { Startup, Author } from '@/sanity/types'

export type StartupTypeCard = Omit<Startup, "author"> & {author?: Author}
const StartupCard = ({post}: {post: StartupTypeCard}) => {
  const {_createdAt, views, author, _id, image, category, title, description} = post;

  return (
    <li className='startup-card group'>
        <div className='flex justify-between items-center'>
            <p className='startup-card_date font-work-sans'>
                {formatDate(_createdAt)}
            </p>
            <div className='flex gap-1.5'>
              <EyeIcon className='size-6 text-primary'/>
              <span className='font-medium size-[16px] text-black font-work-sans'>{views}</span>
            </div>
        </div>

        <div className='flex justify-between items-center mt-5 gap-5'>
          <div className='flex-1'>
            <Link href={`/user/${author?._id}`}>
              <p className='font-medium text-[16px] text-black line-clamp-1 font-work-sans'>
                {author?.name}
              </p>
            </Link>
            <Link href={`/startup/${_id}`}>
              <h3 className='font-work-sans font-semibold text-[26px] text-black line-clamp-1'>
                {title}
              </h3>
            </Link>
          </div>

          <Link href={`/user/${author?._id}`}>
            <Image src={image || ''} alt={title || ''} width={48} height={48} className='rounded-full' />
          </Link>

        </div>
        <Link href={`/startup/${_id}`}>
          <p className='font-work-sans font-normal text-[16px] line-clamp-2 my-3 text-black-100'>
            {description}
          </p>
          <img src={image} alt="placeholder" className='w-full h-[164px] rounded-[10px] object-cover'/>
        </Link>

        <div className='flex justify-between items-center mt-5 gap-3'>
          <Link href={`/?query=${category?.toLowerCase()}`}>
            <p className="font-works-sans font-medium text-[16px] text-black">
              {category}
            </p>
          </Link>
          <Button className="startup-card_btn" asChild>
            <Link href={`/startup/${_id}`}>
              <p className='font-work-sans font-medium text-[16px]'>
                Details
              </p>
            </Link>
          </Button>
        </div>
    </li>
  )
}

export default StartupCard