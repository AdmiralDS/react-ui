export type FileUploadStatus = 'Uploaded' | 'Loading' | 'Error' | 'Queue';
/**
 * @deprecated Помечено как deprecated в версии 4.1.0, будет удалено в версии 9.х.х.
 * Взамен используйте FileUploadStatus instead
 **/
export type Status = FileUploadStatus;

export type Dimension = 'xl' | 'm';

export const formatBytes = (bytes: number, decimals = 2): number => {
  return Number((bytes / (1024 * 1024)).toFixed(decimals));
};

export const dataTransferConstructorSupported = (): boolean => {
  let dataTransferConstructorSupported;
  try {
    new DataTransfer();
    dataTransferConstructorSupported = true;
  } catch {
    dataTransferConstructorSupported = false;
  }
  return dataTransferConstructorSupported;
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
export function acceptFile(file: File, acceptedFiles: string): boolean {
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
