export default function CommonButton({ children, onClick }) {
  return (
    <button className="button rounded-lg bg-emerald-700 text-neutral-200 text-center pt-2 pb-2 w-[120px]" onClick={onClick}>
      {children}
    </button>
  )
}