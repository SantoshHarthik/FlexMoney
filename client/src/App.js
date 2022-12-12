
import Navbar from './Components/Navbar';
import Add from './Components/Add';
import Aboutus from './Components/Aboutus';
import ContactUs from './Components/ContactUs';
import Homepage from './Components/Homepage';





function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Homepage />
        <Add />
        <Aboutus />
        <ContactUs />
      </main>
    </div>
  );
}

export default App;
