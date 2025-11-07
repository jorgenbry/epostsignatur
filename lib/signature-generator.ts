// Configuration for different clients
const CLIENT_CONFIG = {
  kagge: {
    logoUrl: 'https://epostsignatur.vercel.app/logo/kagge-logo.png',
    logoAlt: 'Logo for Kagge forlag med spiral og navnetrekk',
    logoWidth: 200,
  },
  // Add more clients here as needed
};

type SignatureData = {
  name: string;
  position: string;
  email: string;
  phone: string;
};

type ClientConfig = {
  logoUrl: string;
  logoAlt: string;
  logoWidth: number;
};

// Get the template HTML
function getTemplate(client: keyof typeof CLIENT_CONFIG = 'kagge'): string {
  const config = CLIENT_CONFIG[client];
  
  return `<!DOCTYPE html>
<html lang="nb">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <table cellpadding="0" cellspacing="0" role="presentation" style="width: auto; max-width: 500px; border-spacing: 0; margin: 0; padding: 0; border: none; font-family: Arial, sans-serif; color: #333333;">
        <!-- Row 1: Name + Position -->
        <tr>
            <td style="font-size: 14px; font-weight: bold; padding: 0 0 4px 0; border: none;">
                %%DisplayName%%
            </td>
        </tr>
        <tr>
            <td style="font-size: 12px; color: #000000; padding: 0 0 12px 0; border: none;">
                %%Title%%
            </td>
        </tr>
        <!-- Row 2: Logo -->
        <tr>
            <td style="padding: 0 0 12px 0; border: none;">
                <img src="${config.logoUrl}" 
                     alt="${config.logoAlt}" 
                     width="${config.logoWidth}" 
                     height="auto" 
                     style="display: block; border: none; max-width: ${config.logoWidth}px;">
            </td>
        </tr>
        <!-- Row 3: Contact Information -->
        <tr>
            <td style="font-size: 12px; padding: 0; border: none;">
                <a href="mailto:%%Email%%" style="color: #000000; text-decoration: none;">%%Email%%</a>
            </td>
        </tr>
        <tr>
            <td style="font-size: 12px; padding: 4px 0 0 0; border: none;">
                <a href="tel:%%PhoneNumber%%" style="color: #000000; text-decoration: none;">%%PhoneNumber%%</a>
            </td>
        </tr>
    </table>
</body>
</html>`;
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

