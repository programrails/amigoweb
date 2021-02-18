import React, {useState, useRef, useEffect } from 'react'
import { setInputValidities } from './authSlice'
import { useDispatch } from 'react-redux'
import { nanoid } from 'nanoid'

interface DropdownTriggerProps {
  label_name: string,
  name: string,
  opt_list: Array<string>,
}

export const DropdownTrigger = ({label_name, name, opt_list}: DropdownTriggerProps) => {

  const colorIdle = 'dt__dropbtn-color-idle'
  const borderIdle = 'dt__dropbtn-border-idle'
  const showOptions = 'dt__show'

  const [showDropdownOptions, setShowDropdownOptions] = useState('')
  const [dropbtnColor, setDropbtnColor] = useState(colorIdle)
  const [dropbtnBorder, setDropbtnBorder] = useState(borderIdle)

  const [pickedLanguage, setPickedLanguage] = useState(label_name)

  const [localOptList, setLocalOptList] = useState(opt_list)

  const dispatch = useDispatch()

  const controlName = {name}.name

  const hiddenRef: React.RefObject<HTMLInputElement> = React.createRef()

  const doAction = () => {
    setShowDropdownOptions('')
    setDropbtnColor(colorIdle)
  }

  // https://stackoverflow.com/a/42234988
  // Hook that alerts clicks outside of the passed ref
  function useOutsideAlerter(ref: React.RefObject<Element>, action: () => void) {
    useEffect(() => {
  
      // Alert if clicked on outside of element      
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Element)) {
                action()
            }
        }

      // // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside)

      return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [ref, action])
  }

   useEffect(() => {
    if (showDropdownOptions === showOptions) {
      setDropbtnBorder('')
    }
    else {
      setDropbtnBorder(borderIdle)
    }
   }, [showDropdownOptions])

  const ValidateControl = () => {
    const validity = false
    const nameObj = {[controlName]: validity}
    dispatch(setInputValidities(nameObj))
  }   

  useEffect(() => {
    ValidateControl()
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);   

  const wrapperRef = useRef(null);

  useOutsideAlerter(wrapperRef, doAction);

  // When the user clicks on the button,
  // toggle between hiding and showing the dropdown content
  const onDropdownClicked = () => {

    setShowDropdownOptions(showOptions)

    setDropbtnColor('')
  }

  const OptionPicked = (e: React.MouseEvent) => setOptionPicked(e.currentTarget)

  const setOptionPicked = (target: Element) => {
    // myValidateForm()
    const clickedLanguage = target.innerHTML;

    setPickedLanguage(clickedLanguage)

    setShowDropdownOptions('')

    const index = localOptList.indexOf(clickedLanguage);

    localOptList.splice(index, 1)

    if (pickedLanguage !== label_name) {
      localOptList.push(pickedLanguage)
    }
    else {
      const validity = true
      const nameObj = {[controlName]: validity}
      dispatch(setInputValidities(nameObj))
    }

    setLocalOptList(localOptList)

    if (hiddenRef?.current) {
       hiddenRef.current.value = clickedLanguage
    }    
  }
  
  return (
    <div className="dt__wrapper">
      <div className="global-label">{label_name}</div>

      <button type="button" onClick={onDropdownClicked} className={`dt__dropbtn ${dropbtnColor} ${dropbtnBorder}`}
      id="myDropdownButton" data-caption={label_name}>{pickedLanguage}</button>

      <div id="myDropdown" className={`dt__dropdown-content ${showDropdownOptions}`} ref={wrapperRef}>
        {
          localOptList.map((element) => <div key={nanoid()} className="dt__dropdown-option" onClick={OptionPicked}>{element}</div>)
        }
      </div>

      <input type='hidden' id={name+'Param'} name={name} ref={hiddenRef}/>
    </div>
  )    
}
