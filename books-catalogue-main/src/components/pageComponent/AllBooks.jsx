import { Grid } from '@mui/material'
import useBookContext from '../context/bookContext'
import Item from './Item'
import PageBtn from './PageBtn'

const AllBooks = () => {
  const { pagedBooks, page } = useBookContext()

  return (
    <>
      <Grid container spacing={3}>
        {pagedBooks[page].map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Item book={item} />
            </Grid>
          )
        })}
      </Grid>
      <PageBtn />
    </>
  )
}
export default AllBooks
