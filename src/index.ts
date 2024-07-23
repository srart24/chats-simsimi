import axios from 'axios';

interface SimSimiResponse {
  status: boolean;
  creator: string;
  result: string;
  kodebahasa?: string[];
}

export const chatsimsimi = async (message: string, bahasanya: string): Promise<SimSimiResponse> => {
  const kodebhs: string[] = [
    'vn', 'en', 'he', 'zh', 'ch', 'id', 'ko', 'ph', 'ru', 'ar', 'ms', 'es', 'pt',
    'de', 'th', 'ja', 'fr', 'sv', 'tr', 'da', 'nb', 'it', 'nl', 'fi', 'ml', 'hi',
    'kh', 'ca', 'ta', 'rs', 'mn', 'fa', 'pa', 'cy', 'hr', 'el', 'az', 'sw', 'te',
    'pl', 'ro', 'si', 'fy', 'kk', 'cs', 'hu', 'lt', 'be', 'br', 'af', 'bg', 'is',
    'uk', 'jv', 'eu', 'rw', 'or', 'al', 'bn', 'gn', 'kn', 'my', 'sk', 'gl', 'gu',
    'ps', 'ka', 'et', 'tg', 'as', 'mr', 'ne', 'ur', 'uz', 'cx', 'hy', 'lv', 'sl',
    'ku', 'mk', 'bs', 'ig', 'lb', 'mg', 'ny', 'sn', 'tt', 'yo', 'co', 'eo', 'ga',
    'hm', 'hw', 'lo', 'mi', 'so', 'ug', 'am', 'gd'
  ];

  if (typeof message !== 'string') {
    const errorResponse: SimSimiResponse = { status: false, creator: "@srart24", result: "Please provide a message" };
    throw errorResponse;
  } else if (!kodebhs.includes(bahasanya)) {
    const errorResponse: SimSimiResponse = { status: false, creator: "@srart24", result: "Unsupported language code", kodebahasa: kodebhs };
    throw errorResponse;
  }

  const options = new URLSearchParams();
  options.append('text', message);
  options.append('lc', bahasanya);

  try {
    const response = await axios.post('https://api.simsimi.vn/v2/simtalk', options);
    const res = response.data;
    const successResponse: SimSimiResponse = { status: true, creator: "@srart24", result: res.message };
    return successResponse;
  } catch (error) {
    const errorResponse: SimSimiResponse = { status: false, creator: "@srart24", result: "Sorry, I didn't understand what you said" };
    throw errorResponse;
  }
};

