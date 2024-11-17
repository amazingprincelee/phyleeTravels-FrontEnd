import React from 'react';
import { Link } from 'react-router-dom';
import SubscriptionBanner from '../components/SubscriptionBanner';
import ContactForm from '../components/ContactForm';
import BlogPost from '../components/BlogPost';

function Blog() {
  return (
    <div className='mb-5'>
      <div className='blog-container' style={{ border: "2px solid", padding: "20px" }}>
      <h1>Travel for now and the future</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Link className="text-white" to="/blog">
          Hammer
        </Link>
        
        <Link className="text-white" to="/blog">
          January 18, 2024
        </Link>
        <Link className="text-white" to="/blog">
          Stories,Tips
        </Link>
      </div>
    </div>

    
    
    <BlogPost />
    <SubscriptionBanner />

      
    </div>
  );
}

export default Blog;
