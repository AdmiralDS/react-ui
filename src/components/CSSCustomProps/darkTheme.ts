// language=css
export const darkThemeText = `
.admiral-theme-dark {
  /*
   * Color Primitives
   * Проверить дополнительно на опечатки
   */

  /* Neutral */
  --admiral-color-Neutral_Neutral00: #1B1C1D;
  --admiral-color-Neutral_Neutral05: #131314;
  --admiral-color-Neutral_Neutral10: #252627;
  --admiral-color-Neutral_Neutral20: #3B3C3E;
  --admiral-color-Neutral_Neutral30: #515357;
  --admiral-color-Neutral_Neutral40: #5F6166;
  --admiral-color-Neutral_Neutral50: #82868B;
  --admiral-color-Neutral_Neutral60: #92969B;
  --admiral-color-Neutral_Neutral70: #A8ABAF;
  --admiral-color-Neutral_Neutral80: #C9CACD;
  --admiral-color-Neutral_Neutral90: #E3E5E7;

  /* Primary */
  --admiral-color-Primary_Primary10: #1F2024;
  --admiral-color-Primary_Primary20: #162B67;
  --admiral-color-Primary_Primary30: #022D9A;
  --admiral-color-Primary_Primary40: #0142D3;
  --admiral-color-Primary_Primary50: #0062FF;
  --admiral-color-Primary_Primary60Main: #3984FF;
  --admiral-color-Primary_Primary70: #5290FF;
  --admiral-color-Primary_Primary80: #689FFF;

  /* Special */
  --admiral-color-Special_StaticWhite: #FFFFFF;
  --admiral-color-Special_ElevatedBG: #1B1C1D;
  --admiral-color-Special_DarkStaticNeutral00: #131314;
  --admiral-color-Special_DarkStaticNeutral05: #1B1C1D;
  --admiral-color-Special_DarkStaticNeutral10: #252627;
  --admiral-color-Special_DarkStaticNeutral20: #3B3C3E;
  --admiral-color-Special_DarkStaticNeutral30: #515357;
  --admiral-color-Special_DarkStaticNeutral50: #82868B;
  --admiral-color-Special_DarkStaticNeutral70: #A8ABAF;
  --admiral-color-Special_DarkStaticNeutral80: #C9CACD;
  --admiral-color-Special_DarkStaticNeutral90: #E3E5E7;
  --admiral-color-Special_DarkStaticPrimary60: #3984FF;
  --admiral-color-Special_DarkStaticPrimary70: #5290FF;
  --admiral-color-Special_DarkStaticPrimary80: #689FFF;
  --admiral-color-Special_DarkStaticError60: #EA3C3C;
  --admiral-color-Special_DarkStaticSuccess50: #16913F;

  /* Opacity */
  --admiral-color-Opacity_Hover: #FFFFFF0F;
  --admiral-color-Opacity_Focus: #FFFFFF17;
  --admiral-color-Opacity_Press: #FFFFFF1F;
  --admiral-color-Opacity_Modal: #00000099;
  --admiral-color-Opacity_DarkStaticHover: #FFFFFF0F;
  --admiral-color-Opacity_DarkStaticFocus: #FFFFFF17;
  --admiral-color-Opacity_DarkStaticPress: #FFFFFF1F;
  --admiral-color-Opacity_Neutral4: #FFFFFF0A;
  --admiral-color-Opacity_Neutral8: #FFFFFF14;
  --admiral-color-Opacity_Neutral12: #FFFFFF1F;
  --admiral-color-Opacity_Neutral16: #FFFFFF29;

  /* Error */
  --admiral-color-Error_Error10: #1F2024;
  --admiral-color-Error_Error20: #571B1B;
  --admiral-color-Error_Error30: #880C0C;
  --admiral-color-Error_Error40: #A71212;
  --admiral-color-Error_Error50: #D92020;
  --admiral-color-Error_Error60Main: #EA3C3C;
  --admiral-color-Error_Error70: #F55F5F;
  --admiral-color-Error_Error80: #FA7979;

  /* Success */
  --admiral-color-Success_Success10: #1F2024;
  --admiral-color-Success_Success20: #0E3B1E;
  --admiral-color-Success_Success30: #055320;
  --admiral-color-Success_Success40: #0C7431;
  --admiral-color-Success_Success50Main: #16913F;
  --admiral-color-Success_Success60: #1FA951;
  --admiral-color-Success_Success70: #2FC063;

  /* Warning */
  --admiral-color-Warning_Warning10: #1F2024;
  --admiral-color-Warning_Warning20: #591C04;
  --admiral-color-Warning_Warning30: #902C06;
  --admiral-color-Warning_Warning40: #BC3B0D;
  --admiral-color-Warning_Warning50Main: #EF5018;
  --admiral-color-Warning_Warning60: #FF662F;
  --admiral-color-Warning_Warning70: #FF8559;

  /* Attention */
  --admiral-color-Attention_Attention10: #1F2024;
  --admiral-color-Attention_Attention20: #CA9B00;
  --admiral-color-Attention_Attention30: #DFAB00;
  --admiral-color-Attention_Attention40: #F0B902;
  --admiral-color-Attention_Attention50Main: #FFC400;
  --admiral-color-Attention_Attention60: #FDD14C;
  --admiral-color-Attention_Attention70: #FDDD77;

  /* Purple */
  --admiral-color-Purple_Purple10: #1F2024;
  --admiral-color-Purple_Purple20: #391968;
  --admiral-color-Purple_Purple30: #491D8B;
  --admiral-color-Purple_Purple40: #6929C4;
  --admiral-color-Purple_Purple50: #8A3FFC;
  --admiral-color-Purple_Purple60Main: #A065FE;
  --admiral-color-Purple_Purple70: #B587FF;
  --admiral-color-Purple_Purple80: #CEB1FF;

  /* Magenta */
  --admiral-color-Magenta_Magenta10: #1F2024;
  --admiral-color-Magenta_Magenta20: #510224;
  --admiral-color-Magenta_Magenta30: #740937;
  --admiral-color-Magenta_Magenta40: #9F1853;
  --admiral-color-Magenta_Magenta50: #D02670;
  --admiral-color-Magenta_Magenta60Main: #E84A8E;
  --admiral-color-Magenta_Magenta70: #F970AB;
  --admiral-color-Magenta_Magenta80: #FEA2CA;

  /* Cyan */
  --admiral-color-Cyan_Cyan10: #1F2024;
  --admiral-color-Cyan_Cyan20: #002D56;
  --admiral-color-Cyan_Cyan30: #003A6D;
  --admiral-color-Cyan_Cyan40: #00539A;
  --admiral-color-Cyan_Cyan50: #0072C3;
  --admiral-color-Cyan_Cyan60Main: #0E8CE1;
  --admiral-color-Cyan_Cyan70: #28A6F6;
  --admiral-color-Cyan_Cyan80: #70C7FD;

  /* Teal */
  --admiral-color-Teal_Teal10: #1F2024;
  --admiral-color-Teal_Teal20: #023136;
  --admiral-color-Teal_Teal30: #004144;
  --admiral-color-Teal_Teal40: #005D5D;
  --admiral-color-Teal_Teal50: #007D79;
  --admiral-color-Teal_Teal60Main: #009692;
  --admiral-color-Teal_Teal70: #06B2AF;
  --admiral-color-Teal_Teal80: #2FD2CF;

  /*
  * Z-indexes
  */

  --admiral-z-index-tooltip: 100;
  --admiral-z-index-notification: 99;
  --admiral-z-index-hint: 98;
  --admiral-z-index-dropdown: 97;
  --admiral-z-index-modal: 96;
  --admiral-z-index-drawer: 96;

  /* 
  * Box-shadows 
  */

  --admiral-box-shadow-Shadow02: 0px 0.9px 2px 0px rgba(0, 0, 0, 0.42);
  --admiral-box-shadow-Shadow04: 0px 1.6px 3.6px 0px rgba(0, 0, 0, 0.22), 0px 0.2px 1px 0.4px rgba(0, 0, 0, 0.20);
  --admiral-box-shadow-Shadow08: 0px 3.2px 16px 0px rgba(0, 0, 0, 0.28), 0px 0.6px 2px 0px rgba(0, 0, 0, 0.16), 0px -1.5px 6px 0px rgba(0, 0, 0, 0.09);
  --admiral-box-shadow-Shadow12: 0px 0.8px 1.8px 0px rgba(0, 0, 0, 0.06), 0px 4px 18px 0px rgba(0, 0, 0, 0.20), 0px 1.2px 12px 0px rgba(0, 0, 0, 0.16);
  --admiral-box-shadow-Shadow16: 0px 6.4px 28px 0px rgba(0, 0, 0, 0.24), 0px 1.2px 18px 0px rgba(0, 0, 0, 0.12);
  --admiral-box-shadow-ShadowStroke: 0px -1px 0px 0px #3A3C41 inset;

  /* 
  * Font-family 
  */
  --admiral-font-family: 'VTB Group UI', sans-serif;

  /* 
  * Font-weights 
  */
  --admiral-font-weight-Header_HL1: 550;
  --admiral-font-weight-Header_HL2: 550;
  --admiral-font-weight-Header_HL3: 550;
  --admiral-font-weight-Header_H1: 550;
  --admiral-font-weight-Header_H2: 550;
  --admiral-font-weight-Header_H3: 550;
  --admiral-font-weight-Header_H4: 550;
  --admiral-font-weight-Header_H5: 550;
  --admiral-font-weight-Header_H6: 550;
  --admiral-font-weight-Subtitle_Subtitle1: 400;
  --admiral-font-weight-Subtitle_Subtitle2: 550;
  --admiral-font-weight-Subtitle_Subtitle3: 550;
  --admiral-font-weight-Body_Body1Long: 400;
  --admiral-font-weight-Body_Body1Short: 400;
  --admiral-font-weight-Body_Body2Long: 400;
  --admiral-font-weight-Body_Body2Short: 400;
  --admiral-font-weight-Button_Button1: 500;
  --admiral-font-weight-Button_Button2: 500;
  --admiral-font-weight-Caption_Caption1: 400;
  --admiral-font-weight-Caption_Caption2: 400;


  /* 
  * Font-sizes 
  */
  --admiral-font-size-Header_HL1: 72px;
  --admiral-font-size-Header_HL2: 56px;
  --admiral-font-size-Header_HL3: 48px;
  --admiral-font-size-Header_H1: 40px;
  --admiral-font-size-Header_H2: 34px;
  --admiral-font-size-Header_H3: 28px;
  --admiral-font-size-Header_H4: 24px;
  --admiral-font-size-Header_H5: 20px;
  --admiral-font-size-Header_H6: 18px;
  --admiral-font-size-Subtitle_Subtitle1: 18px;
  --admiral-font-size-Subtitle_Subtitle2: 16px;
  --admiral-font-size-Subtitle_Subtitle3: 14px;
  --admiral-font-size-Body_Body1Long: 16px;
  --admiral-font-size-Body_Body1Short: 16px;
  --admiral-font-size-Body_Body2Long: 14px;
  --admiral-font-size-Body_Body2Short: 14px;
  --admiral-font-size-Button_Button1: 16px;
  --admiral-font-size-Button_Button2: 14px;
  --admiral-font-size-Caption_Caption1: 12px;
  --admiral-font-size-Caption_Caption2: 10px;

  /* 
  * Line-heights 
  */
  --admiral-line-height-Header_HL1: 80px;
  --admiral-line-height-Header_HL2: 64px;
  --admiral-line-height-Header_HL3: 56px;
  --admiral-line-height-Header_H1: 48px;
  --admiral-line-height-Header_H2: 40px;
  --admiral-line-height-Header_H3: 36px;
  --admiral-line-height-Header_H4: 32px;
  --admiral-line-height-Header_H5: 28px;
  --admiral-line-height-Header_H6: 24px;
  --admiral-line-height-Subtitle_Subtitle1: 24px;
  --admiral-line-height-Subtitle_Subtitle2: 24px;
  --admiral-line-height-Subtitle_Subtitle3: 20px;
  --admiral-line-height-Body_Body1Long: 24px;
  --admiral-line-height-Body_Body1Short: 20px;
  --admiral-line-height-Body_Body2Long: 20px;
  --admiral-line-height-Body_Body2Short: 16px;
  --admiral-line-height-Button_Button1: 24px;
  --admiral-line-height-Button_Button2: 20px;
  --admiral-line-height-Caption_Caption1: 16px;
  --admiral-line-height-Caption_Caption2: 12px;

  /* 
  * Border-radius
  */
  --admiral-border-kind-Small_0: 0;
  --admiral-border-kind-Small_2: 2px;
  --admiral-border-kind-Small_4: 4px;
  --admiral-border-kind-Small_6: 4px;
  --admiral-border-kind-Small_8: 4px;
  --admiral-border-kind-Small_10: 4px;
  --admiral-border-radius-Small: var(--admiral-border-kind-Small_4);

  --admiral-border-kind-Medium_0: 0;
  --admiral-border-kind-Medium_2: 2px;
  --admiral-border-kind-Medium_4: 4px;
  --admiral-border-kind-Medium_6: 6px;
  --admiral-border-kind-Medium_8: 8px;
  --admiral-border-kind-Medium_10: 10px;
  --admiral-border-radius-Medium: var(--admiral-border-kind-Medium_4);

  --admiral-border-kind-Large_0: 0;
  --admiral-border-kind-Large_2: 4px;
  --admiral-border-kind-Large_4: 8px;
  --admiral-border-kind-Large_6: 12px;
  --admiral-border-kind-Large_8: 16px;
  --admiral-border-kind-Large_10: 20px;
  --admiral-border-radius-Large: var(--admiral-border-kind-Large_4);
}
`;
