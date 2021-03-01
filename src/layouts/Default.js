import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

function Default({ children }) {
  return (
    <div className="default-layout">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  )
}

export default Default
