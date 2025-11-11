"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./SignatureGenerator.module.scss";
import {
  ClientKey,
  getClientConfig,
  getSignatureHTML,
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
  };
};

export function SignatureGenerator({
  client,
  title = "Lag din epostsignatur",
  description = "Fyll ut feltene nedenfor for å generere din e-postsignatur",
  placeholders = {},
}: SignatureGeneratorProps) {
  const config = useMemo(() => getClientConfig(client), [client]);
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
    }),
    [
      placeholders.name,
      placeholders.position,
      placeholders.email,
      placeholders.phone,
      placeholders.department,
      config.showDepartment,
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
  const [previewHTML, setPreviewHTML] = useState("");

  useEffect(() => {
    updatePreview();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, position, email, phone, department, client, mergedPlaceholders]);

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
      alert("E-postsignatur kopiert til utklippstavlen!");
    } catch (err) {
      console.error("Kunne ikke kopiere:", err);
      alert("Kunne ikke kopiere. Prøv igjen.");
    }
  };

  const isCopyDisabled = !name || !position || !email || !phone;

  return (
    <div className={styles.signatureGenerator}>
      <form className={styles.inputPanel} onSubmit={(e) => e.preventDefault()}>
        <h1 className={styles.heading}>{title}</h1>
        <p className={styles.description}>{description}</p>

        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Informasjon om signaturen</legend>

          <div className={styles.fieldList}>
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
          </div>
        </fieldset>

        <button
          type="button"
          onClick={copyToClipboard}
          disabled={isCopyDisabled}
          className={styles.copyButton}
          aria-label="Kopier HTML-signaturen"
        >
          Kopier HTML-signatur
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
      </div>
    </div>
  );
}


