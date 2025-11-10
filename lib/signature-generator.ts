import { kaggeTemplate } from '@/templates/kagge-template';
import { nasjonalbiblioteketTemplate } from '@/templates/nasjonalbiblioteket-template';

type DepartmentOption = {
  label: string;
  value: string;
};

type ClientConfig = {
  logoUrl: string;
  logoAlt: string;
  logoWidth: number;
  textColor: string;
  linkColor: string;
  nameFontSize: string;
  bodyFontSize: string;
  showDepartment: boolean;
  departmentOptions: DepartmentOption[];
};

// Configuration for different clients
const CLIENT_CONFIG = {
  kagge: {
    logoUrl: 'https://epostsignatur.vercel.app/logo/kagge-logo.png',
    logoAlt: 'Logo for Kagge forlag med spiral og navnetrekk',
    logoWidth: 120,
    textColor: '#380F00',
    linkColor: '#FE6039',
    nameFontSize: '16px',
    bodyFontSize: '14px',
    showDepartment: false,
    departmentOptions: [],
  },
  nasjonalbiblioteket: {
    logoUrl: 'https://epostsignatur.vercel.app/logo/nb-logo.png',
    logoAlt: 'Logo for Nasjonalbiblioteket',
    logoWidth: 140,
    textColor: '#1A1A1A',
    linkColor: '#40263E',
    nameFontSize: '16px',
    bodyFontSize: '14px',
    showDepartment: true,
    departmentOptions: [
      { label: 'Ikke vis avdeling', value: '' },
      { label: 'Kulturarvdigitalisering', value: 'Kulturarvdigitalisering' },
      { label: 'Fag og forsking', value: 'Fag og forsking' },
      { label: 'Kulturformidling', value: 'Kulturformidling' },
      {
        label: 'Tilvekst og kunnskapsorganisering',
        value: 'Tilvekst og kunnskapsorganisering',
      },
      { label: 'Digital formidling', value: 'Digital formidling' },
      { label: 'Tilrettelagt litteratur', value: 'Tilrettelagt litteratur' },
      { label: 'IT', value: 'IT' },
      { label: 'Økonomi og personal', value: 'Økonomi og personal' },
      { label: 'Bygg og tekniske tjenester', value: 'Bygg og tekniske tjenester' },
    ],
  },
  // Add more clients here as needed
} satisfies Record<string, ClientConfig>;

const CLIENT_TEMPLATES = {
  kagge: kaggeTemplate,
  nasjonalbiblioteket: nasjonalbiblioteketTemplate,
  // Add more client templates here as needed
} as const;

export type ClientKey = keyof typeof CLIENT_CONFIG;

export function getClientConfig(client: ClientKey) {
  return CLIENT_CONFIG[client];
}

type SignatureData = {
  name: string;
  position: string;
  email: string;
  phone: string;
  department?: string;
};

// Get the template HTML
function getTemplate(client: keyof typeof CLIENT_CONFIG = 'kagge'): string {
  const config = CLIENT_CONFIG[client];
  const template = CLIENT_TEMPLATES[client];

  if (!config || !template) {
    throw new Error(`Template configuration missing for client "${client}"`);
  }

  return template
    .replace(/{{LOGO_URL}}/g, config.logoUrl)
    .replace(/{{LOGO_ALT}}/g, config.logoAlt)
    .replace(/{{LOGO_WIDTH}}/g, String(config.logoWidth))
    .replace(/{{TEXT_COLOR}}/g, config.textColor)
    .replace(/{{LINK_COLOR}}/g, config.linkColor)
    .replace(/{{NAME_FONT_SIZE}}/g, config.nameFontSize)
    .replace(/{{BODY_FONT_SIZE}}/g, config.bodyFontSize);
}

// Replace template variables with actual data
export function getSignatureHTML(
  data: SignatureData,
  client: ClientKey = 'kagge'
): string {
  const config = CLIENT_CONFIG[client];
  const template = getTemplate(client);
  
  // Replace Active Directory style variables
  let html = template
    .replace(/%%DisplayName%%/g, data.name || '')
    .replace(/%%Title%%/g, data.position || '')
    .replace(/%%Email%%/g, data.email || '')
    .replace(/%%PhoneNumber%%/g, data.phone || '');

  const departmentValue =
    config.showDepartment && data.department ? data.department : '';

  const departmentRow =
    config.showDepartment && departmentValue
      ? `<tr>
            <td style="font-size: ${config.bodyFontSize}; color: ${config.textColor}; padding: 0 0 12px 0; border: none;">
                ${departmentValue}
            </td>
        </tr>`
      : '';

  html = html
    .replace(/{{DEPARTMENT_ROW}}/g, departmentRow)
    .replace(/%%Department%%/g, departmentValue);

  return html;
}

// Export template with variables for Active Directory
export function getTemplateWithVariables(
  client: keyof typeof CLIENT_CONFIG = 'kagge'
): string {
  const config = CLIENT_CONFIG[client];
  const baseTemplate = getTemplate(client);

  const departmentPlaceholderRow = config.showDepartment
    ? `<tr>
            <td style="font-size: ${config.bodyFontSize}; color: ${config.textColor}; padding: 0 0 12px 0; border: none;">
                %%Department%%
            </td>
        </tr>`
    : '';

  return baseTemplate.replace(/{{DEPARTMENT_ROW}}/g, departmentPlaceholderRow);
}

