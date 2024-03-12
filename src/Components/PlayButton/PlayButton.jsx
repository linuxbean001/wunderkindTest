import React from 'react'

function PlayButton({className, href}) {
  return (
    <a target="_blank" className={className} href={href}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z" fill="white"/>
            <path d="M23.4766 15.134C24.1432 15.5189 24.1432 16.4811 23.4766 16.866L13.0131 22.9071C12.3465 23.292 11.5131 22.8109 11.5131 22.0411L11.5131 9.95897C11.5131 9.18917 12.3465 8.70804 13.0131 9.09294L23.4766 15.134Z" fill="#191919"/>
        </svg>
    </a>
    )
}

export default PlayButton