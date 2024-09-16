import {CFormInput, CTableDataCell} from "@coreui/react";
import {ProductType, setProductField} from "../slice/products-slice.ts";
import {ChangeEvent, FC, KeyboardEvent, useState} from "react";
import {useAppDispatch} from "../store.ts";
import classNames from "classnames";

type ProductRowProps = { product: ProductType, field: string }

const ProductRow: FC<ProductRowProps> = ({product, field}) => {
  const dispatch = useAppDispatch()
  const [isEditMode, setIsEditMode] = useState(false);
  const [value, setValue] = useState(product[field as keyof ProductType])
  const [valueError, setValueError] = useState(false)

  const handlePressEnter = (event:  KeyboardEvent<HTMLInputElement>) => {
    const queryValue = typeof product[field as keyof ProductType] === "number" ? Number(value) : value
    const isInputValid = typeof product[field as keyof ProductType] === "number" ? Number(value) : true

    if (!isInputValid) {
      setValueError(true)
      return null
    }
    if (event.key === "Enter") {
      dispatch(setProductField({...product, [field as keyof ProductType]: queryValue}))
      setIsEditMode(false)
      setValueError(false)
    } else {
      setValueError(false)
      return null
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
  }
  return (
    <CTableDataCell>
      <CFormInput value={value} className={classNames("bg-body p-0", valueError ? "border-2 border-danger" : "border-0")}
                  readOnly={!isEditMode}
                  plainText={!isEditMode}
                  onChange={handleChange}
                  onDoubleClick={() => setIsEditMode(true)}
                  onBlur={() => {
                    setIsEditMode(false)
                    setValue(product[field as keyof ProductType])
                  }
                  }
                  onKeyDown={handlePressEnter}
      />
    </CTableDataCell>
  )
}

export default ProductRow;