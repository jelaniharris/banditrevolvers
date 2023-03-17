import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-zinc-700 border-t border-neutral-500">
      <Container>
        <div className="py-9 flex flex-col lg:flex-col items-center text-center">
          <h3 className="text-xl lg:text-[2.1rem] font-bold tracking-tighter leading-tight text-center lg:text-left">
            © 2023 Bandit Revolvers. All Rights Reserved, Bandit Revolvers LLC
          </h3>
        </div>
      </Container>
    </footer>
  )
}

export default Footer