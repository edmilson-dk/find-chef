function Title({ title, colorClass = 'text-yellow-500' }) {
  return (
    <h2 className={`text-center text-3xl md:text-4xl lg:text-5xl mb-8 ${colorClass} font-bold`}>
      { title }
    </h2>
  )
}

export default Title;