import { demoTemplate } from '@/templates/demo-template';
import { kaggeTemplate } from '@/templates/kagge-template';
import { nasjonalbiblioteketTemplate } from '@/templates/nasjonalbiblioteket-template';
import { litteraturhusetTemplate } from '@/templates/litteraturhuset-template';

type DepartmentOption = {
  label: string;
  value: string;
};

type ClientConfig = {
  logoUrl: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight?: number;
  textColor: string;
  linkColor: string;
  nameFontSize: string;
  bodyFontSize: string;
  showDepartment: boolean;
  departmentOptions: DepartmentOption[];
  // Alternative logo URL for hosting on company domain (more trusted by Outlook)
  trustedLogoUrl?: string;
};

// Configuration for different clients
const CLIENT_CONFIG = {
  demo: {
    logoUrl: 'https://signatur.smuss.studio/logo/stuss-smoothio.png',
    logoAlt: 'Logo for Kagge forlag med spiral og navnetrekk',
    logoWidth: 120,
    logoHeight: 20,
    textColor: 'black',
    linkColor: 'blue',
    nameFontSize: '16px',
    bodyFontSize: '14px',
    showDepartment: false,
    departmentOptions: [],
  },
  kagge: {
    logoUrl: 'https://signatur.smuss.studio/logo/kagge-logo.png',
    trustedLogoUrl: 'https://kagge.no/content/uploads/2025/11/kagge-logo.png',
    logoAlt: 'Logo for Kagge forlag med spiral og navnetrekk',
    logoWidth: 120,
    logoHeight: 30, // 200x50 original, scaled to 120x30 (4:1 ratio)
    textColor: '#380F00',
    linkColor: '#5C200A',
    nameFontSize: '16px',
    bodyFontSize: '14px',
    showDepartment: false,
    departmentOptions: [],
  },
  nasjonalbiblioteket: {
    logoUrl: 'https://signatur.smuss.studio/logo/nb-logo.png',
    logoAlt: 'Logo for Nasjonalbiblioteket',
    logoWidth: 200,
    logoHeight: 27, // 512x70 original, scaled to 200x27 (proportional)
    textColor: '#40263E',
    linkColor: '#550029',
    nameFontSize: '15px',
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
    // To use a trusted domain for Nasjonalbiblioteket:
    // trustedLogoUrl: 'https://static.nb.no/logo/nb-logo.png',
  },
  litteraturhuset: {
    logoUrl: 'https://signatur.smuss.studio/logo/litteraturhuset-logo.png',
    trustedLogoUrl: 'https://www.litteraturhuset.no/logo.png',
    logoAlt: 'Logo for Litteraturhuset',
    logoWidth: 192,
    logoHeight: 24,
    textColor: '#000000',
    linkColor: '#265B00',
    nameFontSize: '16px',
    bodyFontSize: '14px',
    showDepartment: false,
    departmentOptions: [],
    // To use a trusted domain for Litteraturhuset:
    // trustedLogoUrl: 'https://litteraturhuset.no/logo/litteraturhuset-logo.png',
  },
  // Add more clients here as needed
} satisfies Record<string, ClientConfig>;

const CLIENT_TEMPLATES = {
  demo: demoTemplate,
  kagge: kaggeTemplate,
  nasjonalbiblioteket: nasjonalbiblioteketTemplate,
  litteraturhuset: litteraturhusetTemplate,
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

  // Use trusted logo URL if available, otherwise fall back to regular logo URL
  // Trusted URLs (from company domain) are more likely to be trusted by Outlook
  const logoUrl = (config as ClientConfig).trustedLogoUrl || config.logoUrl;
  const logoHeight = config.logoHeight || Math.round(config.logoWidth * 0.33); // Default aspect ratio

  return template
    .replace(/{{LOGO_URL}}/g, logoUrl)
    .replace(/{{LOGO_ALT}}/g, config.logoAlt)
    .replace(/{{LOGO_WIDTH}}/g, String(config.logoWidth))
    .replace(/{{LOGO_HEIGHT}}/g, String(logoHeight))
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

