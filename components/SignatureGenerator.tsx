"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./SignatureGenerator.module.scss";
import {
  ClientKey,
  getClientConfig,
  getClientTemplates,
  getSignatureHTML,
  type ClientTemplate,
} from "@/lib/signature-generator";

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
    linkedin?: string;
    customLink?: string;
  };
};

export function SignatureGenerator({
  client,
  title = "Lag din epostsignatur",
  description = "Fyll ut feltene nedenfor for å generere din e-postsignatur",
  placeholders = {},
}: SignatureGeneratorProps) {
  const config = useMemo(() => getClientConfig(client), [client]);
  const templates = useMemo<ClientTemplate[]>(
    () => getClientTemplates(client),
    [client]
  );
  const departmentOptions = useMemo(
    () => config.departmentOptions ?? [],
    [config.departmentOptions]
  );
  const mergedPlaceholders = useMemo(
    () => ({
      name: placeholders.name ?? "Fornavn Etternavn",
      position: placeholders.position ?? "Din stilling",
      email: placeholders.email ?? "navn@firma.no",
      phone: placeholders.phone ?? "+47 123 45 678",
      department: config.showDepartment ? placeholders.department ?? "" : "",
      linkedin: config.showLinkedin ? placeholders.linkedin ?? "" : "",
      customLink: 'customLinkLabel' in config && config.customLinkLabel ? placeholders.customLink ?? "" : "",
    }),
    [
      placeholders.name,
      placeholders.position,
      placeholders.email,
      placeholders.phone,
      placeholders.department,
      placeholders.linkedin,
      placeholders.customLink,
      config,
    ]
  );

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState(() =>
    config.showDepartment && departmentOptions.length > 0
      ? departmentOptions[0].value
      : ""
  );
  const [linkedin, setLinkedin] = useState("");
  const [customLink, setCustomLink] = useState("");
  const [selectedTemplateId, setSelectedTemplateId] = useState(
    templates[0]?.id ?? ""
  );

  useEffect(() => {
    setSelectedTemplateId(templates[0]?.id ?? "");
  }, [templates]);
  const [previewHTML, setPreviewHTML] = useState("");

  useEffect(() => {
    console.log(
      '%cE-postsignatur Generator',
      'color: #0066cc; font-size: 14px; font-weight: bold;',
      '\nVersion deployed:',
      new Date().toISOString().split('T')[0],
      '\nBuild time:',
      new Date().toLocaleString('nb-NO')
    );
  }, []);

  useEffect(() => {
    updatePreview();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    name,
    position,
    email,
    phone,
    department,
    linkedin,
    customLink,
    client,
    config,
    mergedPlaceholders,
    selectedTemplateId,
  ]);

  useEffect(() => {
    if (config.showDepartment && departmentOptions.length > 0) {
      setDepartment((current) => {
        const availableValues = departmentOptions.map((option) => option.value);
        return availableValues.includes(current)
          ? current
          : departmentOptions[0].value;
      });
    } else {
      setDepartment("");
    }
  }, [client, config.showDepartment, departmentOptions]);

  const updatePreview = () => {
    const html = getSignatureHTML(
      {
        name: name || mergedPlaceholders.name,
        position: position || mergedPlaceholders.position,
        email: email || mergedPlaceholders.email,
        phone: phone || mergedPlaceholders.phone,
        department: department || mergedPlaceholders.department,
        linkedin: linkedin || '', // Use empty string to allow company LinkedIn fallback
        customLink: customLink || '',
      },
      client,
      selectedTemplateId
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
        linkedin: linkedin || '', // Use empty string to allow company LinkedIn fallback
        customLink: customLink || '',
      },
      client,
      selectedTemplateId
    );

    try {
      if (navigator.clipboard && window.ClipboardItem) {
        const data = {
          'text/html': new Blob([html], { type: 'text/html' }),
          'text/plain': new Blob([html], { type: 'text/plain' }),
        };
        await navigator.clipboard.write([new ClipboardItem(data)]);
      } else {
        await navigator.clipboard.writeText(html);
      }
      
      if (typeof window !== 'undefined' && window.plausible) {
        window.plausible('Kopier signatur');
      }
      
      alert('E-postsignatur kopiert til utklippstavlen!');
    } catch (err) {
      console.error('Kunne ikke kopiere:', err);
      alert('Kunne ikke kopiere. Prøv igjen.');
    }
  };

  const isCopyDisabled = !name || !position || !email || !phone;

  return (
    <div className={styles.signatureGenerator}>
      <form className={styles.inputPanel} onSubmit={(e) => e.preventDefault()}>
        <h1 className={styles.heading}>{title}</h1>
        <p className={styles.description}>{description}</p>

        <fieldset className={styles.fieldset}>
          <legend className={styles.visuallyHidden}>Din kontaktinformasjon</legend>

          <div className={styles.fieldList}>
            {templates.length > 1 && (
              <div>
                <label className={styles.label} htmlFor="template-input">
                  Mal
                </label>
                <div className={styles.selectWrapper}>
                  <select
                    id="template-input"
                    name="template"
                    value={selectedTemplateId}
                    onChange={(e) => setSelectedTemplateId(e.target.value)}
                    className={styles.select}
                  >
                    {templates.map(({ id, title }) => (
                      <option key={id} value={id}>
                        {title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
            <div>
              <label className={styles.label} htmlFor="name-input">
                Navn *
              </label>
              <input
                id="name-input"
                type="text"
                name="full-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={mergedPlaceholders.name}
                autoComplete="name"
                autoCapitalize="words"
                className={styles.input}
                required
              />
            </div>

            <div>
              <label className={styles.label} htmlFor="position-input">
                Stilling *
              </label>
              <input
                id="position-input"
                type="text"
                name="job-title"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                placeholder={mergedPlaceholders.position}
                autoComplete="organization-title"
                className={styles.input}
                required
              />
            </div>

            {config.showDepartment && (
              <div>
                <label className={styles.label} htmlFor="department-input">
                  Avdeling
                </label>
                <div className={styles.selectWrapper}>
                  <select
                    id="department-input"
                    name="department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    autoComplete="organization"
                    className={styles.select}
                  >
                    {departmentOptions.map(({ value, label }) => (
                      <option key={value || "none"} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            <div>
              <label className={styles.label} htmlFor="email-input">
                E-post *
              </label>
              <input
                id="email-input"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={mergedPlaceholders.email}
                autoComplete="email"
                className={styles.input}
                required
              />
            </div>

            <div>
              <label className={styles.label} htmlFor="phone-input">
                Telefonnummer *
              </label>
              <input
                id="phone-input"
                type="tel"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={mergedPlaceholders.phone}
                autoComplete="tel"
                inputMode="tel"
                className={styles.input}
                required
              />
            </div>

            {config.showLinkedin && (
              <div>
                <label className={styles.label} htmlFor="linkedin-input">
                  LinkedIn-adresse
                </label>
                <p className={styles.tooltip}>Hvis feltet står tomt, går lenken til selskapets LinkedIn-side</p>
                <input
                  id="linkedin-input"
                  type="url"
                  name="linkedin"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  placeholder={mergedPlaceholders.linkedin || "https://linkedin.com/in/dittnavn"}
                  autoComplete="url"
                  className={styles.input}
                />
              </div>
            )}

            {'customLinkLabel' in config && config.customLinkLabel && (
              <div>
                <label className={styles.label} htmlFor="custom-link-input">
                  {config.customLinkLabel}
                </label>
                <input
                  id="custom-link-input"
                  type="url"
                  name="customLink"
                  value={customLink}
                  onChange={(e) => setCustomLink(e.target.value)}
                  placeholder={mergedPlaceholders.customLink || `https://example.com`}
                  autoComplete="url"
                  className={styles.input}
                />
              </div>
            )}
          </div>
        </fieldset>

        <button
          type="button"
          onClick={copyToClipboard}
          disabled={isCopyDisabled}
          className={styles.copyButton}
          aria-label="Kopier signatur"
        >
          Kopier signatur
        </button>
      </form>

      <div className={styles.previewPanel} aria-live="polite">
        <h2 className={styles.previewHeading}>Forhåndsvisning</h2>

        <div className={styles.previewCard}>
          {previewHTML ? (
            <div dangerouslySetInnerHTML={{ __html: previewHTML }} />
          ) : (
            <p className={styles.previewPlaceholder}>
              Fyll ut feltene for å se forhåndsvisning
            </p>
          )}
        </div>

        <p className={styles.previewCredit}>
          Dette er en tjeneste fra{" "}
          <a href="https://smuss.studio" target="_blank" rel="noreferrer">
            Smuss Studio
          </a>
          . Er det noe som ikke fungerer? Ta kontakt med{" "}
          <a href="mailto:jorgen@smuss.studio">jorgen@smuss.studio</a>.
        </p>
      </div>
    </div>
  );
}


