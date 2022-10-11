import useWorks from "../../hooks/useWorks"
import Item from "./item"
import Loader from "../loader/loader"

function ItemList() {
  const { works, isLoading, isError } = useWorks()

  if (isError) return <div>Oups, something went wrong</div>

  if (isLoading) return <Loader />

  return (
    <div className="flex flex-wrap">
      {works?.map(work => (
        <Item key={work.id} work={work} />
      ))}
    </div>
  )
}

export default ItemList
