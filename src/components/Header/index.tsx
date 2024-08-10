import Link from 'next/link'
import Image from 'next/image'
import CartIcon from '../CartIcon'
import { SearchForm } from '../Search'

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-5">
          <Link href="/" className="text-2xl font-extrabold text-white">
            Devstore
          </Link>
        </div>

        <SearchForm />
      </div>

      <div className="flex items-center gap-4">
        <CartIcon />
        <div className="w-px h-4 bg-zinc-700" />
        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/AdlerCastro.png"
            className="h-6 w-6 rounded-full"
            // Os seguintes são para reduzir o tamanho de carregamento da imagem
            width={24}
            height={24}
            alt="Profile image"
          />
        </Link>
      </div>
    </div>
  )
}
