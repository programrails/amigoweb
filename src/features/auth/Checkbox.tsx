import React, { useEffect } from 'react'
import { setInputValidities } from './authSlice'
import { useDispatch } from 'react-redux'
import { ValObj } from '../../app/types'

interface CheckboxProps {
  label_for: string,
  name: string,
  link: string,
}

export const Checkbox = ({label_for, name, link}: CheckboxProps) => {

  const myRef: React.RefObject<HTMLInputElement> = React.createRef()

  const dispatch = useDispatch()

  const controlName = {name}.name    

  const ValidateControl = () => {
    const validity = myRef?.current?.checked
    const nameObj: ValObj = {[controlName]: validity}
    dispatch(setInputValidities(nameObj))
  }

  useEffect(() => {
    ValidateControl()
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);  

  return (
    <div className="cb__wrapper">
      <input type="checkbox" className="cb__checkbox-normal" id={label_for} name="accept_legal" onClick={ValidateControl} ref={myRef}/>
      <label htmlFor={label_for} className="global-label cb__checkbox-custom">
        <span>I accept <a href={link} className="cb__conditions-link">the conditions</a> of usage.</span>
      </label>
    </div>
  )
}
