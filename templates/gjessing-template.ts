export const gjessingTemplateMeta = { id: 'gjessing-default', title: 'Standard' } as const;

export const gjessingTemplate = `<!DOCTYPE html>
<html lang="nb">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no, email=no, address=no, date=no">
</head>
<body link="{{LINK_COLOR}}" vlink="{{LINK_COLOR}}" style="margin: 0; padding: 0;">
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
            <td style="font-size: {{BODY_FONT_SIZE}}; padding: 0; border: none; color: {{LINK_COLOR}} !important;">
                <a href="mailto:%%Email%%" color="{{LINK_COLOR}}" style="font-size: {{BODY_FONT_SIZE}}; color: {{LINK_COLOR}} !important; -webkit-text-fill-color: {{LINK_COLOR}} !important; text-decoration: none !important; text-decoration-color: {{LINK_COLOR}} !important; mso-color-alt: {{LINK_COLOR}}; -webkit-tap-highlight-color: {{LINK_COLOR}};"><span style="color: {{LINK_COLOR}} !important; -webkit-text-fill-color: {{LINK_COLOR}} !important;">%%Email%%</span></a>
            </td>
        </tr>
        <tr>
            <td style="font-size: {{BODY_FONT_SIZE}}; padding: 4px 0 0 0; border: none; color: {{LINK_COLOR}} !important;">
                <a href="tel:%%PhoneNumber%%" color="{{LINK_COLOR}}" style="font-size: {{BODY_FONT_SIZE}}; color: {{LINK_COLOR}} !important; -webkit-text-fill-color: {{LINK_COLOR}} !important; text-decoration: none !important; text-decoration-color: {{LINK_COLOR}} !important; mso-color-alt: {{LINK_COLOR}}; -webkit-tap-highlight-color: {{LINK_COLOR}};"><span style="color: {{LINK_COLOR}} !important; -webkit-text-fill-color: {{LINK_COLOR}} !important;">%%PhoneNumber%%</span></a>
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
            <td style="font-size: {{BODY_FONT_SIZE}}; padding: 0; border: none; color: {{LINK_COLOR}} !important;">
                <a href="https://gjessing.law" color="{{LINK_COLOR}}" style="font-size: {{BODY_FONT_SIZE}}; color: {{LINK_COLOR}} !important; -webkit-text-fill-color: {{LINK_COLOR}} !important; text-decoration: none !important; text-decoration-color: {{LINK_COLOR}} !important; mso-color-alt: {{LINK_COLOR}}; -webkit-tap-highlight-color: {{LINK_COLOR}};"><span style="color: {{LINK_COLOR}} !important; -webkit-text-fill-color: {{LINK_COLOR}} !important;">▻ gjessing.law</span></a>
                <a href="%%LinkedIn%%" color="{{LINK_COLOR}}" style="margin-left: 8px;font-size: {{BODY_FONT_SIZE}}; color: {{LINK_COLOR}} !important; -webkit-text-fill-color: {{LINK_COLOR}} !important; text-decoration: none !important; text-decoration-color: {{LINK_COLOR}} !important; mso-color-alt: {{LINK_COLOR}}; -webkit-tap-highlight-color: {{LINK_COLOR}};"><span style="color: {{LINK_COLOR}} !important; -webkit-text-fill-color: {{LINK_COLOR}} !important;">▻ LinkedIn</span></a>
                <a href="https://www.google.com/maps/place/Advokatfirmaet+GjessingReimers+AS/@59.9076294,10.7411679,601m/data=!3m1!1e3!4m6!3m5!1s0x46416e88db7bffff:0x4c6a137a4706d74c!8m2!3d59.9077569!4d10.7433397!16s%2Fg%2F11h54_twhp?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D" color="{{LINK_COLOR}}" style="margin-left: 8px;font-size: {{BODY_FONT_SIZE}}; color: {{LINK_COLOR}} !important; -webkit-text-fill-color: {{LINK_COLOR}} !important; text-decoration: none !important; text-decoration-color: {{LINK_COLOR}} !important; mso-color-alt: {{LINK_COLOR}}; -webkit-tap-highlight-color: {{LINK_COLOR}};"><span style="color: {{LINK_COLOR}} !important; -webkit-text-fill-color: {{LINK_COLOR}} !important;">▻ Grev Wedels plass 7, Oslo</span></a>
            </td>
        </tr>
    </table>
</body>
</html>`;

