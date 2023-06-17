import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import SettingsComp from "../components/SettingsComp"

function Settings() {
  return (
    <>
      <Navbar />
      <div className="content--container">
        <SettingsComp />
      </div>
      <Footer />
    </>
  )
}

export default Settings