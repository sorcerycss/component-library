import Badge from "./components/Badge"
import Banner from "./components/Banner"
import Card from "./components/Card"
import cloudIcon from './assets/cloud-icon.png'
import Testimonial from "./components/Testimonial"
import personPhoto from './assets/person-photo.png'
import logo from './assets/logo.png'

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
    {/* Square badges */}
      <div style={{display: 'flex', gap: '8px'}}>
        {colors.map(color => (
          <Badge key={color} variant={color} shape="square">Badge</Badge>
        ))}
      </div>
      <br></br>
      {/* Pill badges */}
      <div style={{display: 'flex', gap: '8px'}}>
        {colors.map(color => (
          <Badge key={color} variant={color} shape="pill">Badge</Badge>
        ))}
      </div>
      <br></br>
      {/* Banners components */}
      <div style={{display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '300px'}}>
        <Banner variant="success" title="Congratulations!" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."/>
        <Banner variant="warning" title="Attention!" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."/>
        <Banner variant="error" title="There is a problem with your application" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."/>
        <Banner variant="neutral" title="Update available" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."/>
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
      <div style={{}}>
        <Testimonial image={personPhoto} quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. "
        name="May Andersons" title="Workcation, CTO"/>
        <br></br>
        <Testimonial logo={logo} quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. "
        name="May Andersons" title="Workcation, CTO"/>
      </div>
    </>
      
  )
}

export default App
