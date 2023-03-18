const path = [
	{
    position: { lat: 48.858510205327526, lng: 24.997363639587647 }, // Tłumacz
    createContent: () => {
      const content = document.createElement("div");
      content.className = "info";
      content.innerText = "5. Juli 1944: \"Marsch nach Tlumatsch\"";
      return content;
    },
    frontlines: [0]
  },
  {
  	position: { lat: 48.92247950338839, lng: 24.709182095597992 }, // Iwano-Frankiwsk 
    createContent: () => {
      const content = document.createElement("div");
      content.className = "info";
      content.innerText = "6. Juli 1944: \"Stanislau\""
      return content;
    },
    frontlines: [0]
  },
  {
  	position: { lat: 49.83720969766367, lng: 24.028120229137635 }, // Lwiw
    createContent: () => {
      const content = document.createElement("div");
      content.className = "info";
      content.innerText = "7. Juli 1944: \"Lemberg\"";
      return content;
    },
    frontlines: [0]
  },
  {
  	position: { lat: 52.229882950377416, lng: 21.012139193317456 }, // Warschau
    createContent: () => {
      const content = document.createElement("div");
      content.className = "info";
    	content.innerText = "8. Juli 1944: \"Warschau\"";
      return content;
    },
    frontlines: [0]
  },
  {
  	position: { lat: 53.13042834274601, lng: 23.173260210587987 }, // Białystok 
    createContent: () => {
      const content = document.createElement("div");
      content.className = "info";
    	content.innerText = "10. Juli 1944: \"Bialistock\". wahrscheinlch Ankunft in Białystok \n16 Juli 1944: \"Bei Panzwerangriff im Wald verwundet\" \n17 Juli 1944: \"Kampfverbandsplatz\", wahrscheinlich auch in Białystok";
      return content;
    },
    frontlines: [0]
  },
  {
  	position: { lat: 52.1060382481324, lng: 19.944899933912204 }, // Łowicz 
    createContent: () => {
    	const content = document.createElement("div");
    	content.className = "slide-wrapper info"
      content.innerHTML = `
      <div class="slide-wrapper info">
        <button class="slide-arrow" id="slide-arrow-prev">
          &#8249;
        </button>
        <ul class="slides-container">
          <li class="slide">18. Juli 1944: "Lazarett 2 Lowitsch", warscheinliche Ankunft in Łowicz \n21. Juli 1944: "Operation"</li>
          <li class="slide"><img src="./img/st_peter_and_paul.png" />26. Juli: Zeichnung aus dem Merkbuch: Kathedrale St. Peter und Paul, Brünn</li>
          <li class="slide"><img src="./img/st_peter_and_paul_real.jpeg" />Bild der Kathedrale St. Peter und Paul, Brünn</li>
        </ul>
        <button class="slide-arrow" id="slide-arrow-next">
          &#8250;
        </button>
      </div>
      `;

      const slidesContainer = content.querySelector(".slides-container");
      const nextButton = content.querySelector(".slide-wrapper #slide-arrow-next");
      const prevButton = content.querySelector(".slide-wrapper #slide-arrow-prev");

      nextButton.addEventListener("click", () => {
        const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
        slidesContainer.scrollLeft += slideWidth;
      });

      prevButton.addEventListener("click", () => {
        const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
        slidesContainer.scrollLeft -= slideWidth;
      });
      
      return content;
    },
    frontlines: [1]
  },
  {
  	position: { lat: 52.40801970958172, lng: 16.953585152862853 }, // Posen
    createContent: () => {
      const content = document.createElement("div");
      content.className = "info";
    	content.innerText = "28. Juli 1944: \"Posen, Glagau… Lazarettzug Chemnitz\", warscheinlich Reise über Posen und Glagau nach Chemnitz";
      return content;
    },
    frontlines: [1]
  },
  {
  	position: { lat: 51.663565085654334, lng: 16.084664807947675 }, // Głogów 
    frontlines: [1]
  },
  {
  	position: { lat: 50.827985925196735, lng: 12.920606200732937 }, // Chemnitz 
    frontlines: [1]
  },
  {
  	position: { lat: 49.44495026117179, lng: 11.065285315128218 }, // Nürnberg 
    createContent: () => {
      const content = document.createElement("div");
      content.className = "info";
      content.innerText = "30. Juli 1944: \"Nürnberg, Regensburg, Passau\", wahrscheinlich zweitägige Verlegung nach Mauer-Öhling";
      return content;
    },
    frontlines: [1]
  },
  {
  	position: { lat: 49.014565842591104, lng: 12.097629461938682 }, // Regensburg 
    frontlines: [1]
  },
  {
  	position: { lat: 48.56667694335858, lng: 13.431816666812342 }, // Passau 
    frontlines: [1]
  },
  {
  	position: { lat: 48.09875460825303, lng: 14.799057362277331 }, // Amstetten 
    createContent: () => {
      const content = document.createElement("div");
      content.className = "slide-wrapper info"
      content.innerHTML = `
      <div class="slide-wrapper info">
        <button class="slide-arrow" id="slide-arrow-prev">
          &#8249;
        </button>
        <ul class="slides-container">
          <li class="slide">30. Juli 1944: "Ankunft im Res.Laz. Mauer Öhling", genaue Position unbekannt \n14. August 1944: "Entlassung aus dem Lazarett" \n15. August 1944: "Urlaub", unklar wo er da war</li>
          <li class="slide"><img src="./img/mauer_oehling.png" />Zeichnung aus dem Merkbuch: Lageplan des Reserve-Lazaretts Mauer-Öhling</li>
        </ul>
        <button class="slide-arrow" id="slide-arrow-next">
          &#8250;
        </button>
      </div>
      `;

      const slidesContainer = content.querySelector(".slides-container");
      const nextButton = content.querySelector(".slide-wrapper #slide-arrow-next");
      const prevButton = content.querySelector(".slide-wrapper #slide-arrow-prev");

      nextButton.addEventListener("click", () => {
        const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
        slidesContainer.scrollLeft += slideWidth;
      });

      prevButton.addEventListener("click", () => {
        const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
        slidesContainer.scrollLeft -= slideWidth;
      });

      return content;
    },
    frontlines: [1]
  },
  {
  	position: { lat: 47.868201225253266, lng: 12.637512949064835 }, // Traunstein 
    createContent: () => {
      const content = document.createElement("div");
      content.className = "info";
    	content.innerText = "30 August 1944: \"Traunstein\"";
      return content;
    },
    frontlines: [3]
  },
  {
  	position: { lat: 47.65991828395983, lng: 12.541765941991807 }, // Seegatterl
    createContent: () => {
    	const content = document.createElement("div");
      content.className = "slide-wrapper info"
      content.innerHTML = `
      <div class="slide-wrapper info">
        <button class="slide-arrow" id="slide-arrow-prev">
          &#8249;
        </button>
        <ul class="slides-container">
          <li class="slide">2. Oktober 1944: \"Marsch nach Seegatta\", wahrscheinlich Seegatterl</li>
          <li class="slide"><img src="./img/barbakan.png" />2. Oktober 1944: Zeichnung aus dem Merkbuch: Bastei, Krakau</li>
          <li class="slide"><img src="./img/barbakan_real.jpeg" />Bild des Barbakan von Krakau</li>
        </ul>
        <button class="slide-arrow" id="slide-arrow-next">
          &#8250;
        </button>
      </div>
      `;

      const slidesContainer = content.querySelector(".slides-container");
      const nextButton = content.querySelector(".slide-wrapper #slide-arrow-next");
      const prevButton = content.querySelector(".slide-wrapper #slide-arrow-prev");

      nextButton.addEventListener("click", () => {
        const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
        slidesContainer.scrollLeft += slideWidth;
      });

      prevButton.addEventListener("click", () => {
        const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
        slidesContainer.scrollLeft -= slideWidth;
      });
      
      return content;
    },
    frontlines: [4]
  },
  {
  	position: { lat: 47.760809180109284, lng: 12.6459602398962 }, // Ruhrpolding 
    createContent: () => {
      const content = document.createElement("div");
      content.className = "info";
    	content.innerText = "11. Oktober 1944: \"Marsch über Ruhpolding\"";
      return content;
    },
    frontlines: [4]
  },
  {
  	position: { lat: 47.73562262919188, lng: 12.455976216806894 }, // Unterwössen 
    createContent: () => {
      const content = document.createElement("div");
      content.className = "info";
    	content.innerText = "12. Oktober 1944: \"Reit im Winkl, Unterwössen\"";
      return content;
    },
    frontlines: [4]
  },
  {
  	position: { lat: 47.80681807472418, lng: 12.591172887053238 }, // Bergen 
    createContent: () => {
      const content = document.createElement("div");
      content.className = "info";
    	content.innerText = "13. Oktober 1944: \"Bergen, Traunstein\" \n 1 November 1944: \"von Traunstein abgefahren\"";
      return content;
    },
    frontlines: [4]
  },
  {
  	position: { lat: 48.20529493555178, lng: 16.373850080310827 }, // Wien 
    createContent: () => {
      const content = document.createElement("div");
      content.className = "info";
    	content.innerText = "2. November 1944: \"Wien\"";
      return content;
    },
    frontlines: [6, 7]
  },
  {
  	position: { lat: 50.26443457509497, lng: 19.026809736103967 }, // Katowice  
    createContent: () => {
      const content = document.createElement("div");
      content.className = "info";
    	content.innerText = "3 November 1944: \"Kattowitz\"";
      return content;
    },
    frontlines: [6, 7]
  },
  {
  	position: { lat: 53.12260851408931, lng: 18.00459576686589 }, // Bydgoszcz  
    createContent: () => {
      const content = document.createElement("div");
      content.className = "info";
    	content.innerText = "5. November 1944: \"Bromberg\"";
      return content;
    },
    frontlines: [6, 7]
  },
  {
  	position: { lat: 53.77792996051308, lng: 20.479802408299076 }, // Olsztyn  
    createContent: () => {
      const content = document.createElement("div");
      content.className = "info";
    	content.innerText = "8. November 1944: \"Allenstein\" \n 10 November 1944: \"2 Tage in Friederichswalde\", es ist unklar was Friederichswalde ist";
      return content;
    },
    frontlines: [6, 7]
  },
  {
  	position: { lat: 54.30687052815491, lng: 22.304211937981385 }, // Goldap  
    createContent: () => {
      const content = document.createElement("div");
      content.className = "slide-wrapper info"
      content.innerHTML = `
      <button class="slide-arrow" id="slide-arrow-prev">
        &#8249;
      </button>
      <ul class="slides-container">
        <li class="slide">Ferdinand verstarb am 28. November 1944 im Raum Hegelingen, Krs. Goldap. Er erlag nach offiziellem Bericht an einem Granatensplitter, der ihn während der Abwehr eines sowjertischen Angriffes im Herz getroffen hatte. \nAm 1. Dezember 1944 wurde er wohl im Heldenfriedhod Reimannswalde, Krs. Goldap unter militärischen Ehren beigesetzt. Wir konnten diesen Friedhof leider nicht lokalisieren.</li>
        <li class="slide"><img src="./img/mappe.jpg" />Durchschossene Mappe</li>
        <li class="slide"><img src="./img/stift.jpg" />Durchschossener Stift</li>
        <li class="slide"><img src="./img/merkbuch_durchschuss.jpg" />Durchschossenes Merkbuch</li>
      </ul>
      <button class="slide-arrow" id="slide-arrow-next">
        &#8250;
      </button>
      `;

      const slidesContainer = content.querySelector(".slides-container");
      const nextButton = content.querySelector(".slide-wrapper #slide-arrow-next");
      const prevButton = content.querySelector(".slide-wrapper #slide-arrow-prev");

      nextButton.addEventListener("click", () => {
        const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
        slidesContainer.scrollLeft += slideWidth;
      });

      prevButton.addEventListener("click", () => {
        const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
        slidesContainer.scrollLeft -= slideWidth;
      });

    	return content;
    },
    frontlines: [6, 7]
  }
]

