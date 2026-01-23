export const gjessingTemplateMeta = { id: 'gjessing-default', title: 'Standard' } as const;

export const gjessingTemplate = `<!DOCTYPE html>
<html lang="nb">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no, email=no, address=no, date=no">
</head>
<body link="{{LINK_COLOR}}" vlink="{{LINK_COLOR}}" alink="{{LINK_COLOR}}" style="margin: 0; padding: 0;">
    <!--[if mso]>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="500"><tr><td>
    <![endif]-->
    <table cellpadding="0" cellspacing="0" role="presentation" style="width: 500px; max-width: 500px; border-spacing: 0; margin: 0; padding: 0; border: none; font-family: Helvetica, Arial, sans-serif; color: {{TEXT_COLOR}}; font-size: {{BODY_FONT_SIZE}}; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
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
            <td style="font-size: {{BODY_FONT_SIZE}}; padding: 0; border: none; mso-line-height-rule: exactly;">
                <a href="mailto:%%Email%%" style="font-size: {{BODY_FONT_SIZE}}; color: {{LINK_COLOR}} !important; text-decoration: none !important; mso-color-alt: {{LINK_COLOR}}; mso-style-textfill-fill-color: {{LINK_COLOR}}; mso-style-textfill-fill-alpha: 100%;"><span style="color: {{LINK_COLOR}} !important;">%%Email%%</span></a>
            </td>
        </tr>
        <tr>
            <td style="font-size: {{BODY_FONT_SIZE}}; padding: 4px 0 0 0; border: none; mso-line-height-rule: exactly;">
                <a href="tel:%%PhoneNumber%%" style="font-size: {{BODY_FONT_SIZE}}; color: {{LINK_COLOR}} !important; text-decoration: none !important; mso-color-alt: {{LINK_COLOR}}; mso-style-textfill-fill-color: {{LINK_COLOR}}; mso-style-textfill-fill-alpha: 100%;"><span style="color: {{LINK_COLOR}} !important;">%%PhoneNumber%%</span></a>
            </td>
        </tr>
        <tr>
            <td style="padding: 24px 0 24px 0; border: none; text-align: left !important; vertical-align: top; mso-line-height-rule: exactly;">
                <img src="{{LOGO_URL}}" 
                     alt="{{LOGO_ALT}}" 
                     width="{{LOGO_WIDTH}}" 
                     height="{{LOGO_HEIGHT}}" 
                     border="0"
                     style="display: block !important; border: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: {{LOGO_WIDTH}}px; width: {{LOGO_WIDTH}}px !important; height: {{LOGO_HEIGHT}}px !important; vertical-align: top; mso-line-height-rule: exactly;">
            </td>
        </tr>
        <tr>
            <td style="font-size: {{BODY_FONT_SIZE}}; padding: 0; border: none; font-family: Helvetica, Arial, sans-serif !important; mso-line-height-rule: exactly; line-height: 1.4;">
                <span style="font-family: Helvetica, Arial, sans-serif !important; mso-font-alt: 'Helvetica';">
                    <a href="https://gjessing.law" style="font-family: Helvetica, Arial, sans-serif !important; font-size: {{BODY_FONT_SIZE}}; color: {{LINK_COLOR}} !important; text-decoration: none !important; mso-color-alt: {{LINK_COLOR}}; mso-style-textfill-fill-color: {{LINK_COLOR}}; mso-style-textfill-fill-alpha: 100%;"><span style="color: {{LINK_COLOR}} !important; font-family: Helvetica, Arial, sans-serif !important; mso-font-alt: 'Helvetica';">▻ gjessing.law</span></a>
                    <a href="%%LinkedIn%%" style="font-family: Helvetica, Arial, sans-serif !important; margin-left: 8px; font-size: {{BODY_FONT_SIZE}}; color: {{LINK_COLOR}} !important; text-decoration: none !important; mso-color-alt: {{LINK_COLOR}}; mso-style-textfill-fill-color: {{LINK_COLOR}}; mso-style-textfill-fill-alpha: 100%;"><span style="color: {{LINK_COLOR}} !important; font-family: Helvetica, Arial, sans-serif !important; mso-font-alt: 'Helvetica';">▻ LinkedIn</span></a>
                    <a href="https://www.google.com/maps/place/Advokatfirmaet+GjessingReimers+AS/@59.9076294,10.7411679,601m/data=!3m1!1e3!4m6!3m5!1s0x46416e88db7bffff:0x4c6a137a4706d74c!8m2!3d59.9077569!4d10.7433397!16s%2Fg%2F11h54_twhp?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D" style="font-family: Helvetica, Arial, sans-serif !important; margin-left: 8px; font-size: {{BODY_FONT_SIZE}}; color: {{LINK_COLOR}} !important; text-decoration: none !important; mso-color-alt: {{LINK_COLOR}}; mso-style-textfill-fill-color: {{LINK_COLOR}}; mso-style-textfill-fill-alpha: 100%;"><span style="color: {{LINK_COLOR}} !important; font-family: Helvetica, Arial, sans-serif !important; mso-font-alt: 'Helvetica';">▻ Grev Wedels plass 7, Oslo</span></a>
                </span>
            </td>
        </tr>
    </table>
    <!--[if mso]>
    </td></tr></table>
    <![endif]-->
</body>
</html>`;

