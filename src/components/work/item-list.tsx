import useWorks from "../../hooks/useWorks"
import Loader from "../loader/loader"
import NotFound from "../not-found"
import Item from "./item"

function ItemList() {
  const { works, isLoading, isError } = useWorks()

  if (isError) return <NotFound />
  if (isLoading) return <Loader />

  return (
    <div className="flex flex-wrap">
      {works.map(work => (
        <Item key={work.id} work={work} />
      ))}
    </div>
  )
}

export default ItemList
