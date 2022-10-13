import useWorks from "../../hooks/useWorks"
import Loader from "../loader/loader"
import NotFound from "../not-found"
import Item from "./item"

function ItemList() {
  const { works, isLoading, isError } = useWorks()

  if (isError) return <NotFound />
  if (isLoading) return <Loader />

  return (
    <div className="grid grid-cols-2 gap-2 px-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {works.map(work => (
        <Item key={work.id} work={work} />
      ))}
    </div>
  )
}

export default ItemList
