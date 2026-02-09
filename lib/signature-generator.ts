import { demoTemplate, demoTemplateMeta } from '@/templates/demo-template';
import { kaggeTemplate, kaggeTemplateMeta } from '@/templates/kagge-template';
import {
  nasjonalbiblioteketTemplate,
  nasjonalbiblioteketTemplateMeta,
} from '@/templates/nasjonalbiblioteket-template';
import {
  litteraturhusetTemplate,
  litteraturhusetTemplateMeta,
} from '@/templates/litteraturhuset-template';
import { gjessingTemplate, gjessingTemplateMeta } from '@/templates/gjessing-template';
import {
  gjessingDisclaimerTemplate,
  gjessingDisclaimerTemplateMeta,
} from '@/templates/gjessing-disclaimer-template';

type DepartmentOption = {
  label: string;
  value: string;
};

export type ClientTemplate = {
  id: string;
  title: string;
  html: string;
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
  showLinkedin: boolean;
  // Alternative logo URL for hosting on company domain (more trusted by Outlook)
  trustedLogoUrl?: string;
  // Company LinkedIn URL to use as fallback when personal LinkedIn is not provided
  companyLinkedinUrl?: string;
  // Custom link label (e.g., "IMDb") - if provided, shows a custom link field
  customLinkLabel?: string;
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
    showLinkedin: false,
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
    showLinkedin: false,
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
    showLinkedin: false,
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
    showLinkedin: false,
    // To use a trusted domain for Litteraturhuset:
    // trustedLogoUrl: 'https://litteraturhuset.no/logo/litteraturhuset-logo.png',
  },
  gjessing: {
    logoUrl: 'https://signatur.smuss.studio/logo/gjessing-logo.png',
    logoAlt: 'Logo for Gjessing',
    trustedLogoUrl: 'https://gjessing.law/assets/static/external/gjessing-logo.png',
    logoWidth: 180,
    logoHeight: 35,
    textColor: '#000000',
    linkColor: '#000000',
    nameFontSize: '16px',
    bodyFontSize: '14px',
    showDepartment: false,
    departmentOptions: [],
    showLinkedin: true,
    companyLinkedinUrl: 'https://www.linkedin.com/company/gjessing/',
    customLinkLabel: 'IMDb',
  },
  // Add more clients here as needed
} satisfies Record<string, ClientConfig>;

const CLIENT_TEMPLATES: Record<keyof typeof CLIENT_CONFIG, ClientTemplate[]> = {
  demo: [{ ...demoTemplateMeta, html: demoTemplate }],
  kagge: [{ ...kaggeTemplateMeta, html: kaggeTemplate }],
  nasjonalbiblioteket: [
    { ...nasjonalbiblioteketTemplateMeta, html: nasjonalbiblioteketTemplate },
  ],
  litteraturhuset: [{ ...litteraturhusetTemplateMeta, html: litteraturhusetTemplate }],
  gjessing: [
    { ...gjessingTemplateMeta, html: gjessingTemplate },
    { ...gjessingDisclaimerTemplateMeta, html: gjessingDisclaimerTemplate },
  ],
};

export type ClientKey = keyof typeof CLIENT_CONFIG;

export function getClientConfig(client: ClientKey) {
  return CLIENT_CONFIG[client];
}

export function getClientTemplates(client: ClientKey): ClientTemplate[] {
  return CLIENT_TEMPLATES[client] ?? [];
}

type SignatureData = {
  name: string;
  position: string;
  email: string;
  phone: string;
  department?: string;
  linkedin?: string;
  customLink?: string;
};

