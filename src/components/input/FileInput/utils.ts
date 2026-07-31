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
 * Словарь соответствий MIME-типов человекочитаемым расширениям.
 * Разбит на логические группы для удобства поддержки.
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#important_mime_types_for_web_developers
 * https://www.iana.org/assignments/media-types/media-types.xhtml
 * @param type {string}
 */
const MIME_MAP: Record<string, string> = {
  // ==================== ИЗОБРАЖЕНИЯ ====================
  'image/jpeg': 'JPG',
  'image/png': 'PNG',
  'image/apng': 'PNG',
  'image/gif': 'GIF',
  'image/webp': 'WEBP',
  'image/svg+xml': 'SVG',
  'image/tiff': 'TIFF',
  'image/heic': 'HEIC',
  'image/heif': 'HEIC',
  'image/avif': 'AVIF',
  'image/bmp': 'BMP',
  'image/x-icon': 'ICO',
  'image/vnd.microsoft.icon': 'ICO',

  // ==================== PDF ====================
  'application/pdf': 'PDF',

  // ==================== ТЕКСТ И ДАННЫЕ ====================
  'text/plain': 'TXT',
  'text/csv': 'CSV',
  'text/calendar': 'ICS',
  'text/html': 'HTML',
  'application/json': 'JSON',
  'application/xml': 'XML',
  'text/xml': 'XML',
  'application/rtf': 'RTF',

  // ==================== WORD (DOC) ====================
  'application/msword': 'DOC',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'DOCX',
  'application/vnd.ms-word.document.macroEnabled.12': 'DOCM',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.template': 'DOTX',
  'application/vnd.ms-word.template.macroEnabled.12': 'DOTM',

  // ==================== EXCEL (XLS) ====================
  'application/vnd.ms-excel': 'XLS',
  'application/x-ms-excel': 'XLS',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'XLSX',
  'application/vnd.ms-excel.sheet.macroEnabled.12': 'XLSM',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.template': 'XLTX',
  'application/vnd.ms-excel.template.macroEnabled.12': 'XLTM',

  // ==================== POWERPOINT (PPT) ====================
  'application/vnd.ms-powerpoint': 'PPT',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'PPTX',
  'application/vnd.ms-powerpoint.presentation.macroEnabled.12': 'PPTM',
  'application/vnd.openxmlformats-officedocument.presentationml.template': 'POTX',
  'application/vnd.ms-powerpoint.template.macroEnabled.12': 'POTM',

  // ==================== VISIO ====================
  'application/visio': 'VSD',
  'application/x-visio': 'VSD',
  'application/vnd.visio': 'VSD',
  'application/vnd.ms-visio': 'VSD',
  'application/visio.drawing': 'VSD',
  'application/vsd': 'VSD',
  'application/x-vsd': 'VSD',
  'image/x-vsd': 'VSD',
  'zz-application/zz-winassoc-vsd': 'VSD',

  // ==================== PROJECT / PUBLISHER ====================
  'application/vnd.ms-project': 'MPP',
  'application/x-mspublisher': 'PUB',
  'application/vnd.ms-publisher': 'PUB',

  // ==================== АРХИВЫ ====================
  'application/zip': 'ZIP',
  'application/x-rar-compressed': 'RAR',
  'application/x-rar': 'RAR',
  'application/vnd.rar': 'RAR',
  'application/x-7z-compressed': '7Z',
  'application/x-7z': '7Z',
  'application/x-tar': 'TAR',
  'application/gzip': 'GZ',
  'application/x-gzip': 'GZ',

  // ==================== АУДИО ====================
  'audio/mpeg': 'MP3',
  'audio/wav': 'WAV',
  'audio/ogg': 'OGG',
  'audio/aac': 'AAC',
  'audio/flac': 'FLAC',
  'audio/webm': 'WEBM-A',

  // ==================== ВИДЕО ====================
  'video/mp4': 'MP4',
  'video/webm': 'WEBM',
  'video/quicktime': 'MOV',
  'video/x-msvideo': 'AVI',
  'video/x-matroska': 'MKV',
};

/**
 * Определяет человекочитаемое расширение файла по его MIME-типу.
 *
 * @param type - MIME-тип файла (например, из file.type или заголовка Content-Type)
 * @returns Строка с расширением в верхнем регистре (JPG, PDF, DOCX и т.д.)
 *
 * @example
 * formatFileType('application/pdf'); // 'PDF'
 * formatFileType('text/csv; charset=utf-8'); // 'CSV'
 * formatFileType('image/jpeg'); // 'JPG'
 * formatFileType('unknown/type'); // 'FILE'
 */
export const formatFileType = (type?: string | null): string => {
  // 1. Защита от пустых/битых значений
  if (!type) return 'FILE';

  // 2. Очистка MIME-типа: убираем параметры (; charset=...) и приводим к нижнему регистру
  const cleanType = type.split(';')[0].trim().toLowerCase();

  // 3. Прямое совпадение в словаре — O(1), самый частый кейс
  if (MIME_MAP[cleanType]) {
    return MIME_MAP[cleanType];
  }

  // 4. Умные фоллбэки по префиксу (если точного MIME нет в словаре)
  if (cleanType.startsWith('image/')) return 'IMAGE';
  if (cleanType.startsWith('video/')) return 'VIDEO';
  if (cleanType.startsWith('audio/')) return 'AUDIO';
  if (cleanType.startsWith('text/')) return 'TXT';

  // 5. Попытка угадать архивы по подстрокам
  if (cleanType.includes('zip') || cleanType.includes('compressed') || cleanType.includes('archive')) {
    return 'ARCHIVE';
  }

  // 6. Финальный дефолт
  return 'FILE';
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
