export const litteraturhusetTemplate = `<!DOCTYPE html>
<html lang="nb">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <table cellpadding="0" cellspacing="0" role="presentation" style="width: auto; max-width: 500px; border-spacing: 0; margin: 0; padding: 0; border: none; font-family: Arial, sans-serif; color: {{TEXT_COLOR}}; font-size: {{BODY_FONT_SIZE}};">
        <tr>
            <td style="font-size: {{NAME_FONT_SIZE}}; font-weight: bold; padding: 16px 0 4px 0; border: none;">
                %%DisplayName%%
            </td>
        </tr>
        <tr>
            <td style="font-size: {{BODY_FONT_SIZE}}; color: {{TEXT_COLOR}}; padding: 0 0 4px 0; border: none;">
                %%Title%%
            </td>
        </tr>
        <tr>
            <td style="font-size: {{BODY_FONT_SIZE}}; color: {{TEXT_COLOR}}; padding: 0 0 12px 0; border: none;">
                Stiftelsen Litteraturhuset
            </td>
        </tr>
        <tr>
            <td style="padding: 8px 0 24px 0; border: none;">
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
                <a href="mailto:%%Email%%" style="font-size: {{BODY_FONT_SIZE}}; color: {{LINK_COLOR}}; text-decoration: none;">%%Email%%</a>
            </td>
        </tr>
        <tr>
            <td style="font-size: {{BODY_FONT_SIZE}}; padding: 4px 0 0 0; border: none;">
                <a href="tel:%%PhoneNumber%%" style="font-size: {{BODY_FONT_SIZE}}; color: {{LINK_COLOR}}; text-decoration: none;">%%PhoneNumber%%</a>
            </td>
        </tr>
        <tr>
            <td style="padding: 16px 0 0 0; border: none;">
                <div style="margin: 0; padding: 4px 0 0 0;">
                    <a href="https://www.litteraturhuset.no?utm_source=email-signature" style="color:{{LINK_COLOR}};text-decoration:none;border-style:solid;border-width:1px;border-color:{{LINK_COLOR}};border-radius:6px;padding-right:10px;padding-left:10px;padding-bottom:5px;padding-top:5px;display:inline-block;margin-right:4px;font-size:{{BODY_FONT_SIZE}};line-height:1.4em" target="_blank">Litteraturhuset.no</a>
                    <a href="https://www.litteraturhuset.no/nb/nyhetsbrev?utm_source=email-signature" style="color:{{LINK_COLOR}};text-decoration:none;border-style:solid;border-width:1px;border-color:{{LINK_COLOR}};border-radius:6px;padding-right:10px;padding-left:10px;padding-bottom:5px;padding-top:5px;display:inline-block;margin-right:4px;font-size:{{BODY_FONT_SIZE}};line-height:1.4em" target="_blank">Nyhetsbrev</a>
                    <a href="https://www.litteraturhuset.no/nb/podkaster?utm_source=email-signature" style="color:{{LINK_COLOR}};text-decoration:none;border-style:solid;border-width:1px;border-color:{{LINK_COLOR}};border-radius:6px;padding-right:10px;padding-left:10px;padding-bottom:5px;padding-top:5px;display:inline-block;font-size:{{BODY_FONT_SIZE}};line-height:1.4em" target="_blank">Podkaster</a>
                </div>
            </td>
        </tr>
    </table>
</body>
</html>`;

