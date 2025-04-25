
interface LocationItem {
  id: string;
  name: string;
}

interface SubDistrictMap {
  [key: string]: LocationItem[];
}

interface DistrictMap {
  [key: string]: {
    districts: LocationItem[];
    subDistrictMap: SubDistrictMap;
  };
}

// Data structure for all Indian states, districts, and sub-districts
export const states: LocationItem[] = [
  { id: 'andhra_pradesh', name: 'Andhra Pradesh' },
  { id: 'arunachal_pradesh', name: 'Arunachal Pradesh' },
  { id: 'assam', name: 'Assam' },
  { id: 'bihar', name: 'Bihar' },
  { id: 'chhattisgarh', name: 'Chhattisgarh' },
  { id: 'goa', name: 'Goa' },
  { id: 'gujarat', name: 'Gujarat' },
  { id: 'haryana', name: 'Haryana' },
  { id: 'himachal_pradesh', name: 'Himachal Pradesh' },
  { id: 'jharkhand', name: 'Jharkhand' },
  { id: 'karnataka', name: 'Karnataka' },
  { id: 'kerala', name: 'Kerala' },
  { id: 'madhya_pradesh', name: 'Madhya Pradesh' },
  { id: 'maharashtra', name: 'Maharashtra' },
  { id: 'manipur', name: 'Manipur' },
  { id: 'meghalaya', name: 'Meghalaya' },
  { id: 'mizoram', name: 'Mizoram' },
  { id: 'nagaland', name: 'Nagaland' },
  { id: 'odisha', name: 'Odisha' },
  { id: 'punjab', name: 'Punjab' },
  { id: 'rajasthan', name: 'Rajasthan' },
  { id: 'sikkim', name: 'Sikkim' },
  { id: 'tamil_nadu', name: 'Tamil Nadu' },
  { id: 'telangana', name: 'Telangana' },
  { id: 'tripura', name: 'Tripura' },
  { id: 'uttar_pradesh', name: 'Uttar Pradesh' },
  { id: 'uttarakhand', name: 'Uttarakhand' },
  { id: 'west_bengal', name: 'West Bengal' },
  { id: 'andaman_nicobar', name: 'Andaman & Nicobar Islands' },
  { id: 'chandigarh', name: 'Chandigarh' },
  { id: 'dadra_nagar_haveli', name: 'Dadra & Nagar Haveli and Daman & Diu' },
  { id: 'delhi', name: 'Delhi' },
  { id: 'jammu_kashmir', name: 'Jammu & Kashmir' },
  { id: 'ladakh', name: 'Ladakh' },
  { id: 'lakshadweep', name: 'Lakshadweep' },
  { id: 'puducherry', name: 'Puducherry' }
];