// Get the template HTML
function getTemplate(client: ClientKey = 'kagge', templateId?: string): string {
  const config = CLIENT_CONFIG[client];
  const templates = CLIENT_TEMPLATES[client] ?? [];
  const templateEntry =
    (templateId ? templates.find((tpl) => tpl.id === templateId) : undefined) ||
    templates[0];

  if (!config || !templateEntry) {
    throw new Error(`Template configuration missing for client "${client}"`);
  }

  // Use trusted logo URL if available, otherwise fall back to regular logo URL
  // Trusted URLs (from company domain) are more likely to be trusted by Outlook
  const logoUrl = (config as ClientConfig).trustedLogoUrl || config.logoUrl;
  const logoHeight = config.logoHeight || Math.round(config.logoWidth * 0.33); // Default aspect ratio

  return templateEntry.html
    .replace(/{{LOGO_URL}}/g, logoUrl)
    .replace(/{{LOGO_ALT}}/g, config.logoAlt)
    .replace(/{{LOGO_WIDTH}}/g, String(config.logoWidth))
    .replace(/{{LOGO_HEIGHT}}/g, String(logoHeight))
    .replace(/{{TEXT_COLOR}}/g, config.textColor)
    .replace(/{{LINK_COLOR}}/g, config.linkColor)
    .replace(/{{NAME_FONT_SIZE}}/g, config.nameFontSize)
    .replace(/{{BODY_FONT_SIZE}}/g, config.bodyFontSize);
}

// Break up email pattern to prevent Mail.app auto-detection
function breakEmailPattern(email: string): string {
  if (!email) return '';
  // Break up the email pattern more aggressively:
  // 1. Insert zero-width space after @ symbol
  // 2. Insert zero-width space before the TLD (.no, .com, etc.)
  // 3. Insert zero-width space in the domain name to break "kagge.no" pattern
  let broken = email.replace('@', '@\u200B');
  // Break before TLD (e.g., .no, .com, .org) - this prevents "kagge.no" from being detected
  broken = broken.replace(/\.([a-z]{2,4})$/, '.\u200B$1');
  // Also break the domain name itself (e.g., "kagge" -> "kag\u200Bge")
  // Find the @ symbol and the dot before TLD
  const atIndex = broken.indexOf('@\u200B');
  if (atIndex >= 0) {
    const domainStart = atIndex + 2; // Skip @ and zero-width space
    const dotIndex = broken.lastIndexOf('.');
    if (dotIndex > domainStart) {
      const domainName = broken.substring(domainStart, dotIndex);
      if (domainName.length > 2) {
        // Insert zero-width space in the middle of domain name
        const midPoint = Math.floor(domainName.length / 2);
        const brokenDomain = domainName.substring(0, midPoint) + '\u200B' + domainName.substring(midPoint);
        broken = broken.substring(0, domainStart) + brokenDomain + broken.substring(dotIndex);
      }
    }
  }
  return broken;
}

// Break up phone pattern to prevent Mail.app auto-detection
function breakPhonePattern(phone: string): string {
  if (!phone) return '';
  // Break up phone number more aggressively by inserting zero-width spaces
  // between digit groups and within digit sequences
  // This prevents Mail.app from recognizing it as a phone number
  let broken = phone;
  // Insert zero-width space after country code if present (+47, +1, etc.)
  broken = broken.replace(/(\+\d{1,3})\s/, '$1\u200B ');
  // Insert zero-width space between digit groups (e.g., 123 45 678)
  broken = broken.replace(/(\d{2,3})\s(\d)/g, '$1\u200B $2');
  // Insert zero-width space in the middle of longer digit sequences without spaces
  broken = broken.replace(/(\d{4,})/g, (match) => {
    const midPoint = Math.floor(match.length / 2);
    return match.substring(0, midPoint) + '\u200B' + match.substring(midPoint);
  });
  return broken;
}

