export const nektarTemplateMeta = { id: 'nektar-default', title: 'Nektar' } as const;

export const nektarTemplate = `<!DOCTYPE html>
<html lang="nb">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no, email=no, address=no, date=no">
</head>
<body link="{{LINK_COLOR}}" vlink="{{LINK_COLOR}}" style="margin: 0; padding: 0;">
    <table cellpadding="0" cellspacing="0" role="presentation" style="width: auto; max-width: 500px; border-spacing: 0; margin: 0; padding: 0; border: none; font-family: Helvetica, Arial, sans-serif; color: {{TEXT_COLOR}};">
        <tr>
            <td style="font-weight: bold; padding: 16px 0 4px 0; border: none;">
                %%DisplayName%%
            </td>
        </tr>
        <tr>
            <td style="padding: 0 0 12px 0; border: none;">
                %%Title%%
            </td>
        </tr>
        <tr>
            <td style="padding: 12px 0 32px 0; border: none;">
                <img src="{{LOGO_URL}}" 
                     alt="{{LOGO_ALT}}" 
                     width="{{LOGO_WIDTH}}" 
                     height="{{LOGO_HEIGHT}}" 
                     border="0"
                     role="presentation"
                     style="display: block; border: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: {{LOGO_WIDTH}}px; width: {{LOGO_WIDTH}}px; height: auto;">
            </td>
        </tr>
        <tr>
            <td style="padding: 0; border: none;">
                <span>
                    <a href="tel:%%PhoneNumber%%" style="color: {{LINK_COLOR}}; text-decoration: none;"><span style="color: {{LINK_COLOR}};">%%PhoneNumber%%</span></a>
                    &nbsp;&nbsp;&nbsp;
                    <a href="https://nektarvinbar.no" style="color: {{LINK_COLOR}}; text-decoration: none;"><span style="color: {{LINK_COLOR}};">nektarvinbar.no</span></a>
                    &nbsp;&nbsp;&nbsp;
                    <a href="https://www.instagram.com/nektarvinbar" style="color: {{LINK_COLOR}}; text-decoration: none;"><span style="color: {{LINK_COLOR}};">@nektarvinbar</span></a>
                </span>
            </td>
        </tr>
    </table>
</body>
</html>`;

