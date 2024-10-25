import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './components/Home/Home';
import Classes from './components/Class/Classes';
import Book from './components/Books/Book';
import Jee from './components/JEE/Jee';
import CBSE from './components/CBSE/CBSE';
import Icse from './components/ICSE/Icse';
import Neet from './components/NEET/Neet';
import Hinduism from './components/Hinduism/Hinduism';
import SubjectDetails from './components/Class/Subject/SubjectDetails';
import SubjectContent from './components/Class/Subject/SubjectContent';
import ChapterSelection from './components/Class/Subject/ChapterSelection';
import BooksClassSelection from './components/Books/BooksClassSelection';
import BooksChapterSelection from './components/Books/BooksChapterSelection';
import BooksContent from './components/Books/BooksContent';
import SubjectSelection from './components/Books/SubjectSelection';
import Slidebar from './components/Layout/Slidebar';
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
          <Route path="/classes" element={<Classes />} />
         
        
          <Route path="/book" element={<Book/>} />
          <Route path='/cbse' element={<CBSE/>}/>
          <Route path='/icse' element={<Icse/>}/>
          <Route path='/jee' element={<Jee/>}/>
          <Route path='/neet' element={<Neet/>}/>
          <Route path='/hinduism' element={<Hinduism/>}/>
           <Route path='/mention' element={<Jee/>}/>
          <Route path="/" element={<Classes />} /> {/* Classes page */}
        <Route path="/classes/:className/subjects" element={<SubjectDetails />} /> {/* Subject details page */}
        <Route path="/classes/:className/subjects/:subjectName/chapters" element={<ChapterSelection />} /> {/* Chapter selection page */}
        <Route path="/classes/:className/subjects/:subjectName/chapters/:chapterName" element={<SubjectContent />} /> {/* Subject content page */}
        <Route path='/books/ncert-solution' element={<Classes/>}/>
        <Route path='/books' element={<Book />} />
        <Route path='/books/:bookName' element={<BooksClassSelection />} />
        <Route path='/books/:bookName/:className' element={<SubjectSelection />} />
        <Route path='/books/:bookName/:className/:subject?' element={<BooksChapterSelection />} />
        <Route path='/books/:bookName/:className/:subject?/:chapter' element={<BooksContent />} />
        
        <Route path='/cbse/books' element={<Book/>}/>
        <Route path='/slidebar' element={<Slidebar/>}/>
      </Routes>
    </Router>


  )
}

export default App;
