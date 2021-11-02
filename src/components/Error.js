import React from 'react'
import PropTypes from 'prop-types'

const Error = ({mensaje}) => {
    return (
        <p className="alert alert-danger error">{mensaje}</p>
    )
}

//documentacion del componente
Error.propTypes = {
    error: PropTypes.string
}

export default Error
