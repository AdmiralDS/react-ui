// language=css
export const lightThemeText = `
:root,
.admiral-theme-light {
  /*
   * Color Primitives
   * Проверить дополнительно на опечатки
   */

  /* Neutral */
  --admiral-color-Neutral_Neutral00: #FFFFFF;
  --admiral-color-Neutral_Neutral05: #F5F5F6;
  --admiral-color-Neutral_Neutral10: #EAEBEC;
  --admiral-color-Neutral_Neutral20: #D7D8DA;
  --admiral-color-Neutral_Neutral30: #B2B5B8;
  --admiral-color-Neutral_Neutral40: #9EA0A4;
  --admiral-color-Neutral_Neutral50: #74767B;
  --admiral-color-Neutral_Neutral60: #67696D;
  --admiral-color-Neutral_Neutral70: #515256;
  --admiral-color-Neutral_Neutral80: #37383B;
  --admiral-color-Neutral_Neutral90: #252629;

  /* Primary */
  --admiral-color-Primary_Primary10: #EDF5FF;
  --admiral-color-Primary_Primary20: #DDE9FF;
  --admiral-color-Primary_Primary30: #A7C7FF;
  --admiral-color-Primary_Primary40: #6FA3FF;
  --admiral-color-Primary_Primary50: #3A85FF;
  --admiral-color-Primary_Primary60Main: #0062FF;
  --admiral-color-Primary_Primary70: #0046E2;
  --admiral-color-Primary_Primary80: #0132B0;

  /* Special */
  --admiral-color-Special_StaticWhite: #FFFFFF;
  --admiral-color-Special_ElevatedBG: #FFFFFF;
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
  --admiral-color-Opacity_Hover: #0000000D;
  --admiral-color-Opacity_Focus: #00000017;
  --admiral-color-Opacity_Press: #0000001F;
  --admiral-color-Opacity_Modal: #0000009A;
  --admiral-color-Opacity_DarkStaticHover: #FFFFFF0F;
  --admiral-color-Opacity_DarkStaticFocus: #FFFFFF17;
  --admiral-color-Opacity_DarkStaticPress: #FFFFFF1F;
  --admiral-color-Opacity_Neutral4: #0000000A;
  --admiral-color-Opacity_Neutral8: #00000014;
  --admiral-color-Opacity_Neutral12: #0000001F;
  --admiral-color-Opacity_Neutral16: #00000029;

  /* Error */
  --admiral-color-Error_Error10: #FFEFEF;
  --admiral-color-Error_Error20: #FFDDDD;
  --admiral-color-Error_Error30: #FFA7A7;
  --admiral-color-Error_Error40: #FF7C7C;
  --admiral-color-Error_Error50: #F64E4E;
  --admiral-color-Error_Error60Main: #D92020;
  --admiral-color-Error_Error70: #BA1717;
  --admiral-color-Error_Error80: #981111;

  /* Success */
  --admiral-color-Success_Success10: #EAFCF1;
  --admiral-color-Success_Success20: #C3F4D3;
  --admiral-color-Success_Success30: #80DCA0;
  --admiral-color-Success_Success40: #32C665;
  --admiral-color-Success_Success50Main: #1BA049;
  --admiral-color-Success_Success60: #128238;
  --admiral-color-Success_Success70: #0B682A;

  /* Warning */
  --admiral-color-Warning_Warning10: #FFF1E5;
  --admiral-color-Warning_Warning20: #FFDECE;
  --admiral-color-Warning_Warning30: #FFB799;
  --admiral-color-Warning_Warning40: #FF8D64;
  --admiral-color-Warning_Warning50Main: #FF5C22;
  --admiral-color-Warning_Warning60: #D63F09;
  --admiral-color-Warning_Warning70: #A63208;

  /* Attention */
  --admiral-color-Attention_Attention10: #FEF5D7;
  --admiral-color-Attention_Attention20: #FEE7A0;
  --admiral-color-Attention_Attention30: #FDDD77;
  --admiral-color-Attention_Attention40: #FDD14C;
  --admiral-color-Attention_Attention50Main: #FFC400;
  --admiral-color-Attention_Attention60: #F0B902;
  --admiral-color-Attention_Attention70: #DFAB00;

  /* Purple */
  --admiral-color-Purple_Purple10: #F6F2FF;
  --admiral-color-Purple_Purple20: #EBE0FF;
  --admiral-color-Purple_Purple30: #D4BBFF;
  --admiral-color-Purple_Purple40: #BE95FF;
  --admiral-color-Purple_Purple50: #A56EFF;
  --admiral-color-Purple_Purple60Main: #8A3FFC;
  --admiral-color-Purple_Purple70: #6929C4;
  --admiral-color-Purple_Purple80: #491D8B;

  /* Magenta */
  --admiral-color-Magenta_Magenta10: #FFF0F7;
  --admiral-color-Magenta_Magenta20: #FFDBEB;
  --admiral-color-Magenta_Magenta30: #FFAFD2;
  --admiral-color-Magenta_Magenta40: #FF7EB6;
  --admiral-color-Magenta_Magenta50: #EE5396;
  --admiral-color-Magenta_Magenta60Main: #D02670;
  --admiral-color-Magenta_Magenta70: #9F1853;
  --admiral-color-Magenta_Magenta80: #740937;

  /* Cyan */
  --admiral-color-Cyan_Cyan10: #E5F6FF;
  --admiral-color-Cyan_Cyan20: #C4EAFF;
  --admiral-color-Cyan_Cyan30: #82CFFF;
  --admiral-color-Cyan_Cyan40: #33B1FF;
  --admiral-color-Cyan_Cyan50: #1192E8;
  --admiral-color-Cyan_Cyan60Main: #0072C3;
  --admiral-color-Cyan_Cyan70: #00539A;
  --admiral-color-Cyan_Cyan80: #003A6D;

  /* Teal */
  --admiral-color-Teal_Teal10: #D9FBFB;
  --admiral-color-Teal_Teal20: #B0F0F0;
  --admiral-color-Teal_Teal30: #3DDBD9;
  --admiral-color-Teal_Teal40: #08BDBA;
  --admiral-color-Teal_Teal50: #009D9A;
  --admiral-color-Teal_Teal60Main: #007D79;
  --admiral-color-Teal_Teal70: #005D5D;
  --admiral-color-Teal_Teal80: #004144;

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

  --admiral-box-shadow-Shadow02: 0px 0.9px 2px 0px rgba(0, 0, 0, 0.28);
  --admiral-box-shadow-Shadow04: 0px 1.6px 3.6px 0px rgba(0, 0, 0, 0.14), 0px 0.2px 0.9px 0.3px rgba(0, 0, 0, 0.12);
  --admiral-box-shadow-Shadow08: 0px 3.2px 9px 0px rgba(0, 0, 0, 0.16), 0px 0.6px 1.8px 0px rgba(0, 0, 0, 0.10), 0px -1.5px 6px 0px rgba(0, 0, 0, 0.06);
  --admiral-box-shadow-Shadow12: 0px 0.8px 1.8px 0px rgba(0, 0, 0, 0.04), 0px 4px 18px 0px rgba(0, 0, 0, 0.08), 0px 1.2px 12px 0px rgba(0, 0, 0, 0.10);
  --admiral-box-shadow-Shadow16: 0px 6.4px 28px 0px rgba(0, 0, 0, 0.12), 0px 1.2px 18px 0px rgba(0, 0, 0, 0.08);
  --admiral-box-shadow-ShadowStroke: 0px -1px 0px 0px #D6D8DD inset;

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
