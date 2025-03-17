import { useContext } from "react"
import { ProductManageContext } from "../../contexts/ProductManageContext"
import Select from "../Commons/Select"
import { User } from "../../types/User";

export default function UserPricesFilter () {
  const { users, userSelected, setUserSelected } = useContext(ProductManageContext)

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const userID = event.target.value;
    const foundUser = users.find((user: User) => user?._id === userID)

    if (foundUser) {
      setUserSelected(foundUser)
    } else {
      setUserSelected(null)
    }
};

  return (
    <div>
      <Select
        name="user"
        value={userSelected?._id || ''}
        options={users || []}
        label="Precios especiales del usuario"
        placeholder="Seleccione un usuario"
        onChange={handleChange}
        valueProp='_id'
        labelProp="name"
        required
      />
    </div>
  )
}