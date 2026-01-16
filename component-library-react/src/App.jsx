import Badge from "./components/Badge"

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
      <div style={{display: 'flex', gap: '8px'}}>
        {colors.map(color => (
          <Badge key={color} variant={color}>Badge</Badge>
        ))}
      </div>
  )
}

export default App
