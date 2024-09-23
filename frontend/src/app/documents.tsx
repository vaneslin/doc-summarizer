"use client"; // IMPORTANT - turns out you need to add this at top for Next.js 13 and later

import { useState, useEffect } from 'react';

type Document = {
    id: number;
    title: string;
    author: string;
    content: string;
    summary: string;
  };
  
  
  const DocumentsPage = () => {
    const [documents, setDocuments] = useState<Document[]>([]);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchDocuments = async () => {
        try {
          const response = await fetch('http://127.0.0.1:8000/api/documents/', {
            //'http://localhost:8000/api/documents/'
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          if (!response.ok) {
            throw new Error('Failed to fetch documents');
          }
  
          const data: Document[] = await response.json();
          setDocuments(data);
        } catch (error:any) {
            console.error(error);
            const errorMessage = error.message || error.toString() || 'An error occurred while fetching documents.';
            setError(error.message);
        }
      };
  
      fetchDocuments();
    }, []);
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    return (
      <div>
        <h1>Documents</h1>
        {documents.length === 0 ? (
          <p>No documents available.</p>
        ) : (
          <ul>
            {documents.map((document) => (
              <li key={document.id}>
                <h2>{document.title}</h2>
                <p>Author: {document.author}</p>
                <p>Summary: {document.summary}</p>
                <p>Content: {document.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default DocumentsPage;