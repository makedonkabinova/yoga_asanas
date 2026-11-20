const IMG = s => `https://pocketyoga.com/assets/images/full/${s}.png`;

const POSES = [
  // STANDING
  {
    id:'palma', sl:'Palma', en:'Mountain / Palm Tree', sa:'Tadasana', img:IMG('MountainArmsSide'), section:'standing',
    descSl:'Temelj vseh stoječih položajev. Uzemilja in poravna telo od stopal do temena ter spodbuja mirnost in ozaveščenost.',
    descEn:'Foundation of all standing poses. Grounds and aligns the whole body from feet to crown, cultivating stillness and awareness.',
  },
  {
    id:'polmesec-c', sl:'Polmesec (črka C)', en:'Standing Half Moon / C', sa:'Ardha Chandrasana', img:IMG('HalfMoon_L'), section:'standing',
    descSl:'Stranski razteg v stoje, ki podaljša stransko telo, odpre rebra in izboljša stransko gibčnost hrbtenice.',
    descEn:'Standing side stretch that lengthens the lateral body, opens the ribs, and improves lateral spinal flexibility.',
  },
  {
    id:'galeb', sl:'Galeb', en:'Seagull Pose', sa:'', img:IMG('WarriorIIIAirplane_L'), section:'standing',
    descSl:'Ravnotežni položaj z iztegnjenimi rokami kot krila galeba. Krepi stoječo nogo, hrbet in jedro ter izboljšuje koncentracijo.',
    descEn:'Balance pose with arms extended like wings. Strengthens the standing leg, back, and core while improving focus.',
  },
  {
    id:'stol', sl:'Stol', en:'Chair Pose', sa:'Utkatasana', img:IMG('Chair'), section:'standing',
    descSl:'Krepi stegna, teleti in hrbtenico. Ustvarja toploto v telesu in preizkuša vzdržljivost spodnjega dela telesa.',
    descEn:'Strengthens the thighs, calves, and spine. Builds heat in the body and challenges endurance in the lower body.',
  },
  {
    id:'stol-zasuk', sl:'Stol v zasuku', en:'Revolved Chair Pose', sa:'Parivrtta Utkatasana', img:IMG('ChairTwist_R'), section:'standing',
    descSl:'Stol poglobljen z zasukom hrbtenice. Razstrupi in krepi; ustvarja toploto ter masira prebavne organe.',
    descEn:'Chair pose deepened with a spinal twist. Detoxifying and strengthening; builds heat while massaging the digestive organs.',
  },
  {
    id:'orel', sl:'Orel', en:'Eagle Pose', sa:'Garudasana', img:IMG('Eagle_L'), section:'standing',
    descSl:'Preizkuša ravnotežje, hkrati razteza zunanje boke, ramena in zgornji hrbet. Zahteva intenzivno koncentracijo in koordinacijo.',
    descEn:'Challenges balance while stretching the outer hips, shoulders, and upper back. Demands intense concentration and coordination.',
  },
  {
    id:'trikotnik', sl:'Trikotnik', en:'Triangle Pose', sa:'Trikonasana', img:IMG('TriangleForward_R'), section:'standing',
    descSl:'Razteza boke, dimlje in zadnje stegenske mišice, hkrati krepi noge in odpre prsni koš. Ključen položaj v mnogih tradicijah.',
    descEn:'Stretches the hips, groins, and hamstrings while strengthening the legs and opening the chest. A key pose in many traditions.',
  },
  {
    id:'obr-trikotnik', sl:'Obrnjen Trikotnik', en:'Revolved Triangle', sa:'Parivritta Trikonasana', img:IMG('TriangleRevolved_L'), section:'standing',
    descSl:'Obrnjen trikotnik doda zasuk prsnega dela hrbtenice, kar izboljša gibčnost hrbtenice in ravnotežje hkrati.',
    descEn:'Revolved triangle adds thoracic rotation to the hip stretch, improving spinal mobility and balance simultaneously.',
  },
  {
    id:'bojevnik1', sl:'Bojevnik 1', en:'Warrior I', sa:'Virabhadrasana I', img:IMG('WarriorI_L'), section:'standing',
    descSl:'Krepi noge, ramena in roke, hkrati odpre prsni koš in upogibalke bokov. Gradi fokus, moč in stabilnost.',
    descEn:'Strengthens the legs, shoulders, and arms while opening the chest and hip flexors. Builds focus, power, and stability.',
  },
  {
    id:'bojevnik2', sl:'Bojevnik 2', en:'Warrior II', sa:'Virabhadrasana II', img:IMG('WarriorII_L'), section:'standing',
    descSl:'Gradi vzdržljivost v nogah, hkrati odpira boke in prsni koš. Razvija moč, vzdržljivost in notranjo osredotočenost.',
    descEn:'Builds stamina in the legs while opening the hips and chest wide. Develops strength, endurance, and inner focus.',
  },
  {
    id:'bojevnik3', sl:'Bojevnik 3', en:'Warrior III', sa:'Virabhadrasana III', img:IMG('WarriorIIIAirplane_L'), section:'standing',
    descSl:'Preizkuša ravnotežje in moč jedra na eni nogi, hkrati krepi celoten zadnji del telesa. Zahteva celovito integracijo telesa.',
    descEn:'Challenges balance and core strength on one leg while strengthening the entire back body. Demands full-body integration.',
  },
  {
    id:'predklon-razno', sl:'Globok predklon raznožno', en:'Wide-Legged Forward Fold', sa:'Prasarita Padottanasana', img:IMG('WideLeggedForwardBendIV_R'), section:'standing',
    descSl:'Razteza notranje stegenske mišice, zadnje stegenske mišice in teleti. Ob dotiku tal z glavo postane blag obrat.',
    descEn:'Wide-legged forward fold stretches the inner thighs, hamstrings, and calves. Can be a mild inversion when the head reaches the floor.',
  },
  {
    id:'crka-t', sl:'Črka T – Balancing Stick', en:'Balancing Stick', sa:'Tuladandasana', img:IMG('WarriorIII_L'), section:'standing',
    descSl:'Ravnotežni položaj v obliki črke T. Krepi jedro in noge, izboljšuje kardiovaskularno zdravje in koncentracijo.',
    descEn:'Balance pose that forms a T-shape with the body. Strengthens the core and legs, improves cardiovascular health and concentration.',
  },
  {
    id:'lok-stojeci', sl:'Lok', en:'Standing Bow', sa:'Dandayamana Dhanurasana', img:IMG('LordOfTheDance_L'), section:'standing',
    descSl:'Stoječ zaklon in ravnotežni položaj, ki razteza prsni koš, ramena in upogibalke bokov, hkrati krepi hrbet in stoječo nogo.',
    descEn:'Standing backbend and balance that stretches the chest, shoulders, and hip flexors while strengthening the back and standing leg.',
  },
  {
    id:'plesalec', sl:'Plesalec', en:'Dancer Pose', sa:'Natarajasana', img:IMG('LordOfTheDanceFull_L'), section:'standing',
    descSl:'Eleganten ravnotežni položaj, ki odpre prsni koš, ramena in upogibalke bokov. Krepi stoječo nogo in izboljšuje zavedanje telesa.',
    descEn:'Graceful balance pose that opens the chest, shoulders, and hip flexors. Strengthens the standing leg and improves body awareness.',
  },
  {
    id:'dancing-shiva', sl:'Dancing Shiva', en:'Dancing Shiva Pose', sa:'Natarajasana Variation', img:IMG('StandingHandToToeRevolved_L'), section:'standing',
    descSl:'Zasukana različica plesalca, ki poglablja razteg ramen in bokov ter preizkuša ravnotežje in zasuk hrbtenice.',
    descEn:'Revolved variation of dancer pose that deepens the shoulder and hip stretch while testing balance and spinal rotation.',
  },
  {
    id:'pollotos-osn', sl:'Pollotos Osnovni', en:'Standing Half Lotus', sa:'Ardha Padmasana', img:IMG('StandingHalfLotus_R'), section:'standing',
    descSl:'Stoječi pollotos gradi ravnotežje na eni nogi, moč gležnjev in gibčnost bokov v pokončnem položaju.',
    descEn:'Standing half lotus builds single-leg balance, ankle strength, and hip flexibility in a stable upright position.',
  },
  {
    id:'pollotos-cep', sl:'Pollotos Čep', en:'Standing Half Lotus Forward', sa:'Ardha Baddha Padmottanasana', img:IMG('StandingForwardBendHalfLotus_R'), section:'standing',
    descSl:'Kombinira pollotos s stoječim predklonom za globoko odpiranje bokov, razteg zadnjih stegenskih mišic in napredni izziv ravnotežja.',
    descEn:'Combines half lotus with a standing forward fold for deep hip opening, hamstring stretch, and advanced balance challenge.',
  },
  {
    id:'predklon-noga', sl:'Predklon na eno nogo', en:'Head to Knee', sa:'Dandayamana Janu Shirshasana', img:IMG('StandingHeadToKnee_L'), section:'standing',
    descSl:'Stojni predklon glave k kolenu zahteva izjemno ravnotežje, fokus in gibčnost zadnjih stegenskih mišic. Eden najtežjih stoječih položajev.',
    descEn:'Standing head-to-knee demands exceptional balance, focus, and hamstring flexibility. One of the most challenging standing poses.',
  },
  {
    id:'drevo', sl:'Drevo', en:'Tree Pose', sa:'Vrksasana', img:IMG('TreePrayer_L'), section:'standing',
    descSl:'Izboljšuje ravnotežje, držo in koncentracijo. Krepi gležnje in noge ter umirja živčni sistem.',
    descEn:'Improves balance, posture, and concentration. Strengthens the ankles and legs while calming the nervous system.',
  },
  {
    id:'vel-polmesec', sl:'Veliki polmesec', en:'Half Moon Pose', sa:'Ardha Chandrasana', img:IMG('CrescentMoon_R'), section:'standing',
    descSl:'Odpira bok med ravnotežjem na eni nogi z iztegnjeno roko do tal. Krepi stoječo nogo in izboljšuje koordinacijo.',
    descEn:'Opens the hip while balancing on one leg with one arm extended to the floor. Strengthens the standing leg and improves coordination.',
  },
  {
    id:'spaga-stojeca', sl:'Stoječa špaga', en:'Standing Split', sa:'Urdhva Prasarita Eka Padasana', img:IMG('SplitsStanding_L'), section:'standing',
    descSl:'Intenzivno razteza zadnje stegenske mišice in teleti, hkrati gradi ravnotežje na eni nogi in stabilnost jedra.',
    descEn:'Standing split intensely stretches the hamstrings and calves while building single-leg balance and core stability.',
  },
  {
    id:'boginja', sl:'Boginja', en:'Goddess', sa:'Utkata Konasana', img:IMG('GoddessCactusArms_L'), section:'standing',
    descSl:'Počep z razmaknjenimi nogami, ki krepi notranje stegenske mišice, teleti in jedro. Odpira boke in prsni koš; opolnomočujoč in uzemilujoč položaj.',
    descEn:'Wide-stance squat that strengthens the inner thighs, calves, and core. Opens the hips and chest; empowering and grounding.',
  },
  {
    id:'pahljaca-stoj', sl:'Pahljača', en:'Revolved Standing Hand to Big Toe', sa:'Parivritta Hasta Padangushthasana', img:IMG('StandingHandToToeRevolved_L'), section:'standing',
    descSl:'Zasukani stojni položaj roke do palca noge preizkuša ravnotežje in globoko razteza IT trakt, zadnje stegenske mišice in zunanji bok z zasukom hrbtenice.',
    descEn:'Revolved hand-to-toe pose tests balance and deeply stretches the IT band, hamstrings, and outer hip with a spinal twist.',
  },

  // KNEELING
  {
    id:'kuzek', sl:'Kužek', en:'Puppy Pose', sa:'Uttana Shishosana', img:IMG('PuppyExtendedStraightLegs'), section:'kneeling',
    descSl:'Nežno razteza hrbtenico in ramena iz klečečega položaja. Pomirja živčni sistem in sprošča napetost v zgornjem delu hrbta.',
    descEn:'Gently stretches the spine and shoulders from a kneeling position. Calming for the nervous system and great for releasing upper back tension.',
  },
  {
    id:'tiger', sl:'Tiger', en:'Tiger Pose', sa:'Vyaghrasana', img:IMG('Tiger_L'), section:'kneeling',
    descSl:'Podaljšanje hrbtenice in razteg upogibalk bokov iz položaja mize. Krepi hrbet in zadnjico ter izboljšuje gibčnost hrbtenice.',
    descEn:'Spinal extension and hip flexor stretch from tabletop. Strengthens the back and glutes while improving spinal mobility.',
  },
  {
    id:'kamela', sl:'Kamela', en:'Camel Pose', sa:'Ustrasana', img:IMG('Camel'), section:'kneeling',
    descSl:'Intenziven zaklon, ki odpre sprednji del telesa od grla do upogibalk bokov. Energetičen in odpirajoč srce; popravlja držo pri sedečem delu.',
    descEn:'Intense backbend that opens the entire front body from throat to hip flexors. Energising and heart-opening; counteracts desk posture.',
  },
  {
    id:'zajec', sl:'Zajec', en:'Rabbit Pose', sa:'Sasangasana', img:IMG('Rabbit'), section:'kneeling',
    descSl:'Predklon iz klečečega položaja, ki globoko razteza hrbtenico in ramena. Protipoložaj h kameli; razpne vretenca.',
    descEn:'Forward fold from a kneeling position that deeply stretches the spine and shoulders. Counterpose to camel; decompresses the vertebrae.',
  },
  {
    id:'macka', sl:'Mačka', en:'Cat Pose', sa:'Marjaryasana', img:IMG('Cat'), section:'kneeling',
    descSl:'Nežno upogibanje hrbtenice pri izdihu. Kombinira se s kravjim položajem za ogrevanje hrbtenice, kar izboljšuje gibčnost in koordinacijo.',
    descEn:'Gentle spinal flexion on the exhale. Pairs with cow pose for a warming spine warm-up that improves flexibility and coordination.',
  },
  {
    id:'jezdec', sl:'Jezdec', en:'Low Lunge Twisted', sa:'Parivritta Anjaneyasana', img:IMG('LungeTwist_L'), section:'kneeling',
    descSl:'Zasukani nizki izpad odpira prsni koš, krepi jedro in globoko razteza upogibalke bokov in dimlje.',
    descEn:'Twisting low lunge opens the chest, strengthens the core, and deeply stretches the hip flexors and groin.',
  },
  {
    id:'trikotnik-pad', sl:'Trikotnik (padajoč)', en:'Fallen Triangle', sa:'Patita Tarasana', img:IMG('FallenTriangle_R'), section:'kneeling',
    descSl:'Dinamičen razteg bokov in ramen iz stranskega položaja. Preizkuša ravnotežje in koordinacijo, hkrati razteza stransko telo.',
    descEn:'Dynamic hip and shoulder opener from a side-lying position. Challenges balance and coordination while stretching the side body.',
  },
  {
    id:'kuscar', sl:'Kuščar', en:'Lizard Pose', sa:'Uttana Pristhasana', img:IMG('Lizard_L'), section:'kneeling',
    descSl:'Globok razteg upogibalk bokov in dimeljskih mišic. Posebej koristen za tekače in kolesarje; pripravlja boke za globlje položaje.',
    descEn:'Deep hip flexor and groin stretch. Particularly beneficial for runners and cyclists; prepares the hips for deeper poses.',
  },

  // SEATED
  {
    id:'klesce', sl:'Klešče', en:'Seated Forward Fold', sa:'Paschimottanasana', img:IMG('SeatedForwardBend'), section:'seated',
    descSl:'Celostni razteg hrbtenice, zadnjih stegenskih mišic in telet. Pomirja in spodbuja introspekcijo; stimulira prebavne organe in živčni sistem.',
    descEn:'Full-body stretch for the spine, hamstrings, and calves. Calming and introspective; stimulates the digestive organs and nervous system.',
  },
  {
    id:'pol-klesce', sl:'Pol-klešče', en:'Seated Three Limbed Forward Bend', sa:'Trianga Mukha Eka Pada Paschimottanasana', img:IMG('SeatedForwardBendThreeLimbs_L'), section:'seated',
    descSl:'Nesimetričen predklon, ki hkrati razteza zadnje stegenske mišice iztegnjene noge in stegenske mišice pokrčene noge.',
    descEn:'Asymmetrical forward fold that stretches the hamstring of the extended leg and the quadricep of the folded leg simultaneously.',
  },
  {
    id:'colnicek', sl:'Čolniček – V pose', en:'Boat Pose', sa:'Navasana', img:IMG('BoatFull'), section:'seated',
    descSl:'Krepi jedro, upogibalke bokov in hrbtenico. Izboljšuje ravnotežje ter stimulira ledvice, ščitnico in črevesje.',
    descEn:'Strengthens the core, hip flexors, and spine. Improves balance and stimulates the kidneys, thyroid, and intestines.',
  },
  {
    id:'metulj', sl:'Metulj', en:'Butterfly Pose', sa:'Baddha Konasana', img:IMG('BoundAngle'), section:'seated',
    descSl:'Odpira notranje stegenske mišice in dimlje. Stimulira reproduktivne in prebavne organe; terapevtski za ploska stopala in visok krvni tlak.',
    descEn:'Opens the inner thighs and groin. Stimulates the reproductive and digestive organs; therapeutic for flat feet and high blood pressure.',
  },
  {
    id:'lotos', sl:'Lotos', en:'Lotus Pose', sa:'Padmasana', img:IMG('LotusFull'), section:'seated',
    descSl:'Klasičen meditacijski sedež, ki odpira boke in podaljšuje hrbtenico. Umirja možgane in stimulira medenico, hrbtenico in mehur.',
    descEn:'Classic meditation seat that opens the hips and elongates the spine. Calms the brain and stimulates the pelvis, spine, and bladder.',
  },
  {
    id:'golob', sl:'Golob', en:'Pigeon Pose', sa:'Kapotasana', img:IMG('Pigeon'), section:'seated',
    descSl:'Intenzivno odpiranje bokov, ki sprosti globoko napetost, shranjeno v piriformis mišici in rotatorjih bokov. Razteza tudi upogibalke bokov zadnje noge.',
    descEn:'Intense hip opener that releases deep tension stored in the piriformis and hip rotators. Also stretches the hip flexors of the back leg.',
  },
  {
    id:'pol-golob', sl:'Pol-golob', en:'Half-Pigeon Pose', sa:'Ardha Kapotasana', img:IMG('PigeonHalf_L'), section:'seated',
    descSl:'Pripravljalni golob, ki nežno odpira piriformis in upogibalke bokov. Eden najučinkovitejših položajev za odpiranje bokov za večino praktikantov.',
    descEn:'Preparatory pigeon that gently opens the piriformis and hip flexors. One of the most effective hip openers for most practitioners.',
  },
  {
    id:'kravji-gobec', sl:'Kravji Gobec', en:'Cow Face', sa:'Gomukhasana', img:IMG('KneePileBind_L'), section:'seated',
    descSl:'Hkrati razteza boke, gležnje in ramena. Terapevtski za toge IT trakte in toga ramena; odličen za pisarniške delavce.',
    descEn:'Stretches the hips, ankles, and shoulders simultaneously. Therapeutic for tight IT bands and stiff shoulders; great for desk workers.',
  },
  {
    id:'mizica', sl:'Mizica', en:'Reverse Table Top', sa:'Ardha Purvottanasana', img:IMG('Table'), section:'seated',
    descSl:'Obrnjena miza krepi zapestja, roke in jedro, hkrati odpira prsni koš in ramena. Dobra priprava za popolno obrnjeno desko.',
    descEn:'Reverse table strengthens the wrists, arms, and core while opening the chest and shoulders. Good preparation for full upward plank.',
  },
  {
    id:'modrec-zasuk', sl:'Modrec v zasuku', en:'Sage Twist', sa:'Marichyasana III', img:IMG('MarichiIII_L'), section:'seated',
    descSl:'Sedeči zasuk, posvečen modremu Marichiju. Masira trebušne organe, podaljšuje hrbtenico in izboljšuje prebavo.',
    descEn:'Seated twist dedicated to the sage Marichi. Massages the abdominal organs, lengthens the spine, and improves digestion.',
  },
  {
    id:'crka-a', sl:'Črka A', en:'Splits Wide', sa:'Samakonasana', img:IMG('SplitsWide'), section:'seated',
    descSl:'Sedeči položaj s široko razmaknjenimi nogami, ki razteza notranje stegenske mišice in zadnje stegenske mišice. Zahteva precejšnjo gibčnost bokov.',
    descEn:'Wide-angle seated pose that stretches the inner thighs and hamstrings. Requires significant hip and hamstring flexibility.',
  },
  {
    id:'zelva', sl:'Želva', en:'Tortoise Pose', sa:'Kurmasana', img:IMG('SupineTortoise'), section:'seated',
    descSl:'Globok predklon z rokami iztegnjenimi pod nogami. Pomirja in spodbuja introspekcijo; eden najtrdnejših sedečih položajev.',
    descEn:'Deep forward fold with arms extending under the legs. Calming and introspective; one of the most grounding seated poses.',
  },
  {
    id:'speci-junak', sl:'Speči junak', en:'Sleeping Hero', sa:'Supta Virasana', img:IMG('HeroReclining'), section:'seated',
    descSl:'Ležeči junak razteza stegna, kolena in gležnje. Koristen za ploska stopala; izboljšuje prebavo ob vadbi po obrokih.',
    descEn:'Reclining hero stretches the thighs, knees, and ankles. Beneficial for flat feet; improves digestion when practised after meals.',
  },
  {
    id:'morska-deklica', sl:'Morska Deklica', en:'Mermaid Pose', sa:'Eka Pada Rajakapotasana', img:IMG('PigeonFull_R'), section:'seated',
    descSl:'Napredna različica goloba, ki hkrati odpira bok in ramo. Zahteva tako globoko odprtost bokov kot gibčnost ramen hkrati.',
    descEn:'Advanced pigeon variation that opens the hip and shoulder together. Requires both deep hip opening and shoulder flexibility simultaneously.',
  },
  {
    id:'sedeci-zasuk', sl:'Sedeči Zasuk', en:'Seated Twist', sa:'Vakrasana', img:IMG('MarichiIII_R'), section:'seated',
    descSl:'Nežen sedeči zasuk, ki izboljšuje gibčnost hrbtenice, masira trebušne organe in pomaga pri prebavi. Dostopen za večino praktikantov.',
    descEn:'Gentle seated twist that improves spinal mobility, massages the abdominal organs, and aids digestion. Accessible for most practitioners.',
  },

  // LYING
  {
    id:'lok-lececi', sl:'Lok', en:'Bow Pose', sa:'Dhanurasana', img:IMG('Bow'), section:'lying',
    descSl:'Popoln zaklon, ki odpre celoten sprednji del telesa in krepi hrbtne mišice, zadnjico in zadnje stegenske mišice. Energetičen in živahen.',
    descEn:'Full backbend that opens the entire front of the body and strengthens the back muscles, glutes, and hamstrings. Energising and invigorating.',
  },
  {
    id:'pol-lok', sl:'Pol-lok', en:'Half Bow Pose', sa:'Ardha Dhanurasana', img:IMG('ProneBowHalf_R'), section:'lying',
    descSl:'Pol-lok razteza eno stran naenkrat za globok razteg upogibalk bokov in stegen z bočno komponento zaklona.',
    descEn:'Half bow targets one side at a time for a deep hip flexor and quadricep stretch with a lateral backbend component.',
  },
  {
    id:'str-lok', sl:'Stranski lok', en:'Side Bow Pose', sa:'Parshva Dhanurasana', img:IMG('BowSide_R'), section:'lying',
    descSl:'Stranski lok razteza poševne trebušne mišice, stransko telo in upogibalke bokov. Masira trebušne organe z valjanjem po trebuhu.',
    descEn:'Side bow stretches the obliques, lateral body, and hip flexors. Massages the abdominal organs by rolling on the belly.',
  },
  {
    id:'kaca', sl:'Kača', en:'Snake Pose', sa:'Sarpasana', img:IMG('Snake'), section:'lying',
    descSl:'Nežen zaklon v ležečem položaju, ki krepi spodnji del hrbta brez obremenitve ledvenega dela. Dobra priprava za kobro in kobilico.',
    descEn:'Gentle prone backbend that strengthens the lower back without putting strain on the lumbar. Good preparation for cobra and locust.',
  },
  {
    id:'kobra', sl:'Kobra', en:'Cobra Pose', sa:'Bhujangasana', img:IMG('CobraFull'), section:'lying',
    descSl:'Odpira prsni koš in krepi hrbtenico, roke in ramena. Odpravlja učinke dolgotrajnega sedenja; energetičen zaklon.',
    descEn:'Opens the chest and strengthens the spine, arms, and shoulders. Counteracts the effects of prolonged sitting; energising backbend.',
  },
  {
    id:'kobilica', sl:'Kobilica', en:'Locust Pose', sa:'Salabhasana', img:IMG('LocustFull'), section:'lying',
    descSl:'Krepi celoten zadnji del telesa vključno s hrbtenico, zadnjico in zadnjimi stegenskimi mišicami. Odlična priprava za globlje zaklone.',
    descEn:'Strengthens the entire back body including the spine, glutes, and hamstrings. Excellent preparation for deeper backbends.',
  },
  {
    id:'pes-navzgor', sl:'Pes navzgor', en:'Upward Dog', sa:'Urdhva Mukha Svanasana', img:IMG('UpwardDog'), section:'lying',
    descSl:'Odpira prsni koš in krepi roke, zapestja in hrbtenico. Osrednji položaj v Pozdravu soncu; popravlja upogibanje hrbtenice naprej.',
    descEn:'Opens the chest and strengthens the arms, wrists, and spine. Central pose in Sun Salutation; counteracts forward-rounding of the spine.',
  },
  {
    id:'mali-most', sl:'Mali most', en:'Bridge Pose', sa:'Setu Bandhasana', img:IMG('Bridge'), section:'lying',
    descSl:'Nežen zaklon, ki odpira prsni koš in krepi zadnjico, zadnje stegenske mišice in spodnji hrbet. Pomirja živčni sistem.',
    descEn:'Gentle backbend that opens the chest and strengthens the glutes, hamstrings, and lower back. Calming for the nervous system.',
  },
  {
    id:'vel-most', sl:'Veliki most', en:'Wheel Pose', sa:'Urdhva Dhanurasana', img:IMG('Wheel'), section:'lying',
    descSl:'Popolno kolo je živahen zaklon, ki odpre celoten sprednji del telesa. Gradi moč v rokah, nogah in hrbtenici.',
    descEn:'Full wheel is an invigorating backbend that opens the entire front of the body. Builds strength in the arms, legs, and spine.',
  },
  {
    id:'plug', sl:'Plug', en:'Plow Pose', sa:'Halasana', img:IMG('Plow'), section:'lying',
    descSl:'Pomirjajoč obrat, ki razteza ramena in hrbtenico. Stimulira ščitnico in obščitnico; zmanjšuje stres in utrujenost.',
    descEn:'Calming inversion that stretches the shoulders and spine. Stimulates the thyroid and parathyroid glands; reduces stress and fatigue.',
  },
  {
    id:'sfinga', sl:'Sfinga', en:'Sphinx', sa:'Salamba Bhujangasana', img:IMG('Sphinx'), section:'lying',
    descSl:'Podprt zaklon, ki nežno odpira prsni koš brez obremenitve spodnjega dela hrbta. Dostopen in terapevtski za težave s spodnjim hrbtom.',
    descEn:'Supported backbend that gently opens the chest without stressing the lower back. Accessible and therapeutic for lower back issues.',
  },
  {
    id:'riba', sl:'Riba', en:'Fish Pose', sa:'Matsyasana', img:IMG('FishPreparation'), section:'lying',
    descSl:'Odpira grlo in prsni koš. Tradicionalno velja za protipoložaj stojki na ramenih; stimulira ščitnico in obščitnico.',
    descEn:'Opens the throat and chest. Traditionally considered a counterpose to shoulder stand; stimulates the thyroid and parathyroid.',
  },
  {
    id:'sveca', sl:'Sveča', en:'Supported Shoulder Stand', sa:'Salamba Sarvangasana', img:IMG('ShoulderstandSupported'), section:'lying',
    descSl:'Imenuje se "mati vseh asan". Pomirja živčni sistem, izboljšuje cirkulacijo in stimulira ščitnico ter obščitnico.',
    descEn:'Called the "mother of all asanas". Calms the nervous system, improves circulation, and stimulates the thyroid and parathyroid glands.',
  },
  {
    id:'klobcic', sl:'Klobčič', en:'Wind Removing Pose', sa:'Pavanamuktasana', img:IMG('Turtle'), section:'lying',
    descSl:'Masira prebavne organe, sprošča pline in napetost v spodnjem delu hrbta. Terapevtski za prebavne težave in bolečine v spodnjem delu hrbta.',
    descEn:'Massages the digestive organs, releases gas, and relieves lower back tension. Therapeutic for digestive issues and lower back pain.',
  },
  {
    id:'lececi-zasuk', sl:'Ležeči Zasuk', en:'Supine Spinal Twist', sa:'Supta Matsyendrasana', img:IMG('SupineSpinalTwist_R'), section:'lying',
    descSl:'Zasuk v ležečem položaju sprosti napetost v spodnjem delu hrbta in IT traktu. Masira trebušne organe in pomaga obnoviti gibčnost hrbtenice.',
    descEn:'Supine twist releases tension in the lower back and IT band. Massages the abdominal organs and helps restore spinal mobility.',
  },
  {
    id:'pahljaca-hrbet', sl:'Pahljača na Hrbtu', en:'Extended Supine Hand to Big Toe', sa:'Supta Padangushthasana', img:IMG('SupineHandToToeExtended_L'), section:'lying',
    descSl:'Razteza zadnje stegenske mišice in teleti v ležečem položaju. Milejši za spodnji hrbet kot stoječi predkloni; dostopen za večino ravni.',
    descEn:'Stretches the hamstrings and calves while lying down. Gentler on the lower back than standing forward folds; accessible for most levels.',
  },

  // SUPPORT
  {
    id:'pes-navzdol', sl:'Pes navzdol', en:'Downward Dog', sa:'Adho Mukha Svanasana', img:IMG('DownwardDog'), section:'support',
    descSl:'Celostni razteg in blag obrat. Eden najprepoznavnejših položajev joge; razteza zadnje stegenske mišice, teleti in hrbtenico, hkrati krepi roke.',
    descEn:'Full-body stretch and mild inversion. One of the most iconic yoga poses; stretches the hamstrings, calves, and spine while strengthening the arms.',
  },
  {
    id:'chaturanga', sl:'Chaturanga', en:'Low Push-up', sa:'Chaturanga Dandasana', img:IMG('FourLimbedStaff'), section:'support',
    descSl:'Položaj nizkega skleka, ki gradi precejšnjo moč rok, ramen in jedra. Osrednji položaj v seriji Sun Salutation.',
    descEn:'Low push-up position that builds significant arm, shoulder, and core strength. Central pose in Sun Salutation vinyasa transitions.',
  },
  {
    id:'deska', sl:'Deska', en:'Plank Pose', sa:'Phalakasana', img:IMG('Plank'), section:'support',
    descSl:'Izometrični položaj celotnega telesa, ki gradi moč in stabilnost v rokah, jedru in nogah. Temelj za mnoge položaje ravnotežja na rokah.',
    descEn:'Full-body isometric hold that builds strength and stability throughout the arms, core, and legs. Foundation for many arm balances.',
  },
  {
    id:'obr-deska', sl:'Obrnjena deska', en:'Upward Plank', sa:'Purvottanasana', img:IMG('PlankUpward'), section:'support',
    descSl:'Obrnjena deska odpira prsni koš in ramena, hkrati krepi roke, zapestja, noge in jedro. Protipoložaj sedečim predklonom.',
    descEn:'Reverse plank opens the chest and shoulders while strengthening the arms, wrists, legs, and core. Counterpose to seated forward folds.',
  },
  {
    id:'str-deska', sl:'Stranska deska', en:'Side Plank', sa:'Vasisthasana', img:IMG('PlankSide_R'), section:'support',
    descSl:'Krepi roke, jedro in poševne trebušne mišice v enem integriranem položaju. Preizkuša stransko stabilnost in gradi samozavest pri ravnotežju na rokah.',
    descEn:'Strengthens the arms, core, and obliques in one integrated hold. Challenges lateral stability and builds confidence in arm balances.',
  },
  {
    id:'vrana', sl:'Vrana', en:'Crow Pose', sa:'Kakasana / Bakasana', img:IMG('Crow'), section:'support',
    descSl:'Uvodni položaj ravnotežja na rokah, ki gradi moč zapestij, rok in jedra. Zahteva koordinacijo in pogum za premik teže v roke.',
    descEn:'Introductory arm balance that builds wrist, arm, and core strength. Requires coordination and the confidence to shift weight into the hands.',
  },
  {
    id:'delfin', sl:'Delfin', en:'Dolphin Pose', sa:'Ardha Pincha Mayurasana', img:IMG('Dolphin'), section:'support',
    descSl:'Različica psa navzdol na podlahteh. Odpira ramena in zgornji hrbet; odlična priprava za stojo na glavi ali stojo na podlahteh.',
    descEn:'Forearm variation of downward dog. Opens the shoulders and upper back; excellent preparation for headstand or forearm stand.',
  },
  {
    id:'skorpijon', sl:'Skorpijon', en:'Scorpion Pose', sa:'Vrschikasana', img:IMG('Scorpion'), section:'support',
    descSl:'Napredna kombinacija ravnotežja na podlahteh in globokega zaklona. Zahteva izjemno moč zgornjega dela telesa, ravnotežje in gibčnost hrbtenice.',
    descEn:'Advanced forearm balance combined with a deep backbend. Demands exceptional upper body strength, balance, and spinal flexibility.',
  },

  // RELAXATION
  {
    id:'otrok', sl:'Otrok', en:"Child's Pose", sa:'Balasana', img:IMG('ChildTraditional'), section:'relaxation',
    descSl:'Obnovitveni počivalni položaj, ki sprosti spodnji hrbet in nežno razteza boke in stegna. Pomirja in uzemilja; lahko ga držimo minuto ali dlje.',
    descEn:'Restorative resting pose that releases the lower back and gently stretches the hips and thighs. Calming and grounding; can be held for minutes.',
  },
  {
    id:'veseli-dojencek', sl:'Veseli dojenček', en:'Happy Baby', sa:'Ananda Balasana', img:IMG('BlissfulBaby'), section:'relaxation',
    descSl:'Nežno razteza notranje stegenske mišice in spodnji hrbet, hkrati umirja um. Igriv in sproščujoč; naraven položaj za odvijanje napetosti.',
    descEn:'Gently stretches the inner thighs and lower back while calming the mind. Playful and releasing; a natural unwinding pose.',
  },
  {
    id:'zasuk-sprost', sl:'Zasuk', en:'Supine Twist', sa:'Supta Matsyendrasana', img:IMG('SupineSpinalTwist_L'), section:'relaxation',
    descSl:'Zasuk v ležečem položaju sprosti napetost v hrbtenici in spodnjem delu hrbta. Masira prebavne organe; čudovit položaj ob koncu vadbe.',
    descEn:'Reclined twist releases tension in the spine and lower back. Massages the digestive organs; wonderful at the end of practice.',
  },
  {
    id:'veter', sl:'Veter', en:'Wind Removing Pose', sa:'Pavanamuktasana', img:IMG('Turtle'), section:'relaxation',
    descSl:'Masira prebavne organe in sprošča napetost v spodnjem delu hrbta. Terapevtski in globoko sproščujoč, zlasti po dolgem dnevu.',
    descEn:'Massages the digestive organs and relieves lower back tension. Therapeutic and deeply releasing, especially after a long day.',
  },
  {
    id:'mrtvec', sl:'Mrtvec', en:'Corpse Pose', sa:'Shavasana', img:IMG('Corpse'), section:'relaxation',
    descSl:'Končni počivalni položaj, v katerem telo v celoti absorbira koristi vadbe. Čeprav je vstop preprost, je doseganje resnične mirnosti končni izziv.',
    descEn:'Final resting pose where the body fully absorbs the benefits of practice. Though simple to enter, achieving true stillness is the ultimate challenge.',
  },
  {
    id:'skoljka', sl:'Školjka', en:'Shell', sa:'Balasana', img:IMG('ChildWide'), section:'relaxation',
    descSl:'Otrok z razmaknjenimi koleni ponuja širše odpiranje bokov in sakralnega predela. Globoko obnovitveni; omogoča popolno predajo in notranji fokus.',
    descEn:"Wide-knee child's pose offers a broader hip and sacral release. Deeply restorative; allows for complete surrender and inward focus.",
  },
  {
    id:'zarodek', sl:'Zarodek', en:'Embryo', sa:'Pindasana', img:IMG('Embryo'), section:'relaxation',
    descSl:'Položaj zarodka, ki zagotavlja globoko kompresijo in introspekcijo. Pomirja živčni sistem; globoko introverten in predajoč položaj.',
    descEn:'Foetal position that provides deep compression and introspection. Calming for the nervous system; a deeply inward, surrendering pose.',
  },

  // BACK / SPINAL MOVEMENTS
  {
    id:'predklon-hrb', sl:'Predklon', en:'Half Forward Fold', sa:'Ardha Uttanasana', img:IMG('ForwardBendHalfWay'), section:'back',
    descSl:'Polpredklon podaljšuje hrbtenico in zadnje stegenske mišice, hkrati krepi hrbet. Uporablja se v Pozdravu soncu kot prehodni gibalni element.',
    descEn:'Half forward fold lengthens the spine and hamstrings while strengthening the back. Used in Sun Salutation as a transitional spinal movement.',
  },
  {
    id:'zaklon', sl:'Zaklon', en:'Standing Backbend', sa:'Anuvittasana', img:IMG('MountainArmsUp'), section:'back',
    descSl:'Stoječ zaklon odpira prsni koš in upogibalke bokov, hkrati podaljšuje hrbtenico. Temeljno gibanje, ki se uporablja v mnogih zaporedjih.',
    descEn:'Standing backbend opens the chest and hip flexors while extending the spine. A fundamental spinal movement used in many sequences.',
  },
  {
    id:'odklon', sl:'Odklon', en:'Side Bend', sa:'Parsva Urdhva Hastasana', img:IMG('ForwardBendDeep'), section:'back',
    descSl:'Stransko gibanje hrbtenice, ki odpira medrebrne mišice in stransko telo. Odpravlja stransko skrajšanje, ki ga povzroča slaba drža.',
    descEn:'Lateral spinal movement that opens the intercostal muscles and side body. Counteracts lateral shortening caused by poor posture.',
  },
  {
    id:'zasuk-hrb', sl:'Zasuk', en:'Seated Twist', sa:'Vakrasana', img:IMG('MarichiIII_L'), section:'back',
    descSl:'Zasuk sedeče hrbtenice, ki izboljšuje gibčnost v prsnem in ledvenem delu hrbtenice. Pomaga pri prebavi in sprošča napetost v hrbtu.',
    descEn:'Seated spinal rotation that improves mobility throughout the thoracic and lumbar spine. Aids digestion and releases back tension.',
  },
];

