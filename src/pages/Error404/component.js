import React from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../../configs/routes'

export default class Component extends React.Component {
  render () {
    return (
      <section>
        <h4 className >Page not found</h4>
        <h4>
          <Link to={ROUTES.HOME()}>Back to home</Link>
        </h4>
      </section>
    );
  }
}
