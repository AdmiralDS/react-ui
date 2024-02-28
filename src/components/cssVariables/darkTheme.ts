// language=css
export const darkThemeText = `
:host,
.admiral-theme-dark {
  color-scheme: dark;

  /*
   * Color Primitives
   * Проверить дополнительно на опечатки
   */

  /* Neutral */
  --admiral-color-Neutral_Neutral00: '#121316';
  --admiral-color-Neutral_Neutral05: '#1C1E22';
  --admiral-color-Neutral_Neutral10: '#282A2F';
  --admiral-color-Neutral_Neutral20: '#383C44';
  --admiral-color-Neutral_Neutral30: '#4E535D';
  --admiral-color-Neutral_Neutral40: '#5C616C';
  --admiral-color-Neutral_Neutral50: '#7F8692';
  --admiral-color-Neutral_Neutral60: '#8F96A2';
  --admiral-color-Neutral_Neutral70: '#A6ABB4';
  --admiral-color-Neutral_Neutral80: '#C7CAD1';
  --admiral-color-Neutral_Neutral90: '#E2E5E9';

  /* Primary */
  --admiral-color-Primary_Primary10: '#1F2024';
  --admiral-color-Primary_Primary20: '#162B67';
  --admiral-color-Primary_Primary30: '#022D9A';
  --admiral-color-Primary_Primary40: '#0142D3';
  --admiral-color-Primary_Primary50: '#0062FF';
  --admiral-color-Primary_Primary60Main: '#3984FF';
  --admiral-color-Primary_Primary70: '#5290FF';
  --admiral-color-Primary_Primary80: '#689FFF';

  /* Special */
  --admiral-color-Special_StaticWhite: '#FFFFFF';
  --admiral-color-Special_ElevatedBG: '#1C1E22';
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
  --admiral-color-Opacity_Hover: '#FFFFFF0F';
  --admiral-color-Opacity_Focus: '#FFFFFF17';
  --admiral-color-Opacity_Press: '#FFFFFF1F';
  --admiral-color-Opacity_Modal: '#00000099';
  --admiral-color-Opacity_DarkStaticHover: '#FFFFFF0F';
  --admiral-color-Opacity_DarkStaticFocus: '#FFFFFF17';
  --admiral-color-Opacity_DarkStaticPress: '#FFFFFF1F';

  /* Error */
  --admiral-color-Error_Error10: '#1F2024';
  --admiral-color-Error_Error20: '#571B1B';
  --admiral-color-Error_Error30: '#880C0C';
  --admiral-color-Error_Error40: '#A71212';
  --admiral-color-Error_Error50: '#D92020';
  --admiral-color-Error_Error60Main: '#EA3C3C';
  --admiral-color-Error_Error70: '#F55F5F';
  --admiral-color-Error_Error80: '#FA7979';

  /* Success */
  --admiral-color-Success_Success10: '#1F2024';
  --admiral-color-Success_Success20: '#0E3B1E';
  --admiral-color-Success_Success30: '#055320';
  --admiral-color-Success_Success40: '#0C7431';
  --admiral-color-Success_Success50Main: '#16913F';
  --admiral-color-Success_Success60: '#1FA951';
  --admiral-color-Success_Success70: '#2FC063';

  /* Warning */
  --admiral-color-Warning_Warning10: '#1F2024';
  --admiral-color-Warning_Warning20: '#591C04';
  --admiral-color-Warning_Warning30: '#902C06';
  --admiral-color-Warning_Warning40: '#BC3B0D';
  --admiral-color-Warning_Warning50Main: '#EF5018';
  --admiral-color-Warning_Warning60: '#FF662F';
  --admiral-color-Warning_Warning70: '#FF8559';

  /* Attention */
  --admiral-color-Attention_Attention10: '#1F2024';
  --admiral-color-Attention_Attention20: '#CA9B00';
  --admiral-color-Attention_Attention30: '#DFAB00';
  --admiral-color-Attention_Attention40: '#F0B902';
  --admiral-color-Attention_Attention50Main: '#FFC400';
  --admiral-color-Attention_Attention60: '#FDD14C';
  --admiral-color-Attention_Attention70: '#FDDD77';

  /* Purple */
  --admiral-color-Purple_Purple10: '#1F2024';
  --admiral-color-Purple_Purple20: '#391968';
  --admiral-color-Purple_Purple30: '#491D8B';
  --admiral-color-Purple_Purple40: '#6929C4';
  --admiral-color-Purple_Purple50: '#8A3FFC';
  --admiral-color-Purple_Purple60Main: '#A065FE';
  --admiral-color-Purple_Purple70: '#B587FF';
  --admiral-color-Purple_Purple80: '#CEB1FF';

  /* Magenta */
  --admiral-color-Magenta_Magenta10: '#1F2024';
  --admiral-color-Magenta_Magenta20: '#510224';
  --admiral-color-Magenta_Magenta30: '#740937';
  --admiral-color-Magenta_Magenta40: '#9F1853';
  --admiral-color-Magenta_Magenta50: '#D02670';
  --admiral-color-Magenta_Magenta60Main: '#E84A8E';
  --admiral-color-Magenta_Magenta70: '#F970AB';
  --admiral-color-Magenta_Magenta80: '#FEA2CA';

  /* Cyan */
  --admiral-color-Cyan_Cyan10: '#1F2024';
  --admiral-color-Cyan_Cyan20: '#002D56';
  --admiral-color-Cyan_Cyan30: '#003A6D';
  --admiral-color-Cyan_Cyan40: '#00539A';
  --admiral-color-Cyan_Cyan50: '#0072C3';
  --admiral-color-Cyan_Cyan60Main: '#0E8CE1';
  --admiral-color-Cyan_Cyan70: '#28A6F6';
  --admiral-color-Cyan_Cyan80: '#70C7FD';

  /* Teal */
  --admiral-color-Teal_Teal10: '#1F2024';
  --admiral-color-Teal_Teal20: '#023136';
  --admiral-color-Teal_Teal30: '#004144';
  --admiral-color-Teal_Teal40: '#005D5D';
  --admiral-color-Teal_Teal50: '#007D79';
  --admiral-color-Teal_Teal60Main: '#009692';
  --admiral-color-Teal_Teal70: '#06B2AF';
  --admiral-color-Teal_Teal80: '#2FD2CF';
}
`;
