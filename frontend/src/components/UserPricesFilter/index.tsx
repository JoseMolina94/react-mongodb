import { useContext } from "react"
import { ProductManageContext } from "../../contexts/ProductManageContext"
import DropDown from "../Commons/DropDown"


export default function UserPricesFilter () {
  const { users, userSelected, setUserSelected } = useContext(ProductManageContext)

  const handleDropDownChange = (name: string, value: any) => {
    setUserSelected(value)
  }

  return (
    <div>
      <DropDown
        name="user"
        value={userSelected || ''}
        options={users || []}
        label="Precios especiales del usuario"
        onChange={handleDropDownChange}
        valueProp='_id'
        labelProp="name"
        getCompleteObject
        required
      />
    </div>
  )
}