const points = [
  {
    position: { lat: 45.1135987278747, lng: 15.18170711121544 }, // Einsatz Kroatien
    createContent: () => {
      const content = document.createElement("div");
      content.className = "info";
      content.innerText = "Irgendwo in Kroatien \nFerdinand war vom 18. Dezember 1943 bis zum 18. März 1944 in Kroatien eingesetzt zur \"Bekämpfung der Bandenbewegung in Kroatien\". \nMit der Bandenbewegung ist wahrscheinlich die sich da weiter zuspitzende kommunistische Bewegung in Kroatien gemeint. Hauptmotiv dieser war es die Faschisten aus Kroatien zu werfen und Kroatien zu befreien, zum Missfallen der Achsenmächte. ";
      return content;
    },
    resetFrontlines: true
  },
  {
		position: { lat: 52.06324611959037, lng: 6.918926117660113 }, // Wohnhaus in Ahaus MIT BILD VOM IHM
    createContent: () => {
      const content = document.createElement("div");
      content.className = "info";
    	content.innerText = "Zuhause, Ahaus Ottenstein, Feldmark 33\nFerdinand wurde am 11. August 1926 geboren, war 1,69m groß und schlank.";
      return content;
    },
    resetFrontlines: false
	},
  {
		position: { lat: 52.075256709586554, lng: 7.0008214333989836 }, // Ausbildungsplatz bei Anton Pomberg
    createContent: () => {
      const content = document.createElement("div");
      content.className = "info";
      content.innerHTML = `
      <img src="./img/lehrbrief.png" />
      Gebr. Pomberg GmbH & Co. KG \nFerdinand machte bei Anton Pomberg seine Lehre zum Tischler, die er am 13. März 1943 abschloss.
      `;
      return content;
    },
    resetFrontlines: false
	},
  {
		position: { lat: 51.9383156468531, lng: 7.167651854636709 }, // erhalten des Wehrpasses
    createContent: () => {
    	const content = document.createElement("div");
      content.className = "info";
      content.innerHTML = `
      <img src="./img/wehrpass.png" />
      Coesfeld \nHier erhielt Ferdinand am 20. April 1943 seinen Wehrpass, wurde also in die Wehrmacht rekrutiert.
      `
      return content;
    },
    resetFrontlines: false
	},
  {
		position: { lat: 52.774133405966595, lng: 29.621084417873416 }, 
    createContent: () => {
      const content = document.createElement("div");
      content.className = "slide-wrapper info";
      content.innerHTML = `
      <button class="slide-arrow" id="slide-arrow-prev">
        &#8249;
      </button>
      <ul class="slides-container">
        <li class="slide">Es war Bewegungskrieg bei dem zunächst ein großer Landgewinn und viele Krieggefangene, trotz der zunächst ca. 1600 km lange Frontlinie, zu verzeichnen waren. Am Anfang wurden ca. 3 Millionen deutsche Soldaten eingesetzt.</li>
        <li class="slide">Dabei waren die Bedingungen an der Front sehr schlecht. Es gab einen dauerhaften Wassermangel und die Umgebung war oft schlammig. Vor allem aber mussten die Soldaten mit der Kälte kämpfen, da es im ersten Jahr keine Winterkleidung gab. die Winter in Russland aber besonders kalt werden.</li>
        <li class="slide">Dadurch, dass die UdSSR nicht so schnell auf einen Angriff Deutschlands vorbereitet war, wurde sie zunächst bis Moskow zurückgedrängt. Durch die hohen Verluste wurden 1942 große Reformen in der roten Armee angeregt.</li>
        <li class="slide">Durch die hohen Verluste wurden 1942 große Reformen in der roten Armee angeregt. Ab dem Frühjahr 1943 konnten Sie wieder Landgewinne verzeichnen und vertrieben die Deutschen daraufhin immer weiter aus Russland raus. Schon im Sommer 1944 waren die Frontlinien wieder wie bei Kriegsbeginn. Im Sommer 1945 stand die rote Armee vor Berlin.</li>
        <li class="slide">Operation Barbarossa forderte auf deutscher Seite das Leben von über 3,8 Millionen und auf sowjertischer Seite über 27 Millionen Soldaten.</li>
      </ul>
      <button class="slide-arrow" id="slide-arrow-next">
        &#8250;
      </button>
      `;

      const slidesContainer = content.querySelector(".slides-container");
      const nextButton = content.querySelector(".slide-wrapper #slide-arrow-next");
      const prevButton = content.querySelector(".slide-wrapper #slide-arrow-prev");

      nextButton.addEventListener("click", () => {
        const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
        slidesContainer.scrollLeft += slideWidth;
      });

      prevButton.addEventListener("click", () => {
        const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
        slidesContainer.scrollLeft -= slideWidth;
      });

      return content;
    },
    resetFrontlines: false
  }
]

