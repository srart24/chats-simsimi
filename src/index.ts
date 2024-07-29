import axios from "axios";
import ZBadWord from "zbadword";

export default async function chatsimsimi(message: string, languageCode: string, sensor: boolean): Promise<any> {
	const supportedLanguages: string[] = ["vn", "en", "he", "zh", "ch", "id", "ko", "ph", "ru", "ar", "ms", "es", "pt", "de", "th", "ja", "fr", "sv", "tr", "da", "nb", "it", "nl", "fi", "ml", "hi", "kh", "ca", "ta", "rs", "mn", "fa", "pa", "cy", "hr", "el", "az", "sw", "te", "pl", "ro", "si", "fy", "kk", "cs", "hu", "lt", "be", "br", "af", "bg", "is", "uk", "jv", "eu", "rw", "or", "al", "bn", "gn", "kn", "my", "sk", "gl", "gu", "ps", "ka", "et", "tg", "as", "mr", "ne", "ur", "uz", "cx", "hy", "lv", "sl", "ku", "mk", "bs", "ig", "lb", "mg", "ny", "sn", "tt", "yo", "co", "eo", "ga", "hm", "hw", "lo", "mi", "so", "ug", "am", "gd"];

	const errorMessageReserr = {
		vn: "Xin lỗi, tôi không hiểu câu hỏi của bạn",
		en: "Sorry, I don't understand what you're saying",
		he: "סליחה, אני לא מבין מה שאתה אומר",
		zh: "对不起，我不理解你在说什么",
		ch: "对不起，我不理解你在说什么",
		id: "Maaf, saya tidak mengerti apa yang Anda katakan",
		ko: "죄송합니다, 당신이 말하는 것을 이해하지 못했습니다",
		ph: "Pasensya na, hindi ko maintindihan ang sinasabi mo",
		ru: "Извините, я не понимаю, что вы говорите",
		ar: "عذرًا، لا أفهم ما تقوله",
		ms: "Maaf, saya tidak faham apa yang anda katakan",
		es: "Lo siento, no entiendo lo que estás diciendo",
		pt: "Desculpe, não entendo o que você está dizendo",
		de: "Entschuldigung, ich verstehe nicht, was du sagst",
		th: "ขอโทษ, ฉันไม่เข้าใจสิ่งที่คุณพูด",
		ja: "ごめんなさい、あなたが言っていることがわかりません",
		fr: "Désolé, je ne comprends pas ce que vous dites",
		sv: "Förlåt, jag förstår inte vad du säger",
		tr: "Üzgünüm, ne söylediğinizi anlamıyorum",
		da: "Undskyld, jeg forstår ikke, hvad du siger",
		nb: "Beklager, jeg forstår ikke hva du sier",
		it: "Mi dispiace, non capisco cosa stai dicendo",
		nl: "Sorry, ik begrijp niet wat je zegt",
		fi: "Anteeksi, en ymmärrä mitä sanot",
		ml: "ക്ഷമിക്കണം, നിങ്ങള്‍ പറഞ്ഞത് എനിക്ക് മനസിലാവുന്നില്ല",
		hi: "माफ करें, मैं नहीं समझ पा रहा हूँ कि आप क्या कह रहे हैं",
		kh: "សូមអភ័យទោស ខ្ញុំមិនយល់អំពីអ្វីដែលអ្នកនិយាយទេ",
		ca: "Ho sento, no entenc el que dius",
		ta: "மன்னிக்கவும், நீங்கள் என்ன சொல்கிறீர்கள் என்பதை நான் புரியவில்லை",
		rs: "Izvinjavam se, ne razumem šta govorite",
		mn: "Уучлаарай, таны хэлж байгаа зүйлийг ойлгохгүй байна",
		fa: "متاسفم، نمی‌فهمم چه چیزی می‌گویید",
		pa: "ਮਾਫ ਕਰਨਾ, ਮੈਂ ਸਮਝ ਨਹੀਂ ਪਾ ਰਿਹਾ ਕਿ ਤੁਸੀਂ ਕੀ ਕਹਿ ਰਹੇ ਹੋ",
		cy: "Mae'n ddrwg gennyf, ni allaf ddeall beth rydych yn ei ddweud",
		hr: "Žao mi je, ne razumijem što govorite",
		el: "Λυπάμαι, δεν καταλαβαίνω τι λέτε",
		az: "Bağışlayın, nə dediyinizi anlamıram",
		sw: "Pole, siwezi kuelewa unachosema",
		te: "క్షమించండి, మీరు చెప్పేదేమిటో నాకు అర్థం కావడం లేదు",
		pl: "Przepraszam, nie rozumiem, co mówisz",
		ro: "Îmi pare rău, nu înțeleg ce spui",
		si: "කණගාටුයි, ඔබ කියන දේ මට අවබෝධයක් නොවේ",
		fy: "Sorry, ik begryp net watsto sizze",
		kk: "Кешіріңіз, сіздің не айтып тұрғаныңызды түсінбеймін",
		cs: "Omlouvám se, nerozumím, co říkáte",
		hu: "Sajnálom, nem értem, amit mondasz",
		lt: "Atsiprašome, nesuprantu, ką sakote",
		be: "Вибачце, я не разумею, што вы кажаце",
		br: "Desculpe, não entendo o que você está dizendo",
		af: "Jammer, ek verstaan nie wat jy sê nie",
		bg: "Съжалявам, не разбирам какво казвате",
		is: "Fyrirgefðu, ég skil ekki hvað þú ert að segja",
		uk: "Вибачте, я не розумію, що ви кажете",
		jv: "Nyuwun sewu, aku ora ngerti apa sing sampeyan ucapake",
		eu: "Sentitzen dut, ez dut ulertzen zer esan nahi duzun",
		rw: "Mbabarira, sinumva icyo uvuga",
		or: "ଦୟାକରି, ମୁଁ ବୁଝିପାରୁନାହିଁ ଆପଣ କଣ କହୁଛନ୍ତି",
		al: "Më vjen keq, nuk kuptoj çfarë po thoni",
		bn: "দুঃখিত, আমি বুঝতে পারছি না আপনি কি বলছেন",
		gn: "Perdón, no entiendo lo que estás diciendo",
		kn: "ಕ್ಷಮಿಸಿರಿ, ನೀವು ಏನನ್ನು ಹೇಳುತ್ತಿದ್ದೀರಿ ಎಂಬುದನ್ನು ನಾನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುತ್ತಿಲ್ಲ",
		my: "တဆိတ်စကားလုံးမသိပါဘူး",
		sk: "Je mi ľúto, nerozumiem, čo hovoríte",
		gl: "Sinto, non entendo o que estás dicindo",
		gu: "માફ કરશો, હું સમજી નથી શકતો કે તમે શું કહેતા છો",
		ps: "بښنه غواړم، زه نه پوهیږم چې تاسو څه وایاست",
		ka: "ბოდიშით, ვერ ვხვდები რას ამბობთ",
		et: "Kahjuks ma ei saa aru, mida te ütlete",
		tg: "Бубахшед, ман намефаҳмам, ки шумо чӣ мегӯед",
		as: "মাফ কৰিব, মই বুজি পাবলৈ পাৰিনে আপুনি কি ক'ব পাৰে",
		mr: "माफ करा, मी समजत नाही की तुम्ही काय म्हणत आहात",
		ne: "माफ गर्नुहोस्, म तपाईंले के भन्नुभएको बुझ्न सक्दिन",
		ur: "معاف کریں، میں نہیں سمجھتا کہ آپ کیا کہہ رہے ہیں",
		uz: "Kechirasiz, nima deyayotganingizni tushunmayapman",
		cx: "Désolé, je ne comprends pas ce que vous dites",
		hy: "Ներեցեք, ես չեմ հասկանում, թե ինչ եք ասում",
		lv: "Atvainojiet, es nesaprotu, ko sakāt",
		sl: "Opravičujem se, ne razumem, kaj govorite",
		ku: "Bibore, ez fêm nakim ku tu çi gotî",
		mk: "Жалам, не разбирам што кажувате",
		bs: "Izvini, ne razumijem šta govoriš",
		ig: "Ndo, amachaghị ihe ị na-ekwu",
		lb: "Entschëllegt, ech verstoen net wat Dir seet",
		mg: "Miala tsiny, tsy azoko ny zavatra lazainao",
		ny: "Pepani, sindinso kumvetsa zomwe mukufuna kuti ndikuwuze",
		sn: "Pamusoroi, handinzwisise zvauri kutaura",
		tt: "Гафу итегез, сез нәрсә сөйләгәнегезне аңламыйм",
		yo: "Ẹ ṣàpẹẹrẹ, mi ò mọ ohun tí o sọ",
		co: "Scusate, ùn capiscu ciò chì dite",
		eo: "Pardonu, mi ne komprenas, kion vi diras",
		ga: "Gabh mo leithscéal, ní thuigim cad atá á rá agat",
		hm: "Kuv xav txim, kuv tsis to taub qhov koj hais",
		hw: "Entschuldigung, ich verstehe nicht, was du sagst",
		lo: "ຂໍໍໍ້ສະຖານທີ່ບໍ່ເຂົ້າໃຈ",
		mi: "Aroha mai, kāore au i te mārama ki tāu e kī ana",
		so: "Raalli ahow, ma fahmin waxa aad leedahay",
		ug: "بۇنى كەچۈرۈڭ، سىز نېمە دەيدىغانلىقىڭىزنى چۈشىنمەيمەن",
		am: "እቅፍ ይቅርታ እንደሚልህ አልገባኝም",
		gd: "Duill, chan eil mi a' tuigsinn dè tha thu a' ràdh",
	};

	if (typeof message !== "string") {
		const errorResponse = {status: false, creator: "@srart24", result: "Please send a message"};
		throw errorResponse;
	} else if (!supportedLanguages.includes(languageCode)) {
		const errorResponse = {status: false, creator: "@srart24", result: "Unsupported language code"};
		throw errorResponse;
	}

	const options = new URLSearchParams();
	options.append("text", message);
	options.append("lc", languageCode);

	try {
		const response = await axios.post("https://api.simsimi.vn/v2/simtalk", options, {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
		});
		const res = response.data;
		if (sensor) {
			const censoredText = ZBadWord.sensor(res.message);
			const successResponse = {status: true, creator: "@srart24", result: censoredText};
			return successResponse;
		} else if(!sensor) {
			const successResponse = {status: true, creator: "@srart24", result: res.message};
			return successResponse;
		}
	} catch (error) {
		const errorResponse = {status: false, creator: "@srart24", result: errorMessageReserr[languageCode] || errorMessageReserr["en"]};
		throw errorResponse;
	}
}
