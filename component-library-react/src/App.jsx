import './App.css'

import Badge from "./components/Badge"
import Banner from "./components/Banner"
import Card from "./components/Card"
import Testimonial from "./components/Testimonial"

import cloudIcon from './assets/cloud-icon.svg'

import personPhoto from './assets/person-photo.png'
import logo from './assets/logo.svg'

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
    <div className='component-section'>
      <div className='badge-row'>
        {colors.map(color => (
          <Badge key={color} variant={color} shape="square">Badge</Badge>
        ))}
      </div>
      
      {/* Pill badges component */}
      <div className='badge-row'>
        {colors.map(color => (
          <Badge key={color} variant={color} shape="pill">Badge</Badge>
        ))}
      </div>
    </div>

      {/* Banners component */}
      <div className='component-section banner-column'>
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
      
      <div className='card-column'>
        <Card>
          <Card.Icon src={cloudIcon} hover={false} />
          <Card.Content>
            <Card.Title>Easy Development</Card.Title>
            <Card.Text>
                Ac tincidunt sapien vehicula erat auctor pellentesque
                rhocus. Et magna sit morbi lobortis.
            </Card.Text>
          </Card.Content>
        </Card>

        <Card>
          <Card.Icon src={cloudIcon} hover={true} />
          <Card.Content>
            <Card.Title>Easy Development</Card.Title>
            <Card.Text>
                Ac tincidunt sapien vehicula erat auctor pellentesque
                rhocus. Et magna sit morbi lobortis.
            </Card.Text>
          </Card.Content>
        </Card>
      </div>
      
      <div className='testimonial-column'>
        <Testimonial
        image={personPhoto}
        quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. "
        name="May Andersons"
        title="Workcation, CTO"
        />
        <Testimonial
        logo={logo}
        quote='“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”'
        name="May Andersons"
        title="Workcation, CTO"
        />
      </div>
    </>
  )
}

export default App