export const stateDistrictMap: DistrictMap = {
  andhra_pradesh: {
    districts: [
      { id: 'anantapur', name: 'Anantapur' },
      { id: 'chittoor', name: 'Chittoor' },
      { id: 'east_godavari', name: 'East Godavari' },
      { id: 'guntur', name: 'Guntur' },
      { id: 'krishna', name: 'Krishna' },
      { id: 'kurnool', name: 'Kurnool' },
      { id: 'prakasam', name: 'Prakasam' },
      { id: 'srikakulam', name: 'Srikakulam' },
      { id: 'nellore', name: 'Sri Potti Sriramulu Nellore' },
      { id: 'visakhapatnam', name: 'Visakhapatnam' },
      { id: 'vizianagaram', name: 'Vizianagaram' },
      { id: 'west_godavari', name: 'West Godavari' },
      { id: 'kadapa', name: 'Y.S.R. Kadapa' }
    ],
    subDistrictMap: {
      anantapur: [
        { id: 'anantapur_urban', name: 'Anantapur Urban' },
        { id: 'anantapur_rural', name: 'Anantapur Rural' },
        { id: 'dharmavaram', name: 'Dharmavaram' },
        { id: 'kadiri', name: 'Kadiri' },
        { id: 'hindupur', name: 'Hindupur' },
        { id: 'guntakal', name: 'Guntakal' }
      ],
      visakhapatnam: [
        { id: 'visakhapatnam_urban', name: 'Visakhapatnam Urban' },
        { id: 'visakhapatnam_rural', name: 'Visakhapatnam Rural' },
        { id: 'gajuwaka', name: 'Gajuwaka' },
        { id: 'bheemunipatnam', name: 'Bheemunipatnam' },
        { id: 'anakapalli', name: 'Anakapalli' }
      ],
      guntur: [
        { id: 'guntur_urban', name: 'Guntur Urban' },
        { id: 'guntur_rural', name: 'Guntur Rural' },
        { id: 'tenali', name: 'Tenali' },
        { id: 'bapatla', name: 'Bapatla' },
        { id: 'mangalagiri', name: 'Mangalagiri' }
      ]
    }
  },
  arunachal_pradesh: {
    districts: [
      { id: 'tawang', name: 'Tawang' },
      { id: 'west_kameng', name: 'West Kameng' },
      { id: 'east_kameng', name: 'East Kameng' },
      { id: 'papum_pare', name: 'Papum Pare' },
      { id: 'kurung_kumey', name: 'Kurung Kumey' },
      { id: 'kra_daadi', name: 'Kra Daadi' },
      { id: 'lower_subansiri', name: 'Lower Subansiri' },
      { id: 'upper_subansiri', name: 'Upper Subansiri' },
      { id: 'west_siang', name: 'West Siang' },
      { id: 'east_siang', name: 'East Siang' },
      { id: 'upper_siang', name: 'Upper Siang' },
      { id: 'lower_siang', name: 'Lower Siang' },
      { id: 'lower_dibang_valley', name: 'Lower Dibang Valley' },
      { id: 'dibang_valley', name: 'Dibang Valley' },
      { id: 'anjaw', name: 'Anjaw' },
      { id: 'lohit', name: 'Lohit' },
      { id: 'namsai', name: 'Namsai' },
      { id: 'changlang', name: 'Changlang' },
      { id: 'tirap', name: 'Tirap' },
      { id: 'longding', name: 'Longding' }
    ],
    subDistrictMap: {
      tawang: [
        { id: 'tawang_hq', name: 'Tawang HQ' },
        { id: 'lungla', name: 'Lungla' },
        { id: 'jang', name: 'Jang' }
      ],
      papum_pare: [
        { id: 'itanagar', name: 'Itanagar' },
        { id: 'naharlagun', name: 'Naharlagun' },
        { id: 'banderdewa', name: 'Banderdewa' },
        { id: 'doimukh', name: 'Doimukh' }
      ],
      west_kameng: [
        { id: 'bomdila', name: 'Bomdila' },
        { id: 'dirang', name: 'Dirang' },
        { id: 'kalaktang', name: 'Kalaktang' }
      ]
    }
  },
  assam: {
    districts: [
      { id: 'baksa', name: 'Baksa' },
      { id: 'barpeta', name: 'Barpeta' },
      { id: 'biswanath', name: 'Biswanath' },
      { id: 'bongaigaon', name: 'Bongaigaon' },
      { id: 'cachar', name: 'Cachar' },
      { id: 'charaideo', name: 'Charaideo' },
      { id: 'chirang', name: 'Chirang' },
      { id: 'darrang', name: 'Darrang' },
      { id: 'dhemaji', name: 'Dhemaji' },
      { id: 'dhubri', name: 'Dhubri' },
      { id: 'dibrugarh', name: 'Dibrugarh' },
      { id: 'goalpara', name: 'Goalpara' },
      { id: 'golaghat', name: 'Golaghat' },
      { id: 'hailakandi', name: 'Hailakandi' },
      { id: 'hojai', name: 'Hojai' },
      { id: 'jorhat', name: 'Jorhat' },
      { id: 'kamrup_metropolitan', name: 'Kamrup Metropolitan' },
      { id: 'kamrup_rural', name: 'Kamrup Rural' },
      { id: 'karbi_anglong', name: 'Karbi Anglong' },
      { id: 'karimganj', name: 'Karimganj' },
      { id: 'kokrajhar', name: 'Kokrajhar' },
      { id: 'lakhimpur', name: 'Lakhimpur' },
      { id: 'majuli', name: 'Majuli' },
      { id: 'morigaon', name: 'Morigaon' },
      { id: 'nagaon', name: 'Nagaon' },
      { id: 'nalbari', name: 'Nalbari' },
      { id: 'sivasagar', name: 'Sivasagar' },
      { id: 'sonitpur', name: 'Sonitpur' },
      { id: 'south_salmara_mankachar', name: 'South Salmara-Mankachar' },
      { id: 'tinsukia', name: 'Tinsukia' },
      { id: 'udalguri', name: 'Udalguri' },
      { id: 'west_karbi_anglong', name: 'West Karbi Anglong' }
    ],
    subDistrictMap: {
      kamrup_metropolitan: [
        { id: 'guwahati', name: 'Guwahati' },
        { id: 'dispur', name: 'Dispur' },
        { id: 'azara', name: 'Azara' },
        { id: 'chandrapur', name: 'Chandrapur' },
        { id: 'sonapur', name: 'Sonapur' }
      ],
      dibrugarh: [
        { id: 'dibrugarh_urban', name: 'Dibrugarh Urban' },
        { id: 'dibrugarh_east', name: 'Dibrugarh East' },
        { id: 'dibrugarh_west', name: 'Dibrugarh West' },
        { id: 'chabua', name: 'Chabua' },
        { id: 'tengakhat', name: 'Tengakhat' }
      ],
      jorhat: [
        { id: 'jorhat_urban', name: 'Jorhat Urban' },
        { id: 'titabor', name: 'Titabor' },
        { id: 'teok', name: 'Teok' },
        { id: 'mariani', name: 'Mariani' }
      ]
    }
  },
  bihar: {
    districts: [
      { id: 'araria', name: 'Araria' },
      { id: 'arwal', name: 'Arwal' },
      { id: 'aurangabad', name: 'Aurangabad' },
      { id: 'banka', name: 'Banka' },
      { id: 'begusarai', name: 'Begusarai' },
      { id: 'bhagalpur', name: 'Bhagalpur' },
      { id: 'bhojpur', name: 'Bhojpur' },
      { id: 'buxar', name: 'Buxar' },
      { id: 'darbhanga', name: 'Darbhanga' },
      { id: 'east_champaran', name: 'East Champaran' },
      { id: 'gaya', name: 'Gaya' },
      { id: 'gopalganj', name: 'Gopalganj' },
      { id: 'jamui', name: 'Jamui' },
      { id: 'jehanabad', name: 'Jehanabad' },
      { id: 'kaimur', name: 'Kaimur' },
      { id: 'katihar', name: 'Katihar' },
      { id: 'khagaria', name: 'Khagaria' },
      { id: 'kishanganj', name: 'Kishanganj' },
      { id: 'lakhisarai', name: 'Lakhisarai' },
      { id: 'madhepura', name: 'Madhepura' },
      { id: 'madhubani', name: 'Madhubani' },
      { id: 'munger', name: 'Munger' },
      { id: 'muzaffarpur', name: 'Muzaffarpur' },
      { id: 'nalanda', name: 'Nalanda' },
      { id: 'nawada', name: 'Nawada' },
      { id: 'patna', name: 'Patna' },
      { id: 'purnia', name: 'Purnia' },
      { id: 'rohtas', name: 'Rohtas' },
      { id: 'saharsa', name: 'Saharsa' },
      { id: 'samastipur', name: 'Samastipur' },
      { id: 'saran', name: 'Saran' },
      { id: 'sheikhpura', name: 'Sheikhpura' },
      { id: 'sheohar', name: 'Sheohar' },
      { id: 'sitamarhi', name: 'Sitamarhi' },
      { id: 'siwan', name: 'Siwan' },
      { id: 'supaul', name: 'Supaul' },
      { id: 'vaishali', name: 'Vaishali' },
      { id: 'west_champaran', name: 'West Champaran' }
    ],
    subDistrictMap: {
      patna: [
        { id: 'patna_city', name: 'Patna City' },
        { id: 'patna_sadar', name: 'Patna Sadar' },
        { id: 'barh', name: 'Barh' },
        { id: 'danapur', name: 'Danapur' },
        { id: 'masaurhi', name: 'Masaurhi' },
        { id: 'paliganj', name: 'Paliganj' }
      ],
      gaya: [
        { id: 'gaya_town', name: 'Gaya Town' },
        { id: 'bodh_gaya', name: 'Bodh Gaya' },
        { id: 'sherghati', name: 'Sherghati' },
        { id: 'tekari', name: 'Tekari' },
        { id: 'wazirganj', name: 'Wazirganj' }
      ],
      muzaffarpur: [
        { id: 'muzaffarpur_urban', name: 'Muzaffarpur Urban' },
        { id: 'muzaffarpur_east', name: 'Muzaffarpur East' },
        { id: 'muzaffarpur_west', name: 'Muzaffarpur West' },
        { id: 'kanti', name: 'Kanti' },
        { id: 'saraiya', name: 'Saraiya' }
      ]
    }
  },
  // Additional states that were already present
  karnataka: {
    districts: [
      { id: 'bengaluru', name: 'Bengaluru' },
      { id: 'mysuru', name: 'Mysuru' },
      { id: 'hubli_dharwad', name: 'Hubli-Dharwad' },
      { id: 'mangaluru', name: 'Mangaluru' },
      { id: 'belgaum', name: 'Belgaum' },
      { id: 'gulbarga', name: 'Gulbarga' },
      { id: 'davangere', name: 'Davangere' },
      { id: 'bellary', name: 'Bellary' },
      { id: 'vijayapura', name: 'Vijayapura' },
      { id: 'shimoga', name: 'Shimoga' },
      { id: 'tumkur', name: 'Tumkur' },
      { id: 'raichur', name: 'Raichur' },
      { id: 'bidar', name: 'Bidar' },
      { id: 'hospet', name: 'Hospet' },
      { id: 'gadag_betageri', name: 'Gadag-Betageri' },
      { id: 'haveri', name: 'Haveri' },
      { id: 'kolar', name: 'Kolar' },
      { id: 'hassan', name: 'Hassan' },
      { id: 'mandya', name: 'Mandya' },
      { id: 'chitradurga', name: 'Chitradurga' },
      { id: 'udupi', name: 'Udupi' },
      { id: 'chikkamagaluru', name: 'Chikkamagaluru' },
      { id: 'davanagere', name: 'Davanagere' },
      { id: 'kodagu', name: 'Kodagu' },
      { id: 'bagalkote', name: 'Bagalkote' },
      { id: 'chamarajanagar', name: 'Chamarajanagar' },
      { id: 'dakshina_kannada', name: 'Dakshina Kannada' },
      { id: 'uttara_kannada', name: 'Uttara Kannada' },
      { id: 'koppal', name: 'Koppal' },
      { id: 'chikkaballapur', name: 'Chikkaballapur' }
    ],
    subDistrictMap: {
      haveri: [
        { id: 'hangal', name: 'Hangal' },
        { id: 'shiggaon', name: 'Shiggaon' },
        { id: 'savanur', name: 'Savanur' },
        { id: 'byadgi', name: 'Byadgi' },
        { id: 'ranebennur', name: 'Ranebennur' },
        { id: 'hirekerur', name: 'Hirekerur' },
      ],
      bengaluru: [
        { id: 'bangalore_north', name: 'Bangalore North' },
        { id: 'bangalore_south', name: 'Bangalore South' },
        { id: 'bangalore_east', name: 'Bangalore East' },
        { id: 'bangalore_west', name: 'Bangalore West' },
        { id: 'yelahanka', name: 'Yelahanka' },
        { id: 'electronic_city', name: 'Electronic City' },
        { id: 'whitefield', name: 'Whitefield' },
        { id: 'marathahalli', name: 'Marathahalli' },
        { id: 'hebbal', name: 'Hebbal' },
        { id: 'jayanagar', name: 'Jayanagar' },
      ],
      mysuru: [
        { id: 'mysore_city', name: 'Mysore City' },
        { id: 'nanjangud', name: 'Nanjangud' },
        { id: 'hunsur', name: 'Hunsur' },
        { id: 'krishnarajanagara', name: 'Krishnarajanagara' },
        { id: 'periyapatna', name: 'Periyapatna' },
        { id: 't_narsipur', name: 'T. Narsipur' },
        { id: 'sargur', name: 'Sargur' },
        { id: 'heggadadevankote', name: 'Heggadadevankote' },
      ],
      hubli_dharwad: [
        { id: 'hubli', name: 'Hubli' },
        { id: 'dharwad_city', name: 'Dharwad City' },
        { id: 'kalghatgi', name: 'Kalghatgi' },
        { id: 'kundgol', name: 'Kundgol' },
        { id: 'navalgund', name: 'Navalgund' },
      ],
      mangaluru: [
        { id: 'mangalore_city', name: 'Mangalore City' },
        { id: 'bantwal', name: 'Bantwal' },
        { id: 'belthangady', name: 'Belthangady' },
        { id: 'puttur', name: 'Puttur' },
        { id: 'sullia', name: 'Sullia' },
      ],
      belgaum: [
        { id: 'belgaum_city', name: 'Belgaum City' },
        { id: 'bailhongal', name: 'Bailhongal' },
        { id: 'khanapur', name: 'Khanapur' },
        { id: 'ramdurg', name: 'Ramdurg' },
        { id: 'saundatti', name: 'Saundatti' },
      ]
    }
  },
  maharashtra: {
    districts: [
      { id: 'mumbai', name: 'Mumbai' },
      { id: 'pune', name: 'Pune' },
      { id: 'nagpur', name: 'Nagpur' },
      { id: 'thane', name: 'Thane' },
      { id: 'nashik', name: 'Nashik' },
      { id: 'aurangabad', name: 'Aurangabad' },
      { id: 'solapur', name: 'Solapur' },
      { id: 'kolhapur', name: 'Kolhapur' },
      { id: 'amravati', name: 'Amravati' },
      { id: 'nanded', name: 'Nanded' },
      { id: 'palghar', name: 'Palghar' },
      { id: 'jalgaon', name: 'Jalgaon' },
      { id: 'akola', name: 'Akola' },
      { id: 'satara', name: 'Satara' },
      { id: 'latur', name: 'Latur' },
      { id: 'chandrapur', name: 'Chandrapur' },
      { id: 'yavatmal', name: 'Yavatmal' },
      { id: 'ahmednagar', name: 'Ahmednagar' },
      { id: 'raigad', name: 'Raigad' },
      { id: 'buldhana', name: 'Buldhana' },
      { id: 'sangli', name: 'Sangli' },
      { id: 'jalna', name: 'Jalna' },
      { id: 'dhule', name: 'Dhule' },
      { id: 'osmanabad', name: 'Osmanabad' },
      { id: 'beed', name: 'Beed' },
      { id: 'parbhani', name: 'Parbhani' },
      { id: 'hingoli', name: 'Hingoli' },
      { id: 'nandurbar', name: 'Nandurbar' },
      { id: 'wardha', name: 'Wardha' },
      { id: 'washim', name: 'Washim' },
      { id: 'bhandara', name: 'Bhandara' },
      { id: 'gondia', name: 'Gondia' },
      { id: 'gadchiroli', name: 'Gadchiroli' },
      { id: 'ratnagiri', name: 'Ratnagiri' },
      { id: 'sindhudurg', name: 'Sindhudurg' }
    ],
    subDistrictMap: {
      mumbai: [
        { id: 'mumbai_city', name: 'Mumbai City' },
        { id: 'mumbai_suburban', name: 'Mumbai Suburban' },
        { id: 'andheri', name: 'Andheri' },
        { id: 'bandra', name: 'Bandra' },
        { id: 'dadar', name: 'Dadar' },
        { id: 'borivali', name: 'Borivali' },
        { id: 'kurla', name: 'Kurla' },
        { id: 'chembur', name: 'Chembur' },
        { id: 'ghatkopar', name: 'Ghatkopar' },
        { id: 'malad', name: 'Malad' },
        { id: 'mulund', name: 'Mulund' },
        { id: 'worli', name: 'Worli' }
      ],
      pune: [
        { id: 'pune_city', name: 'Pune City' },
        { id: 'kothrud', name: 'Kothrud' },
        { id: 'hadapsar', name: 'Hadapsar' },
        { id: 'pimpri_chinchwad', name: 'Pimpri-Chinchwad' },
        { id: 'baramati', name: 'Baramati' },
        { id: 'khadki', name: 'Khadki' },
        { id: 'haveli', name: 'Haveli' },
        { id: 'maval', name: 'Maval' },
        { id: 'mulshi', name: 'Mulshi' },
        { id: 'velhe', name: 'Velhe' }
      ],
      nagpur: [
        { id: 'nagpur_city', name: 'Nagpur City' },
        { id: 'kamptee', name: 'Kamptee' },
        { id: 'umred', name: 'Umred' },
        { id: 'hingna', name: 'Hingna' },
        { id: 'ramtek', name: 'Ramtek' },
        { id: 'parseoni', name: 'Parseoni' },
        { id: 'mauda', name: 'Mauda' },
        { id: 'kuhi', name: 'Kuhi' }
      ],
      thane: [
        { id: 'thane_city', name: 'Thane City' },
        { id: 'kalyan', name: 'Kalyan' },
        { id: 'dombivli', name: 'Dombivli' },
        { id: 'ulhasnagar', name: 'Ulhasnagar' },
        { id: 'ambernath', name: 'Ambernath' },
        { id: 'badlapur', name: 'Badlapur' },
        { id: 'murbad', name: 'Murbad' },
        { id: 'bhiwandi', name: 'Bhiwandi' }
      ],
      nashik: [
        { id: 'nashik_city', name: 'Nashik City' },
        { id: 'malegaon', name: 'Malegaon' },
        { id: 'sinnar', name: 'Sinnar' },
        { id: 'igatpuri', name: 'Igatpuri' },
        { id: 'trimbakeshwar', name: 'Trimbakeshwar' },
        { id: 'dindori', name: 'Dindori' }
      ]
    }
  },
  tamil_nadu: {
    districts: [
      { id: 'chennai', name: 'Chennai' },
      { id: 'coimbatore', name: 'Coimbatore' },
      { id: 'madurai', name: 'Madurai' },
      { id: 'tiruchirappalli', name: 'Tiruchirappalli' },
      { id: 'salem', name: 'Salem' },
      { id: 'tirunelveli', name: 'Tirunelveli' },
      { id: 'tiruppur', name: 'Tiruppur' },
      { id: 'erode', name: 'Erode' },
      { id: 'vellore', name: 'Vellore' },
      { id: 'thoothukudi', name: 'Thoothukudi' },
      { id: 'dindigul', name: 'Dindigul' },
      { id: 'thanjavur', name: 'Thanjavur' },
      { id: 'ranipet', name: 'Ranipet' },
      { id: 'sivaganga', name: 'Sivaganga' },
      { id: 'kanchipuram', name: 'Kanchipuram' },
      { id: 'tiruvarur', name: 'Tiruvarur' },
      { id: 'nagapattinam', name: 'Nagapattinam' },
      { id: 'cuddalore', name: 'Cuddalore' },
      { id: 'krishnagiri', name: 'Krishnagiri' },
      { id: 'namakkal', name: 'Namakkal' },
      { id: 'karur', name: 'Karur' },
      { id: 'tiruvannamalai', name: 'Tiruvannamalai' },
      { id: 'pudukkottai', name: 'Pudukkottai' },
      { id: 'dharmapuri', name: 'Dharmapuri' },
      { id: 'theni', name: 'Theni' },
      { id: 'nilgiris', name: 'Nilgiris' }
    ],
    subDistrictMap: {
      chennai: [
        { id: 'chennai_central', name: 'Chennai Central' },
        { id: 'chennai_north', name: 'Chennai North' },
        { id: 'chennai_south', name: 'Chennai South' },
        { id: 'chennai_east', name: 'Chennai East' },
        { id: 'chennai_west', name: 'Chennai West' },
        { id: 'adyar', name: 'Adyar' },
        { id: 'anna_nagar', name: 'Anna Nagar' },
        { id: 't_nagar', name: 'T. Nagar' },
        { id: 'mylapore', name: 'Mylapore' },
        { id: 'velachery', name: 'Velachery' },
        { id: 'tambaram', name: 'Tambaram' },
        { id: 'chrompet', name: 'Chrompet' }
      ],
      coimbatore: [
        { id: 'coimbatore_north', name: 'Coimbatore North' },
        { id: 'coimbatore_south', name: 'Coimbatore South' },
        { id: 'mettupalayam', name: 'Mettupalayam' },
        { id: 'pollachi', name: 'Pollachi' },
        { id: 'sulur', name: 'Sulur' },
        { id: 'valparai', name: 'Valparai' },
        { id: 'kinathukadavu', name: 'Kinathukadavu' },
        { id: 'madukkarai', name: 'Madukkarai' },
        { id: 'perur', name: 'Perur' },
        { id: 'annur', name: 'Annur' }
      ],
      madurai: [
        { id: 'madurai_north', name: 'Madurai North' },
        { id: 'madurai_south', name: 'Madurai South' },
        { id: 'melur', name: 'Melur' },
        { id: 'usilampatti', name: 'Usilampatti' },
        { id: 'peraiyur', name: 'Peraiyur' },
        { id: 'thirumangalam', name: 'Thirumangalam' },
        { id: 'vadipatti', name: 'Vadipatti' },
        { id: 'thirupparankundram', name: 'Thirupparankundram' }
      ],
      tiruchirappalli: [
        { id: 'trichy_urban', name: 'Trichy Urban' },
        { id: 'srirangam', name: 'Srirangam' },
        { id: 'lalgudi', name: 'Lalgudi' },
        { id: 'musiri', name: 'Musiri' },
        { id: 'thuraiyur', name: 'Thuraiyur' },
        { id: 'manapparai', name: 'Manapparai' }
      ]
    }
  },
  gujarat: {
    districts: [
      { id: 'ahmedabad', name: 'Ahmedabad' },
      { id: 'surat', name: 'Surat' },
      { id: 'vadodara', name: 'Vadodara' },
      { id: 'rajkot', name: 'Rajkot' },
      { id: 'bhavnagar', name: 'Bhavnagar' },
      { id: 'jamnagar', name: 'Jamnagar' },
      { id: 'junagadh', name: 'Junagadh' },
      { id: 'gandhinagar', name: 'Gandhinagar' },
      { id: 'kutch', name: 'Kutch' },
      { id: 'anand', name: 'Anand' },
      { id: 'kheda', name: 'Kheda' },
      { id: 'bharuch', name: 'Bharuch' },
      { id: 'mehsana', name: 'Mehsana' },
      { id: 'morbi', name: 'Morbi' },
      { id: 'sabarkantha', name: 'Sabarkantha' },
      { id: 'amreli', name: 'Amreli' },
      { id: 'banaskantha', name: 'Banaskantha' },
      { id: 'aravalli', name: 'Aravalli' },
      { id: 'botad', name: 'Botad' },
      { id: 'chhota_udaipur', name: 'Chhota Udaipur' }
    ],
    subDistrictMap: {
      ahmedabad: [
        { id: 'ahmedabad_east', name: 'Ahmedabad East' },
        { id: 'ahmedabad_west', name: 'Ahmedabad West' },
        { id: 'ahmedabad_central', name: 'Ahmedabad Central' },
        { id: 'sanand', name: 'Sanand' },
        { id: 'dholka', name: 'Dholka' },
        { id: 'daskroi', name: 'Daskroi' },
        { id: 'bavla', name: 'Bavla' },
        { id: 'detroj_rampura', name: 'Detroj-Rampura' },
        { id: 'mandal', name: 'Mandal' },
        { id: 'viramgam', name: 'Viramgam' }
      ],
      surat: [
        { id: 'surat_city', name: 'Surat City' },
        { id: 'choryasi', name: 'Choryasi' },
        { id: 'bardoli', name: 'Bardoli' },
        { id: 'olpad', name: 'Olpad' },
        { id: 'mangrol', name: 'Mangrol' },
        { id: 'mandvi', name: 'Mandvi' },
        { id: 'kamrej', name: 'Kamrej' },
        { id: 'palsana', name: 'Palsana' },
        { id: 'mahuva', name: 'Mahuva' }
      ],
      vadodara: [
        { id: 'vadodara_city', name: 'Vadodara City' },
        { id: 'padra', name: 'Padra' },
        { id: 'savli', name: 'Savli' },
        { id: 'dabhoi', name: 'Dabhoi' },
        { id: 'karjan', name: 'Karjan' },
        { id: 'sinor', name: 'Sinor' },
        { id: 'vaghodia', name: 'Vaghodia' },
        { id: 'desar', name: 'Desar' }
      ],
      rajkot: [
        { id: 'rajkot_city', name: 'Rajkot City' },
        { id: 'lodhika', name: 'Lodhika' },
        { id: 'kotda_sangani', name: 'Kotda Sangani' },
        { id: 'jasdan', name: 'Jasdan' },
        { id: 'gondal', name: 'Gondal' },
        { id: 'jetpur', name: 'Jetpur' },
        { id: 'dhoraji', name: 'Dhoraji' },
        { id: 'upleta', name: 'Upleta' },
        { id: 'jamkandorna', name: 'Jamkandorna' },
        { id: 'paddhari', name: 'Paddhari' }
      ]
    }
  },
  delhi: {
    districts: [
      { id: 'new_delhi', name: 'New Delhi' },
      { id: 'north_delhi', name: 'North Delhi' },
      { id: 'south_delhi', name: 'South Delhi' },
      { id: 'east_delhi', name: 'East Delhi' },
      { id: 'west_delhi', name: 'West Delhi' },
      { id: 'central_delhi', name: 'Central Delhi' },
      { id: 'north_east_delhi', name: 'North East Delhi' },
      { id: 'north_west_delhi', name: 'North West Delhi' },
      { id: 'south_east_delhi', name: 'South East Delhi' },
      { id: 'south_west_delhi', name: 'South West Delhi' },
      { id: 'shahdara', name: 'Shahdara' }
    ],
    subDistrictMap: {
      new_delhi: [
        { id: 'connaught_place', name: 'Connaught Place' },
        { id: 'karol_bagh', name: 'Karol Bagh' },
        { id: 'chanakya_puri', name: 'Chanakya Puri' },
        { id: 'delhi_cantonment', name: 'Delhi Cantonment' },
        { id: 'parliament_street', name: 'Parliament Street' },
        { id: 'lodi_colony', name: 'Lodi Colony' },
        { id: 'safdarjung', name: 'Safdarjung' },
        { id: 'vasant_kunj', name: 'Vasant Kunj' }
      ],
      north_delhi: [
        { id: 'civil_lines', name: 'Civil Lines' },
        { id: 'sadar_bazaar', name: 'Sadar Bazaar' },
        { id: 'kotwali', name: 'Kotwali' },
        { id: 'kashmere_gate', name: 'Kashmere Gate' },
        { id: 'timarpur', name: 'Timarpur' },
        { id: 'model_town', name: 'Model Town' }
      ],
      south_delhi: [
        { id: 'hauz_khas', name: 'Hauz Khas' },
        { id: 'mehrauli', name: 'Mehrauli' },
        { id: 'defence_colony', name: 'Defence Colony' },
        { id: 'lajpat_nagar', name: 'Lajpat Nagar' },
        { id: 'saket', name: 'Saket' },
        { id: 'green_park', name: 'Green Park' },
        { id: 'greater_kailash', name: 'Greater Kailash' },
        { id: 'malviya_nagar', name: 'Malviya Nagar' },
        { id: 'sarita_vihar', name: 'Sarita Vihar' }
      ],
      east_delhi: [
        { id: 'preet_vihar', name: 'Preet Vihar' },
        { id: 'mayur_vihar', name: 'Mayur Vihar' },
        { id: 'laxmi_nagar', name: 'Laxmi Nagar' },
        { id: 'gandhi_nagar', name: 'Gandhi Nagar' },
        { id: 'vivek_vihar', name: 'Vivek Vihar' },
        { id: 'shahdara', name: 'Shahdara' },
        { id: 'dilshad_garden', name: 'Dilshad Garden' }
      ],
      west_delhi: [
        { id: 'rajouri_garden', name: 'Rajouri Garden' },
        { id: 'tilak_nagar', name: 'Tilak Nagar' },
        { id: 'dwarka', name: 'Dwarka' },
        { id: 'janakpuri', name: 'Janakpuri' },
        { id: 'vikaspuri', name: 'Vikaspuri' },
        { id: 'punjabi_bagh', name: 'Punjabi Bagh' },
        { id: 'paschim_vihar', name: 'Paschim Vihar' }
      ]
    }
  },
  uttar_pradesh: {
    districts: [
      { id: 'lucknow', name: 'Lucknow' },
      { id: 'kanpur', name: 'Kanpur' },
      { id: 'ghaziabad', name: 'Ghaziabad' },
      { id: 'agra', name: 'Agra' },
      { id: 'varanasi', name: 'Varanasi' },
      { id: 'meerut', name: 'Meerut' },
      { id: 'allahabad', name: 'Prayagraj (Allahabad)' },
      { id: 'bareilly', name: 'Bareilly' },
      { id: 'aligarh', name: 'Aligarh' },
      { id: 'moradabad', name: 'Moradabad' },
      { id: 'saharanpur', name: 'Saharanpur' },
      { id: 'gorakhpur', name: 'Gorakhpur' },
      { id: 'noida', name: 'Gautam Buddha Nagar (Noida)' },
      { id: 'firozabad', name: 'Firozabad' },
      { id: 'jhansi', name: 'Jhansi' },
      { id: 'mathura', name: 'Mathura' },
      { id: 'muzaffarnagar', name: 'Muzaffarnagar' },
      { id: 'ayodhya', name: 'Ayodhya' },
      { id: 'sultanpur', name: 'Sultanpur' },
      { id: 'mirzapur', name: 'Mirzapur' }
    ],
    subDistrictMap: {
      lucknow: [
        { id: 'lucknow_city', name: 'Lucknow City' },
        { id: 'bakshi_ka_talab', name: 'Bakshi Ka Talab' },
        { id: 'mohanlalganj', name: 'Mohanlalganj' },
        { id: 'sarojini_nagar', name: 'Sarojini Nagar' },
        { id: 'malihabad', name: 'Malihabad' },
        { id: 'chinhat', name: 'Chinhat' },
        { id: 'kakori', name: 'Kakori' },
        { id: 'gosainganj', name: 'Gosainganj' }
      ],
      kanpur: [
        { id: 'kanpur_city', name: 'Kanpur City' },
        { id: 'billhaur', name: 'Billhaur' },
        { id: 'ghatampur', name: 'Ghatampur' },
        { id: 'kalyanpur', name: 'Kalyanpur' },
        { id: 'vidhnu', name: 'Vidhnu' },
        { id: 'sarsaul', name: 'Sarsaul' },
        { id: 'bithoor', name: 'Bithoor' }
      ],
      agra: [
        { id: 'agra_city', name: 'Agra City' },
        { id: 'etmadpur', name: 'Etmadpur' },
        { id: 'fatehpur_sikri', name: 'Fatehpur Sikri' },
        { id: 'kiraoli', name: 'Kiraoli' },
        { id: 'bah', name: 'Bah' },
        { id: 'kheragarh', name: 'Kheragarh' },
        { id: 'jagner', name: 'Jagner' }
      ],
      varanasi: [
        { id: 'varanasi_city', name: 'Varanasi City' },
        { id: 'pindra', name: 'Pindra' },
        { id: 'sewapuri', name: 'Sewapuri' },
        { id: 'rajatalab', name: 'Rajatalab' },
        { id: 'harahua', name: 'Harahua' },
        { id: 'kashi_vidyapeeth', name: 'Kashi Vidyapeeth' },
        { id: 'arajiline', name: 'Arajiline' }
      ]
    }
  },
  punjab: {
    districts: [
      { id: 'ludhiana', name: 'Ludhiana' },
      { id: 'amritsar', name: 'Amritsar' },
      { id: 'jalandhar', name: 'Jalandhar' },
      { id: 'patiala', name: 'Patiala' },
      { id: 'bathinda', name: 'Bathinda' },
      { id: 'mohali', name: 'SAS Nagar (Mohali)' },
      { id: 'hoshiarpur', name: 'Hoshiarpur' },
      { id: 'gurdaspur', name: 'Gurdaspur' },
      { id: 'sangrur', name: 'Sangrur' },
      { id: 'pathankot', name: 'Pathankot' },
      { id: 'moga', name: 'Moga' },
      { id: 'firozpur', name: 'Firozpur' },
      { id: 'fatehgarh_sahib', name: 'Fatehgarh Sahib' },
      { id: 'muktsar', name: 'Sri Muktsar Sahib' },
      { id: 'kapurthala', name: 'Kapurthala' }
    ],
    subDistrictMap: {
      ludhiana: [
        { id: 'ludhiana_east', name: 'Ludhiana East' },
        { id: 'ludhiana_west', name: 'Ludhiana West' },
        { id: 'khanna', name: 'Khanna' },
        { id: 'samrala', name: 'Samrala' },
        { id: 'payal', name: 'Payal' },
        { id: 'raikot', name: 'Raikot' },
        { id: 'jagraon', name: 'Jagraon' },
        { id: 'machhiwara', name: 'Machhiwara' },
        { id: 'doraha', name: 'Doraha' }
      ],
      amritsar: [
        { id: 'amritsar_city', name: 'Amritsar City' },
        { id: 'ajnala', name: 'Ajnala' },
        { id: 'baba_bakala', name: 'Baba Bakala' },
        { id: 'majitha', name: 'Majitha' },
        { id: 'rayya', name: 'Rayya' },
        { id: 'attari', name: 'Attari' },
        { id: 'chogawan', name: 'Chogawan' }
      ],
      jalandhar: [
        { id: 'jalandhar_city', name: 'Jalandhar City' },
        { id: 'jalandhar_cantt', name: 'Jalandhar Cantt' },
        { id: 'phillaur', name: 'Phillaur' },
        { id: 'nakodar', name: 'Nakodar' },
        { id: 'shahkot', name: 'Shahkot' },
        { id: 'adampur', name: 'Adampur' },
        { id: 'bhogpur', name: 'Bhogpur' }
      ],
      patiala: [
        { id: 'patiala_city', name: 'Patiala City' },
        { id: 'nabha', name: 'Nabha' },
        { id: 'rajpura', name: 'Rajpura' },
        { id: 'samana', name: 'Samana' },
        { id: 'patran', name: 'Patran' },
        { id: 'ghanaur', name: 'Ghanaur' },
        { id: 'sanaur', name: 'Sanaur' }
      ]
    }
  }
};

export const getDistricts = (stateId: string): LocationItem[] => {
  return stateDistrictMap[stateId]?.districts || [];
};

export const getSubDistricts = (stateId: string, districtId: string): LocationItem[] => {
  return stateDistrictMap[stateId]?.subDistrictMap[districtId] || [];
};
