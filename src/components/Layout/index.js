import './index.css'
import Header from '../Header'
import Footer from '../Footer'
import Body from '../Body'

const ConfigurationController = () => (
  <div className="layout-container">
    <div className="responsive-container">
      <Header />
      <Body />
      <Footer />
    </div>
  </div>
)

export default ConfigurationController