const frontlines = [
  [ /* July 1 1944 */
    { lat: 59.398009582095966, lng: 27.900668368157195},
    { lat: 57.85820801080987, lng: 28.19258753163586},
    { lat: 55.359084579155116, lng: 28.793650213294967},
    { lat: 55.139220153156636, lng: 27.714844957819313},
    { lat: 54.351262811132464, lng: 27.6547536906025},
    { lat: 53.95439456706353, lng: 28.247033128116616},
    { lat: 53.4705057635865, lng: 27.519371422288344},
    { lat: 52.97584738332471, lng: 29.031077277135193},
    { lat: 52.24720974660489, lng: 28.680762739754478},
    { lat: 51.98778574888005, lng: 25.849603482703547},
    { lat: 47.21588766172145, lng: 25.080764942060387},
    { lat: 46.08584614660286, lng: 30.540517112978616 }
  ],
  [ /* July 15 1944 */
    { lat: 59.398009582095966, lng: 27.900668368157195},
    { lat: 56.40549153314217, lng: 28.69918872511797},
    { lat: 54.86232321181895, lng: 24.356291721842148},
    { lat: 53.41873658363631, lng: 23.388965350309856},
    { lat: 52.54286005469499, lng: 23.774827285620436},
    { lat: 52.25769676448328, lng: 24.91668891262025},
    { lat: 51.41741496953545, lng: 24.03797295447988},
    { lat: 49.935970385835056, lng: 24.62265888264592},
    { lat: 47.21588766172145, lng: 25.080764942060387},
    { lat: 46.08584614660286, lng: 30.540517112978616 }
  ],
  [ /* August 1 1944 */
    { lat: 59.398009582095966, lng: 27.900668368157195},
    { lat: 57.834232362011555, lng: 28.176542860668985},
    { lat: 56.325913823134584, lng: 24.805309441724773},
    { lat: 57.07426437540741, lng: 23.279155324887626},
    { lat: 52.42834308296681, lng: 22.054684910921463},
    { lat: 52.45016212708084, lng: 21.309506027224593},
    { lat: 51.89241966850639, lng: 21.349381563527746},
    { lat: 51.45501488281856, lng: 21.924775860017828},
    { lat: 50.52520347826833, lng: 21.81273957515355},
    { lat: 46.08584614660286, lng: 30.540517112978616}
  ],
  [ /* August 15 1944 */
    { lat: 59.398009582095966, lng: 27.900668368157195},
    { lat: 58.15751048063265, lng: 27.65590978358835},
    { lat: 56.53297395928472, lng: 24.55542439188906},
    { lat: 56.97289763914536, lng: 23.588422350865663},
    { lat: 57.0943967684788, lng: 23.239284041143385},
    { lat: 57.115622489196404, lng: 22.939272047662993},
    { lat: 52.425543253866245, lng: 21.195786212660234},
    { lat: 51.89241966850639, lng: 21.349381563527746},
    { lat: 51.45501488281856, lng: 21.924775860017828},
    { lat: 50.52520347826833, lng: 21.81273957515355},
    { lat: 50.26312577734555, lng: 20.95136726291083},
    { lat: 46.08584614660286, lng: 30.540517112978616}
  ],
  [ /* October 1 1944 */
    { lat: 58.923920375845725, lng: 22.044713481404603},
    { lat: 58.2447761475761, lng: 24.111022464297406},
    { lat: 57.23643660847528, lng: 24.40982759024485},
    { lat: 56.929306189515366, lng: 24.84244394359275},
    { lat: 56.56155129716948, lng: 24.156833401102492},
    { lat: 56.90543380455685, lng: 23.52526028550357},
    { lat: 56.75247881233405, lng: 22.712049446274843},
    { lat: 52.425543253866245, lng: 21.195786212660234}, 
    { lat: 51.89241966850639, lng: 21.349381563527746},
    { lat: 51.45501488281856, lng: 21.924775860017828},
    { lat: 50.52520347826833, lng: 21.81273957515355},
    { lat: 50.26312577734555, lng: 20.95136726291083},
    { lat: 47.890023530722715, lng: 25.750029052068555},
    { lat: 46.616708561411166, lng: 21.319329264137405},
    { lat: 46.13568666613819, lng: 20.27254640590322},
    { lat: 41.36769621012325, lng: 22.995757058604266},
    { lat: 42.05165913497716, lng: 27.966381800064443}
  ],
  [ /* October 15 1944 */
    { lat: 58.15797354458696, lng: 22.214225778305963},
    { lat: 58.2447761475761, lng: 24.111022464297406},
    { lat: 57.23643660847528, lng: 24.40982759024485},
    { lat: 56.75247881233405, lng: 22.712049446274843},
    { lat: 56.16921694767538, lng: 21.01837544686995},
    { lat: 55.531061761999304, lng: 22.26263053984924},
    { lat: 52.425543253866245, lng: 21.195786212660234},
    { lat: 51.89241966850639, lng: 21.349381563527746},
    { lat: 51.45501488281856, lng: 21.924775860017828},
    { lat: 50.52520347826833, lng: 21.81273957515355},
    { lat: 50.26312577734555, lng: 20.95136726291083},
    { lat: 47.890023530722715, lng: 25.750029052068555},
    { lat: 46.78137612411769, lng: 21.872658607026302},
    { lat: 47.28206955867453, lng: 20.609306098967686},
    { lat: 46.02626164888215, lng: 19.29985596273001},
    { lat: 41.36769621012325, lng: 22.995757058604266},
    { lat: 40.802609762442145, lng: 23.85481073337343}
  ],
  [ /* November 1 1944 */
    { lat: 57.05002572355875, lng: 23.32862142248757},
    { lat: 56.75247881233405, lng: 22.712049446274843},
    { lat: 56.16921694767538, lng: 21.01837544686995},
    { lat: 55.169535894314656, lng: 21.26837920236364},
    { lat: 55.531061761999304, lng: 22.26263053984924},
    { lat: 52.425543253866245, lng: 21.195786212660234},
    { lat: 51.89241966850639, lng: 21.349381563527746},
    { lat: 51.45501488281856, lng: 21.924775860017828},
    { lat: 50.52520347826833, lng: 21.81273957515355},
    { lat: 50.26312577734555, lng: 20.95136726291083},
    { lat: 49.12724374045785, lng: 22.568876715914264},
    { lat: 47.28206955867453, lng: 20.609306098967686},
    { lat: 47.19322740307007, lng: 19.46985812257706},
    { lat: 46.09109002921977, lng: 18.933173530188327},
    { lat: 41.27657663703923, lng: 22.71616903535603},
    { lat: 40.88456173606116, lng: 19.38662660154603}
  ],
  [ /* November 1 1944, second */
    { lat: 42.428518115575976, lng: 18.50984493804126},
    { lat: 42.69231327154515, lng: 18.738282093060647},
    { lat: 44.20920237387573, lng: 15.736106068303476},
    { lat: 44.248562617240225, lng: 15.11384746059074}
  ]
]

