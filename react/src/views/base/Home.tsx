import "./Home.css"

export default function App() {
  return (
    <>
      <header style={{ position: 'fixed', zIndex: '3', color: '#fafafa', padding: '2rem 6rem' }}>
        <p>CAR <b>ASSIST HUB</b></p>
      </header>
      <div className="showcase">
        <div className="showcase__back image--back" style={{ backgroundImage: "url('/background/4.jpg')" }}></div>
        <h1 className="pos--abs pos--center" style={{ color: '#fafafa' }}>Home Page Coming</h1>
      </div>
    </>
  )
}