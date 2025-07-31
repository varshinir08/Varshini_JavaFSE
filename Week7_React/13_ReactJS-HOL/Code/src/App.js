import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [view, setView] = useState('books');

   let component;
  if (view === 'books') {
    component = <BookDetails />;
  } else if (view === 'blogs') {
    component = <BlogDetails />;
  } else if (view === 'courses') {
    component = <CourseDetails />;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Blogger App</h1>

       <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setView('books')}>Show Books</button>
        <button onClick={() => setView('blogs')}>Show Blogs</button>
        <button onClick={() => setView('courses')}>Show Courses</button>
      </div>

       {component}

       <div style={{ marginTop: '30px' }}>
        <h3>Mini Status:</h3>
        {view === 'books' ? (
          <p>Currently viewing books.</p>
        ) : view === 'blogs' ? (
          <p>Currently viewing blogs.</p>
        ) : (
          <p>Currently viewing courses.</p>
        )}
      </div>
    </div>
  );
}

export default App;
