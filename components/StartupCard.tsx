import React from 'react'
import { formatDate } from '../lib/utils'
import { EyeIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'

const StartupCard = ({post}: {post: StartupTypeCard}) => {
  const {_createdAt, views, author: {_id: authorId, name}, _id, image, category, title, description} = post;

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
            <Link href={`/user/${authorId}`}>
              <p className='font-medium text-[16px] text-black line-clamp-1 font-work-sans'>
                {name}
              </p>
            </Link>
            <Link href={`/startup/${_id}`}>
              <h3 className='font-work-sans font-semibold text-[26px] text-black line-clamp-1'>
                {title}
              </h3>
            </Link>
          </div>
          <Link href={`/user/${authorId}`}>
          <Image src="https://picsum.photos/48/48?random=1" alt="placeholder" width={48} height={48} className='rounded-full' />
          </Link>
        </div>
        <Link href={`/startup/${_id}`}>
          <p className='font-work-sans font-normal text-[16px] line-clamp-2 my-3 text-black-100 break-all'>
            {description}
          </p>
          <img src={image} alt="placeholder" className='w-full h-[164px] rounded-[10px] object-cover'/>
        </Link>

        <div className='flex justify-between items-center mt-5 gap-3'>
          <Link href={`/?query=${category.toLowerCase()}`}>
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