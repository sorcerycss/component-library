import Badge from "./components/Badge"
import Banner from "./components/Banner"
import Card from "./components/Card"
import cloudIcon from './assets/cloud-icon.png'
import Testimonial from "./components/Testimonial"

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
      <br></br>
      <div style={{display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '300px'}}>
        <Banner variant="success" title="Congratulations!" text="Lorem ipsum"/>
        <Banner variant="warning" title="Attention!" text="Lorem ipsum"/>
        <Banner variant="error" title="There is a problem with your application" text="Lorem ipsum"/>
        <Banner variant="neutral" title="Update available" text="Lorem ipsum"/>
        <br></br>
        <Banner variant="success" title="Congratulations!" />
        <Banner variant="warning" title="Attention!" />
        <Banner variant="error" title="There is a problem with your application" />
        <Banner variant="neutral" title="Update available" />
      </div>
      <br></br>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        maxWidth: '384px'
      }}>
        <Card icon={cloudIcon} title="Easy Deployment" text="Ac tincidunt sapien vehicula erat auctor pellentesque rhocus. Et magna sit morbi lobortis."/>
        <br></br>
        <Card icon={cloudIcon} title="Easy Deployment" text="Ac tincidunt sapien vehicula erat auctor pellentesque rhocus. Et magna sit morbi lobortis."/>
      </div>
      <br></br>
      <div>
        <Testimonial>Testimonial here</Testimonial>
      </div>
    </>
      
  )
}

export default App
