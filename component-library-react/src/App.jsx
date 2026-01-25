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
    {/* Square badges component */}
      <div style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '20px'}}>
        {colors.map(color => (
          <Badge key={color} variant={color} shape="square">Badge</Badge>
        ))}
      </div>
      
      {/* Pill badges component */}
      <div style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '20px'}}>
        {colors.map(color => (
          <Badge key={color} variant={color} shape="pill">Badge</Badge>
        ))}
      </div>
      
      {/* Banners components */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        maxWidth: '300px',
        marginBottom: '20px'}}>
        <Banner
        variant="success"
        title="Congratulations!"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."/>
        <Banner
        variant="warning"
        title="Attention!"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."/>
        <Banner
        variant="error"
        title="There is a problem with your application"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."/>
        <Banner
        variant="neutral"
        title="Update available"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."/>
        <Banner
        variant="success"
        title="Congratulations!" />
        <Banner
        variant="warning"
        title="Attention!" />
        <Banner
        variant="error"
        title="There is a problem with your application" />
        <Banner
        variant="neutral"
        title="Update available" />
      </div>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        maxWidth: '384px'
      }}>
        <Card icon={cloudIcon}
        title="Easy Deployment"
        text="Ac tincidunt sapien vehicula erat auctor pellentesque rhocus. Et magna sit morbi lobortis."/>
        <Card icon={cloudIcon}
        title="Easy Deployment"
        text="Ac tincidunt sapien vehicula erat auctor pellentesque rhocus. Et magna sit morbi lobortis."/>
      </div>
      
      <div>
        
        <Testimonial
        image={personPhoto}
        quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. "
        name="May Andersons"
        title="Workcation, CTO"
        />
        
        <Testimonial
        logo={logo}
         quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. "
        name="May Andersons"
        title="Workcation, CTO"
        />

      </div>
    </>
  )
}

export default App
