```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <div>Home</div>}
function About() { return <div>About</div> }

function User() {
  const params = useParams();
  return (
    <div>
      <h2>User Details</h2>
      <p>User ID: {params.id}</p>
    </div>
  );
}
```