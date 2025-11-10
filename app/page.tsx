'use client';

import { useState, useEffect } from 'react';
import { getSignatureHTML } from '@/lib/signature-generator';

export default function Home() {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    updatePreview();
  }, [name, position, email, phone]);

  const updatePreview = () => {
    const html = getSignatureHTML({
      name,
      position,
      email,
      phone,
    });
    setPreviewHTML(html);
  };

  const copyToClipboard = async () => {
    const html = getSignatureHTML({
      name,
      position,
      email,
      phone,
    });
    
    try {
      await navigator.clipboard.writeText(html);
      alert('E-postsignatur kopiert til utklippstavlen!');
    } catch (err) {
      console.error('Kunne ikke kopiere:', err);
      alert('Kunne ikke kopiere. Prøv igjen.');
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      minHeight: '100vh', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#f5f5f5'
    }}>
      {/* Left Panel - Input Fields */}
      <div style={{
        width: '400px',
        backgroundColor: '#ffffff',
        padding: '32px',
        boxShadow: '2px 0 8px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
        <h1 style={{
          fontSize: '24px',
          fontWeight: '600',
          margin: '0 0 8px 0',
          color: '#1a1a1a'
        }}>
          Lag din epostsignatur
        </h1>
        <p style={{
          fontSize: '14px',
          color: '#666',
          margin: '0 0 24px 0'
        }}>
          Fyll ut feltene nedenfor for å generere din e-postsignatur
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '8px',
              color: '#333'
            }}>
              Navn *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Fornavn Etternavn"
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '14px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '8px',
              color: '#333'
            }}>
              Stilling *
            </label>
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              placeholder="Din stilling"
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '14px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '8px',
              color: '#333'
            }}>
              E-post *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="navn@kagge.no"
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '14px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '8px',
              color: '#333'
            }}>
              Telefonnummer *
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+47 123 45 678"
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '14px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                boxSizing: 'border-box'
              }}
            />
          </div>
        </div>

        <button
          onClick={copyToClipboard}
          disabled={!name || !position || !email || !phone}
          style={{
            marginTop: 'auto',
            padding: '14px 24px',
            fontSize: '16px',
            fontWeight: '600',
            color: '#ffffff',
            backgroundColor: name && position && email && phone ? '#0066cc' : '#ccc',
            border: 'none',
            borderRadius: '6px',
            cursor: name && position && email && phone ? 'pointer' : 'not-allowed',
            transition: 'background-color 0.2s'
          }}
        >
          Kopier HTML-signatur
        </button>
      </div>

      {/* Right Panel - Preview */}
      <div style={{
        flex: 1,
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflow: 'auto'
      }}>
        <h2 style={{
          fontSize: '20px',
          fontWeight: '600',
          marginBottom: '24px',
          color: '#1a1a1a'
        }}>
          Forhåndsvisning
        </h2>
        
        <div style={{
          backgroundColor: '#ffffff',
          padding: '24px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          maxWidth: '600px',
          width: '100%'
        }}>
          {previewHTML ? (
            <div dangerouslySetInnerHTML={{ __html: previewHTML }} />
          ) : (
            <p style={{ color: '#999', fontStyle: 'italic' }}>
              Fyll ut feltene til venstre for å se forhåndsvisning
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

