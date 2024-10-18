import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './components/Home/Home';
import Classes from './components/Class/Classes';
import First from './components/Class/First';
import Second from './components/Class/Second';
import Third from './components/Class/Third';
import Fourth from './components/Class/Fourth';
import Fifth from './components/Class/Fifth';
import Six from './components/Class/Six';
import Seventh from './components/Class/Seventh';
import Eigth from './components/Class/Eigth';
import Ninth from './components/Class/Ninth';
import Tenth from './components/Class/Tenth';
import Eleventh from './components/Class/Eleventh';
import Twelve from './components/Class/Twelve';
import Book from './components/Books/Book';
import Jee from './components/JEE/Jee';
import CBSE from './components/CBSE/CBSE';
import Icse from './components/ICSE/Icse';
import Neet from './components/NEET/Neet';
import Hinduism from './components/Hinduism/Hinduism';
import Ncert_solution from './components/Ncert-Solution/Ncert_solution';
import Class_solution from './components/Books/NCERT-solution/Class';
import Class10 from './components/Books/NCERT-solution/Classes-content/Class10';
import Science from './components/Books/NCERT-solution/Classes-content/Science';
import Subjects from './components/Class/Subject/Subjects';
import SubjectDetails from './components/Class/Subject/SubjectDetails';
import SubjectContent from './components/Class/Subject/SubjectContent';
import ChapterSelection from './components/Class/Subject/ChapterSelection';
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
          <Route path="/classes" element={<Classes />} />
         
          <Route path="/classes/second" element={<Second />} />
          <Route path="/classes/third" element={<Third/>} />
          <Route path="/classes/fourth" element={<Fourth />} />
          <Route path="/classes/fifth" element={<Fifth />} />
          <Route path="/classes/sixth" element={<Six />} />
          <Route path="/classes/seventh" element={<Seventh />} />
          <Route path="/classes/eight" element={<Eigth />} />
          <Route path="/classes/ninth" element={<Ninth />} />
          <Route path="/classes/tenth" element={<Tenth />} />
          <Route path="/classes/eleventh" element={<Eleventh/>} />
          <Route path="/classes/twelth" element={<Twelve />} />
          <Route path="/book" element={<Book/>} />
          <Route path='/cbse' element={<CBSE/>}/>
          <Route path='/icse' element={<Icse/>}/>
          <Route path='/jee' element={<Jee/>}/>
          <Route path='/neet' element={<Neet/>}/>
          <Route path='/hinduism' element={<Hinduism/>}/>
          <Route path='/class-solution' element={<Class_solution/>}/>
           <Route path='/class10' element={<Class10/>}/>
           <Route path='/mention' element={<Jee/>}/>
          <Route path='/maths' element={<Class10/>}/>
          <Route path='/english' element={<Class10/>}/>
          <Route path='/science' element={<Science/>}/>
          <Route path='/sst' element={<Science/>}/> 
          <Route path="/" element={<First />} /> {/* Landing page */}
          <Route path="/" element={<Classes />} /> {/* Classes page */}
        <Route path="/classes/:className/subjects" element={<SubjectDetails />} /> {/* Subject details page */}
        <Route path="/classes/:className/subjects/:subjectName/chapters" element={<ChapterSelection />} /> {/* Chapter selection page */}
        <Route path="/classes/:className/subjects/:subjectName/chapters/:chapterName" element={<SubjectContent />} /> {/* Subject content page */}
      </Routes>
    </Router>


  )
}

export default App;
