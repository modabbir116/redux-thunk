import React from 'react'

const Tage = ({tag}) => {
  return (
    <div className="px-4 py-1 text-blue-600 bg-blue-100 rounded-full cursor-pointer">
        {tag.title}
    </div>
  )
}

export default Tage