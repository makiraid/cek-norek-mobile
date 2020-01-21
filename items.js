const items = [
	{
		"name": "BANK BRI",
		"id": "002"
	},
	{
		"name": "BANK BCA",
		"id": "014"
	},
	{
		"name": "BANK MANDIRI",
		"id": "008"
	},
	{
		"name": "BANK BNI",
		"id": "009"
	},
	{
		"name": "BANK BNI SYARIAH",
		"id": "427"
	},
	{
		"name": "BANK SYARIAH MANDIRI (BSM)",
		"id": "451"
	},
	{
		"name": "BANK CIMB NIAGA",
		"id": "022"
	},
	{
		"name": "BANK CIMB NIAGA SYARIAH",
		"id": "022"
	},
	{
		"name": "BANK MUAMALAT",
		"id": "147"
	},
	{
		"name": "BANK BTPN",
		"id": "213"
	},
	{
		"name": "BANK BTPN SYARIAH",
		"id": "547"
	},
	{
		"name": "JENIUS",
		"id": "213"
	},
	{
		"name": "BANK BRI SYARIAH",
		"id": "422"
	},
	{
		"name": "BANK BTN",
		"id": "200"
	},
	{
		"name": "BANK PERMATA",
		"id": "013"
	},
	{
		"name": "BANK DANAMON",
		"id": "011"
	},
	{
		"name": "BANK BII MAYBANK",
		"id": "016"
	},
	{
		"name": "BANK MEGA",
		"id": "426"
	},
	{
		"name": "BANK SINARMAS",
		"id": "153"
	},
	{
		"name": "BANK COMMONWEALTH",
		"id": "950"
	},
	{
		"name": "BANK OCBC NISP",
		"id": "028"
	},
	{
		"name": "BANK BUKOPIN",
		"id": "441"
	},
	{
		"name": "BANK BUKOPIN SYARIAH",
		"id": "521"
	},
	{
		"name": "BANK BCA SYARIAH",
		"id": "536"
	},
	{
		"name": "BANK LIPPO",
		"id": "026"
	},
	{
		"name": "CITIBANK",
		"id": "031"
	},
	{
		"name": "INDOSAT DOMPETKU",
		"id": "789"
	},
	{
		"name": "TELKOMSEL TCASH",
		"id": "911"
	},
	{
		"name": "LINKAJA",
		"id": "911"
	},
	{
		"name": "BANK JABAR",
		"id": "110"
	},
	{
		"name": "BANK DKI JAKARTA",
		"id": "111"
	},
	{
		"name": "BPD DIY (YOGYAKARTA)",
		"id": "112"
	},
	{
		"name": "BANK JATENG (JAWA TENGAH)",
		"id": "113"
	},
	{
		"name": "BANK JATIM (JAWA BARAT)",
		"id": "114"
	},
	{
		"name": "BPD JAMBI",
		"id": "115"
	},
	{
		"name": "BPD ACEH",
		"id": "116"
	},
	{
		"name": "BPD ACEH SYARIAH",
		"id": "116"
	},
	{
		"name": "BANK SUMUT",
		"id": "117"
	},
	{
		"name": "BANK NAGARI (BANK SUMBAR)",
		"id": "118"
	},
	{
		"name": "BANK RIAU KEPRI",
		"id": "119"
	},
	{
		"name": "BANK SUMSEL BABEL",
		"id": "120"
	},
	{
		"name": "BANK LAMPUNG",
		"id": "121"
	},
	{
		"name": "BANK KALSEL (BANK KALIMANTAN SELATAN)",
		"id": "122"
	},
	{
		"name": "BANK KALBAR (BANK KALIMANTAN BARAT)",
		"id": "123"
	},
	{
		"name": "BANK KALTIMTARA (BANK KALIMANTAN TIMUR DAN UTARA)",
		"id": "124"
	},
	{
		"name": "BANK KALTENG (BANK KALIMANTAN TENGAH)",
		"id": "125"
	},
	{
		"name": "BANK SULSELBAR (BANK SULAWESI SELATAN DAN BARAT)",
		"id": "126"
	},
	{
		"name": "BANK SULUTGO (BANK SULAWESI UTARA DAN GORONTALO)",
		"id": "127"
	},
	{
		"name": "BANK NTB",
		"id": "128"
	},
	{
		"name": "BANK NTB SYARIAH",
		"id": "128"
	},
	{
		"name": "BANK BPD BALI",
		"id": "129"
	},
	{
		"name": "BANK NTT",
		"id": "130"
	},
	{
		"name": "BANK MALUKU MALUT",
		"id": "131"
	},
	{
		"name": "BANK PAPUA",
		"id": "132"
	},
	{
		"name": "BANK BENGKULU",
		"id": "133"
	},
	{
		"name": "BANK SULTENG (BANK SULAWESI TENGAH)",
		"id": "134"
	},
	{
		"name": "BANK SULTRA",
		"id": "135"
	},
	{
		"name": "BANK BPD BANTEN",
		"id": "137"
	},
	{
		"name": "BANK EKSPOR INDONESIA",
		"id": "003"
	},
	{
		"name": "BANK PANIN",
		"id": "019"
	},
	{
		"name": "BANK PANIN DUBAI SYARIAH",
		"id": "517"
	},
	{
		"name": "BANK ARTA NIAGA KENCANA",
		"id": "020"
	},
	{
		"name": "BANK UOB INDONESIA (BANK BUANA INDONESIA)",
		"id": "023"
	},
	{
		"name": "AMERICAN EXPRESS BANK LTD",
		"id": "030"
	},
	{
		"name": "CITIBANK N.A.",
		"id": "031"
	},
	{
		"name": "JP. MORGAN CHASE BANK",
		"id": " N.A."
	},
	{
		"name": "BANK OF AMERICA",
		"id": " N.A"
	},
	{
		"name": "ING INDONESIA BANK",
		"id": "034"
	},
	{
		"name": "BANK MULTICOR",
		"id": "036"
	},
	{
		"name": "BANK ARTHA GRAHA INTERNASIONAL",
		"id": "037"
	},
	{
		"name": "BANK CREDIT AGRICOLE INDOSUEZ",
		"id": "039"
	},
	{
		"name": "THE BANGKOK BANK COMP. LTD",
		"id": "040"
	},
	{
		"name": "BANK HSBC",
		"id": "041"
	},
	{
		"name": "THE BANK OF TOKYO MITSUBISHI UFJ LTD",
		"id": "042"
	},
	{
		"name": "BANK SUMITOMO MITSUI INDONESIA",
		"id": "045"
	},
	{
		"name": "BANK DBS INDONESIA",
		"id": "046"
	},
	{
		"name": "DIGIBANK",
		"id": "046"
	},
	{
		"name": "BANK RESONA PERDANIA",
		"id": "047"
	},
	{
		"name": "BANK MIZUHO INDONESIA",
		"id": "048"
	},
	{
		"name": "STANDARD CHARTERED BANK",
		"id": "050"
	},
	{
		"name": "BANK ABN AMRO",
		"id": "052"
	},
	{
		"name": "BANK KEPPEL TATLEE BUANA",
		"id": "053"
	},
	{
		"name": "BANK CAPITAL INDONESIA",
		"id": "054"
	},
	{
		"name": "BANK BNP PARIBAS INDONESIA",
		"id": "057"
	},
	{
		"name": "BANK UOB INDONESIA",
		"id": "023"
	},
	{
		"name": "KOREA EXCHANGE BANK DANAMON",
		"id": "059"
	},
	{
		"name": "RABOBANK INTERNASIONAL INDONESIA",
		"id": "060"
	},
	{
		"name": "BANK ANZ INDONESIA",
		"id": "061"
	},
	{
		"name": "BANK WOORI SAUDARA",
		"id": "068"
	},
	{
		"name": "BANK OF CHINA",
		"id": "069"
	},
	{
		"name": "BANK BUMI ARTA",
		"id": "076"
	},
	{
		"name": "BANK EKONOMI",
		"id": "087"
	},
	{
		"name": "BANK ANTARDAERAH",
		"id": "088"
	},
	{
		"name": "BANK HAGA",
		"id": "089"
	},
	{
		"name": "BANK IFI",
		"id": "093"
	},
	{
		"name": "BANK CENTURY",
		"id": "095"
	},
	{
		"name": "BANK MAYAPADA",
		"id": "097"
	},
	{
		"name": "BANK NUSANTARA PARAHYANGAN",
		"id": "145"
	},
	{
		"name": "BANK SWADESI (BANK OF INDIA INDONESIA)",
		"id": "146"
	},
	{
		"name": "BANK MESTIKA DHARMA",
		"id": "151"
	},
	{
		"name": "BANK SHINHAN INDONESIA (BANK METRO EXPRESS)",
		"id": "152"
	},
	{
		"name": "BANK MASPION INDONESIA",
		"id": "157"
	},
	{
		"name": "BANK HAGAKITA",
		"id": "159"
	},
	{
		"name": "BANK GANESHA",
		"id": "161"
	},
	{
		"name": "BANK WINDU KENTJANA",
		"id": "162"
	},
	{
		"name": "BANK ICBC INDONESIA (HALIM INDONESIA BANK)",
		"id": "164"
	},
	{
		"name": "BANK HARMONI INTERNATIONAL",
		"id": "166"
	},
	{
		"name": "BANK QNB KESAWAN (BANK QNB INDONESIA)",
		"id": "167"
	},
	{
		"name": "BANK HIMPUNAN SAUDARA 1906",
		"id": "212"
	},
	{
		"name": "BANK SWAGUNA",
		"id": "405"
	},
	{
		"name": "BANK BISNIS INTERNASIONAL",
		"id": "459"
	},
	{
		"name": "BANK SRI PARTHA",
		"id": "466"
	},
	{
		"name": "BANK JASA JAKARTA",
		"id": "472"
	},
	{
		"name": "BANK BINTANG MANUNGGAL",
		"id": "484"
	},
	{
		"name": "BANK MNC INTERNASIONAL (BANK BUMIPUTERA)",
		"id": "485"
	},
	{
		"name": "BANK YUDHA BHAKTI",
		"id": "490"
	},
	{
		"name": "BANK MITRANIAGA",
		"id": "491"
	},
	{
		"name": "BANK BRI AGRO NIAGA",
		"id": "494"
	},
	{
		"name": "BANK SBI INDONESIA (BANK INDOMONEX)",
		"id": "498"
	},
	{
		"name": "BANK ROYAL INDONESIA",
		"id": "501"
	},
	{
		"name": "BANK NATIONAL NOBU (BANK ALFINDO)",
		"id": "503"
	},
	{
		"name": "BANK MEGA SYARIAH",
		"id": "506"
	},
	{
		"name": "BANK INA PERDANA",
		"id": "513"
	},
	{
		"name": "BANK HARFA",
		"id": "517"
	},
	{
		"name": "PRIMA MASTER BANK",
		"id": "520"
	},
	{
		"name": "BANK PERSYARIKATAN INDONESIA",
		"id": "521"
	},
	{
		"name": "BANK AKITA",
		"id": "525"
	},
	{
		"name": "LIMAN INTERNATIONAL BANK",
		"id": "526"
	},
	{
		"name": "ANGLOMAS INTERNATIONAL BANK",
		"id": "531"
	},
	{
		"name": "BANK SAHABAT SAMPEORNA (BANK DIPO INTERNATIONAL)",
		"id": "523"
	},
	{
		"name": "BANK KESEJAHTERAAN EKONOMI",
		"id": "535"
	},
	{
		"name": "BANK ARTOS INDONESIA",
		"id": "542"
	},
	{
		"name": "BANK PURBA DANARTA",
		"id": "547"
	},
	{
		"name": "BANK MULTI ARTA SENTOSA",
		"id": "548"
	},
	{
		"name": "BANK MAYORA INDONESIA",
		"id": "553"
	},
	{
		"name": "BANK INDEX SELINDO",
		"id": "555"
	},
	{
		"name": "BANK VICTORIA INTERNATIONAL",
		"id": "566"
	},
	{
		"name": "BANK EKSEKUTIF",
		"id": "558"
	},
	{
		"name": "CENTRATAMA NASIONAL BANK",
		"id": "559"
	},
	{
		"name": "BANK FAMA INTERNASIONAL",
		"id": "562"
	},
	{
		"name": "BANK MANDIRI TASPEN POS (BANK SINAR HARAPAN BALI)",
		"id": "564"
	},
	{
		"name": "BANK HARDA",
		"id": "567"
	},
	{
		"name": "BANK AGRIS (BANK FINCONESIA)",
		"id": "945"
	},
	{
		"name": "BANK MERINCORP",
		"id": "946"
	},
	{
		"name": "BANK MAYBANK INDOCORP",
		"id": "947"
	},
	{
		"name": "BANK OCBC – INDONESIA",
		"id": "948"
	},
	{
		"name": "BANK CTBC (CHINA TRUST) INDONESIA",
		"id": "949"
	},
	{
		"name": "BANK BJB SYARIAH",
		"id": "425"
	},
	{
		"name": "BPR KS (KARYAJATNIKA SEDAYA)",
		"id": "688"
	}
];

export default items;