import React from 'react';

const BlogDetails = () => {
  const blogs = [
    { id: 1, title: 'Understanding React Hooks', author: 'Chris' },
    { id: 2, title: 'Conditional Rendering Explained', author: 'Varun' }
  ];

  return (
    <div>
      <h2>Blog Details</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <strong>{blog.title}</strong> by {blog.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogDetails;
