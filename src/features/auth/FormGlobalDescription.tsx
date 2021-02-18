import React from 'react'

export const FormGlobalDescription = () => {
  
  return (
    <React.Fragment>
      {/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attr-for
      If a form, or a section of a form needs a title, use the <legend> element placed within a <fieldset>. */}
      <fieldset className="global-title"><legend>Registration</legend></fieldset>

      <div className="global-description">
        <span className="fgd__account-already">Already have an account?</span>&nbsp;
        <span className="fgd__sign-in"><a href="#!">Log In</a></span>
      </div>
      <div className="global-link"></div>
    </React.Fragment>
  )    
}
