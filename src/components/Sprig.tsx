/** Marca de Raíces: un tallo con dos hojas (hierba + achiote). */
export function Sprig({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 30V10" stroke="#e4a32c" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M16 15C16 15 9 14 7 8C13 7 16 12 16 15Z" fill="#5e7050" />
      <path d="M16 12C16 12 23 10 25 4C19 4 16 9 16 12Z" fill="#c0442b" />
    </svg>
  )
}
