import React from 'react'

export const Transaction = ({ transaction }) => {
    return (
        <li className="minus">
            {transaction.text}Cash <span>-$400</span><button className="delete-btn">x</button>
          </li>
    )
}
