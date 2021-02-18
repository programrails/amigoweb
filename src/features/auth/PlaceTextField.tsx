import React, { useEffect } from 'react'
import { setInputValidities } from './authSlice'
import { useDispatch } from 'react-redux'

interface PlaceTextFieldProps {
  label_for: string,
  label_name: string,
  name: string,
  placeholder: string,
  pattern?: string,
  type?: string,
}

export const PlaceTextField = ({label_for, label_name, name, placeholder, pattern, type}: PlaceTextFieldProps) => {

  const dispatch = useDispatch()

  const controlName = {name}.name

  const myRef: React.RefObject<HTMLInputElement> = React.createRef()

  const ValidateControl = () => {
    // This does not work with AutoFill in Chrome due to a Chrome bug, see:
    // https://stackoverflow.com/q/35049555/6594668
    const validity = myRef?.current?.checkValidity()
    const nameObj = {[controlName]: validity}
    dispatch(setInputValidities(nameObj))
  }

  useEffect(() => {
    ValidateControl()
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <div className="ptf__text-field-wrapper">
        <label htmlFor={label_for} className="global-label">{label_name}</label>
        <input type={type ? type : "text"} id={label_for} className="ptf__text-field"
               onInput={ValidateControl} name={name} placeholder={placeholder} pattern={pattern} required ref={myRef}/>
        <div className="global-message">
          <div className="ptf__validation-error-message">A wrong value is input</div>
        </div>
      </div>
    </React.Fragment>
  )
}