let currentInfoWindow;
let currentFrontlines;

function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: points[1].position,
    zoom: 6,
    mapId: '4504f8b37365c3d0',
  });

  const frontlinePolylines = frontlines.map(frontline => new google.maps.Polyline({
    path: frontline,
    strokeColor: '#00AAFF',
    strokeWeight: 1.5
  }));

  path.forEach(vertex => {
    if (vertex.createContent) {
      const marker = new google.maps.Marker({
        position: vertex.position,
        map
      });

      const infowindow = new google.maps.InfoWindow({
        content: vertex.createContent()
      });
      
      marker.addListener('click', () => {
        if (currentInfoWindow) {
          currentInfoWindow.close();
        }

        currentInfoWindow = infowindow;
        currentInfoWindow.open({
          anchor: marker,
          map
        });

        if (currentFrontlines) {
          currentFrontlines.forEach(i => frontlinePolylines[i].setMap(null));
        }

        currentFrontlines = vertex.frontlines;
        currentFrontlines.forEach(i => frontlinePolylines[i].setMap(map));
      });
    }
  });

  new google.maps.Polyline({
    path: path.map(vertex => vertex.position),
    strokeColor: '#FF0000',
    strokeWeight: 2,
    map
  });

  const lineSymbol = {
    path: "M 0,-1 0,1",
    strokeOpacity: 1,
    strokeWeight: 2,
    scale: 4
  };

  new google.maps.Polyline({
    path: [points[0].position, path[0].position],
    strokeColor: '#FF0000',
    strokeOpacity: 0,
    icons: [
      {
        icon: lineSymbol,
        offset: "0",
        repeat: "20px",
      }
    ],
    map
  });
 	  
  points.forEach(point => {
    const marker = new google.maps.Marker({
      position: point.position,
      map
    });

    const infowindow = new google.maps.InfoWindow({
      content: point.createContent()
    });
    
    marker.addListener('click', () => {
      if (currentInfoWindow) {
        currentInfoWindow.close();
      }

      currentInfoWindow = infowindow;
      infowindow.open({
        anchor: marker,
        map
      });

      if (point.resetFrontlines) {
        currentFrontlines = null;
        frontlinePolylines.forEach(polyline => polyline.setMap(null));
      }
    });
  });
}

window.initMap = initMap;