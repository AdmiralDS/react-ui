// language=css
export const lightThemeText = `
:root,
:host,
.admiral-theme-light {
  color-scheme: light;

  /*
   * Color Primitives
   * Проверить дополнительно на опечатки
   */

  /* Neutral */
  --admiral-color-Neutral_Neutral00: '#FFFFFF';
  --admiral-color-Neutral_Neutral05: '#F3F4F6';
  --admiral-color-Neutral_Neutral10: '#E5E7EB';
  --admiral-color-Neutral_Neutral20: '#D5D8DE';
  --admiral-color-Neutral_Neutral30: '#B0B5BD';
  --admiral-color-Neutral_Neutral40: '#9BA0AA';
  --admiral-color-Neutral_Neutral50: '#717681';
  --admiral-color-Neutral_Neutral60: '#646973';
  --admiral-color-Neutral_Neutral70: '#4F525A';
  --admiral-color-Neutral_Neutral80: '#35383F';
  --admiral-color-Neutral_Neutral90: '#23262D';

  /* Primary */
  --admiral-color-Primary_Primary10: '#EDF5FF';
  --admiral-color-Primary_Primary20: '#DDE9FF';
  --admiral-color-Primary_Primary30: '#A7C7FF';
  --admiral-color-Primary_Primary40: '#6FA3FF';
  --admiral-color-Primary_Primary50: '#3A85FF';
  --admiral-color-Primary_Primary60Main: '#0062FF';
  --admiral-color-Primary_Primary70: '#0046E2';
  --admiral-color-Primary_Primary80: '#0132B0';

  /* Special */
  --admiral-color-Special_StaticWhite: '#FFFFFF';
  --admiral-color-Special_ElevatedBG: '#FFFFFF';
  --admiral-color-Special_DarkStaticNeutral00: '#121316';
  --admiral-color-Special_DarkStaticNeutral05: '#1C1E22';
  --admiral-color-Special_DarkStaticNeutral10: '#282A2F';
  --admiral-color-Special_DarkStaticNeutral20: '#383C44';
  --admiral-color-Special_DarkStaticNeutral30: '#4E535D';
  --admiral-color-Special_DarkStaticNeutral50: '#7F8692';
  --admiral-color-Special_DarkStaticNeutral70: '#A6ABB4';
  --admiral-color-Special_DarkStaticNeutral80: '#C7CAD1';
  --admiral-color-Special_DarkStaticNeutral90: '#E2E5E9';
  --admiral-color-Special_DarkStaticPrimary60: '#3984FF';
  --admiral-color-Special_DarkStaticPrimary70: '#5290FF';
  --admiral-color-Special_DarkStaticPrimary80: '#689FFF';
  --admiral-color-Special_DarkStaticError60: '#EA3C3C';
  --admiral-color-Special_DarkStaticSuccess50: '#16913F';

  /* Opacity */
  --admiral-color-Opacity_Hover: '#0000000D';
  --admiral-color-Opacity_Focus: '#00000017';
  --admiral-color-Opacity_Press: '#0000001F';
  --admiral-color-Opacity_Modal: '#00000066';
  --admiral-color-Opacity_DarkStaticHover: '#FFFFFF0F';
  --admiral-color-Opacity_DarkStaticFocus: '#FFFFFF17';
  --admiral-color-Opacity_DarkStaticPress: '#FFFFFF1F';

  /* Error */
  --admiral-color-Error_Error10: '#FFEFEF';
  --admiral-color-Error_Error20: '#FFDDDD';
  --admiral-color-Error_Error30: '#FFA7A7';
  --admiral-color-Error_Error40: '#FF7C7C';
  --admiral-color-Error_Error50: '#F64E4E';
  --admiral-color-Error_Error60Main: '#D92020';
  --admiral-color-Error_Error70: '#BA1717';
  --admiral-color-Error_Error80: '#981111';

  /* Success */
  --admiral-color-Success_Success10: '#EAFCF1';
  --admiral-color-Success_Success20: '#C3F4D3';
  --admiral-color-Success_Success30: '#80DCA0';
  --admiral-color-Success_Success40: '#32C665';
  --admiral-color-Success_Success50Main: '#1BA049';
  --admiral-color-Success_Success60: '#128238';
  --admiral-color-Success_Success70: '#0B682A';

  /* Warning */
  --admiral-color-Warning_Warning10: '#FFF1E5';
  --admiral-color-Warning_Warning20: '#FFDECE';
  --admiral-color-Warning_Warning30: '#FFB799';
  --admiral-color-Warning_Warning40: '#FF8D64';
  --admiral-color-Warning_Warning50Main: '#FF5C22';
  --admiral-color-Warning_Warning60: '#D63F09';
  --admiral-color-Warning_Warning70: '#A63208';

  /* Attention */
  --admiral-color-Attention_Attention10: '#FEF5D7';
  --admiral-color-Attention_Attention20: '#FEE7A0';
  --admiral-color-Attention_Attention30: '#FDDD77';
  --admiral-color-Attention_Attention40: '#FDD14C';
  --admiral-color-Attention_Attention50Main: '#FFC400';
  --admiral-color-Attention_Attention60: '#F0B902';
  --admiral-color-Attention_Attention70: '#DFAB00';

  /* Purple */
  --admiral-color-Purple_Purple10: '#F6F2FF';
  --admiral-color-Purple_Purple20: '#EBE0FF';
  --admiral-color-Purple_Purple30: '#D4BBFF';
  --admiral-color-Purple_Purple40: '#BE95FF';
  --admiral-color-Purple_Purple50: '#A56EFF';
  --admiral-color-Purple_Purple60Main: '#8A3FFC';
  --admiral-color-Purple_Purple70: '#6929C4';
  --admiral-color-Purple_Purple80: '#491D8B';

  /* Magenta */
  --admiral-color-Magenta_Magenta10: '#FFF0F7';
  --admiral-color-Magenta_Magenta20: '#FFDBEB';
  --admiral-color-Magenta_Magenta30: '#FFAFD2';
  --admiral-color-Magenta_Magenta40: '#FF7EB6';
  --admiral-color-Magenta_Magenta50: '#EE5396';
  --admiral-color-Magenta_Magenta60Main: '#D02670';
  --admiral-color-Magenta_Magenta70: '#9F1853';
  --admiral-color-Magenta_Magenta80: '#740937';

  /* Cyan */
  --admiral-color-Cyan_Cyan10: '#E5F6FF';
  --admiral-color-Cyan_Cyan20: '#C4EAFF';
  --admiral-color-Cyan_Cyan30: '#82CFFF';
  --admiral-color-Cyan_Cyan40: '#33B1FF';
  --admiral-color-Cyan_Cyan50: '#1192E8';
  --admiral-color-Cyan_Cyan60Main: '#0072C3';
  --admiral-color-Cyan_Cyan70: '#00539A';
  --admiral-color-Cyan_Cyan80: '#003A6D';

  /* Teal */
  --admiral-color-Teal_Teal10: '#D9FBFB';
  --admiral-color-Teal_Teal20: '#B0F0F0';
  --admiral-color-Teal_Teal30: '#3DDBD9';
  --admiral-color-Teal_Teal40: '#08BDBA';
  --admiral-color-Teal_Teal50: '#009D9A';
  --admiral-color-Teal_Teal60Main: '#007D79';
  --admiral-color-Teal_Teal70: '#005D5D';
  --admiral-color-Teal_Teal80: '#004144';
}
`;
