import Badge from "./components/Badge"
import Banner from "./components/Banner"

function App() {

  const colors = [
    'gray',
    'red',
    'yellow',
    'green',
    'blue',
    'indigo',
    'purple',
    'pink']

  return (
    <>
      <div style={{display: 'flex', gap: '8px'}}>
        {colors.map(color => (
          <Badge key={color} variant={color}>Badge</Badge>
        ))}
      </div>
      <div>
        <Banner>Banner here</Banner>
      </div>
    </>
      
  )
}

export default App
