'use client'
import Image from 'next/image'
import { LayoutGrid, Search } from 'lucide-react'

export const Header = () => {
  return (
    <header className="flex items-center gap-4">
      <Image
        src="/logo.png"
        alt="Ozon"
        width={120}
        height={60}
      />

      <button
        type="button"
        className="bg-primary p-2 rounded-md text-white flex items-center gap-2"
      >
        <LayoutGrid />
        <span>Каталог</span>
      </button>

      <div className="rounded-xl p-1 flex items-center bg-primary">
        <input
          className="bg-white rounded-lg px-4 py-1.5"
          type="text"
          placeholder="Искать на Ozon"
          value=""
          onChange={() => {
          }}
        />
        <button
          type="button"
          className="px-4 py-1.5"
        >
          <Search color="#fff" />
        </button>
      </div>
    </header>
  )
}