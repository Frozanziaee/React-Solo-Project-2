import data from "./data"
import './App.css'
import Header from './components/Heder'
import Content from './components/Content'

function App() {
  const travel = data.map(item =>{
    return (
      <Content
        key = {item.id}
        item = {item}
      />
    )
  })

  return (
    <>
      <Header />
      <section className="travel-list">
        {travel}
      </section>
    </>
  )
}

export default App
