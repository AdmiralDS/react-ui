import { useTheme } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';
import { ReactComponent as PDFSolid } from '@admiral-ds/icons/build/documents/PDFSolid.svg';
import { ReactComponent as PPTSolid } from '@admiral-ds/icons/build/documents/PPTSolid.svg';
import { ReactComponent as FileWordSolid } from '@admiral-ds/icons/build/documents/FileWordSolid.svg';
import { ReactComponent as XLSSolid } from '@admiral-ds/icons/build/documents/XLSSolid.svg';
import { ReactComponent as DocsSolid } from '@admiral-ds/icons/build/documents/DocsSolid.svg';
import { ReactComponent as JpgSolid } from '@admiral-ds/icons/build/documents/JpgSolid.svg';
import { ReactComponent as ZIPSolid } from '@admiral-ds/icons/build/documents/ZIPSolid.svg';
import { ReactComponent as FileCSVSolid } from '@admiral-ds/icons/build/documents/FileCSVSolid.svg';

export const formatBytes = (bytes: number, decimals = 2): number => {
  return Number((bytes / 1024).toFixed(decimals));
};

export const formatFileSize = (bytes: number): string => {
  const theme = useTheme() || LIGHT_THEME;
  let size = formatBytes(bytes);
  if (size < 1024) {
    return `${size} ${theme.locales[theme.currentLocale].fileInput.metricUnits[0]}`;
  }
  size = formatBytes(size);
  return `${size} ${theme.locales[theme.currentLocale].fileInput.metricUnits[1]}`;
};

/**
 * https://github.com/react-dropzone/attr-accept/blob/master/src/index.js
 *
 * Check if the provided file type should be accepted by the input with accept attribute.
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#attr-accept
 *
 * Inspired by https://github.com/enyo/dropzone
 *
 * @param file {File} https://developer.mozilla.org/en-US/docs/Web/API/File
 * @param acceptedFiles {string}
 * @returns {boolean}
 */
export function acceptFile(file: File, acceptedFiles?: string): boolean {
  if (file && acceptedFiles) {
    const acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
    const fileName = file.name || '';
    const mimeType = (file.type || '').toLowerCase();
    const baseMimeType = mimeType.replace(/\/.*$/, '');

    return acceptedFilesArray.some((type) => {
      const validType = type.trim().toLowerCase();
      if (validType.charAt(0) === '.') {
        return fileName.toLowerCase().endsWith(validType);
      } else if (validType.endsWith('/*')) {
        // This is something like an image/* mime type
        return baseMimeType === validType.replace(/\/.*$/, '');
      }
      return mimeType === validType;
    });
  }
  return true;
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#important_mime_types_for_web_developers
 * https://www.iana.org/assignments/media-types/media-types.xhtml
 * @param type {string}
 */
export const formatFileType = (type: string) => {
  switch (type) {
    case 'image/jpeg':
      return 'JPEG';
    case 'image/png':
    case 'image/apng':
      return 'PNG';
    case 'image/tiff':
      return 'TIFF';
    case 'image/svg+xml':
      return 'SVG';
    case 'image/gif':
      return 'GIF';
    case 'image/webp':
      return 'WEBP';
    case 'application/pdf':
      return 'PDF';
    case 'application/vnd.ms-powerpoint':
    case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
      return 'PPT';
    case 'application/vnd.ms-excel':
    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      return 'XLS';
    case 'application/msword':
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      return 'Word';
    case 'application/zip':
      return 'ZIP';
    case 'text/csv':
      return 'CSV';
    default:
      return 'Docs';
  }
};

/**
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#important_mime_types_for_web_developers
 * https://www.iana.org/assignments/media-types/media-types.xhtml
 * @param type {string}
 */
export const getFileTypeIcon = (type: string) => {
  switch (type) {
    case 'image/jpeg':
    case 'image/png':
    case 'image/tiff':
    case 'image/svg+xml':
    case 'image/apng':
    case 'image/avif':
    case 'image/gif':
    case 'image/webp':
      return JpgSolid;
    case 'application/pdf':
      return PDFSolid;
    case 'application/vnd.ms-powerpoint':
    case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
      return PPTSolid;
    case 'application/vnd.ms-excel':
    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      return XLSSolid;
    case 'application/msword':
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      return FileWordSolid;
    case 'application/zip':
      return ZIPSolid;
    case 'text/csv':
      return FileCSVSolid;
    default:
      return DocsSolid;
  }
};
