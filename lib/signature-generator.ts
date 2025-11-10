import { kaggeTemplate } from '@/templates/kagge-template';

// Configuration for different clients
const CLIENT_CONFIG = {
  kagge: {
    logoUrl: 'https://epostsignatur.vercel.app/logo/kagge-logo.png',
    logoAlt: 'Logo for Kagge forlag med spiral og navnetrekk',
    logoWidth: 160,
    textColor: '#380F00',
    linkColor: '#FE6039',
  },
  // Add more clients here as needed
} as const;

const CLIENT_TEMPLATES = {
  kagge: kaggeTemplate,
  // Add more client templates here as needed
} as const;

type SignatureData = {
  name: string;
  position: string;
  email: string;
  phone: string;
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
    .replace(/{{LINK_COLOR}}/g, config.linkColor);
}

// Replace template variables with actual data
export function getSignatureHTML(
  data: SignatureData,
  client: keyof typeof CLIENT_CONFIG = 'kagge'
): string {
  const template = getTemplate(client);
  
  // Replace Active Directory style variables
  let html = template
    .replace(/%%DisplayName%%/g, data.name || '')
    .replace(/%%Title%%/g, data.position || '')
    .replace(/%%Email%%/g, data.email || '')
    .replace(/%%PhoneNumber%%/g, data.phone || '');
  
  return html;
}

// Export template with variables for Active Directory
export function getTemplateWithVariables(
  client: keyof typeof CLIENT_CONFIG = 'kagge'
): string {
  return getTemplate(client);
}

