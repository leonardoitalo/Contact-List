import FilterCard from "components/FilterCard"
import { Aside, Filters } from "./styles"
import { Field } from "global/styles/GlobalComponents"

export const BarraLateral = () => {
  return (
    <Aside>
        <Field />
        <Filters>
         <FilterCard text="Todos" />
         <FilterCard text="Favoritos" />
        </Filters>
    </Aside>
  )
}
