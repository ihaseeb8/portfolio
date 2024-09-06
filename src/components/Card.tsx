import React, { ComponentPropsWithoutRef } from 'react'
import grainImage from '@/assets/images/grain.jpg'
import { twMerge } from 'tailwind-merge'
import { PropsWithChildren } from 'react'

const Card = ({
    className,
    children,
    ...other
  } : ComponentPropsWithoutRef<'div'>) => {
  return (
    <div className={twMerge("bg-gray-800 overflow-hidden rounded-3xl relative z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline after:-outline-offset-2 after:pointer-events-none after:rounded-3xl after:outline-white/20", className)} {...other}>
        <div className="absolute inset-0 -z-10 opacity-5" style={{backgroundImage: `url(${grainImage.src})`}}></div>
        {children}
    </div>
  )
}

export default Card