import VTBGroupUI_SemiBold_ttf from '@admiral-ds/fonts/VTBGroupUI-SemiBold.ttf';
import VTBGroupUI_Medium_otf from '@admiral-ds/fonts/VTBGroupUI-Medium.otf';
import VTBGroupUI_Regular_otf from '@admiral-ds/fonts/VTBGroupUI-Regular.otf';

// language=css
const cssText = `
    @font-face {
        font-family: 'VTB Group UI';
        src: url('${VTBGroupUI_SemiBold_ttf}') format('truetype');
        font-display: swap;
        font-weight: 550;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }
    
    @font-face {
        font-family: 'VTB Group UI';
        src: url('${VTBGroupUI_Medium_otf}') format('opentype');
        font-display: swap;
        font-weight: 500;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }

    @font-face {
        font-family: 'VTB Group UI';
        src: url('${VTBGroupUI_Regular_otf}') format('opentype');
        font-display: swap;
        font-weight: 400;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }
`;

export function FontsVTBGroup(props: React.StyleHTMLAttributes<HTMLStyleElement>): JSX.Element {
  return <style type="text/css" children={cssText} {...props} />;
}
