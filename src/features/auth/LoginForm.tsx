import React from 'react'
import { useSelector } from 'react-redux'
import { FormGlobalDescription } from './FormGlobalDescription'
import { PlaceTextField } from './PlaceTextField'
import { DropdownTrigger } from './DropdownTrigger'
import { Checkbox } from './Checkbox'
import { RootState } from '../../app/store';

export const LoginForm = () => {
  const inputValidities = useSelector((state: RootState) => state.auth.inputValidities)

  const canSubmit = !Object.values(inputValidities).every(Boolean)

  return (
    <div className="lf__wrapper">
      <form className="lf__form" action="#" method="get" autoComplete="on">
        <FormGlobalDescription/>
        <PlaceTextField label_for="fname" label_name="Name" name="name" placeholder="Input your name" pattern="[a-zA-Z\s\-]*" />
        <PlaceTextField label_for="femail" label_name="Email" name="email" placeholder="Input your email" type="email" />
        <PlaceTextField label_for="fphone" label_name="Phone number" name="phone" placeholder="Input phone number" pattern="(?:[\(\)\-+]?\d){11}" />
        <DropdownTrigger label_name="Language" name="language" opt_list={['Russian', 'English', 'Spanish', 'Chinese']} />
        <Checkbox label_for="fconditions" name="accept_legal" link="#!" />
        <button type="submit" className="lf__control-button" id="registrationButton" disabled={canSubmit}>Register</button>
      </form>
    </div>
  )
}
