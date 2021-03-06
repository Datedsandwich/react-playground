import React from 'react'
import T from 'prop-types'

const Grid = ({children, className}) => <div className={`lr-o-grid ${className}`}>
    {children}
</div>

Grid.propTypes = {
    children: T.node,
    className: T.string
}

Grid.defaultProps = {
    children: null,
    className: ''
}

export default Grid;