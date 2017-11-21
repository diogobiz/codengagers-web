import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { Input, Alert } from '../../UI'

import { validator, REQUIRED, IS_EMAIL } from '../../../utils/validator'

let Login = (props) => {
  const { authError, submitting, invalid, handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-3 col-md-offset-5">
          <div className="panel panel-default">
            <div className="panel-heading">
              <strong className="panel-title">Login</strong>
            </div>
            <div className="panel-body">
              <Alert type="danger" message={authError} />

              <Field name="email" label="Email" placeholder="Your email address" component={Input} />

              <Field type="password" name="password" label="Password" placeholder="Your secure password" component={Input} />
            </div>
            <div className="panel-footer">
              <button type="submit" className="btn btn-primary btn-block" disabled={invalid || submitting}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

const validate = (values) => {
  const errors = validator(values, [
    {
      name: 'email',
      rules: [
        {
          type: REQUIRED
        }, {
          type: IS_EMAIL
        }
      ]
    }, {
      name: 'password',
      rules: [
        {
          type: REQUIRED
        }
      ]
    }
  ])

  return errors
}

const warn = (values) => {
  const warnings = {}

  if (!!values.email) {
    let idx = values.email.indexOf('@')

    if (idx > 0 && values.email.substr(idx) !== '@codengage.com') {
      warnings.email = 'Hmm, your email is not @codengage.com'
    }
  }

  return warnings
}

export default reduxForm({ form: 'login', validate, warn })(Login)
