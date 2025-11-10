'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  ClientKey,
  getClientConfig,
  getSignatureHTML,
} from '@/lib/signature-generator';

type SignatureGeneratorProps = {
  client: ClientKey;
  title?: string;
  description?: string;
  placeholders?: {
    name?: string;
    position?: string;
    email?: string;
    phone?: string;
    department?: string;
  };
};

export function SignatureGenerator({
  client,
  title = 'Lag din epostsignatur',
  description = 'Fyll ut feltene nedenfor for å generere din e-postsignatur',
  placeholders = {},
}: SignatureGeneratorProps) {
  const config = useMemo(() => getClientConfig(client), [client]);

  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('');
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    updatePreview();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, position, email, phone, department, client]);

  const updatePreview = () => {
    const html = getSignatureHTML(
      {
        name,
        position,
        email,
        phone,
        department,
      },
      client
    );
    setPreviewHTML(html);
  };

  const copyToClipboard = async () => {
    const html = getSignatureHTML(
      {
        name,
        position,
        email,
        phone,
        department,
      },
      client
    );

    try {
      await navigator.clipboard.writeText(html);
      alert('E-postsignatur kopiert til utklippstavlen!');
    } catch (err) {
      console.error('Kunne ikke kopiere:', err);
      alert('Kunne ikke kopiere. Prøv igjen.');
    }
  };

  const isCopyDisabled =
    !name || !position || !email || !phone || (config.showDepartment && !department);

  return (
    <>
      <div
        className="signature-generator"
        style={{
          display: 'flex',
          flexDirection: 'row',
          minHeight: '100vh',
          width: '100%',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          backgroundColor: '#f5f5f5',
          overflowX: 'hidden',
        }}
      >
        <div className="signature-input-panel">
        <h1
          style={{
            fontSize: '24px',
            fontWeight: '600',
            margin: '0 0 8px 0',
            color: '#1a1a1a',
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: '14px',
            color: '#666',
            margin: '0 0 24px 0',
          }}
        >
          {description}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                marginBottom: '8px',
                color: '#333',
              }}
            >
              Navn *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={placeholders.name ?? 'Fornavn Etternavn'}
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '14px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                marginBottom: '8px',
                color: '#333',
              }}
            >
              Stilling *
            </label>
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              placeholder={placeholders.position ?? 'Din stilling'}
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '14px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {config.showDepartment && (
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  marginBottom: '8px',
                  color: '#333',
                }}
              >
                Avdeling *
              </label>
              <input
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                placeholder={placeholders.department ?? 'Avdeling'}
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '14px',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          )}

          <div>
            <label
              style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                marginBottom: '8px',
                color: '#333',
              }}
            >
              E-post *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholders.email ?? 'navn@firma.no'}
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '14px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                marginBottom: '8px',
                color: '#333',
              }}
            >
              Telefonnummer *
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={placeholders.phone ?? '+47 123 45 678'}
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '14px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                boxSizing: 'border-box',
              }}
            />
          </div>
        </div>

        <button
          onClick={copyToClipboard}
          disabled={isCopyDisabled}
          style={{
            marginTop: 'auto',
            padding: '14px 24px',
            fontSize: '16px',
            fontWeight: '600',
            color: '#ffffff',
            backgroundColor: isCopyDisabled ? '#ccc' : '#0066cc',
            border: 'none',
            borderRadius: '6px',
            cursor: isCopyDisabled ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.2s',
          }}
        >
          Kopier HTML-signatur
        </button>
      </div>

        <div className="signature-preview-panel">
        <h2
          style={{
            fontSize: '20px',
            fontWeight: '600',
            marginBottom: '24px',
            color: '#1a1a1a',
          }}
        >
          Forhåndsvisning
        </h2>

          <div className="signature-preview-card">
            {previewHTML ? (
              <div dangerouslySetInnerHTML={{ __html: previewHTML }} />
            ) : (
              <p style={{ color: '#999', fontStyle: 'italic' }}>
                Fyll ut feltene for å se forhåndsvisning
              </p>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .signature-generator {
          display: flex;
          flex-direction: row;
          min-height: 100vh;
          width: 100%;
          font-family: system-ui, -apple-system, sans-serif;
          background-color: #f5f5f5;
          overflow-x: hidden;
        }

        .signature-input-panel {
          width: 100%;
          max-width: 400px;
          background-color: #ffffff;
          padding: 32px;
          box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          gap: 24px;
          box-sizing: border-box;
        }

        .signature-preview-panel {
          flex: 1;
          padding: 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          overflow-y: auto;
          box-sizing: border-box;
        }

        .signature-preview-card {
          background-color: #ffffff;
          padding: 24px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 600px;
          box-sizing: border-box;
        }

        .signature-input-panel input,
        .signature-input-panel select {
          width: 100%;
          max-width: 100%;
        }

        @media (max-width: 899px) {
          .signature-generator {
            flex-direction: column;
          }

          .signature-input-panel {
            max-width: 100%;
            padding: 24px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }

          .signature-preview-panel {
            width: 100%;
            padding: 24px;
          }
        }
      `}</style>
    </>
  );
}


