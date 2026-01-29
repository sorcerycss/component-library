import './App.css'

import Badge from "./components/Badge"
import Banner from "./components/Banner"
import Card from "./components/Card"
import Testimonial from "./components/Testimonial"

import cloudIcon from './assets/cloud-icon.svg'
import personPhotoMobile from './assets/person-photo-mobile.png'
import personPhotoDesktop from './assets/person-photo-desktop.png'
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
    {/* Square badge component */}
    <div className='component-section'>
      <div className='badge-row'>
        {colors.map(color => (
          <Badge key={color} variant={color} shape="square">Badge</Badge>
        ))}
      </div>
      
      {/* Pill badge component */}
      <div className='badge-row'>
        {colors.map(color => (
          <Badge key={color} variant={color} shape="pill">Badge</Badge>
        ))}
      </div>
    </div>

      {/* Banners component */}
      <div className='component-section banner-column'>

        <Banner variant="success">
          <Banner.Icon variant="success" />
          <Banner.Content>
            <Banner.Title>Congratulations!</Banner.Title>
            <Banner.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aliquid pariatur, ipsum similique veniam.
            </Banner.Text>
          </Banner.Content>
        </Banner>

        <Banner variant="warning">
          <Banner.Icon variant="warning" />
          <Banner.Content>
            <Banner.Title>Attention!</Banner.Title>
            <Banner.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aliquid pariatur, ipsum similique veniam.
            </Banner.Text>
          </Banner.Content>
        </Banner>

         <Banner variant="error">
          <Banner.Icon variant="error" />
          <Banner.Content>
            <Banner.Title>There is a problem with your application</Banner.Title>
            <Banner.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aliquid pariatur, ipsum similique veniam.
            </Banner.Text>
          </Banner.Content>
        </Banner>

         <Banner variant="neutral">
          <Banner.Icon variant="neutral" />
          <Banner.Content>
            <Banner.Title>Update available</Banner.Title>
            <Banner.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aliquid pariatur, ipsum similique veniam.
            </Banner.Text>
          </Banner.Content>
        </Banner>

        <Banner variant="success">
          <Banner.Icon variant="success" />
          <Banner.Content>
            <Banner.Title>Congratulations!</Banner.Title>
          </Banner.Content>
        </Banner>

        <Banner variant="warning">
          <Banner.Icon variant="warning" />
          <Banner.Content>
            <Banner.Title>Attention!</Banner.Title>
          </Banner.Content>
        </Banner>

        <Banner variant="error">
          <Banner.Icon variant="error" />
          <Banner.Content>
            <Banner.Title>There is a problem with your application</Banner.Title>
          </Banner.Content>
        </Banner>

        <Banner variant="neutral">
          <Banner.Icon variant="neutral" />
          <Banner.Content>
            <Banner.Title>Update available</Banner.Title>
          </Banner.Content>
        </Banner>
      </div>
      
      <div className='component-section card-column'>
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
        <Testimonial variant="image">
          <Testimonial.Card>
            <Testimonial.Image
            mobileSrc={personPhotoMobile}
            desktopSrc={personPhotoDesktop}
            />
            <div>
            <Testimonial.QuoteIcon />
            <Testimonial.Quote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla
                vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
            </Testimonial.Quote>
            <Testimonial.Name>May Andersons</Testimonial.Name>
            <Testimonial.Title>Workcation, CTO</Testimonial.Title>
            </div>
          </Testimonial.Card>
        </Testimonial>

        <Testimonial variant="logo">
          <Testimonial.Card>
            <Testimonial.Logo src={logo} />
            <Testimonial.Quote>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita
                voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
            </Testimonial.Quote>
            <Testimonial.Name>May Andersons</Testimonial.Name>
            <Testimonial.Title>Workcation, CTO</Testimonial.Title>
            <Testimonial.Dots />
          </Testimonial.Card>
        </Testimonial>
      </div>
    </>
  )
}

export default App
