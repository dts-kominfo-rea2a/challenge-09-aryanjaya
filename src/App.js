import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  const contactLists = contacts.map(contact => <Contact key={contact.name} data={contact} />);

  return (
    <div className="App">
      <Header />
      {contactLists}
    </div>
  );
}

export default App;
