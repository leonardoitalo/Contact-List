import { Card, Counter, Label } from "./styles"

interface IFilterCard {
  text: string
}

const FilterCard = ({ text }: IFilterCard) => {
  return (
    <Card>
      <Counter>
        1
      </Counter>
      <Label>
        {text}
      </Label>
    </Card>
  )
}

export default FilterCard