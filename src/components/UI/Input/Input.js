import React from 'react'

const Input = ({
  input,
  type,
  label,
  placeholder,
  meta: {
    touched,
    error,
    warning
  }
}) => {
  let groupClass = ['form-group']

  if (touched && (error || warning)) {
    groupClass.push(error ? 'has-error' : 'has-warning')
  }

  return (
    <div className={groupClass.join(' ')}>
      <label htmlFor={input.name}>{label}</label>
      <input
        type={type || 'text'}
        id={input.name}
        className="form-control"
        placeholder={placeholder}
        {...input}
      />
      {touched && (error || warning) &&
        <p className="help-block">
          <strong>{error || warning}</strong>
        </p>}
    </div>
  )
}

export default Input