const SECTIONS = {
  standing:   { sl:'Stoječe asane',       en:'Standing Poses' },
  kneeling:   { sl:'Klečeče asane',       en:'Kneeling Poses' },
  seated:     { sl:'Sedeče asane',        en:'Seated Poses' },
  lying:      { sl:'Ležeče asane',        en:'Lying Poses' },
  support:    { sl:'Opore',               en:'Support Poses' },
  relaxation: { sl:'Sprostilne asane',    en:'Relaxation Poses' },
  back:       { sl:'Gibanja hrbtenice',   en:'Spinal Movements' },
};

const SILHOUETTE = `<svg viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="18" r="10" fill="#8a9e88" opacity="0.4"/>
  <line x1="50" y1="28" x2="50" y2="75" stroke="#8a9e88" stroke-width="4" opacity="0.4" stroke-linecap="round"/>
  <line x1="50" y1="45" x2="25" y2="62" stroke="#8a9e88" stroke-width="3.5" opacity="0.4" stroke-linecap="round"/>
  <line x1="50" y1="45" x2="75" y2="62" stroke="#8a9e88" stroke-width="3.5" opacity="0.4" stroke-linecap="round"/>
  <line x1="50" y1="75" x2="32" y2="108" stroke="#8a9e88" stroke-width="3.5" opacity="0.4" stroke-linecap="round"/>
  <line x1="50" y1="75" x2="68" y2="108" stroke="#8a9e88" stroke-width="3.5" opacity="0.4" stroke-linecap="round"/>
</svg>`;
