import { formatFileType } from './utils'; // Замените на реальный путь к файлу

describe('formatFileType', () => {
  // Тесты для прямых совпадений из MIME_MAP
  it('должен возвращать корректное расширение для точного совпадения MIME-типа', () => {
    expect(formatFileType('image/jpeg')).toBe('JPG');
    expect(formatFileType('image/png')).toBe('PNG');
    expect(formatFileType('application/pdf')).toBe('PDF');
    expect(formatFileType('text/plain')).toBe('TXT');
    expect(formatFileType('application/json')).toBe('JSON');
    expect(formatFileType('application/msword')).toBe('DOC');
    expect(formatFileType('application/vnd.openxmlformats-officedocument.wordprocessingml.document')).toBe('DOCX');
    expect(formatFileType('application/vnd.ms-excel')).toBe('XLS');
    expect(formatFileType('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')).toBe('XLSX');
    expect(formatFileType('application/vnd.ms-powerpoint')).toBe('PPT');
    expect(formatFileType('application/vnd.openxmlformats-officedocument.presentationml.presentation')).toBe('PPTX');
    expect(formatFileType('application/zip')).toBe('ZIP');
    expect(formatFileType('audio/mpeg')).toBe('MP3');
    expect(formatFileType('video/mp4')).toBe('MP4');
    expect(formatFileType('image/svg+xml')).toBe('SVG');
    expect(formatFileType('text/html')).toBe('HTML');
    expect(formatFileType('application/rtf')).toBe('RTF');
    expect(formatFileType('application/visio')).toBe('VSD');
    expect(formatFileType('application/vnd.ms-project')).toBe('MPP');
    expect(formatFileType('application/x-rar-compressed')).toBe('RAR');
    expect(formatFileType('application/gzip')).toBe('GZ');
    expect(formatFileType('image/heic')).toBe('HEIC');
    expect(formatFileType('image/heif')).toBe('HEIC');
    expect(formatFileType('image/avif')).toBe('AVIF');
    expect(formatFileType('text/calendar')).toBe('ICS');
    expect(formatFileType('application/xml')).toBe('XML');
    expect(formatFileType('text/xml')).toBe('XML');
    expect(formatFileType('image/bmp')).toBe('BMP');
    expect(formatFileType('image/x-icon')).toBe('ICO');
    expect(formatFileType('image/vnd.microsoft.icon')).toBe('ICO');
  });

  // Тесты для MIME-типов с параметрами (например, charset, boundary и т.д.)
  it('должен корректно обрабатывать MIME-типы с параметрами (после ;)', () => {
    expect(formatFileType('image/jpeg; charset=utf-8')).toBe('JPG');
    expect(formatFileType('text/csv; charset=utf-8; boundary=abc')).toBe('CSV');
    expect(formatFileType('application/json; version=1.0')).toBe('JSON');
    expect(formatFileType('video/mp4; codecs="avc1.42E01E"')).toBe('MP4');
    expect(formatFileType('audio/mpeg; bitrate=128')).toBe('MP3');
  });

  // Тесты для краевых случаев: null, undefined, пустая строка
  it('должен возвращать "FILE" для null, undefined и пустой строки', () => {
    expect(formatFileType(null)).toBe('FILE');
    expect(formatFileType(undefined)).toBe('FILE');
    expect(formatFileType('')).toBe('FILE');
    expect(formatFileType('   ')).toBe('FILE'); // только пробелы
  });

  // Тесты для фоллбэков по префиксам
  it('должен возвращать фоллбэк по префиксу, если MIME-тип не найден в словаре', () => {
    expect(formatFileType('image/webp')).toBe('WEBP'); // Это есть в словаре — проверим, что не попадёт в фоллбэк
    expect(formatFileType('image/tiff')).toBe('TIFF'); // Есть в словаре

    // Фоллбэки по префиксам
    expect(formatFileType('image/svg')).toBe('IMAGE'); // Не в словаре, но начинается с image/
    expect(formatFileType('image/x-custom')).toBe('IMAGE');
    expect(formatFileType('video/3gpp')).toBe('VIDEO');
    expect(formatFileType('video/x-mpeg')).toBe('VIDEO');
    expect(formatFileType('audio/flac; profile=low')).toBe('FLAC'); // Есть в словаре — не фоллбэк
    expect(formatFileType('audio/x-m4a')).toBe('AUDIO'); // Не в словаре
    expect(formatFileType('text/markdown')).toBe('TXT'); // Не в словаре, но text/
    expect(formatFileType('text/x-python')).toBe('TXT');
  });

  // Тесты для фоллбэков по архивам (по подстрокам)
  it('должен возвращать "ARCHIVE" для MIME-типов, содержащих ключевые слова архивов', () => {
    expect(formatFileType('application/x-archive')).toBe('ARCHIVE');
    expect(formatFileType('application/x-compressed-tar')).toBe('ARCHIVE');
    expect(formatFileType('application/zip-archive')).toBe('ARCHIVE');
    expect(formatFileType('application/x-gzip-compressed')).toBe('ARCHIVE');
    expect(formatFileType('application/x-7z')).toBe('7Z'); // Это есть в словаре — не фоллбэк!
    expect(formatFileType('application/x-rar')).toBe('RAR'); // Есть в словаре — не фоллбэк!
  });

  // Тесты для неизвестных MIME-типов (должны возвращать "FILE")
  it('должен возвращать "FILE" для неизвестных и необрабатываемых MIME-типов', () => {
    expect(formatFileType('unknown/type')).toBe('FILE');
    expect(formatFileType('application/octet-stream')).toBe('FILE'); // Обычный бинарный тип
    expect(formatFileType('application/x-executable')).toBe('FILE');
    expect(formatFileType('text/x-unknown')).toBe('TXT'); // text/ → TXT (это фоллбэк!)
    expect(formatFileType('application/x-something-else')).toBe('FILE');
    expect(formatFileType('font/woff')).toBe('FILE');
    expect(formatFileType('model/gltf-binary')).toBe('FILE');
  });

  // Тесты на регистр: функция должна быть регистронезависимой
  it('должен корректно обрабатывать MIME-типы в любом регистре', () => {
    expect(formatFileType('IMAGE/JPEG')).toBe('JPG');
    expect(formatFileType('APPLICATION/PDF')).toBe('PDF');
    expect(formatFileType('Text/Plain')).toBe('TXT');
    expect(formatFileType('Audio/MPEG')).toBe('MP3');
    expect(formatFileType('Video/MP4')).toBe('MP4');
  });

  // Тест на случай, когда MIME-тип содержит лишние пробелы
  it('должен обрабатывать MIME-типы с лишними пробелами', () => {
    expect(formatFileType(' image/jpeg ')).toBe('JPG');
    expect(formatFileType('  application/pdf  ; charset=utf-8 ')).toBe('PDF');
    expect(formatFileType('text/plain;  charset=utf-8')).toBe('TXT');
  });

  // Тест на случай, когда MIME-тип содержит несколько точек с запятой
  it('должен корректно обрезать только первый параметр после ;', () => {
    expect(formatFileType('image/png; charset=utf-8; version=2')).toBe('PNG');
    expect(formatFileType('application/json; ; ; ;')).toBe('JSON');
  });
});
