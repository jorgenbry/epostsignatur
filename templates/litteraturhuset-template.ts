export const litteraturhusetTemplateMeta = { id: 'litteraturhuset-default', title: 'Standard' } as const;

export const litteraturhusetTemplate = `<!DOCTYPE html>
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
                     role="presentation"
                     style="display: block; border: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: {{LOGO_WIDTH}}px; width: {{LOGO_WIDTH}}px; height: {{LOGO_HEIGHT}}px;">
            </td>
        </tr>
        <tr>
            <td style="font-size: {{BODY_FONT_SIZE}}; padding: 0; border: none; color: {{LINK_COLOR}} !important;">
                <a href="mailto:%%Email%%" color="{{LINK_COLOR}}" style="font-size: {{BODY_FONT_SIZE}}; color: {{LINK_COLOR}} !important; -webkit-text-fill-color: {{LINK_COLOR}} !important; text-decoration: none !important; text-decoration-color: {{LINK_COLOR}} !important; mso-color-alt: {{LINK_COLOR}}; -webkit-tap-highlight-color: {{LINK_COLOR}};"><span style="color: {{LINK_COLOR}} !important; -webkit-text-fill-color: {{LINK_COLOR}} !important; text-decoration: none !important; text-decoration-color: {{LINK_COLOR}} !important;">%%Email%%</span></a>
            </td>
        </tr>
        <tr>
            <td style="font-size: {{BODY_FONT_SIZE}}; padding: 4px 0 0 0; border: none; color: {{LINK_COLOR}} !important;">
                <a href="tel:%%PhoneNumber%%" color="{{LINK_COLOR}}" style="font-size: {{BODY_FONT_SIZE}}; color: {{LINK_COLOR}} !important; -webkit-text-fill-color: {{LINK_COLOR}} !important; text-decoration: none !important; text-decoration-color: {{LINK_COLOR}} !important; mso-color-alt: {{LINK_COLOR}}; -webkit-tap-highlight-color: {{LINK_COLOR}};"><span style="color: {{LINK_COLOR}} !important; -webkit-text-fill-color: {{LINK_COLOR}} !important; text-decoration: none !important; text-decoration-color: {{LINK_COLOR}} !important;">%%PhoneNumber%%</span></a>
            </td>
        </tr>
        <tr>
            <td style="padding: 16px 0 0 0; border: none; color: {{LINK_COLOR}} !important;">
                <div style="margin: 0; padding: 4px 0 0 0;">
                    <a href="https://www.litteraturhuset.no?utm_source=email-signature"
                       target="_blank"
                       color="{{LINK_COLOR}}"
                       style="text-decoration:none; color:{{LINK_COLOR}};">
                      <!--[if mso]>
                      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml"
                                   xmlns:w="urn:schemas-microsoft-com:office:word"
                                   href="https://www.litteraturhuset.no?utm_source=email-signature"
                                   style="height:32px;v-text-anchor:middle;width:170px;"
                                   arcsize="30%"
                                   strokecolor="{{LINK_COLOR}}"
                                   fillcolor="#FFFFFF">
                        <w:anchorlock/>
                        <center style="color:{{LINK_COLOR}};font-family:Helvetica, Arial, sans-serif;font-size:{{BODY_FONT_SIZE}};">
                      <![endif]-->
                      <span style="display:inline-block;background-color:#FFFFFF;border:1px solid {{LINK_COLOR}};border-radius:6px;padding:5px 10px;color:{{LINK_COLOR}} !important;-webkit-text-fill-color:{{LINK_COLOR}} !important;font-family:Helvetica, Arial, sans-serif;font-size:{{BODY_FONT_SIZE}};text-decoration:none !important;text-decoration-color:{{LINK_COLOR}} !important;line-height:1.4em;">
                        Litteraturhuset.no
                      </span>
                      <!--[if mso]>
                        </center>
                      </v:roundrect>
                      <![endif]-->
                    </a>
                    <a href="https://www.litteraturhuset.no/nb/nyhetsbrev?utm_source=email-signature"
                       target="_blank"
                       color="{{LINK_COLOR}}"
                       style="text-decoration:none; color:{{LINK_COLOR}}; margin-left:4px;">
                      <!--[if mso]>
                      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml"
                                   xmlns:w="urn:schemas-microsoft-com:office:word"
                                   href="https://www.litteraturhuset.no/nb/nyhetsbrev?utm_source=email-signature"
                                   style="height:32px;v-text-anchor:middle;width:120px;"
                                   arcsize="30%"
                                   strokecolor="{{LINK_COLOR}}"
                                   fillcolor="#FFFFFF">
                        <w:anchorlock/>
                        <center style="color:{{LINK_COLOR}};font-family:Helvetica, Arial, sans-serif;font-size:{{BODY_FONT_SIZE}};">
                      <![endif]-->
                      <span style="display:inline-block;background-color:#FFFFFF;border:1px solid {{LINK_COLOR}};border-radius:6px;padding:5px 10px;color:{{LINK_COLOR}} !important;-webkit-text-fill-color:{{LINK_COLOR}} !important;font-family:Helvetica, Arial, sans-serif;font-size:{{BODY_FONT_SIZE}};text-decoration:none !important;text-decoration-color:{{LINK_COLOR}} !important;line-height:1.4em;">
                        Nyhetsbrev
                      </span>
                      <!--[if mso]>
                        </center>
                      </v:roundrect>
                      <![endif]-->
                    </a>
                    <a href="https://www.litteraturhuset.no/nb/podkaster?utm_source=email-signature"
                       target="_blank"
                       color="{{LINK_COLOR}}"
                       style="text-decoration:none; color:{{LINK_COLOR}}; margin-left:4px;">
                      <!--[if mso]>
                      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml"
                                   xmlns:w="urn:schemas-microsoft-com:office:word"
                                   href="https://www.litteraturhuset.no/nb/podkaster?utm_source=email-signature"
                                   style="height:32px;v-text-anchor:middle;width:130px;"
                                   arcsize="30%"
                                   strokecolor="{{LINK_COLOR}}"
                                   fillcolor="#FFFFFF">
                        <w:anchorlock/>
                        <center style="color:{{LINK_COLOR}};font-family:Helvetica, Arial, sans-serif;font-size:{{BODY_FONT_SIZE}};">
                      <![endif]-->
                      <span style="display:inline-block;background-color:#FFFFFF;border:1px solid {{LINK_COLOR}};border-radius:6px;padding:5px 10px;color:{{LINK_COLOR}} !important;-webkit-text-fill-color:{{LINK_COLOR}} !important;font-family:Helvetica, Arial, sans-serif;font-size:{{BODY_FONT_SIZE}};text-decoration:none !important;text-decoration-color:{{LINK_COLOR}} !important;line-height:1.4em;">
                        Podkaster
                      </span>
                      <!--[if mso]>
                        </center>
                      </v:roundrect>
                      <![endif]-->
                    </a>
                </div>
            </td>
        </tr>
    </table>
</body>
</html>`;