// Replace template variables with actual data
export function getSignatureHTML(
  data: SignatureData,
  client: ClientKey = 'kagge',
  templateId?: string
): string {
  const config = CLIENT_CONFIG[client];
  const template = getTemplate(client, templateId);
  
  // Break up email and phone patterns to prevent Mail.app detection for all templates
  const emailValue = breakEmailPattern(data.email || '');
  const phoneValue = breakPhonePattern(data.phone || '');
  
  // Replace Active Directory style variables
  let html = template
    .replace(/%%DisplayName%%/g, data.name || '')
    .replace(/%%Title%%/g, data.position || '')
    .replace(/%%Email%%/g, emailValue)
    .replace(/%%PhoneNumber%%/g, phoneValue);

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

  // Use personal LinkedIn URL if provided, otherwise fall back to company LinkedIn URL
  const linkedinValue = config.showLinkedin
    ? data.linkedin || config.companyLinkedinUrl || ''
    : '';

  // If LinkedIn is not provided and no company LinkedIn URL, remove the LinkedIn link (but keep the website link)
  if (config.showLinkedin && !linkedinValue) {
    // Match the LinkedIn link tag with any whitespace/newlines and attributes
    html = html.replace(/[\s\n]*<a\s+href="%%LinkedIn%%"[^>]*>\(LinkedIn\)<\/a>[\s\n]*/, '');
  }

  html = html
    .replace(/{{DEPARTMENT_ROW}}/g, departmentRow)
    .replace(/%%Department%%/g, departmentValue);

  // Replace LinkedIn URL if it's provided (personal or company)
  if (config.showLinkedin && linkedinValue) {
    html = html.replace(/%%LinkedIn%%/g, linkedinValue);
  } else {
    // Remove any remaining LinkedIn placeholder if link wasn't removed by regex
    html = html.replace(/%%LinkedIn%%/g, '');
  }

  // Handle custom link - only show if customLinkLabel is configured and customLink is provided
  const customLinkValue = config.customLinkLabel && data.customLink ? data.customLink : '';
  if (customLinkValue) {
    // Generate custom link HTML - need to match the style of the template
    // For gjessing templates, we need to check which template style to use
    const isDisclaimerTemplate = templateId === 'gjessing-disclaimer';
    const customLinkHTML = isDisclaimerTemplate
      ? `<a href="${customLinkValue}" color="${config.linkColor}" style="margin-left: 8px;font-size: ${config.bodyFontSize}; color: ${config.linkColor} !important; -webkit-text-fill-color: ${config.linkColor} !important; text-decoration: none !important; text-decoration-color: ${config.linkColor} !important; mso-color-alt: ${config.linkColor}; -webkit-tap-highlight-color: ${config.linkColor};"><span style="color: ${config.linkColor} !important; -webkit-text-fill-color: ${config.linkColor} !important;">${config.customLinkLabel}</span></a>`
      : `<a href="${customLinkValue}" style="font-family: Helvetica, Arial, sans-serif !important; margin-left: 8px; font-size: ${config.bodyFontSize}; color: ${config.linkColor} !important; text-decoration: none !important; mso-color-alt: ${config.linkColor}; mso-style-textfill-fill-color: ${config.linkColor}; mso-style-textfill-fill-alpha: 100%;"><span style="color: ${config.linkColor} !important; font-family: Helvetica, Arial, sans-serif !important; mso-font-alt: 'Helvetica';">${config.customLinkLabel}</span></a>`;
    html = html.replace(/%%CustomLink%%/g, customLinkHTML);
  } else {
    // Remove custom link placeholder if not provided
    html = html.replace(/%%CustomLink%%/g, '');
  }

  return html;
}

// Export template with variables for Active Directory
export function getTemplateWithVariables(
  client: ClientKey = 'kagge',
  templateId?: string
): string {
  const config = CLIENT_CONFIG[client];
  const baseTemplate = getTemplate(client, templateId);

  const departmentPlaceholderRow = config.showDepartment
    ? `<tr>
            <td style="font-size: ${config.bodyFontSize}; color: ${config.textColor}; padding: 0 0 12px 0; border: none;">
                %%Department%%
            </td>
        </tr>`
    : '';

  return baseTemplate
    .replace(/{{DEPARTMENT_ROW}}/g, departmentPlaceholderRow);
}

