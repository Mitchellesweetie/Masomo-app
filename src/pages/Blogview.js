import React from 'react'
import BlogPosts from '../data/Blogposts'
import { useParams } from 'react-router-dom'

function Blogview() {
  return (
    <div>


        
        <article style={{ maxWidth: '700px', margin: '0 auto', padding: '2rem' }}>
            <h1>Understanding React Hooks</h1>
            <p style={{ color: '#888', fontSize: '0.9rem' }}>Published on June 10, 2024 • by Jane Doe</p>
            <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
                alt="React Hooks"
                style={{ width: '100%', borderRadius: '8px', margin: '1.5rem 0' }}
            />
            <section>
                <p>
                    React Hooks are functions that let you use state and other React features without writing a class. They were introduced in React 16.8 and have changed the way developers write React components.
                </p>
                <h2>Why Hooks?</h2>
                <p>
                    Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.
                </p>
                <h2>Common Hooks</h2>
                <ul>
                    <li><strong>useState</strong> – for local state management</li>
                    <li><strong>useEffect</strong> – for side effects</li>
                    <li><strong>useContext</strong> – for accessing context</li>
                </ul>
                <p>
                    Hooks are fully backward-compatible and work alongside your existing code.
                </p>
            </section>
            <nav style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                <button style={{ padding: '0.5rem 1.5rem', borderRadius: '4px', border: '1px solid #ccc', background: '#f5f5f5', cursor: 'pointer' }}>
                    &larr; Previous Post
                </button>
                <button style={{ padding: '0.5rem 1.5rem', borderRadius: '4px', border: '1px solid #007bff', background: '#007bff', color: '#fff', cursor: 'pointer' }}>
                    Next Post &rarr;
                </button>
            </nav>
        </article>
    </div>
  )
}

export default Blogview