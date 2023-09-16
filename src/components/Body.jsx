
import Content from './Content'
import SideBar from './SideBar'

const Body = () => {

  return (
    <div className='flex gap-10'>
        <SideBar/>
        <Content/>
    </div>
  )
}

export default Body