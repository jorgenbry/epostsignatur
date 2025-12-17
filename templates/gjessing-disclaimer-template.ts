export const gjessingDisclaimerTemplateMeta = {
  id: 'gjessing-disclaimer',
  title: 'Med disclaimer',
} as const;

export const gjessingDisclaimerTemplate = `<!DOCTYPE html>
<html lang="nb">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <table cellpadding="0" cellspacing="0" role="presentation" style="width: auto; max-width: 500px; border-spacing: 0; margin: 0; padding: 0; border: none; font-family: Helvetica, Arial, sans-serif; color: {{TEXT_COLOR}}; font-size: {{BODY_FONT_SIZE}};">
        <tr>
            <td style="font-size: {{NAME_FONT_SIZE}}; font-weight: bold; padding: 16px 0 4px 0; border: none;">
                %%DisplayName%%
            </td>
        </tr>
        <tr>
            <td style="font-size: {{BODY_FONT_SIZE}}; color: {{TEXT_COLOR}}; padding: 0 0 12px 0; border: none;">
                %%Title%%
            </td>
        </tr>
        <tr>
            <td style="font-size: {{BODY_FONT_SIZE}}; padding: 0; border: none;">
                <a href="mailto:%%Email%%" style="font-size: {{BODY_FONT_SIZE}}; color: {{LINK_COLOR}}; text-decoration: none;">%%Email%%</a>
            </td>
        </tr>
        <tr>
            <td style="font-size: {{BODY_FONT_SIZE}}; padding: 4px 0 0 0; border: none;">
                <a href="tel:%%PhoneNumber%%" style="font-size: {{BODY_FONT_SIZE}}; color: {{LINK_COLOR}}; text-decoration: none;">%%PhoneNumber%%</a>
            </td>
        </tr>
        <tr>
            <td style="padding: 24px 0 24px 0; border: none;">
                <img src="{{LOGO_URL}}" 
                     alt="{{LOGO_ALT}}" 
                     width="{{LOGO_WIDTH}}" 
                     height="{{LOGO_HEIGHT}}" 
                     border="0"
                     style="display: block; border: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: {{LOGO_WIDTH}}px; width: {{LOGO_WIDTH}}px;">
            </td>
        </tr>
        <tr>
            <td style="font-size: {{BODY_FONT_SIZE}}; padding: 0; border: none;">
                <a href="https://gjessing.law" style="font-size: {{BODY_FONT_SIZE}}; color: {{LINK_COLOR}}; text-decoration: none;">▻ gjessing.law</a>
                <a href="%%LinkedIn%%" style="margin-left: 8px;font-size: {{BODY_FONT_SIZE}}; color: {{LINK_COLOR}}; text-decoration: none;">▻ LinkedIn</a>
                <a href="https://www.google.com/maps/place/Advokatfirmaet+GjessingReimers+AS/@59.9076294,10.7411679,601m/data=!3m1!1e3!4m6!3m5!1s0x46416e88db7bffff:0x4c6a137a4706d74c!8m2!3d59.9077569!4d10.7433397!16s%2Fg%2F11h54_twhp?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D" style="margin-left: 8px;font-size: {{BODY_FONT_SIZE}}; color: {{LINK_COLOR}}; text-decoration: none;">▻ Grev Wedels plass 7, Oslo</a>
            </td>
        </tr>
        <tr>
            <td style="font-size: 12px; color: #4a4a4a; padding: 32px 0 0 0; border: none; line-height: 1.5;">
                This message is confidential and intended to be for the addressee only. If you have received this message in error, please notify us immediately and destroy the original message and all copies.
            </td>
        </tr>
    </table>
</body>
</html>`;

