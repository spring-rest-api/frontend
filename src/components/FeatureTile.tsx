interface FeatureTileProps {
  title: string
  desc: string
  children: React.ReactNode
}

function FeatureTile({ title, desc, children }: FeatureTileProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition-all hover:scale-105 dark:bg-gray-950 dark:hover:bg-gray-800">
      {children}
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
        {desc}
      </p>
    </div>
  )
}

export default FeatureTile
