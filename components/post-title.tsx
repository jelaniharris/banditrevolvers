import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-5xl font-fjalla md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none my-12 text-center md:text-left">
      {children}
    </h1>
  )
}

export default PostTitle