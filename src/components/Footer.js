import React from 'react'

const Footer = () => {
  const newDate = new Date().getFullYear();
  return (
    <React.Fragment>
        <footer>
            <p>copyright © {newDate}</p>
        </footer>
    </React.Fragment>
  )
}

export default Footer